import React from 'react'
import { makeStyles, shorthands } from '@fluentui/react-components';
import { MessagesInfo } from '../messages/MessagesInfo';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        ...shorthands.border("1px", "solid", "lightgray"),
        flexDirection: 'column',
        height: '50px',
    },
    principal: {
        display: 'flex',
        flexGrow: 1,
    },
    hijo: {
        ...shorthands.border("1px", "solid", "lightgray"),
        width: '50px',
        height: '100vh'
    },
    contenido: {
        ...shorthands.margin("15px"),
        flexGrow: 1,
        fontSize: '20px',
        lineHeight: '20px',
    }
})


export const ActionsNav = ({ children }) => {
    const styles = useStyles();

    return (
        <>
            <div className={styles.root}>
                <MessagesInfo />
            </div>
            <div className={styles.principal}>
                <div className={styles.hijo}>
                </div>
                <div className={styles.contenido}>
                    {children}
                </div>
            </div >
        </>
    )
}
