import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Button,
    Combobox,
    Field,
    Option,
    Textarea,
    makeStyles,
    shorthands,
    tokens
} from '@fluentui/react-components'
import { ActionsNav } from '../../components/ui/ActionsNav'
import { DateRange } from '../../components/DateRange'
import { DetailsList } from '@fluentui/react';

const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "inline-flex",
        flexDirection: "row"
    },
    container: {
        justifyItems: "start",
        ...shorthands.margin("15px"),
        width: "300px",
    },
    base: {
        display: "flex",
        flexDirection: "column",
        rowGap: tokens.spacingVerticalMNudge,
        width: "1200px",
    },
    groupbuttons: {
        ...shorthands.padding("25px", "25px", "10px", 0),
        display: "flex",
        flexDirection: "row",
        width: "1190px",
        justifyContent: "flex-end"
    },
    button: {
        ...shorthands.margin(0, 0, 0, "15px")
    }
});


const columns = [
    { key: 1, name: "Nombre o descripcion", fieldName: "city", minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 2, name: 'Direccion', fieldName: 'street', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 3, name: 'Proposito', fieldName: 'suite', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 4, name: 'Principal', fieldName: 'zipcode', minWidth: 100, maxWidth: 200, isResizable: true },
];

export const Permissions = () => {
    const styles = useStyles();
    const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
    const [openItems, setOpenItems] = useState(["1"]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const ac = new AbortController();
        const signal = ac.signal;

        fetch('https://jsonplaceholder.typicode.com/users?_limit=4', { signal })
            .then(response => response.json())
            .then((data) => {
                const addr = [];
                const dir = data.map((x) => addr.push(x.address))// eslint-disable-line
                setItems(addr)
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })

        return () => ac.abort
    }, [])

    const handleToggle = (event, data) => {
        setOpenItems(data.openItems);
    };

    return (
        <ActionsNav>
            <h2>Solicitar tiempo libre</h2>
            <div className={styles.root}>
                <div className={styles.container}>
                    <Field label="Tipo de baja">
                        <Combobox
                            aria-labelledby="combo-default"
                            placeholder="Selecciona un tipo de baja"
                        >
                            {options.map((option) => (
                                <Option key={option} disabled={option === "Ferret"}>
                                    {option}
                                </Option>
                            ))}
                        </Combobox>
                    </Field>
                </div>
                <div className={styles.container}>
                    <DateRange />
                </div>
            </div>
            <div className={styles.base}>
                <Accordion
                    openItems={openItems}
                    onToggle={handleToggle}
                    multiple
                    collapsible
                >
                    <AccordionItem value="1">
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
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionHeader expandIconPosition="end">
                            <h2>
                                Comentarios
                            </h2>
                        </AccordionHeader>
                        <AccordionPanel>
                            <div>
                                <Field size="large" label="Large Textarea">
                                    <Textarea />
                                </Field>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionHeader expandIconPosition="end">
                            <h2>
                                Balances
                            </h2>
                        </AccordionHeader>
                        <AccordionPanel>
                            <div>
                                <DetailsList items={items} columns={columns} selectionMode={0} />
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={styles.groupbuttons}>
                <Button className={styles.button} onClick={() => console.log('click here')}>Submit</Button>
                <Button className={styles.button} onClick={() => console.log('click here')}>Save Draft</Button>
                <Button className={styles.button} onClick={() => console.log('click here')}>Cancel</Button>
            </div>
        </ActionsNav>
    )
}
