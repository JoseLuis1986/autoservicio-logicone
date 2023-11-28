import { makeStyles } from '@fluentui/react-components'
import React from 'react'

const useStyles = makeStyles({
    root: {
        display: "flex",
        bottom: 0
    }
});

export const ErrorPage = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <img src="error.jpg" alt='page-not-found' width="100%" />
        </div>
    )
}
