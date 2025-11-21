import React, { useEffect, useState } from 'react'
import ChatList from '../Components/ChatList/ChatList'
import { getContacts } from '../Services/contactService'
import { useParams } from 'react-router'
import ChatDetail from '../Components/ChatDetail/ChatDetail'

const ChatScreen = () => {
    const [contacts, setContacts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [chatDetail, setChatDetail] = useState(null)
    const { chat_id } = useParams()
    function loadContacts() {
        setLoading(true)
        setTimeout(
            () => {
                const contacts = getContacts()
                setContacts(contacts)
                setLoading(false)
            },
            2000
        )

    }

    function addNewContact(name) {
        const new_contact = {
            id: contacts.length + 1,
            user_id: contacts.length + 1,
            name: name,
            profile_picture: ' https://i.pravatar.cc/150?img=',
            last_connection: 'Ahora mismo',
            is_connected: true
        }
        setContacts(
            (prev_state) => {
                return [...prev_state, new_contact]
            }
        )
    }

    function createNewMessage(message) {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: message,
            author_id: 50,
            author_name: 'Federico',
            created_at: 'Hoy',
            status: 'VIEWED'
        }
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat
                    }
                )
            }
        )

        setTimeout(
            sendAutomaticMessage,
            2000
        )
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
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat
                    }
                )
            }
        )
    }

    function loadChatDetail() {
        console.log({
            contacts,
            loading,
            chat_id
        })
        if (contacts && !loading && chat_id) {
            const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id))
            setChatDetail(chat_selected)
        }
    }

    useEffect(
        loadContacts,
        []
    )

    useEffect(
        loadChatDetail,
        [chat_id, contacts]
    )

    return (
        <div>
            {
                loading
                    ? <span>Cargando...</span>
                    : contacts && <ChatList contacts={contacts} addNewContact={addNewContact} />
            }
            {
                !loading && (
                    !chat_id
                        ? <h2>No seleccionaste ningún chat...</h2>
                        : (
                            chatDetail
                                ? <ChatDetail chatDetail={chatDetail} createNewMessage={createNewMessage} />
                                : null
                        )
                )
            }


            {/* Panel derecho con el detalle del contacto */}
        </div>
    )
}

export default ChatScreen