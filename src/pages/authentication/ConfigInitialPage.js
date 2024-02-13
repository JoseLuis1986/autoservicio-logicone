import React, { useContext, useEffect, useState } from 'react'
import { Card, Input, Label, Button, Checkbox, Spinner } from "@fluentui/react-components";
import { Eye24Regular, Checkmark24Filled } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';
import { SplashScreen } from '../../components/SplashScreen';
import { renewToken } from '../../helpers/renewToken';
import { getEmployeeByCode } from '../../helpers/getEmployeeByCode';

export const ConfigInitialPage = () => {
    const [loading, setLoading] = useState(true);
    const [imageSplash, setImageSplash] = useState(null);
    const [show, setShow] = useState(false)
    const [getCode, setGetCode] = useState({
        code: ''
    });
    const [checked, setChecked] = useState(false);
    const [loadingInput, setLoadingInput] = useState(true);
    const [personnelName, setPersonnelName] = useState('');
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
                            intent: 'warning',
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
        password: '',
        password2: '',
        logo: null,
        background: null
    };

    const [form, handleInputChange, handleInputImage, reset] = useForm(initialState);

    const EyesButton = (props) => {
        return (
            <Button
                {...props}
                appearance="transparent"
                icon={<Eye24Regular />}
                size="small"
                onClick={() => {
                    show ? setShow(false) : setShow(true)
                }}
            />
        );
    };

    const CheckCode = () => {
        return (
            <Checkbox
                checked={checked}
                onChange={(ev, data) => {
                    if (!getCode.code) {
                        return alert('Debe llenar el campo de codigo personal')
                    }
                    setChecked(data.checked)
                    getName();
                }}
            />
        );
    }
    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        const { resource, grant_type, tenant_id, client_id, client_secret, password, password2, logo, background } = form;

        if (password != password2) {
            alert('Las claves no coinciden');
            return setLoading(false);
        }
        if (!personnelName) {
            alert('Debes chequear tu usuario administrador');   
        }

        const formDataToSend = new FormData();
        formDataToSend.append("resource", resource);
        formDataToSend.append("grant_type", grant_type);
        formDataToSend.append('tenant_id', tenant_id);
        formDataToSend.append('client_id', client_id);
        formDataToSend.append('client_secret', client_secret);
        formDataToSend.append('name', personnelName);
        formDataToSend.append('password', password);
        formDataToSend.append('logo', logo);
        formDataToSend.append('background', background);
        const result = await register(formDataToSend);
        if (result.ok) {
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'success',
                    message: 'Cuenta configurada exitosamente',
                }
            });

            setTimeout(() => {
                navigate('/auth/login')
                setLoading(false)
            }, 4000);
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
        return (form.tenant_id.length > 0 &&
            form.client_id.length > 0 &&
            form.client_secret.length > 0 &&
            form.password.length > 0 &&
            form.password2.length > 0
        ) ? true : false;
    }

    const handleUserAdmin = ({ target }) => {
        setGetCode({
            [target.name]: target.value
        })
    }

    const getName = async () => {
        const employeeName = await getEmployeeByCode(getCode);
        setLoadingInput(false);
        setPersonnelName(employeeName.name);
    }

    console.log(personnelName.name);
    const GetInputEmployee = () => {
        return (
            <>
                {
                    loadingInput ? (
                        <Spinner size="extra-tiny" labelPosition="before" label="Buscando..." />
                    ) : (
                        <Input type="text" name="name" contentAfter={<Checkmark24Filled style={{ color: 'green' }} />} appearance="underline" value={personnelName} />
                    )
                }
            </>
        )
    }

    console.log(loadingInput);

    return (
        <Card className={styles.boundary}>
            {
                loading ?
                    (
                        <SplashScreen image={imageSplash} />
                    ) : (
                        <>
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
                                {/* CODIGO DEL ADMINISTRADOR */}
                                {
                                    (checked && !!getCode.code)
                                        ? (
                                            <div className={styles.field}>
                                                <Label required style={{ fontWeight: 600 }}>Id usuario administrador*</Label>
                                                {GetInputEmployee()}
                                            </div>
                                        )
                                        : (
                                            <div className={styles.field}>
                                                <Label required style={{ fontWeight: 600 }}>Id usuario administrador*</Label>
                                                <Input type="number" contentAfter={<CheckCode />} appearance="underline" name="code" value={getCode.code} onChange={handleUserAdmin} />
                                            </div>
                                        )
                                }
                                {/* PASSWORD ADMIN */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>Clave de configuración</Label>
                                    <Input type={show ? 'text' : 'password'} appearance="underline" name="password" value={form.password} onChange={handleInputChange} />
                                </div>
                                {/* PASSWORD ADMIN CONFIRM */}
                                <div className={styles.field}>
                                    <Label required style={{ fontWeight: 600 }}>Repetir clave de configuración</Label>
                                    <Input type={show ? 'text' : 'password'} contentAfter={<EyesButton />} appearance="underline" name="password2" value={form.password2} onChange={handleInputChange} />
                                </div>
                                {/* LOGO DE LA EMPRESA */}
                                <div className={styles.field}>
                                    <Label style={{ fontWeight: 600 }}>Logo de la empresa</Label>
                                    <Input appearance="underline" name="logo" type='file' onChange={handleInputImage} />
                                </div>
                                {/* CONFIGURACION DEL BACKGROUND */}
                                <div className={styles.field}>
                                    <Label style={{ fontWeight: 600 }}>Configuración de fondo</Label>
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
