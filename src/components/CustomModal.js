import React, { useContext, useEffect, useRef, useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogContent,
    DialogBody,
    DialogActions,
    Button,
    Input,
    Label,
    makeStyles,
} from "@fluentui/react-components";
import { Stack, TextField } from "@fluentui/react";
import { AuthContext } from "../auth/AuthContext";

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        paddingBottom: "15px"
    },
});

export const CustomModal = ({ isModalOpen }) => {
    // const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const { accessKey } = useContext(AuthContext)
    const styles = useStyles();
    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    const handleInputChange = (event, newValue) => {
        setInputValue(newValue);
    };

    const renderUnderlinedChars = () => {
        if (inputValue) {
            return inputValue?.split('').map((char, index) => (
                <span key={index} style={{ borderBottom: '2px solid black', padding: '0 4px', margin: '0 10px', justifyContent: "center" }}>
                    <h1>{char}</h1>
                </span>
            ));
        }
    };

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        const ok = await accessKey(inputValue)
        console.log('que me llega aqui', ok);
        if (!ok) {
            setInputValue('');
            return alert("clave incorrecta!");
        }
        return alert("clave correcta!");
    };

    return (
        <Dialog modalType="non-modal" open={isModalOpen} >
            <DialogSurface aria-describedby={undefined}>
                <form onSubmit={handleSubmit} style={{ height: '180px' }}>
                    <DialogBody>
                        <DialogTitle>Clave de acceso</DialogTitle>
                        <DialogContent className={styles.content}>
                            <div>
                                <TextField
                                    id="customInput"
                                    type="text"
                                    ref={inputElement}
                                    value={inputValue}
                                    placeholder="coloque su clave de 4 digitos"
                                    onChange={handleInputChange}
                                    borderless={true}
                                    style={{ color: 'transparent' }}
                                    maxLength={4}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        marginTop: '10px',
                                        background: "#fafafa",
                                        justifyContent: "center",
                                        fontSize: "30"
                                    }}>
                                    {renderUnderlinedChars()}
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    );
};


// import React from 'react'
// import { useId, useBoolean } from '@fluentui/react-hooks';
// import {
//     Modal,
//     getTheme,
//     mergeStyleSets,
//     FontWeights,
//     Toggle,
//     ContextualMenu,
// } from '@fluentui/react';
// // import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
// // import { LoginPage } from '../pages/authentication/LoginPage';
// // import { RegisterPage } from '../pages/authentication/RegisterPage';
// import { Button, Input, Label } from '@fluentui/react-components';
// import { useForm } from '../hooks/useForm';

// const dragOptions = {
//     moveMenuItemText: 'Move',
//     closeMenuItemText: 'Close',
//     menu: ContextualMenu,
//     dragHandleSelector: '.ms-Modal-scrollableContent > div:first-child',
// };
// const cancelIcon = { iconName: 'Cancel' };

// const initialState = {
//     accesskey: ''
// }

// export const CustomModal = ({ isModalOpen }) => {
//     // const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
//     const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(true);
//     const { form, handleInputChange } = useForm(initialState);
//     const titleId = useId('title');

//     const onSubmit = (form) => {
//         console.log(form.accesskey)
//     }

//     return (
//         <div>
//             <Toggle
//                 styles={toggleStyles}
//                 label="Is draggable"
//                 inlineLabel
//                 onChange={toggleIsDraggable}
//                 checked={isDraggable}
//                 disabled={isModalOpen}
//             />
//             {/* <DefaultButton secondaryText="Opens the Sample Modal" onClick={showModal} text="Open Modal" /> */}
//             <Modal
//                 titleAriaId={titleId}
//                 isOpen={isModalOpen}
//                 // onDismiss={hideModal}
//                 isModeless={true}
//                 containerClassName={contentStyles.container}
//                 dragOptions={isDraggable ? dragOptions : undefined}
//             >
//                 {/* <div className={contentStyles.header}>
//                     <h2 className={contentStyles.heading} id={titleId}>
//                         Lorem Ipsum
//                     </h2>
//                     <IconButton
//                         styles={iconButtonStyles}
//                         iconProps={cancelIcon}
//                         ariaLabel="Close popup modal"
//                         // onClick={hideModal}
//                     />
//                 </div> */}

//                 <div className={contentStyles.body}>
//                     <form noValidate autoComplete="off" onSubmit={onSubmit}>
//                         <div>
//                             <Label required>clave de acceso</Label>
//                             <Input appearance="underline" name="accesskey" onChange={handleInputChange} />
//                         </div>
//                         <Button type='submit' appearance="primary" shape='square' >
//                             Siguiente
//                         </Button>
//                     </form>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// const theme = getTheme();
// const contentStyles = mergeStyleSets({
//     container: {
//         display: 'flex',
//         flexFlow: 'column nowrap',
//         alignItems: 'stretch',
//     },
//     header: {
//         flex: '1 1 auto',
//         borderTop: `4px solid ${theme.palette.themePrimary}`,
//         color: theme.palette.neutralPrimary,
//         display: 'flex',
//         alignItems: 'center',
//         fontWeight: FontWeights.semibold,
//         padding: '12px 12px 14px 24px',
//     },
//     heading: {
//         color: theme.palette.neutralPrimary,
//         fontWeight: FontWeights.semibold,
//         fontSize: 'inherit',
//         margin: '0',
//     },
//     body: {
//         display: 'flex',
//         // flex: '4 4 auto',
//         padding: '0 24px 24px 24px',
//         width: '600px',
//         justifyContent: "center"
//         // overflowY: 'hidden',
//     },
// });
// const toggleStyles = { root: { marginBottom: '20px' } };
// const iconButtonStyles = {
//     root: {
//         color: theme.palette.neutralPrimary,
//         marginLeft: 'auto',
//         marginTop: '4px',
//         marginRight: '2px',
//     },
//     rootHovered: {
//         color: theme.palette.neutralDark,
//     },
// };
