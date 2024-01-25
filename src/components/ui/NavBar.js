import React, { useContext, useState, useEffect } from 'react';
import { DefaultPalette, Stack, Slider } from '@fluentui/react';
import { GridDots24Filled, Dismiss24Regular, LineHorizontal320Regular } from '@fluentui/react-icons';
import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, tokens, makeStyles, shorthands } from '@fluentui/react-components';
import { Nav } from '@fluentui/react/lib/Nav';
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom'

import '../../css/nav-bar.css'

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
    }
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


export const Navbar = ({ children }) => {

    const { logout, auth } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [employee, setEmployee] = useState([]);
    const styles = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.user) {
            const emp = auth.user;
            setEmployee(emp)
        }
    }, [])


    const handleCLickRoute = (event, element) => {
        event.preventDefault();
        if (!element.url) {
            return
        }
        navigate(`${element.url}`)
    }

    return (
        <div className="parent">
            <div className="child">
                <Stack enableScopedSelectors horizontal styles={stackStyles} tokens={stackTokens}>
                    <Stack.Item grow={12} styles={stackItemStylesStart}>
                        <Button appearance="transparent" icon={<GridDots24Filled style={{ color: "white", height: 55 }} />}>
                        </Button>
                        <h3 style={{ fontWeight: 'bold', paddingLeft: '25px' }}>Finances and Operations</h3>
                    </Stack.Item>
                    <Stack.Item grow={12} styles={stackItemStylesUser}>
                        <h3 style={{ fontWeight: 'bold' }}>{employee.Name}</h3>
                    </Stack.Item>
                    <Stack.Item grow styles={stackItemStyles}>
                        <Button appearance='transparent' onClick={logout}>
                            <h4 style={{ color: "white" }}>Salir</h4>
                        </Button>
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
                <div className="content" style={{ background: "#fafafafa" }}>{children}</div>
            </div>
            <div className="footer" style={{ background: DefaultPalette.blueDark }}>
                <small>
                    Copyright © 2023 LogicOne. All Rights Reserved.
                </small>
            </div>
        </div>
    );
}
