import React, { useContext, useEffect, useMemo, useState } from "react";
import {
    makeStyles,
    shorthands,
    Text,
    Card,
    CardHeader,
    Input,
    Label,
    CardFooter,
    Link,
    Divider,
    Skeleton
} from "@fluentui/react-components";
import { Eye24Regular } from "@fluentui/react-icons";
import { AuthContext } from "../auth/AuthContext";
import { useFetch } from "../hooks/useFetch";

const useStyles = makeStyles({
    main: {
        ...shorthands.gap("40px"),
        ...shorthands.padding("20px"),
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    card: {
        ...shorthands.borderRadius("10%"),
        width: "340px",
        maxWidth: "100%",
        height: "300px",
    },

    text: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        ...shorthands.padding(0, "2px", "2px", "2px"),
        color: "black"
    },
    content: {
        flexDirection: "row",
        display: "flex",
    },
    content1: {
        flexDirection: "column",
        display: "flex",
    },
    col: {
        ...shorthands.margin(0, "2px", "2px", "2px"),
        width: "50%",
    },
    divider: {
        ...shorthands.margin("auto", 0, 0, 0),
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'red',
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
});

export const NoteSection = () => {
    const [pto, setPto] = useState(null);
    const [Sick, setSick] = useState(null)
    const { auth } = useContext(AuthContext);
    const { PersonnelNumber } = auth.user;
    const url = 'payments/time-off';
    const params = new URLSearchParams({ PersonnelNumber })
    const [{ data, loading, error }, handleCancelRequest] = useFetch(url + '?' + params)
    const styles = useStyles();
    console.log(loading)

    console.log('cargando')

    useEffect(() => {
        if(!loading){
            data
                ?.filter((item) => item.LeaveTypeId === 'PTO')
                .map((pt) => setPto(JSON.stringify(pt.TotalThisYear)))

        }
    }, [loading])


    return (
        <div className={styles.main}>
            {!data
                ? (
                    <Card style={{ width: '300px', padding: '16px' }}>
                        <Skeleton paragraph={{ rows: 3 }} />
                        <Skeleton line={{ width: '80%' }} />
                        <Skeleton line={{ width: '60%' }} />
                        <Skeleton line={{ width: '40%' }} />
                    </Card>
                )
                : (
                    <>
                        {/* TIME OFF BALANCES */}
                        <Card className={styles.card}>
                            <CardHeader
                                // image={<Calendar48Regular style={{ color: "white" }}/> ? <Calendar48Regular style={{ color: "white" }}/> : ""}
                                header={<div style={{ color: "black" }}><Text size={500} weight="semibold" font="numeric">Time Off Balances</Text></div>}
                            />
                            <div className={styles.content}>
                                <div className={styles.col}>
                                    <Label weight="semibold">PTO</Label>
                                    <Input disabled appearance="underline" style={{ width: "90%", fontSize: "20px", fontWeight: "bold" }} value={pto} />
                                </div>
                                <div className={styles.col}>
                                    <Label style={{ color: "white" }}>Underline appearance</Label>
                                    <Input disabled appearance="underline" style={{ width: "90%", fontSize: "20px", fontWeight: "bold" }} value="hours" />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.col}>
                                    <Label weight="semibold">SICK</Label>
                                    <Input disabled appearance="underline" style={{ width: "90%", fontSize: "20px", fontWeight: "bold" }} value="56.00" />
                                </div>
                                <div className={styles.col}>
                                    <Label style={{ color: "white" }}>Underline appearance</Label>
                                    <Input disabled appearance="underline" style={{ width: "90%", fontSize: "20px", fontWeight: "bold" }} value="hours" />
                                </div>
                            </div>
                            <div className={styles.divider} style={{ flexGrow: 0 }}>
                                <Divider />
                            </div>
                            <CardFooter className={styles.footer}>
                                <div className={styles.col} style={{ textAlign: "center" }}>
                                    <Link>Request time off</Link>
                                </div>
                                <div className={styles.col} style={{ textAlign: "center" }}>
                                    <Link>View time off</Link>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* TAREAS */}
                        <Card className={styles.card}>
                            <CardHeader
                                // image={<Calendar48Regular style={{ color: "white" }}/> ? <Calendar48Regular style={{ color: "white" }}/> : ""}
                                header={<div style={{ color: "black" }}><Text size={500} weight="semibold" font="numeric">Tareas</Text></div>}
                            />
                            <div>0
                                <div className={styles.content1}>
                                    <div style={{ paddingBottom: "5px" }}>
                                        <Label size="14px">0 Tareas vencidas</Label>
                                    </div>
                                    <div>
                                        <Label size="14px">0 Tareas vencen hoy</Label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.divider} style={{ flexGrow: 0 }}>
                                <Divider />
                            </div>
                            <CardFooter className={styles.footer}>
                                <div style={{ textAlign: "left", display: "inline-flex", color: 'blue' }}>
                                    <Eye24Regular />
                                    <Link>Request time off</Link>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* SIGUIENTE REVISION PROGRAMADA */}
                        <Card className={styles.card} onClick={() => console.log("click here")}>
                            <CardHeader
                                // image={<Calendar48Regular style={{ color: "white" }}/> ? <Calendar48Regular style={{ color: "white" }}/> : ""}
                                header={<div style={{ color: "black" }}><Text size={500} weight="semibold" font="numeric">Siguiente Revision Programada</Text></div>}
                            />
                            <p className={styles.text}>
                                Mis elementos de trabajo
                            </p>
                        </Card>

                        {/* TOTAL DE APTITUDES */}
                        <Card className={styles.card} onClick={() => console.log("click here")}>
                            <CardHeader
                                // image={<Calendar48Regular style={{ color: "white" }}/> ? <Calendar48Regular style={{ color: "white" }}/> : ""}
                                header={<div style={{ color: "black" }}><Text size={500} weight="semibold" font="numeric">Total De Aptitudes</Text></div>}
                            />
                            <p className={styles.text}>
                                Mis elementos de trabajo
                            </p>
                        </Card>
                    </>
                )
            }
        </div >
    )
}
