import React from 'react'
import {
    makeStyles,
    shorthands,
} from '@fluentui/react-components'
import { ActionsNav } from '../../components/ui/ActionsNav'
import { PivotComponentTimeOff } from '../../components/PivotComponentTimeOff'
import { CommandBar } from '@fluentui/react';

const useStyles = makeStyles({
    container: {
        display: "flex-inline",
        ...shorthands.padding("10px", "10px", "10px", "20px"),
    },
});


export const Permissions = () => {
    const styles = useStyles();
    return (
        <>
            <h2 style={{ marginLeft: '20px'}}>Solicitar permiso</h2>
            <div className={styles.container}>
                <PivotComponentTimeOff />
            </div>
        </>
    )
}
