import React, { useContext } from "react";
import { Option, makeStyles, shorthands } from "@fluentui/react-components";
import { Input, Label, Button, Field, Combobox } from "@fluentui/react-components";
import { ActionsNav } from "../../components/ui/ActionsNav";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../errorPage/ErrorPage";
import { useCustomForm } from "../../hooks/useCustomForm";
import { AuthContext } from "../../auth/AuthContext";
import { useFetch } from "../../hooks/useFetch";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        width: '50%'
    },
    field: {
        display: "flex",
        flexDirection: "column",
        ...shorthands.padding("0px", "0px", "10px", "0px")
    },
    button: {
        marginTop: "20px",
        height: "35px",
    },
});

const initialForm = {
    description: null,
    category: null,
    status: null,
    priority: null,
    main_case: null
}

const category = ['health', 'vision', 'dental', 'union', 'training', 'performance', 'recruit', 'payroll', 'Time&Attd'];
const status = ['abierto', 'en proceso', 'cerrado', 'cancelado'];
const priority = ['Urgent', 'High', 'Medium', 'Low'];
// const data = []

export default function GeneralRequest() {
    const [state, handleInputChange] = useCustomForm(initialForm);
    const { auth } = useContext(AuthContext);
    const { Name, PersonnelNumber } = auth.user;

    const params = new URLSearchParams({ PersonnelNumber })
    const endpoint = 'general';
    const url = endpoint+ '?' + params;
    const { data, loading, error } = useFetch(url);
    const styles = useStyles();
    
    const onSubmit = async () => {
        alert("Submitted");
    }

    return (
        <ErrorBoundary FallbackComponent={<ErrorPage />}>
            <ActionsNav>
                <h2>Solicitudes generales</h2>
                <div className={styles.container}>
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
                        <h6>Origen</h6>
                        <div className={styles.field}>
                            <Label>Nombre</Label>
                            <Input appearance="outline" name="Personnelnumber" value={Name} />
                        </div>
                        <h6>General</h6>
                        <Field label="Categoria de caso" className={styles.field}>
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona una categoria"
                                value={state.category}
                                onOptionSelect={(e, val) => handleInputChange({ category: val.optionValue })}
                            >
                                {category?.map((option, index) => (
                                    <Option key={index}>
                                        {option}
                                    </Option>
                                ))
                                }
                            </Combobox>
                        </Field>
                        <div className={styles.field}>
                            <Label>Tipo de categoria</Label>
                            <Input appearance="outline" name="typecategory" disabled />
                        </div>
                        <Field label="Estado" className={styles.field}>
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona un estado"
                                value={state.status}
                                onOptionSelect={(e, val) => handleInputChange({ status: val.optionValue })}
                            >
                                {status?.map((option) => (
                                    <Option key={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Combobox>
                        </Field>
                        <div className={styles.field}>
                            <Label required>Descripción</Label>
                            <Input appearance="outline" name="description" value={state.description} onChange={handleInputChange} />
                        </div>
                        <Field label="Prioridad" className={styles.field}>
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona un tipo de baja"
                                value={state.priority}
                                onOptionSelect={(e, val) => handleInputChange({ priority: val.optionValue })}
                            >
                                {priority?.map((option) => (
                                    <Option key={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Combobox>
                        </Field>
                        <Field label="Caso principal">
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona un tipo de baja"
                                value={state.main_case}
                                onOptionSelect={(e, val) => handleInputChange({ main_case: val.optionValue })}
                            >
                                {data?.map((option) => (
                                    <Option key={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Combobox>
                        </Field>
                        {/* <div className={styles.wrapper}>
                            <Button appearance="secondary" shape='square' onClick={handleModal}>
                                Atras
                            </Button>
                            <Button type='submit' appearance="primary" shape='square' disabled={!todoOk()} >
                                Siguiente
                            </Button>
                        </div> */}
                    </form>
                </div>
            </ActionsNav >
        </ErrorBoundary >
    )
}
