const connection = require('../Utilities/connection')

let data = [
    {
        userName: "admin",
        password: "admin123"
    },
    {
        userName: "Ananthu",
        password: "ananthu123"
    }
]


const model = {}

model.setupDb = () => {
    return connection.getconnection().then((model) => {
        return model.insertMany(data).then((result)=>{
            if(result){
                return result
            }
            else{
                return null
            }
        })
    })
}


model.login=(username,password)=>{
return connection.getconnection().then((model)=>{
    return model.findOne({$and:[{userName:username},{password:password}]},{_id:0,__v:0}).then((result)=>{
     if(result){
        return result
     }
     else{
        return null
     }
        
    })
})
}


module.exports=model