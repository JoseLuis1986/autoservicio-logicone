import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Input,
  Label,
  makeStyles,
  Checkbox,
  Spinner,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Checkmark24Filled } from "@fluentui/react-icons";
import { AuthContext } from "../auth/AuthContext";
import { getEmployeeByCode } from "../helpers/getEmployeeByCode";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    paddingBottom: "15px",
  },
  field: {
    ...shorthands.padding("5px"),
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    width: "90%",
  },
});

const initialState = {
  password: "",
  password2: "",
};

export const AdminModal = ({ isModalOpen }) => {
  const { createUserAdmin } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContext);
  const [values, setValues] = useState(initialState);
  const [checked, setChecked] = useState(false);
  const [loadingInput, setLoadingInput] = useState(true);
  const [userAdmin, setUserAdmin] = useState([]);
  const [personnelName, setPersonnelName] = useState("");
  const [getCode, setGetCode] = useState({
    code: "",
  });
  const navigate = useNavigate();
  const styles = useStyles();

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { password, password2 } = values;
    if (password != password2) {
      return alert("Las contraseñas no son iguales");
    }
    // codigo, name, email, password
    const {
      Name: name,
      PersonnelNumber: codigo,
      PrimaryContactEmail: email,
    } = userAdmin;

    const data = {
      codigo,
      name,
      email,
      password,
    };
    const result = await createUserAdmin(data);
    if (result.ok) {
      dispatch({
        type: types.newIntent,
        payload: {
          intent: 'success',
          messages: 'Cuenta configurada exitosamente, redirigiendo en 4 segundos',
        },
      });
      setTimeout(() => {
        navigate("/auth/login");
      }, 4000);
    }
  };

  const CheckCode = () => {
    return (
      <Checkbox
        checked={checked}
        onChange={(ev, data) => {
          if (!getCode.code) {
            return alert("Debe colocar el id del empleado");
          }
          setChecked(data.checked);
          getName();
        }}
      />
    );
  };

  const handleUserAdmin = ({ target }) => {
    setGetCode({
      [target.name]: target.value,
    });
  };

  const getName = async () => {
    const employeeName = await getEmployeeByCode(getCode);
    console.log(employeeName);
    if (employeeName.ok) {
      setLoadingInput(false);
      console.log(employeeName.data);
      const { Name } = employeeName.data;
      setPersonnelName(Name);
      return setUserAdmin(employeeName.data);
    } else {
      setLoadingInput(false);
      setChecked(false);
      return alert(
        "El codigo de empleado no se encuentra registrado, verifique su codigo nuevamente"
      );
    }
  };

  const GetInputEmployee = () => {
    return (
      <>
        {loadingInput ? (
          <Spinner
            size="extra-tiny"
            labelPosition="before"
            label="Buscando..."
          />
        ) : (
          <Input
            type="text"
            name="name"
            contentAfter={<Checkmark24Filled style={{ color: "green" }} />}
            appearance="underline"
            value={personnelName}
          />
        )}
      </>
    );
  };

  const todoOk = () => {
    return values.password.length > 0 && values.password2.length > 0
      ? true
      : false;
  };

  return (
    <Dialog modalType="non-modal" open={isModalOpen}>
      <DialogSurface aria-describedby={undefined}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent className={styles.content}>
              {/* CODIGO DEL ADMINISTRADOR */}
              {checked && !!getCode.code ? (
                <>
                  <Label required style={{ fontWeight: 600 }}>
                    Id usuario administrador*
                  </Label>
                  {GetInputEmployee()}
                </>
              ) : (
                <>
                  <Label required style={{ fontWeight: 600 }}>
                    Id usuario administrador*
                  </Label>
                  <Input
                    type="number"
                    contentAfter={<CheckCode />}
                    appearance="underline"
                    name="code"
                    value={getCode.code}
                    onChange={handleUserAdmin}
                  />
                </>
              )}
              {/*PASSWORD ADMIN */}
              {personnelName && (
                <>
                  <Label required style={{ fontWeight: 600 }}>
                    Clave de configuración
                  </Label>
                  <Input
                    // type={show ? "text" : "password"}
                    type="password"
                    appearance="underline"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                  />
                  {/* PASSWORD ADMIN CONFIRM */}

                  <Label required style={{ fontWeight: 600 }}>
                    Repetir clave de configuración
                  </Label>
                  <Input
                    type="password"
                    // type={show ? "text" : "password"}
                    // contentAfter={<EyesButton />}
                    appearance="underline"
                    name="password2"
                    value={values.password2}
                    onChange={handleInputChange}
                  />
                </>
              )}
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button type="submit" appearance="primary" disabled={!todoOk()}>
                Submit
              </Button>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};
