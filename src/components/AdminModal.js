import React, { useContext, useEffect, useState } from "react";
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
import { Checkmark24Filled, Search24Regular } from "@fluentui/react-icons";
import { AuthContext } from "../auth/AuthContext";
import { getEmployeeByCode } from "../helpers/getEmployeeByCode";
import { AlertContext } from "../context/alerts/AlertContext";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";
import { MessagesInfo } from "./messages/MessagesInfo";

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

export const AdminModal = ({ isModalOpen, setShowModal, closeModal = true, message }) => {
  const { createUserAdmin, logout } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContext);
  // const [showModal, setShowModal] = useState(isModalOpen);
  const [values, setValues] = useState(initialState);
  const [checked, setChecked] = useState(false);
  const [loadingInput, setLoadingInput] = useState(true);
  const [userAdmin, setUserAdmin] = useState([]);
  const [personnelName, setPersonnelName] = useState("");
  const [getCode, setGetCode] = useState({
    code: "",
  });
  const [reset, setReset] = useState(false)
  const navigate = useNavigate();
  const styles = useStyles();


  useEffect(() => {
    setChecked(false);
    setGetCode({ code: '' });
    setPersonnelName('');
    setReset(false);
  }, [reset])


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
          messages: message
          // messages: 'Cuenta configurada exitosamente, redirigiendo en 4 segundos',
        },
      });
      setTimeout(() => {
        navigate("/auth/login");
      }, 4000);
    }
  };

  const CheckCode = () => {
    return (
      <Button
        icon={<Search24Regular />}
        appearance="transparent"
        onClick={() => {
          if (!getCode.code) {
            return alert("Debe colocar el id del empleado")
          }
          setChecked(true);
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
    if (employeeName.data.status === 401) {
      dispatch({
        type: types.newIntent,
        payload: {
          intent: 'error',
          messages: 'Su sesion ha expirado. Cerrando en 5 segundos...'
        }
      })
      setTimeout(() => {
        logout();
      }, 5000);
    } 
    if (employeeName.ok) {
      const { Name } = employeeName.data;
      setPersonnelName(Name);
      setUserAdmin(employeeName.data);
      setLoadingInput(false);
      return;
    } else {
      setChecked(false);
      alert(
        "El codigo de empleado no se encuentra registrado, verifique su codigo nuevamente"
      );
      // setLoadingInput(false);
      return;
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

  const handleReset = (ev) => {
    ev.preventDefault();
    setReset(true);
  }

  const handleClose = (ev) => {
    ev.preventDefault();
    setShowModal(false);
  }

  return (
    <Dialog modalType="modal" open={isModalOpen}>
      <DialogSurface aria-describedby={undefined}>
      <MessagesInfo />
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>Configurar usuario administrativo</DialogTitle>
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
                    type="text"
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
              {/* {
                closeModal
                &&
                (<DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary" onClick={handleClose}>Cerrar</Button>
                </DialogTrigger>)
              } */}
              <Button appearance="secondary" onClick={handleReset}>Atrás</Button>
              <Button type="submit" appearance="primary" disabled={!todoOk()}>
                Enviar
              </Button>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};
