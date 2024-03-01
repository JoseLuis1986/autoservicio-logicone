import React, { useContext, useState } from "react";
import { Option, Spinner, makeStyles, shorthands } from "@fluentui/react-components";
import { Input, Label, Button, Field, Combobox } from "@fluentui/react-components";
import { ActionsNav } from "../../components/ui/ActionsNav";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../errorPage/ErrorPage";
import { useCustomForm } from "../../hooks/useCustomForm";
import { AuthContext } from "../../auth/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { fetchWithToken } from "../../helpers/fetch";
import { AlertContext } from "../../context/alerts/AlertContext";
import { types } from "../../types/types";

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
    wrapper: {
        ...shorthands.margin("15px", "0px", "15px",  "0px"),
        textAlign: 'end'
    }
});

const initialForm = {
    description: '',
    category: '',
    priority: ''
}

// const category = ['health', 'vision', 'dental', 'union', 'training', 'performance', 'recruit', 'payroll', 'Time&Attd'];
// const status = ['abierto', 'en proceso', 'cerrado', 'cancelado'];
const priority = [{ id: 0, type: 'Urgent' }, { id: 1, type: 'High' }, { id: 2, type: 'Medium' }, { id: 3, type: 'Low' }];
// // const data = []

export default function GeneralRequest() {
    const [loading, setLoading] = useState(false);
    const [stateValue, handleInputChange, reset] = useCustomForm(initialForm);
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);
    const { Name, PersonnelNumber, PartyNumber } = auth.user;

    const params = new URLSearchParams({ PersonnelNumber })
    const endpoint = 'general';
    const url = endpoint + '?' + params;
    const [state] = useFetch(url);
    const styles = useStyles();

    const { data } = state;

    const datos = {
        ...data
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        const { description, category, priority } = stateValue;
        if (!description || !category || !priority) return;

        const dataToSend = {
            PartyNumber,
            Description: description,
            CaseCategory: category,
            Priority: Number.parseInt(priority.substring(0, 1))
        }
        const resp = await fetchWithToken(endpoint, dataToSend, 'POST')
        if (resp.success) {
            setLoading(false);
            reset()
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'success',
                    messages:`Su solicitud fue enviada, ${resp.data.Message}, Caso Numero = ${resp.data.CaseId}`
                }
            });
        }
    }

    const todoOk = () => {
        return (stateValue.tenant_id.length > 0 &&
            stateValue.client_id.length > 0 &&
            stateValue.client_secret.length > 0
        ) ? true : false;
    }

    return (
        <ErrorBoundary FallbackComponent={<ErrorPage />}>
            {
                loading
                    ? (<Spinner />)
                    : (
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
                                            value={stateValue.category}
                                            onOptionSelect={(e, val) => handleInputChange({ category: val.optionValue })}
                                        >
                                            {datos.categoria?.map((item, index) => (
                                                <Option key={index}>
                                                    {item.CaseCategory}
                                                </Option>
                                            ))
                                            }
                                        </Combobox>
                                    </Field>
                                    {/* <div className={styles.field}>
                            <Label>Tipo de categoria</Label>
                            <Input appearance="outline" name="typecategory" disabled />
                        </div> */}
                                    {/* <Field label="Estado" className={styles.field}>
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona un estado"
                                value={stateValue.status}
                                onOptionSelect={(e, val) => handleInputChange({ status: val.optionValue })}
                            >
                                {datos.estado?.map((option) => (
                                    <Option key={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Combobox>
                        </Field> */}
                                    <div className={styles.field}>
                                        <Label required>Descripción</Label>
                                        <Input
                                            appearance="outline"
                                            name="description"
                                            value={stateValue.description}
                                            onChange={(e, val) => handleInputChange({ description: val.value })}
                                        />
                                    </div>
                                    <Field label="Prioridad" className={styles.field}>
                                        <Combobox
                                            aria-labelledby="combo-default"
                                            placeholder="Selecciona un tipo de baja"
                                            value={stateValue.priority}
                                            onOptionSelect={(e, val) => handleInputChange({ priority: val.optionValue })}
                                        >
                                            {priority?.map((option) => (
                                                <Option key={option.type}>
                                                    {option.id.toString()} - {option.type}
                                                </Option>
                                            ))}
                                        </Combobox>
                                    </Field>
                                    {/* <Field label="Caso principal">
                            <Combobox
                                aria-labelledby="combo-default"
                                placeholder="Selecciona un tipo de baja"
                                value={stateValue.main_case}
                                onOptionSelect={(e, val) => handleInputChange({ main_case: val.optionValue })}
                            >
                            </Combobox>
                        </Field> */}
                                    <div className={styles.wrapper}>
                                        <Button type='submit' appearance="primary" shape='square' >
                                            Siguiente
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </ActionsNav >
                    )
            }
        </ErrorBoundary >
    )
}
