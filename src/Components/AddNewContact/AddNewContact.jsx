import React from 'react'
import '../../styles/addNewContact.css'

const AddNewContact = ({ addNewContact }) => {
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault()
        const formulario = event.target
        const name_value = formulario.name.value.trim()

        if (!name_value) {
            addNewContact(name_value)
            formulario.reset()
        }

        addNewContact(name_value)
    }
    return (
        <form onSubmit={handleSubmitNewContactForm}>
            <div>
                <label htmlFor='name'>Nombre: </label>
                <input name='name' id='name' placeholder='Tu nombre' required />
            </div>
            <button type='submit'>Nuevo contacto</button>
        </form>
    )
}

export default AddNewContact