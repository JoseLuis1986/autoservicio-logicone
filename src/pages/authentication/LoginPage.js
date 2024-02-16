import React, { useContext, useEffect, useState } from 'react';
import { Card, Input, Label, Image, Button, Link } from "@fluentui/react-components";
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { CustomModal } from '../../components/CustomModal';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';
import { renewToken } from '../../helpers/renewToken';
import { hasUserAdmin } from '../../helpers/hasUserAdmin';

// const initialForm = {
//     Personnelnumber: '000046',
// }

export const LoginPage = () => {
    const logo = JSON.parse(localStorage.getItem('logo'));

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [codeEmpl, setCodeEmpl] = useState({Personnelnumber: ''})

    const { login } = useContext(AuthContext);
    const { dispatch } = useContext(AlertContext);

    const styles = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([renewToken().catch((error) => console.log(error)), hasUserAdmin().catch((error) => console.log(error))]).then(
            (values) => {
                if (!values[0].success) {
                    dispatch({
                        type: types.newIntent,
                        payload: {
                            intent: 'warning',
                            messages: values[0].data
                        }
                    })
                    return navigate('/');
                }
                if (values[0].success && !values[1].data.length) {
                    return navigate('/');
                }

            })
    }, [dispatch, navigate])


    const handleInputChange = ({ target }) => {
        setCodeEmpl({
            [target.name]: target.value
        })
    }


    const onSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true)
        // TODO: llamar el backend
        const result = await login(codeEmpl);
        if (result) {
            setLoading(false);
            setShowModal(true);
        }
        setLoading(false)
    }

    // const todoOk = () => {
    //     return (form.Personnelnumber.length > 0 && form.Identification.length > 0 && form.Nombre.length > 0) ? true : false;
    // }

    const handleReg = (ev) => {
        ev.preventDefault();
        navigate("/auth/registration");
    }

    return (
        <Card className={styles.boundary}>
            {
                loading ? (
                    <LoadingSpinner />
                ) : (

                    <>
                        <CustomModal isModalOpen={showModal} />
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
                                <Label required>Codigo de empleado</Label>
                                <Input appearance="underline" name="Personnelnumber" value={codeEmpl.Personnelnumber} onChange={handleInputChange} />
                            </div>
                            {/* 
                            <div className={styles.field}>
                                <Label required>identificación</Label>
                                <Input appearance="underline" name="Identification" value={form.Identification} onChange={handleInputChange} />
                            </div>

                            <div className={styles.field}>
                                <Label required>Nombre</Label>
                                <Input appearance="underline" name="Nombre" value={form.Nombre} onChange={handleInputChange} />
                            </div> */}
                            {/* <div>
                                <Checkbox label="Recordar mi cuenta" name="rememberme" checked={form.rememberme} onChange={toggleCheck} />
                            </div> */}
                            <div className={styles.wrapper}>
                                {/* //disabled={!todoOk()} */}
                                <Button style={{ width: '100%' }} type='submit' appearance="primary" shape='square' >
                                    Siguiente
                                </Button>
                            </div>
                        </form>
                        <div style={{ fontSize: 12, textAlign: 'center' }}>
                            Aun no tienes tu acceso a la plataforma{' '}
                            <Link onClick={handleReg} inline>
                                Registrate aqui
                            </Link>
                            {' '}y solicita tu acceso
                        </div>
                    </>
                )
            }
        </Card >
    )
}
