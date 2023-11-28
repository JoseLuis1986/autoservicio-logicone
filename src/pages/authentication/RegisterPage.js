import React from 'react'
import { Card, Input, Label, useId, Image, Button } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useStyles } from '../useStyles';

export const RegisterPage = () => {
    // const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const username = useId("input-username");
    const emailId = useId("large-id");
    const passwordId = useId("input-password");
    const styles = useStyles()

    const initialState = {
        username: '',
        email: '',
        password: ''
    };

    const [form, handleInputChange, reset] = useForm(initialState);


    const onSubmit = async (ev) => {
        ev.preventDefault();

        const { username } = form;
        navigate("/auth/login")
        // const msg = await register(username, email, password);

        // if (msg !== true) {
        //     Swal.fire('Error', msg, 'error');
        // }

    }

    const todoOk = () => {
        return (form.username.length > 0 &&
            form.email.length > 0 &&
            form.password.length > 0
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
            <h3>Iniciar Sesion</h3>
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
