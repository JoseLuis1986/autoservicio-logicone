import React, { useContext, useEffect, useRef, useState } from 'react'
import { Card, Input, Label, Button } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';
import { SplashScreen } from '../../components/SplashScreen';
import { renewToken } from '../../helpers/renewToken';
import { AdminModal } from '../../components/AdminModal';
import { hasUserAdmin } from '../../helpers/hasUserAdmin';

export const ConfigInitialPage = () => {
    const [loading, setLoading] = useState(true);
    const [imageSplash, setImageSplash] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { register, setBackground } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);
    const navigate = useNavigate();
    const styles = useStyles();
    const [file, setFiles] = useState({
        logo: null,
        background: null
    });
    const inputRef = useRef();
    const inputRef1 =  useRef();

    useEffect(() => {
        Promise.all([renewToken().catch((error) => error), hasUserAdmin().catch((error) => error)]).then(
            (values) => {
                if (!values[0].success) {
                    setLoading(false)
                    return dispatch({
                        type: types.newIntent,
                        payload: {
                            intent: 'warning',
                            messages: values[0].data
                        }
                    })
                }
                if (values[0].success && !values[1].data.length) {
                    setBackground(values[0].data.backgroundImage);
                    setImageSplash(values[0].data.imageLogo);
                    setLoading(false);
                    setShowModal(true);
                    return;
                }
                setBackground(values[0].data.backgroundImage)
                setImageSplash(values[0].data.imageLogo);
                return setTimeout(() => {
                    navigate('/auth/login')
                    setLoading(false)
                }, 6000);
            },
        );
    }, [dispatch, navigate])

    // const initialState = {
    //     resource: 'https://usnconeboxax1aos.cloud.onebox.dynamics.com',
    //     grant_type: 'client_credentials',
    //     tenant_id: '75416002-9e46-4dc3-8b26-5515e8b5e910',
    //     client_id: 'aa4b24d0-1cc4-445a-9074-90a85cfdceeb',
    //     client_secret: 'Mnt8Q~Y.Essb0DndPE6eCCo597DkeVviiTKsKaw2',
    // };

    const initialState = {
        resource: process.env.REACT_APP_RESOURCE,
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        tenant_id: '',
        client_id: '',
        client_secret: '',
    };

    const [form, handleInputChange, reset] = useForm(initialState);

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        const { resource, grant_type, tenant_id, client_id, client_secret } = form;
        const { logo, background } = file;

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
            setLoading(false);
            setShowModal(true);
        } else {
            setLoading(false);
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'warning',
                    messages: result.message
                }
            })
        }
    }

    const todoOk = () => {
        return (form.resource.length > 0 &&
            form.tenant_id.length > 0 &&
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
                            <AdminModal isModalOpen={showModal} />
                            <h3 style={{ marginBottom: '2px', textAlign: 'center' }}>Configuración Inicial</h3>
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                {/* RECURSO */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>URL base (Resource)</Label>
                                    <Input appearance="underline" name="resource" value={form.resource} onChange={handleInputChange} />
                                </div>
                                {/* TENANT */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>Id de inquilino (Tentant ID)</Label>
                                    <Input appearance="underline" name="tenant_id" value={form.tenant_id} onChange={handleInputChange} />
                                </div>
                                {/* CLIENT ID */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>Id del cliente (Client ID)</Label>
                                    <Input appearance="underline" name="client_id" value={form.client_id} onChange={handleInputChange} />
                                </div>
                                {/* CLIENT SECRET */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>Clave secreta del cliente (Client Secret)</Label>
                                    <Input appearance="underline" name="client_secret" value={form.client_secret} onChange={handleInputChange} />
                                </div>
                                {/* LOGO DE LA EMPRESA */}
                                <div className={styles.field}>
                                    <Label style={{ fontWeight: 600 }}>Logo de la empresa</Label>
                                    <Input
                                        id='logo'
                                        ref={inputRef}
                                        appearance="underline"
                                        name="logo"
                                        type='file'
                                        onChange={() => setFiles({...file, logo: inputRef.current.files[0]})}
                                    // onChange={handleInputImage}
                                    />
                                </div>
                                {/* CONFIGURACION DEL BACKGROUND */}
                                <div className={styles.field}>
                                    <Label style={{ fontWeight: 600 }}>Configuración de fondo</Label>
                                    <Input 
                                        id='bg'
                                        ref={inputRef1}
                                        appearance="underline" 
                                        name="background" 
                                        type='file'
                                        onChange={() => setFiles({...file, background: inputRef1.current.files[0]})} 
                                    />
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
