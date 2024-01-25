import React, { useContext, useEffect, useState } from 'react';
import { Avatar, shorthands, makeStyles, Link } from '@fluentui/react-components';
import { Pen16Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import { PivotComponentHome } from '../../components/PivotComponentHome';
import { AuthContext } from '../../auth/AuthContext';


const useStyles = makeStyles({
    avatar: {
        width: "180px",
        height: "180px",
    },
    container: {
        display: "flex",
        ...shorthands.padding("10px", "0px", "0px", "20px"),
    },
    gridcontainer: {
        ...shorthands.padding("20px", "0px", "0px", "0px"),
        display: "inline-grid",
        width: "40%",
        gridTemplateColumns: "auto auto auto",
        // padding: "10px",
    },
    grid: {
        ...shorthands.padding("5px", "0px", "10px", "0px"),
        textAlign: "center",
    },
    grid1: {
        ...shorthands.padding("5px", "0px", "10px", "0px"),
        fontSize: "20px",
        textAlign: "left",
        fontWeight: "bold",
    },
    grid2: {
        ...shorthands.padding("5px", "0px", "10px", "0px"),
        fontSize: "16px",
        textAlign: "left",
    },
})


export const Dashboard = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      if (auth.user) {
        const emp = auth.user;
        setEmployee(emp)
      }
    }, [])
    
    const handleClick = () => {
        navigate('/profile')
    };

    return (
        <>
            <h2 style={{ padding: "10px 0 0 25px" }}>Bienvenido al autoservicio de logicone</h2>
            <div className={styles.gridcontainer}>
                <div className={styles.grid}>
                    <Avatar
                        className={styles.avatar}
                        initials="128"
                        size={128}
                        color="white"
                        active="active"
                        activeAppearance="shadow"
                        name={`${employee.Name}`}
                        image={{
                            src: `data:image/jpeg;base64,${employee.imagenavatar}`,
                            width: "50px"
                        }}
                    />
                </div>
                <div className={styles.grid2}>
                    <div className={styles.grid1}>{employee.Name}</div>
                    <div className={styles.grid2}>Sales & Marketing</div>
                    <div className={styles.grid2}>{employee.TitleId}</div>
                    <div className={styles.grid2}>
                        <div style={{ fontSize: '24px' }}>
                            <Link onClick={() => handleClick()} style={{ fontSize: "18px" }}>
                                <Pen16Regular />{' '}
                                Editar detalles personales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <PivotComponentHome />
            </div>
        </>
    )
}