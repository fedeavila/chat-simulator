
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

                                <Link to={'/chat/' + contact.id} key={contact.id}>
                                    <img width={'50px'} src={contact.profile_picture} />
                                    <h2>{contact.name}</h2>
                                    <span>última conexión: {contact.last_connection}</span>
                                </Link>
                                <br />
                                <hr />
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