import React, { useContext, useEffect, useState } from 'react'
import { Card, Input, Label, useId, Image, Button } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../useStyles';
import { colGroupProperties } from '@fluentui/react';
import { AuthContext } from '../../auth/AuthContext';

// const token = localStorage.getItem('token')

export const RegisterPage = () => {
    // const [isToken, setIsToken] = useState(token)
    const { register, auth } = useContext(AuthContext);
    const grant_type = process.env.REACT_APP_GRANT_TYPE;
    const resource = process.env.REACT_APP_RESOURCE;
    const navigate = useNavigate();
    const styles = useStyles()

    // console.log("register page", token);
    // useEffect(() => {
    //     if (isToken != null) {
    //         navigate("/auth/login")
    //     }
    // }, [isToken])

    const initialState = {
        tenant_id: '75416002-9e46-4dc3-8b26-5515e8b5e910',
        client_id: 'aa4b24d0-1cc4-445a-9074-90a85cfdceeb',
        client_secret: 'Mnt8Q~Y.Essb0DndPE6eCCo597DkeVviiTKsKaw2'
    };

    const [form, handleInputChange, reset] = useForm(initialState);


    const onSubmit = async (ev) => {
        ev.preventDefault();
        const { tenant_id, client_id, client_secret } = form;

        const data = {
            grant_type,
            resource,
            tenant_id,
            client_id,
            client_secret
        }
        console.log(data)
        const result = await register(data);
        console.log('mi respuesta del registro', result);

        if (result.ok) {
            navigate("/auth/login")
        }
        // const msg = await register(username, email, password);

        // if (msg !== true) {
        //     Swal.fire('Error', msg, 'error');
        // }

    }

    const todoOk = () => {
        return (form.tenant_id.length > 0 &&
            form.client_id.length > 0 &&
            form.client_secret.length > 0
        ) ? true : false;
    }

    return (
        <Card className={styles.boundary}>
            <div style={{ border: "1px solid green", height: 30, width: 100 }}>
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
                    alt="Image placeholder"
                    fit="none"
                />
            </div>
            <h3>Configuracion Inicial</h3>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className={styles.field}>
                    <Label required>Tenant ID</Label>
                    <Input appearance="underline" name="tenant_id" value={form.tenant_id} onChange={handleInputChange} />
                </div>

                <div className={styles.field}>
                    <Label required>Client ID</Label>
                    <Input appearance="underline" name="client_id" value={form.client_id} onChange={handleInputChange} />
                </div>

                <div className={styles.field}>
                    <Label required>Client Secret</Label>
                    <Input appearance="underline" name="client_secret" value={form.client_secret} onChange={handleInputChange} />
                </div>
                <div className={styles.wrapper}>
                    <Button appearance="secondary" shape='square' onClick={reset}>
                        Atras
                    </Button>
                    <Button type='submit' appearance="primary" shape='square' disabled={!todoOk()} >
                        Siguiente
                    </Button>
                </div>
            </form>
        </Card>
    )
}
