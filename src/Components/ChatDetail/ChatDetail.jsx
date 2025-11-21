
import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'
import '../../styles/chatDetail.css'

const ChatDetail = ({ chatDetail, createNewMessage }) => {

    return (
        <div>
            <h2>{chatDetail.name}</h2>
            <MessagesList messages={chatDetail.messages} />
            <CreateNewMessage createNewMessage={createNewMessage} />
        </div>
    )
}

export default ChatDetail