import React from "react";
import {
    makeStyles,
    shorthands,
    Text,
} from "@fluentui/react-components";
import { Calendar48Regular, LineHorizontal1Dashes28Filled, TextBulletListSquare48Regular, Archive48Regular } from "@fluentui/react-icons";
import { Card, CardHeader } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";


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
        width: "170px",
        maxWidth: "100%",
        height: "180px",
    },

    text: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        ...shorthands.padding(0, "2px", "2px", "2px"),
        color: "white"
    },
});

export const CardSection = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <Card className={styles.card} style={{ backgroundColor: "#115ea3" }} onClick={() => navigate("/permissions")}>
                <CardHeader
                    image={<Archive48Regular style={{ color: "white" }}/> ? <Archive48Regular style={{ color: "white" }}/> : ""}
                    // header={<div style={{ color: "white" }}><Text size={900} weight="semibold" font="numeric"></Text></div>}
                />
                <p className={styles.text}>
                    Mis solicitudes de permiso
                </p>
            </Card>

            <Card className={styles.card} style={{ backgroundColor: "#0c3b5e" }} onClick={() => console.log("click here")}>
                <CardHeader
                    // image={<Calendar48Regular style={{ color: "white" }} /> ? <Calendar48Regular style={{ color: "white" }} /> : ""}
                    header={<div style={{ color: "white" }}><Text size={900} weight="semibold" font="numeric">0</Text></div>}
                />
                <p className={styles.text}>
                    Cuestionarios asignados a mi
                </p>
            </Card>

            <Card className={styles.card} style={{ backgroundColor: "#0078d4" }} onClick={() => console.log("click here")}>
                <CardHeader
                    image={<TextBulletListSquare48Regular style={{ color: "white" }} />}
                // header={<div style={{ color: "white" }}><Text size={900} weight="semibold" font="numeric">7</Text></div>}
                />
                <p className={styles.text}>
                    Directorio de empresa
                </p>
            </Card>

            <Card className={styles.card} style={{ backgroundColor: "#0c3b5e" }} onClick={() => console.log("click here")}>
                <CardHeader
                    image={<LineHorizontal1Dashes28Filled style={{ color: "white" }} />}
                // header={<div style={{ color: "white" }}><Text size={900} weight="semibold" font="numeric">7</Text></div>}
                />
                <p className={styles.text}>
                    Vacantes
                </p>
            </Card>

            <Card className={styles.card} style={{ backgroundColor: "#0078d4" }} onClick={() => console.log("click here")}>
                <CardHeader
                    image={<Calendar48Regular style={{ color: "white" }} /> ? <Calendar48Regular style={{ color: "white" }} /> : ""}
                // header={<div style={{ color: "white" }}><Text size={900} weight="semibold" font="numeric">7</Text></div>}
                />
                <p className={styles.text}>
                    Calendario de ausencias del equipo
                </p>
            </Card>
        </div>
    );
};