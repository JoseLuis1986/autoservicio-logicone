import React, { useContext, useEffect, useState } from 'react'
import { Card, Input, Label, Image, Button } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';
import { SplashScreen } from '../../components/SplashScreen';
import { renewToken } from '../../helpers/renewToken';


export const ConfigInitialPage = () => {
    const [loading, setLoading] = useState(true);
    const [imageSplash, setImageSplash] = useState(null);
    const { register } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);
    const navigate = useNavigate();
    const styles = useStyles()

    useEffect(() => {
        renewToken()
            .then((resp) => {
                if (resp.success) {
                    setImageSplash(resp.data.imageLogo)
                    setTimeout(() => {
                        navigate('/auth/login')
                        setLoading(false)
                    }, 6000);
                } else {
                    setLoading(false)
                    dispatch({
                        type: types.newIntent,
                        payload: {
                            intent: 'error',
                            messages: resp.data
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [dispatch, navigate])

    const initialState = {
        resource: process.env.REACT_APP_RESOURCE,
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        tenant_id: '75416002-9e46-4dc3-8b26-5515e8b5e910',
        client_id: 'aa4b24d0-1cc4-445a-9074-90a85cfdceeb',
        client_secret: 'Mnt8Q~Y.Essb0DndPE6eCCo597DkeVviiTKsKaw2',
        logo: null,
        background: null
    };

    const [form, handleInputChange, handleInputImage, reset] = useForm(initialState);


    const onSubmit = async (ev) => {
        ev.preventDefault();
        const { resource, grant_type, tenant_id, client_id, client_secret, logo, background } = form;

        const formDataToSend = new FormData();
        formDataToSend.append("resource", resource);
        formDataToSend.append("grant_type", grant_type);
        formDataToSend.append('tenant_id', tenant_id);
        formDataToSend.append('client_id', client_id);
        formDataToSend.append('client_secret', client_secret);
        formDataToSend.append('logo', logo);
        formDataToSend.append('background', background);

        const result = await register(formDataToSend);
        if (result.ok) {
            navigate("/auth/login")
        }
    }

    const todoOk = () => {
        return (form.tenant_id.length > 0 &&
            form.client_id.length > 0 &&
            form.client_secret.length > 0
        ) ? true : false;
    }

    return (
        <Card className={styles.boundary}>
            {
                loading ?
                    (
                        <SplashScreen image={imageSplash} />
                    ) : (
                        <>
                            <div style={{ border: "1px solid green", height: 30, width: 100 }}>
                                <Image
                                    src="https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
                                    alt="Image placeholder"
                                    fit="none"
                                />
                            </div>
                            <h3>Configuración Inicial</h3>
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                {/* RECURSO */}
                                <div className={styles.field}>
                                    <Label required>Resource</Label>
                                    <Input appearance="underline" name="resource" value={form.resource} onChange={handleInputChange} />
                                </div>
                                {/* TENANT */}
                                <div className={styles.field}>
                                    <Label required>Tenant ID</Label>
                                    <Input appearance="underline" name="tenant_id" value={form.tenant_id} onChange={handleInputChange} />
                                </div>
                                {/* CLIENT ID */}
                                <div className={styles.field}>
                                    <Label required>Client ID</Label>
                                    <Input appearance="underline" name="client_id" value={form.client_id} onChange={handleInputChange} />
                                </div>
                                {/* CLIENT SECRET */}
                                <div className={styles.field}>
                                    <Label required>Client Secret</Label>
                                    <Input appearance="underline" name="client_secret" value={form.client_secret} onChange={handleInputChange} />
                                </div>
                                <div className={styles.field}>
                                    <Label>Logo de la empresa</Label>
                                    <Input appearance="underline" name="logo" type='file' onChange={handleInputImage} />
                                </div>
                                <div className={styles.field}>
                                    <Label>Configuración de fondo</Label>
                                    <Input appearance="underline" name="background" type='file' onChange={handleInputImage} />
                                </div>
                                {/* BUTTONS */}
                                <div className={styles.wrapper}>
                                    <Button appearance="secondary" shape='square' onClick={reset}>
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
