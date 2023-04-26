const model=require('../models/model')

const service={}

service.setupDb=()=>{
    return model.setupDb().then((res)=>{
        if(res){
            return res
        }
        else{
            let err=new Error("setupDB failed")
            throw err
        }
    })
}

service.login=(username,password)=>{
return model.login(username,password).then((data)=>{
    if(data){
        return data
    }
    else{
        let  err= new Error("username and password is not matching")
        err.status=404
        throw err
    }
})
}


module.exports=service