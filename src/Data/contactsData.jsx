const contacts = [
    {
        id: 1,
        user_id: 1,
        name: 'Álvaro',
        profile_picture: 'https://i.pravatar.cc/150?img=1',
        last_connection: 'Ayer',
        is_connected: false,
        messages: [
            {
                id: 1,
                content: 'Hola, ¿cómo estás?',
                author_id: 1,
                author_name: 'Álvaro',
                created_at: 'Ayer',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 2,
        user_id: 2,
        name: 'María',
        profile_picture: 'https://i.pravatar.cc/150?img=2',
        last_connection: 'Hoy',
        is_connected: true,
        messages: [
            {
                id: 2,
                content: '¡Hola! ¿Quieres salir a cenar esta noche?',
                author_id: 2,
                author_name: 'María',
                created_at: 'Hoy',
                status: 'VIEWED'
            }
        ]
    },
    {
        id: 3,
        user_id: 3,
        name: 'Paolo',
        profile_picture: 'https://i.pravatar.cc/150?img=3',
        last_connection: 'Hace 5 minutos',
        is_connected: true,
        messages: [
            {
                id: 3,
                content: 'Estoy organizando una fiesta el sábado. ¿Te gustaría venir?',
                author_id: 3,
                author_name: 'Paolo',
                created_at: 'Hace 5 minutos',
                status: 'NO_VIEWED'
            }
        ]
    },
    {
        id: 4,
        user_id: 4,
        name: 'Andrés',
        profile_picture: 'https://i.pravatar.cc/150?img=4',
        last_connection: 'Hace 2 minutos',
        is_connected: true,
        messages: [
            {
                id: 4,
                content: '¿Has visto la última película de ciencia ficción?',
                author_id: 4,
                author_name: 'Andrés',
                created_at: 'Hace 5 minutos',
                status: 'NO_VIEWED'
            }
        ]
    },
    {
        id: 5,
        user_id: 5,
        name: 'Sofía',
        profile_picture: 'https://i.pravatar.cc/150?img=5',
        last_connection: 'Hace 10 minutos',
        is_connected: true,
        messages: [
            {
                id: 5,
                content: 'Estoy organizando una fiesta el sábado. ¿Te gustaría venir?',
                author_id: 5,
                author_name: 'Sofía',
                created_at: 'Hace 10 minutos',
                status: 'NO_VIEWED'
            }
        ]
    }
]

export default contacts
