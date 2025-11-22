import React from 'react'
import './messagesList.css';

const MessagesList = ({ messages }) => {
    if (!messages || messages.length === 0) {
        return <span className="no-messages">No hay chats todavía...</span>
    }

    return (
        <div className="messages-list">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`message ${message.author_id === 50 ? 'user' : 'bot'
                        }`}
                >
                    <div className="message-content">
                        <p>{message.content}</p>
                    </div>
                    <div className="message-meta">
                        <span className="author">{message.author_name}</span>
                        <span className="time">{message.created_at}</span>
                        <span className="status">
                            {message.status === 'VIEWED' ? '✔️✔️' : '✔️'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessagesList
