import React, { useContext, useEffect, useRef, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Button,
    Combobox,
    Field,
    Option,
    Spinner,
    Textarea,
    makeStyles,
    shorthands,
    tokens
} from '@fluentui/react-components'
import { ActionsNav } from '../../components/ui/ActionsNav'
import { DateRange } from '../../components/DateRange'
import { DatePicker, DetailsList, defaultDatePickerStrings } from '@fluentui/react';
import { AuthContext } from '../../auth/AuthContext';
import { useFetch } from '../../hooks/useFetch';
import { fetchWithToken } from '../../helpers/fetch';
import { types } from '../../types/types';
import { AlertContext } from '../../context/alerts/AlertContext';
import { useCustomForm } from '../../hooks/useCustomForm';
import { CustomDateRange } from '../../components/CustomDateRange';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore);

const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "inline-flex",
        flexDirection: "row"
    },
    container: {
        justifyItems: "start",
        ...shorthands.margin("15px"),
        width: "200px",
    },
    base: {
        display: "flex",
        flexDirection: "column",
        rowGap: tokens.spacingVerticalMNudge,
        width: "500px",
    },
    groupbuttons: {
        ...shorthands.padding("25px", "25px", "10px", 0),
        display: "flex",
        flexDirection: "row",
        width: "485px",
        justifyContent: "flex-end"
    },
    button: {
        ...shorthands.margin(0, 0, 0, "15px")
    },
    control: {
        ...shorthands.padding("0px", "30px", "0px", "0px"),
        alignContent: "space-between",
    },
    control1: {
        alignContent: "space-between",
        width: "200px"
    },
});


const columns = [
    { key: 1, name: "Nombre o descripcion", fieldName: "city", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 2, name: 'Direccion', fieldName: 'street', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: 'Proposito', fieldName: 'suite', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: 'Principal', fieldName: 'zipcode', minWidth: 100, maxWidth: 200, isResizable: true },
];

const onFormatDate = (date) => {
    return !date ? '' : (date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};

const initialState = {
    type_leave: "",
    start_date: null,
    end_date: null,
    comment: "",
}

export const PermissionRequest = ({ modal }) => {
    const styles = useStyles();
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);

    const [openItems, setOpenItems] = useState(["1"]);
    const [items, setItems] = useState([]);
    const [state, handleInputChange, reset] = useCustomForm(initialState);

    const { PersonnelNumber } = auth.user;
    const url = 'payments/leave-types';
    const params = new URLSearchParams({ PersonnelNumber });
    const [waitingResponse, setWaitingResponse] = useState(false);
    const [values, handleCancelRequest] = useFetch(url + '?' + params);
    const { data, loading, error } = values;

    const handleToggle = (event, data) => {
        setOpenItems(data.openItems);
    };

    const todoOk = () => {
        return (state.type_leave != "" && state.comment.trim().length != "") ? true : false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setWaitingResponse(true);
        const pathUrl = 'payments';
        if (todoOk()) {
            const { start_date, end_date } = state;
            const startDate = dayjs(start_date).format('YYYY-MM-DD');
            const endDate = dayjs(end_date).format('YYYY-MM-DD');
            // const datesArray = getDatesBetween(startDate, endDate);
            const { type_leave, comment } = state;

            const data = {
                startDate,
                endDate,
                PersonnelNumber,
                Comment: comment,
                LeaveType: type_leave
            }
            const resp = await fetchWithToken(pathUrl, data, 'POST')
            if (resp.success) {
                setWaitingResponse(false);
                reset()
                dispatch({
                    type: types.newIntent,
                    payload: {
                        intent: 'success',
                        messages: 'Su solicitud fue enviada'
                    }
                });
            }
        } else {
            setWaitingResponse(false);
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'error',
                    messages: 'Por favor llene todos los campos'
                }
            })
        }
    }

    if (waitingResponse) {
        return (
            <>
                <div><h6>Cargando.....</h6></div>
            </>
        )
    }

    return (
        <>
            <h2 style={{ marginLeft: '15px'}}>Solicitar permiso</h2>
            {<h6>{error && error}</h6>}
            {
                loading
                    ? (<Spinner />)
                    : (
                        <>
                            <div className={styles.root}>
                                <div className={styles.container}>
                                    <div className={styles.control}>
                                        <Field label="Tipo de baja">
                                            <Combobox
                                                aria-labelledby="combo-default"
                                                placeholder="Selecciona un tipo de baja"
                                                value={state.type_leave}
                                                onOptionSelect={(e, val) => handleInputChange({ type_leave: val.optionValue })}
                                            >
                                                {data?.map((option) => (
                                                    <Option key={option}>
                                                        {option}
                                                    </Option>
                                                ))}
                                            </Combobox>
                                        </Field>
                                    </div>
                                    <CustomDateRange handleInputChange={handleInputChange} state={state}/>
                                </div>
                            </div>
                            <div className={styles.base}>
                                <Accordion
                                    openItems={openItems}
                                    onToggle={handleToggle}
                                    multiple
                                    collapsible
                                >
                                    {/* <AccordionItem value="1">
                                        <AccordionHeader expandIconPosition="end">
                                            <h2 style={{ fontWeight: "bold" }}>
                                                Dates
                                            </h2>
                                        </AccordionHeader>
                                        <AccordionPanel>
                                            <div><p>Por favor selecciona una tipo de licencia</p></div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem value="2">
                                        <AccordionHeader expandIconPosition="end">
                                            <h2 style={{ fontWeight: "bold" }}>
                                                Archivos adjuntos
                                            </h2>
                                        </AccordionHeader>
                                        <AccordionPanel>
                                            <div>
                                                <Button onClick={() => console.log('click here')}>
                                                    Subir archivo
                                                </Button>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem> */}
                                    <AccordionItem value="1">
                                        <AccordionHeader expandIconPosition="end">
                                            <h2>
                                                Comentarios
                                            </h2>
                                        </AccordionHeader>
                                        <AccordionPanel>
                                            <div>
                                                <Field size="large">
                                                    <Textarea value={state.comment} onChange={(e, d) => handleInputChange({ comment: d.value })} />
                                                </Field>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    {/* <AccordionItem value="4">
                                        <AccordionHeader expandIconPosition="end">
                                            <h2>
                                                Balances
                                            </h2>
                                        </AccordionHeader>
                                        <AccordionPanel>
                                            <div>
                                                <DetailsList
                                                    items={items}
                                                    columns={columns}
                                                    selectionMode={0}
                                                />
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem> */}
                                </Accordion>
                            </div>
                            <div className={styles.groupbuttons}>
                                <Button className={styles.button} onClick={handleSubmit}>Enviar</Button>
                                <Button className={styles.button} onClick={reset}>Limpiar campos</Button>
                                <Button className={styles.button} onClick={handleCancelRequest}>Cancel</Button>
                            </div>
                        </>
                    )
            }
        </>
    )
}
