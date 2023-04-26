import { useState } from "react";
import { connect } from 'react-redux'
const {storeloginCredentials} =require('../actions/action')

 function Login(props) {
    const [name, updateName] = useState("")
    const [password, updatePassword] = useState("")

    function handleChange(e) {
        
        if (e.target.name === "username") {
            updateName(e.target.value)
        }
        else {
            updatePassword(e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        let value={username:name,password:password}
        storeloginCredentials(props.dispatch,value)
    }

    if(props.state.LoggedOrNot.state){
        return <h1>{props.state.Messages.successMsg}</h1>
       }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <br />
                    <div className="card">
                        <div className="card-header bg-custom">
                            <h3 align="center">Login</h3>
                        </div>
                        <div className='card-body '>
                            <form className='form' onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label name="userName">User Name:   </label>
                                    <input type={'text'} className="form-control" name='username'
                                        placeholder='user name' onChange={handleChange}>
                                    </input>

                                </div>
                                <div className='form-group'>
                                    <label name="userName">Password:</label>
                                    <input type={'text'} className="form-control" name='password'
                                        placeholder='Password' onChange={handleChange}>
                                    </input>

                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='btn btn-primary mt-2'>Login</button>
                                </div>

                                <span className='text-danger'>{props.state.Messages.errorMsg}</span>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStatetoprops = (state) => ({
    state
})

const mapDispatchtoProps = (dispatch) => ({
    dispatch
})

export default connect(mapStatetoprops, mapDispatchtoProps)(Login)











