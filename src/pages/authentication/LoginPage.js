import React, { useContext } from 'react';
import { Card, Input, Label, useId, Image, Button, Checkbox } from "@fluentui/react-components";
import { useStyles } from '../useStyles';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { AlertContext } from '../../context/alerts/AlertContext';
import { types } from '../../types/types';


export const LoginPage = () => {
    const username = useId("input-username");
    const emailId = useId("large-id");
    const passwordId = useId("input-password");
    const styles = useStyles();

    const { login } = useContext(AuthContext);

    const initialForm = {
        username: '',
        email: '',
        password: '',
        rememberme: false
    };

    const [form, handleInputChange, toggleCheck, reset] = useForm(initialForm);

    const onSubmit = async (ev) => {
        ev.preventDefault();
        (form.rememberme)
            ? localStorage.setItem('email', form.email)
            : localStorage.removeItem('email');

        const { email, password } = form;
        // TODO: llamar el backend
        const ok = await login(email, password);
        // if (!ok) {
        //     Swal.fire('Error', 'Verifique el usuario y contraseña', 'error');
        // }
    }

    const todoOk = () => {
        return (form.email.length > 0 && form.password.length > 0) ? true : false;
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
            <h3>Bienvenido</h3>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className={styles.field}>
                    <Label htmlFor={username}>Usario</Label>
                    <Input appearance="underline" name="username" value={form.username} onChange={handleInputChange} />
                </div>

                <div className={styles.field}>
                    <Label htmlFor={emailId}>Email</Label>
                    <Input appearance="underline" name="email" value={form.email} onChange={handleInputChange} />
                </div>

                <div className={styles.field}>
                    <Label htmlFor={passwordId}>Password</Label>
                    <Input appearance="underline" name="password" value={form.password} onChange={handleInputChange} />
                </div>
                <div>
                    <Checkbox label="Recordar mi cuenta" name="rememberme" checked={form.rememberme} onChange={toggleCheck} />
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
