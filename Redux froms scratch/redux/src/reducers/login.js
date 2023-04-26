


export const Credentials = (state = { username: '', password: '' }, action) => {
    switch (action.type) {
        case "login":
            return { ...state, username: action.payload.username, password: action.payload.password }



        default:
            return state
    }
}

export const Messages = (state = { successMsg: '', errorMsg: '' }, action) => {
    switch (action.type) {
        case 'Messages':
            return { ...state, successMsg: action.payload.successMsg, errorMsg: action.payload.errorMsg }


        default:
            return state
    }
}

export const LoggedOrNot = (state = {}, action) => {
   // console.log(action.type,"---", action.payload);
    switch (action.type) {
        case 'LoggedOrNot':
            
            return { ...state, state:action.payload }

        default:
            return state
    }
}