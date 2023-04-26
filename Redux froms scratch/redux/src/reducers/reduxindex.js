import { combineReducers } from "redux";
const { Credentials, Messages,LoggedOrNot } = require('./login')

export default combineReducers({
    Credentials,
    Messages,
    LoggedOrNot
})

