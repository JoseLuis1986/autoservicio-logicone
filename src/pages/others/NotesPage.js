import React, { useContext, useState } from 'react'
import { Modal } from '../../components/Modal';
// import { NoteContext } from '../context/notes/NoteContext';
// import { SocketContext } from '../context/SocketContext';
// import { types } from '../types/types';
// import '../css/card-notes.css';
import { NoteCard } from '../../components/NoteCard';
import { ChatContext } from '../../context/chat/ChatContext';
import "../css/card-notes.css";




export const NotesPage = () => {

    const { chatState } = useContext(ChatContext);

    const { notes } = chatState;

    const [showModal, setShowModal] = useState(false);

    const handleClickModal = () => {
        setShowModal(true);
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn" >
                {
                    notes.map(note => (
                        <NoteCard
                            key={note._id}
                            {...note}
                            handleClickModal={handleClickModal}
                        />
                    ))
                }
            </div>
            {
                showModal
                &&
                <Modal/>
            }
        </div>
    )
}



