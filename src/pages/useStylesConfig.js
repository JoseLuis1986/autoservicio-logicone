import { tokens, makeStyles, shorthands } from "@fluentui/react-components";

export const useStylesConfig = makeStyles({
    main: {
        ...shorthands.gap("60px"),
        display: "flex",
        flexWrap: "wrap",
    },
    boundary: {
        ...shorthands.border("2px"),
        ...shorthands.padding("2%"),
        ...shorthands.margin("50px", "auto", "50px", "auto"),
        width: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: "320px",
        minHeight: "338px",
        textAlign: "left",
        opacity: '0.9'
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
        ...shorthands.padding("15px", "0px", "10px", "0px"),
        columnGap: "15px",
        display: "flex",
        width: '425px',
        justifyContent: "right"
    },
});
