import {v4 as uuidv4} from 'uuid'


let users=[]
export const createUser =async(req,res)=>{
    const user = await req.body;
    const userWithId = {...user,id:uuidv4()}
    
    users.push(userWithId)
    res.status(200).send(userWithId)


}

export const  getSingleUser = (req,res)=>{
    const {id} = req.params
    const userFound =  users.find((user)=>user.id === id)
    if(userFound){
        res.status(200).send(userFound)
    }else{
        res.status(404).send("user not found")
    }

}

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    users=users.filter((user)=>
         user.id !== id
    )
    res.send(`user with id:${id} deleted`)

}

export const updateUser = async(req,res)=>{
    const {id} = req.params
    const user=users.find((user)=>user.id ===id)
    const {name,age,gender} =req.body
    if(name){
        user.name=name
    }
    if(age){
        user.age=age
    }
    if(gender){
        user.gender=gender
    }
    res.status(200).send(user)

    

}
export const getAllUsers =async(req,res)=>{
    res.status(200).send(users)

}