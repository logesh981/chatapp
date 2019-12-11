const users=[]

const addUser=({ id,username,room})=>{
 username=username.trim().toLowerCase()
 room=room.trim().toLowerCase()
 if(!username || !room){
     return{
         error:"username and room are required"
     }
 }
 //check for existing user

 const existingUser=users.find((user)=>{
     return user.room===room & user.username==username
 })
 if(existingUser){
     return {
         error:"username is in use"
     }
 }

 //store user
 const user={id,room,username}
 users.push(user)
 return {user}
}

const removeUser=(id)=>{
  const index=users.findIndex((user)=>{
      return user.id==id
  })
  if(index!=-1){
      return users.splice(index,1)[0]
  }
}
const getUser=(id)=>{
    // const user=users.find((user)=>{
    //     user.id===id
    // })
    return users.find((user =>user.id===id))
}
const getUserInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=> user.room===room )
}
module.exports={addUser,getUser,getUserInRoom,removeUser}