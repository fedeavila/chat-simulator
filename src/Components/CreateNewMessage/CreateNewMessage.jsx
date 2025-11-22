import React from 'react'
import './createNewMessage.css';

const CreateNewMessage = ({ createNewMessage }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value.trim()

        if (!message_value) {
            createNewMessage(message_value)
            formulario.reset()
        }

        createNewMessage(message_value)

        formulario.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='message'>Mensaje: </label>
                <textarea name='message' id='message' placeholder='Ingresá el mensaje...' rows="1" required />
            </div>
            <button type='submit'> Enviar </button>
        </form>
    )
}

export default CreateNewMessage