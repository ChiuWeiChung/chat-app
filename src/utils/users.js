const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are requried'
        }
    }

    // Check for existing user
    const existingUser = users.find(user => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}



const removeUser = (id) => {
    const index = users.findIndex(user => {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const user = users.find(user => {
        return user.id === id
    })
    if (!user) {
        return {
            error: 'username not found'
        }
    }

    return user

}

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter(user => {
        return user.room === room.trim().toLowerCase()
    })

    if (usersInRoom.length === 0) {
        return {
            error: 'no user in this room'
        }
    }
    return usersInRoom
}

module.exports = {
    addUser,
    removeUser,
    getUsersInRoom,
    getUser
}

// TEST FUNCTIONS
// addUser({ id: 22, username: 'Andrew1', room: 'South Philly' })
// addUser({ id: 23, username: 'Andrew2', room: 'New York' })
// addUser({ id: 24, username: 'Andrew3', room: 'South Philly' })
// addUser({ id: 25, username: 'Andrew4', room: 'Boston' })
// addUser({ id: 26, username: 'Andrew5', room: 'South Philly' })
// console.log(users)

// const removedUser = removeUser(22)
// console.log(removedUser)
// console.log(users)

// const gotUser = getUser(24)
// console.log(gotUser)




// const usersArr = getUsersInRoom("boston");
// console.log(usersArr)



