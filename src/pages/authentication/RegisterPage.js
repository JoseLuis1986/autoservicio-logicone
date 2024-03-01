import React, { useContext, useEffect, useState } from 'react';
import { Card, Input, Label, Image, Button, Link } from "@fluentui/react-components";
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';
import { renewToken } from '../../helpers/renewToken';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const initialForm = {
    Nombre: 'Wayne Samuel',
    Email: '',
    IdentificationNumber: '7799897897987'
    // rememberme: false
};

export const RegisterPage = () => {
    const logo = JSON.parse(localStorage.getItem('logo'));
    const [loading, setLoading] = useState(false)
    const styles = useStyles();
    const { requestAccess } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);
    const navigate = useNavigate();
    const [form, handleInputChange, reset] = useForm(initialForm);

    useEffect(() => {
        renewToken()
            .then((resp) => {
                if (!resp.success) {
                    // setLoading(false)
                    dispatch({
                        type: types.newIntent,
                        payload: {
                            intent: 'error',
                            messages: resp.data
                        }
                    })
                    navigate('/')
                }
            })
            .catch((err) => console.log(err))
    }, [dispatch, navigate])

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        const { Nombre, Email, IdentificationNumber, } = form;
        const data = {
            IdentificationNumber,
            Email,
            Nombre
        }
        // TODO: llamar el backend
        const result = await requestAccess(data);
        if (result.ok) {
            setLoading(false);
            reset();
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'success',
                    messages: result.message
                }
            });
        } else {
            dispatch({
                type: types.newIntent,
                payload: {
                    intent: 'error',
                    messages: result.message
                }
            })
        }
        setLoading(false)
    }

    const todoOk = () => {
        return (form?.IdentificationNumber.length > 0 && form?.Nombre.length > 0 && form?.Email.length) ? true : false;
    }

    const handleLog = (ev) => {
        ev.preventDefault();
        navigate('/auth/login');
    }

    return (
        <Card className={styles.boundary}>
            {
                loading ?
                    (<LoadingSpinner />) :
                    (<>
                        <div style={{ margin: '5%', textAlign: 'center' }}>
                            <Image
                                src={logo ? `data:image/jpeg;base64,${logo}` : "https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"}
                                style={{ maxWidth: "90%" }}
                                alt="Image placeholder"
                                fit="cover"
                                shape="square"
                            />
                        </div>
                        {/* <h3>Bienvenido</h3> */}
                        <form noValidate autoComplete="off" onSubmit={onSubmit}>

                            <div className={styles.field}>
                                <Label required>Nombre</Label>
                                <Input appearance="underline" name="Nombre" value={form.Nombre} onChange={handleInputChange} />
                            </div>

                            <div className={styles.field}>
                                <Label required>Correo</Label>
                                <Input appearance="underline" name="Email" value={form.Email} onChange={handleInputChange} />
                            </div>

                            <div className={styles.field}>
                                <Label required>identificación</Label>
                                <Input appearance="underline" name="IdentificationNumber" value={form.IdentificationNumber} onChange={handleInputChange} />
                            </div>

                            <div className={styles.wrapper}>
                                <Button style={{ width: '100%' }} type='submit' appearance="primary" shape='square' disabled={!todoOk()} >
                                    Solicitar
                                </Button>
                            </div>
                        </form>
                        <div style={{ fontSize: 12, textAlign: 'center' }}>
                            Ya tienes tu acceso a la plataforma{' '}
                            <Link onClick={handleLog} inline>
                                Ingresa aqui
                            </Link>
                        </div>
                    </>
                    )
            }
        </Card >
    )
}

