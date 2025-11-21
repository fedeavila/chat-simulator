
import { Link } from 'react-router'
import AddNewContact from '../AddNewContact/AddNewContact'
import '../../styles/chatList.css'

const ChatList = ({ contacts, addNewContact }) => {


    return (
        <div>
            {
                contacts.map(
                    (contact) => {
                        return (
                            <>
                                <Link to={'/chat/' + contact.id} key={contact.id} className="contact">
                                    <img className="avatar" src={contact.profile_picture} alt={contact.name} />
                                    <div className="contact-info">
                                        <h2>{contact.name}</h2>
                                        <span>última conexión: {contact.last_connection}</span>
                                    </div>
                                </Link>
                            </>
                        )
                    }
                )
            }

            <AddNewContact addNewContact={addNewContact} />
        </div>
    )
}

export default ChatList