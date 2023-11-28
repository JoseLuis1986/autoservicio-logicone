import { tokens, makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
    boundary: {
        ...shorthands.border("2px"),
        ...shorthands.padding("2%"),
        // ...shorthands.margin("20px"),
        width: "440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: "320px",
        minHeight: "338px",
        textAlign: "left"
    },
    field: {
        ...shorthands.padding("5px"),
        display: "grid",
        gridRowGap: tokens.spacingVerticalXXS,
        marginTop: tokens.spacingVerticalMNudge,
        width: "100%"
        // ...shorthands.padding(tokens.spacingHorizontalMNudge),
    },
    wrapper: {
        ...shorthands.padding("15px", "0px", "0px", "0px"),
        columnGap: "2px",
        display: "flex",
        justifyContent: "flex-end"
    },
});
