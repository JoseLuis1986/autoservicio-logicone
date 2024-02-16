import React, { useContext, useEffect, useRef, useState } from 'react'
import { Card, Input, Label, Button } from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { AlertContext } from '../../context/alerts/AlertContext';
import { useStylesConfig } from '../useStylesConfig';
import { types } from '../../types/types';
import { MessagesInfo } from '../../components/messages/MessagesInfo';
import { AdminModal } from '../../components/AdminModal';


const getConfiguration = async () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/${'config-update'}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (result.success) {
      return { success: result.success, data: result.data }
    } else {
      return { success: false, data: result.data }
    }
  } catch (err) {
    console.log('err')
  }
}

const getUserAdmin = async () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}/${'login/user-admin'}`;
  try {
    const response = await fetch(url);
    const { success, data } = await response.json();
    console.log(data);
    if (success) {
      return { success, data }
    } else {
      return { success: false, data }
    }
  } catch (error) {
    console.log(error)
  }
}



export const ConfigurationAccount = () => {
  const { updateRegister } = useContext(AuthContext);
  const { dispatch } = useContext(AlertContext);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [files, setFiles] = useState({
    logo: null,
    background: null
  });
  const [userAdmin, setUserAdmin] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const styles = useStylesConfig();
  const inputRef = useRef();
  const inputRef1 = useRef();

  useEffect(() => {
    Promise.all([getConfiguration().catch((error) => console.log(error)), getUserAdmin().catch((error) => console.log(error))]).then(
      (values) => {
        console.log(values);
        if (!values[0].success) {
          dispatch({
            type: types.newIntent,
            payload: {
              intent: 'warning',
              messages: values[0].data
            }
          })
          return;
        }
        setValues(values[0].data);
        const { data } = values[1];
        setUserAdmin(data[0]);

        setLoading(false);

      })
  }, [dispatch])


  const onSubmit = async (ev) => {
    ev.preventDefault();
    console.log(values);
    const { _id, resource, grant_type, tenant_id, client_id, client_secret } = values;
    const { logo, background } = files;
    const formDataToSend = new FormData();
    formDataToSend.append("_id", _id);
    formDataToSend.append("resource", resource);
    formDataToSend.append("grant_type", grant_type);
    formDataToSend.append('tenant_id', tenant_id);
    formDataToSend.append('client_id', client_id);
    formDataToSend.append('client_secret', client_secret);
    formDataToSend.append('logo', logo);
    formDataToSend.append('background', background);
    const result = await updateRegister(formDataToSend);
    if (result.ok) {
      console.log('se actualizo el registro');
    } else {
      console.log('no se pudo actualizar el registro');
    }
  }

  const todoOk = () => {
    return (values.resource.length > 0 &&
      values.tenant_id.length > 0 &&
      values.client_id.length > 0 &&
      values.client_secret.length > 0
    ) ? true : false;
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const handleInputImage = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.files[0]
    })
  }

  const handleNewUser = () => {
    setShowModal(true);
  }

  return (
    <>
      <MessagesInfo />
      {/* <AdminModal isModalOpen={showModal}/> */}
      {
        loading
          ? (<h1>Cargando datos de configuración</h1>)
          :
          (<div className={styles.main}>
            <Card className={styles.boundary}>
              <h3 style={{ marginBottom: '2px', textAlign: 'center' }}>Configuración de la empresa</h3>
              <form noValidate autoComplete="off" onSubmit={onSubmit}>
                {/* RECURSO */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>URL base (Resource)</Label>
                  <Input appearance="underline" name="resource" value={values.resource} onChange={handleInputChange} />
                </div>
                {/* TENANT */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Id de inquilino (Tentant ID)</Label>
                  <Input appearance="underline" name="tenant_id" value={values.tenant_id} onChange={handleInputChange} />
                </div>
                {/* CLIENT ID */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Id del cliente (Client ID)</Label>
                  <Input appearance="underline" name="client_id" value={values.client_id} onChange={handleInputChange} />
                </div>
                {/* CLIENT SECRET */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Clave secreta del cliente (Client Secret)</Label>
                  <Input appearance="underline" name="client_secret" value={values.client_secret} onChange={handleInputChange} />
                </div>
                {/* LOGO DE LA EMPRESA */}
                <div className={styles.field}>
                  <Label style={{ fontWeight: 600 }}>Logo de la empresa</Label>
                  <Input ref={inputRef} appearance="underline" name="logo" type='file' onChange={() => setFiles({ ...files, logo: inputRef.current.files[0] })} />
                </div>
                {/* CONFIGURACION DEL BACKGROUND */}
                <div className={styles.field}>
                  <Label style={{ fontWeight: 600 }}>Configuración de fondo</Label>
                  <Input ref={inputRef1} appearance="underline" name="background" type='file' onChange={() => setFiles({ ...files, background: inputRef1.current.files[0] })} />
                </div>
                {/* BUTTONS */}
                <div className={styles.wrapper}>
                  <Button appearance="secondary" shape='square' onClick={console.log('hello')}>
                    Atras
                  </Button>
                  <Button type='submit' appearance="primary" shape='square' disabled={!todoOk()} >
                    Siguiente
                  </Button>
                </div>
              </form>
            </Card >
            {/* Configuracion del usuario admin */}
            <Card className={styles.boundary}>
              <h3 style={{ marginBottom: '2px', textAlign: 'center' }}>Usuario Admin</h3>
              <form noValidate autoComplete="off" onSubmit={onSubmit}>
                {/* RECURSO */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Codigo personal</Label>
                  <Input appearance="underline" name="resource" value={userAdmin.codigo} onChange={handleInputChange} disabled={true} />
                </div>
                {/* TENANT */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Nombre</Label>
                  <Input appearance="underline" name="tenant_id" value={userAdmin.name} onChange={handleInputChange} disabled={true} />
                </div>
                {/* CLIENT ID */}
                <div className={styles.field}>
                  <Label required style={{ fontWeight: 600 }}>Correo electronico</Label>
                  <Input appearance="underline" name="client_id" value={userAdmin.email} onChange={handleInputChange} disabled={true} />
                </div>

                {/* BUTTONS */}
                <div className={styles.wrapper}>
                  <Button type='submit' appearance="primary" shape='square' onClick={handleNewUser} >
                    Crear nuevo usuario
                  </Button>
                </div>
              </form>
            </Card>
          </div>)
      }
    </>
  )
}
