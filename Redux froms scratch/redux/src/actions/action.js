import axios from 'axios'


export const StoreloginAction = (data) => {
    return {
        type: 'login',
        payload: data
    }
}

export const Messages = (successMsg, errorMsg) => {
    return {
        type: 'Messages',
        payload: { successMsg, errorMsg }
    }
}

export const LoggedOrNot = (value) => {
    return {
        type: 'LoggedOrNot',
        payload: value
    }
}

let validateLogin = (dispatch, data) => {
    axios.get("http://localhost:2500/login/" + data.username + "/" + data.password).then((res) => {
        if (res.data) {
            dispatch(LoggedOrNot(true))
            dispatch(Messages("Used Logged in successfully", ""))
        }
    }).catch((err) => {
        dispatch(LoggedOrNot(false))    
        dispatch(Messages("", err.response.data.message))
    })
}
//
export const storeloginCredentials = (dispatch, data) => {
    validateLogin(dispatch, data)

    dispatch(StoreloginAction(data))
}