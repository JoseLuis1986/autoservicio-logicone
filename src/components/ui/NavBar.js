import React, { useContext, useState, useEffect } from 'react';
import { DefaultPalette, Stack } from '@fluentui/react';
import { GridDots24Filled, Dismiss24Regular, LineHorizontal320Regular, Settings24Regular } from '@fluentui/react-icons';
import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, tokens, makeStyles, shorthands, Popover, PopoverTrigger, PopoverSurface } from '@fluentui/react-components';
import { Avatar } from "@fluentui/react-components";
import { Nav } from '@fluentui/react/lib/Nav';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom'

import '../../css/nav-bar.css'
import { hasUserAdmin } from '../../helpers/hasUserAdmin';
import { types } from '../../types/types';
import { ConfigurationContext } from '../../context/configuration/ConfigurationContext';

const navLinkGroups = [
    {
        links: [
            {
                name: 'Home',
                url: '/',
                key: 'key1',
                title: 'Home',
                icon: 'Home',
            },
            {
                name: 'Volante de pago',
                expandAriaLabel: 'Show more Basic components',
                collapseAriaLabel: 'Collapse more Basic components',
                collapseByDefault: true,
                links: [
                    {
                        key: 'Consulta',
                        name: 'Consulta',
                        url: '/salary-receipt',
                    },
                ],
                chevronIcon: {
                    alignItems: 'right'
                }
            },
            {
                name: 'Solicitudes',
                expandAriaLabel: 'Show more Extended components',
                collapseByDefault: true,
                links: [
                    {
                        key: 'permissions',
                        name: 'Solicitud de permiso',
                        url: '/permissions',
                    }
                ],
            },
            {
                name: 'Solicitudes generales',
                expandAriaLabel: 'Show more Utilities',
                collapseByDefault: true,
                links: [
                    {
                        key: 'solicitud',
                        name: 'Solicitudes varias',
                        url: '/general-request',
                    }
                ],
            },
        ],
    },
];

const navStyles = {
    root: {
        height: '100%',
        boxSizing: 'border-box',
        borderRight: '1px solid #eee',
        background: 'transparent',
        overflowY: 'auto',
    },
    chevronButton: {
        right: 20,
        left: 'none',
    }
};

const useStyles = makeStyles({
    root: {
        ...shorthands.border("1px", "solid", "#ccc"),
        ...shorthands.overflow("hidden"),
        display: "flex",
        height: "100%",
        backgroundColor: "#fff",
    },

    drawer: {
        transitionDuration: "0ms",
    },
    navbody: {
        ...shorthands.padding("0px")
    },

    content: {
        ...shorthands.flex(1),
        ...shorthands.padding("16px"),
        backgroundColor: "#fafafafa",
        display: "grid",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gridRowGap: tokens.spacingVerticalXXL,
        gridAutoRows: "max-content",
    },

    field: {
        display: "grid",
        gridRowGap: tokens.spacingVerticalS,
    },
    popoverSurface: {
        width: "150px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
// Styles definition
const stackStyles = {
    root: {
        background: DefaultPalette.blueDark,
    },
};

const stackItemStylesStart = {
    root: {
        alignItems: 'center',
        background: 'transparent',
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'left',
    },
};

const stackItemStylesUser = {
    root: {
        alignItems: 'center',
        background: 'transparent',
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'right',
    },
};

const stackItemStyles = {
    root: {
        alignItems: 'center',
        background: 'transparent',
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
};

// Tokens definition
const stackTokens = {
    childrenGap: 5,
    padding: 10,
};


const validateUserAdmin = (empleadoAct, admins) => {

    for (let i = 0; i < admins.length; i++) {
        const element = admins[i];
        if( element.codigo === empleadoAct){
            return true;
        }
    }
    
}

export const Navbar = ({ children }) => {
    const { logout, auth } = useContext(AuthContext);
    const { dispatchConfig } = useContext(ConfigurationContext);
    const [isOpen, setIsOpen] = useState(false);
    const [employee, setEmployee] = useState([]);
    const [showConfig, setShowConfig] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const styles = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        hasUserAdmin()
            .then((resp) => {
                if (auth.user) {
                    const emp = auth.user;
                    setEmployee(emp);
                    const validate = validateUserAdmin(emp.PersonnelNumber, resp.data)
                    if (validate) {
                        dispatchConfig({
                            type: types.hasUserAdmin,
                            payload: true
                        })
                        setShowConfig(true);
                    }
                }
            })
            .catch((err) => console.log(err))
    }, [])


    const handleCLickRoute = (event, element) => {
        event.preventDefault();
        if (!element.url) {
            return
        }
        navigate(`${element.url}`)
    }

    const handleLogout = () => {
        dispatchConfig({ type: types.hasUserAdmin, payload: false });
        logout();
    }

    return (
        <div className="parent">
            <div className="child">
                <Stack enableScopedSelectors horizontal styles={stackStyles} tokens={stackTokens}>
                    <Stack.Item grow={30} styles={stackItemStylesStart}>
                        <Button appearance="transparent" icon={<GridDots24Filled style={{ color: "white", height: 55 }} />}>
                        </Button>
                        <h3 style={{ fontWeight: 'bold', paddingLeft: '25px' }}>Finances and Operations</h3>
                    </Stack.Item>
                    {/* <Stack.Item grow={12} styles={stackItemStylesUser}>
                        <h3 style={{ fontWeight: 'bold' }}>{employee.Name}</h3>
                    </Stack.Item> */}
                    {
                        showConfig
                        &&
                        (
                            <Stack.Item grow styles={stackItemStyles}>
                                <Button appearance="transparent" icon={<Settings24Regular style={{ color: "white", height: 55 }} onClick={() => navigate("/config")} />}>
                                </Button>
                            </Stack.Item>
                        )
                    }
                    <Stack.Item grow styles={stackItemStyles}>
                        <Popover positioning={'below'} open={showPopover}>
                            <PopoverTrigger disableButtonEnhancement>
                                <Button
                                    appearance="transparent"
                                    onClick={() => setShowPopover(showPopover ? false : true)}
                                >
                                    <Avatar active="active" name={employee.Name} />
                                </Button>
                            </PopoverTrigger>

                            <PopoverSurface className={styles.popoverSurface}>
                                <div>
                                    <p>
                                        {employee.Name}
                                    </p>
                                    <div>
                                        <Button appearance='transparent' type='primary' onClick={handleLogout}>
                                            Cerrar sesion
                                        </Button>
                                    </div>
                                </div>
                            </PopoverSurface>
                        </Popover>
                    </Stack.Item>
                </Stack>
            </div>
            <div className="main">
                <div className="child">
                    <div className={isOpen ? styles.root : 'undefined'}>
                        <Drawer
                            type='inline'
                            open={isOpen}
                            backdrop={{
                                className: styles.drawer,
                            }}
                            className={styles.drawer}
                            separator
                            style={{ width: '250px' }}
                        >
                            <DrawerHeader>
                                <DrawerHeaderTitle
                                    action={
                                        <Button
                                            appearance="subtle"
                                            aria-label="Close"
                                            icon={<Dismiss24Regular />}
                                            onClick={() => setIsOpen(false)}
                                        />
                                    }
                                >
                                    {/* Left Inline Drawer */}
                                </DrawerHeaderTitle>
                            </DrawerHeader>

                            <DrawerBody className={styles.navbody}>
                                <Nav styles={navStyles} groups={navLinkGroups} onLinkClick={handleCLickRoute} />
                            </DrawerBody>
                        </Drawer>
                        {
                            !isOpen
                            && <Button
                                appearance="transparent" icon={<LineHorizontal320Regular />} onClick={() => setIsOpen(!isOpen)}>
                            </Button>
                        }
                    </div>
                </div>
                <div className="content" style={{ background: "#fafafa" }}>{children}</div>
            </div>
            <div className="footer" style={{ background: DefaultPalette.blueDark }}>
                <small>
                    Copyright © 2023 LogicOne. All Rights Reserved.
                </small>
            </div>
        </div>
    );
}
