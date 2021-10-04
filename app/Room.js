const roomMembers = [];

// joins the user to the specific chatroom
export function addRoomMember(user, room) {
    roomMembers.push({user, room});
}

// Gets a particular user id to return the current user
export function getCurrentRoomMember(userId) {
    return roomMembers.find((roomMember) => roomMember.user.userId === userId)
}

// called when the user leaves the chat and its user object deleted from array
export function removeRoomMember(userId) {
    const index = roomMembers.findIndex((roomMember) => roomMember.user.userId === userId);

    if (index !== -1) {
        return roomMembers.splice(index, 1)[0];
    }
}

export function getRoomMembers(room){
    return roomMembers.filter(roomMember => roomMember.room === room)
}
