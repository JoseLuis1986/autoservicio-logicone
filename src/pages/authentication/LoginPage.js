import React, { useContext, useEffect, useState } from 'react';
import { Card, Input, Label, useId, Image, Button, Checkbox } from "@fluentui/react-components";
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { CustomModal } from '../../components/CustomModal';

const initialForm = {
    Personnelnumber: '000643',
    Identification: '02800950459',
    Nombre: 'Wayne Samuel',
    // rememberme: false
};

export const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const styles = useStyles();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, handleInputChange, reset] = useForm(initialForm);


    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true)
        // (form.rememberme)
        //     ? localStorage.setItem('email', form.email)
        //     : localStorage.removeItem('email');

        const { Personnelnumber, Identification, Nombre } = form;
        const data = {
            Personnelnumber,
            Identification,
            Nombre
        }
        // console.log(stringDta)
        // TODO: llamar el backend
        const result = await login(data);
        if (result) {
            setLoading(false);
            setShowModal(true);
        }
        setLoading(false)
    }
    const handleModal = (ev) => {
        ev.preventDefault();
        setShowModal(true);
    }

    const todoOk = () => {
        return (form.Personnelnumber.length > 0 && form.Identification.length > 0 && form.Nombre.length > 0) ? true : false;
    }

    return (
        <Card className={styles.boundary}>
            {
                loading ? (
                    <LoadingSpinner />
                ) : (

                    <>
                        <CustomModal isModalOpen={showModal}/>
                        <div style={{ border: "1px solid green", height: 30, width: 100 }}>
                            <Image
                                src="https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
                                alt="Image placeholder"
                                fit="none"
                            />
                        </div>
                        <h3>Bienvenido</h3>
                        <form noValidate autoComplete="off" onSubmit={onSubmit}>
                            <div className={styles.field}>
                                <Label required>Personnelnumber</Label>
                                <Input appearance="underline" name="Personnelnumber" value={form.Personnelnumber} onChange={handleInputChange} />
                            </div>

                            <div className={styles.field}>
                                <Label required>Identification</Label>
                                <Input appearance="underline" name="Identification" value={form.Identification} onChange={handleInputChange} />
                            </div>

                            <div className={styles.field}>
                                <Label required>Nombre</Label>
                                <Input appearance="underline" name="Nombre" value={form.Nombre} onChange={handleInputChange} />
                            </div>
                            {/* <div>
                        <Checkbox label="Recordar mi cuenta" name="rememberme" checked={form.rememberme} onChange={toggleCheck} />
                    </div> */}
                            <div className={styles.wrapper}>
                                <Button appearance="secondary" shape='square' onClick={handleModal}>
                                    Atras
                                </Button>
                                <Button type='submit' appearance="primary" shape='square' disabled={!todoOk()} >
                                    Siguiente
                                </Button>
                            </div>
                        </form>
                    </>
                )
            }
        </Card >
    )
}
