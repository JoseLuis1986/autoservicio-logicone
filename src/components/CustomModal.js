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
    const placeholder = 'Favor ingresar el token que le ha sido enviado a su correo electrónico.'
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

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const ok = await accessKey(inputValue)
        if (!ok) {
            setInputValue('');
            return alert("clave incorrecta!");
        }
        return alert("clave correcta!");
    };

    return (
        <Dialog modalType="non-modal" open={isModalOpen} >
            <DialogSurface aria-describedby={undefined}>
                <form onSubmit={handleSubmit} style={{ height: '240px' }}>
                    <DialogBody>
                        <DialogTitle>
                            Clave de acceso
                            <p style={{ fontSize: 12, marginBottom: "0px" }}>{placeholder}</p>
                        </DialogTitle>
                        <DialogContent className={styles.content}>
                            <TextField
                                id="customInput"
                                type="text"
                                ref={inputElement}
                                value={inputValue}
                                onChange={handleInputChange}
                                borderless={true}
                                style={{ color: 'transparent', margin: '0px', padding: '0px' }}
                                maxLength={4}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: '10px',
                                    backgroundColor: "#fafafa",
                                    justifyContent: "center",
                                    fontSize: "24"
                                }}>
                                {renderUnderlinedChars()}
                            </div>
                            <div>
                            </div>
                        </DialogContent>
                        <DialogActions style={{ bottom: '20px', position: 'absolute' }}>
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