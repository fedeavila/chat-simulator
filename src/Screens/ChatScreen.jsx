import React, { useEffect, useState } from 'react'
import ChatList from '../Components/ChatList/ChatList'
import { getContacts } from '../Services/contactService'
import { useParams } from 'react-router'
import ChatDetail from '../Components/ChatDetail/ChatDetail'
import './chatScreen.css';

const ChatScreen = () => {
    const [contacts, setContacts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [chatDetail, setChatDetail] = useState(null)
    const { chat_id } = useParams()

    function loadContacts() {
        setLoading(true)
        setTimeout(() => {
            const contacts = getContacts()
            setContacts(contacts)
            setLoading(false)
        }, 2000)
    }

    // Randomizar imagen de perfil en nuevo contacto
    function addNewContact(name) {
        const randomImgId = Math.floor(Math.random() * 70) + 1;

        const new_contact = {
            id: contacts.length + 1,
            user_id: contacts.length + 1,
            name: name,
            profile_picture: `https://i.pravatar.cc/150?img=${randomImgId}`,
            last_connection: 'Ahora mismo',
            is_connected: true
        };

        setContacts(prev_state => [...prev_state, new_contact]);
    }

    function createNewMessage(message) {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: message.trim(),
            author_id: 50,
            author_name: 'Federico',
            created_at: 'Hoy',
            status: 'VIEWED'
        }

        setContacts(prev_state =>
            prev_state.map(chat =>
                Number(chat.id) === Number(chat_id)
                    ? { ...chat, messages: [...chat.messages, new_message] }
                    : chat
            )
        )

        setTimeout(sendAutomaticMessage, 2000)
    }


    function sendAutomaticMessage() {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: 'Recibido',
            author_id: chatDetail.user_id,
            author_name: chatDetail.name,
            created_at: 'Ahora mismo',
            status: 'VIEWED'
        }

        setContacts(prev_state =>
            prev_state.map(chat =>
                Number(chat.id) === Number(chat_id)
                    ? { ...chat, messages: [...chat.messages, new_message] }
                    : chat
            )
        )
    }

    function loadChatDetail() {
        if (contacts && !loading && chat_id) {
            const chat_selected = contacts.find(
                contact => Number(contact.id) === Number(chat_id)
            )
            setChatDetail(chat_selected)
        }
    }

    useEffect(loadContacts, [])
    useEffect(loadChatDetail, [chat_id, contacts])

    return (
        <div className="chat-screen">
            <div className="chat-list-panel">
                {loading ? (
                    <span>Cargando...</span>
                ) : (
                    contacts && <ChatList contacts={contacts} addNewContact={addNewContact} />
                )}
            </div>

            <div className="chat-detail-panel">
                {!loading &&
                    (!chat_id ? (
                        <h2>No seleccionaste ningún chat...</h2>
                    ) : chatDetail ? (
                        <ChatDetail
                            chatDetail={chatDetail}
                            createNewMessage={createNewMessage}
                        />
                    ) : null)}
            </div>
        </div>
    )
}

export default ChatScreen
