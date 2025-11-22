import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'
import './chatDetail.css';

const ChatDetail = ({ chatDetail, createNewMessage }) => {
    return (
        <div className="chat-detail">
            <div className="chat-detail-header">
                <h2>{chatDetail.name}</h2>
            </div>

            <div className="chat-messages">
                <MessagesList messages={chatDetail.messages} />
            </div>

            <div className="chat-input">
                <CreateNewMessage createNewMessage={createNewMessage} />
            </div>
        </div>
    )
}

export default ChatDetail
