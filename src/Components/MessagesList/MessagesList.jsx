import React from 'react'

const MessagesList = ({ messages }) => {
    return (
        <div>
            {
                messages.length === 0
                    ? <span>No hay chats todavía...</span>
                    : messages.map(
                        (message) => {
                            return <div>
                                <h3>{message.author_name}</h3>
                                <p>{message.content}</p>
                                <span>{message.created_at}</span>
                                <span>
                                    {
                                        message.status === 'VIEWED'
                                            ? <span>✅</span>
                                            : <span>☑️</span>
                                    }
                                </span>
                            </div>
                        }
                    )
            }
            <hr />
        </div>
    )
}

export default MessagesList