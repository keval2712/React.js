import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>login karo ne </div>

    return <div>le {user.username} tamaru login thay  gayu </div>
}

export default Profile