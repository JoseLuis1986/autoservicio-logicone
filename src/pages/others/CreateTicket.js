import React, { useContext, useState } from 'react';
import { Button, Col, Row, Typography, Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { UploadPicture } from '../../components/UploadPicture';
import '../css/create-tickets.css';
import { useFormNote } from '../../hooks/useFormNote';
import { AuthContext } from '../../auth/AuthContext';
import { SocketContext } from '../../context/SocketContext';
// import { GlobalContext } from '../context/Provider';

const { Title } = Typography;

export const CreateTicket = () => {

    const { auth } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);

    const [previewSource, setPreviewSource] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [image, setImage] = useState(null);


    const { TextArea } = Input;

    const initialState = {
        title: '',
        body: '',
        checkstate: '',

    }

    const [form, handleInputChange, reset] = useFormNote(initialState);

    console.log(form);

    const data = {
        from: auth.uid,
        department: auth.department,
        title: form.title,
        body: form.body,
        level: form.checkstate,
        url: image
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();
        console.log(data)
        // socket.emit('solicitar-ticket', data);
        reset();
        setPreviewSource('');
        setFileInputState('');
        // dispatch({
        //     type: types.cleanFormNote
        // });
    }

    const todoOk = () => {
        return (
            form.title.length > 0 &&
            form.body.length > 0 &&
            form.checkstate.length > 0
        ) ? true : false;
    }

    return (
        <>
            <form
            // onSubmit={onSubmit}
            >
                <Title level={3}>
                    Llene los datos para un nuevo ticket
                </Title>
                <div className="notes__content">
                    <div className='m-0'>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Titulo del ticket"
                            className="notes__title-input"
                            autoComplete="off"
                            value={form.title}
                            onChange={handleInputChange}
                        />
                        <TextArea
                            name="body"
                            placeholder="Caso pendiente para archivar o resolver"
                            className="notes__textarea"
                            style={{ height: 250 }}
                            value={form.body}
                            onChange={handleInputChange}
                        />
                    </div>
                    <label className="state" for="inlineCheckbox1">Estado del caso</label>
                    <div className='mx-0 mb-2 mt-2'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="checkstate" id="bajo" value="bajo" onChange={handleInputChange} />
                            <label class="form-check-label" for="inlineRadio1">Bajo</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="checkstate" id="medio" value="medio" onChange={handleInputChange} />
                            <label class="form-check-label" for="inlineRadio2">Medio</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="checkstate" id="alto" value="alto" onChange={handleInputChange} />
                            <label class="form-check-label" for="inlineRadio3">Alto</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="checkstate" id="observacion" value="observacion" onChange={handleInputChange} />
                            <label class="form-check-label" for="inlineRadio3">En Observacion</label>
                        </div>
                    </div>

                    <UploadPicture
                        setPreviewSource={setPreviewSource}
                        setFileInputState={setFileInputState}
                        fileInputState={fileInputState}
                        setImage={setImage}
                    />
                </div>
                <div>
                    {previewSource && (
                        <img
                            src={previewSource}
                            alt="chosen"
                            style={{ height: '300px' }}
                        />
                    )}
                </div>
                <Row>
                    <Col span={14} offset={6} align="center">
                        <Button
                            type="submit"
                            shape="round"
                            icon={<DownloadOutlined />}
                            size="large"
                            disabled={!todoOk()}
                            onClick={onSubmit}
                        >
                            Nuevo Ticket
                        </Button>
                    </Col>
                </Row>
            </form>
        </>
    )
}
