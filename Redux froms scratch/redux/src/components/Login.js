
import { Component, React } from 'react'
import { connect } from 'react-redux'
const {storeloginCredentials} =require('../actions/action')



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: "",
                password: ""
            },
            formErrorMessage: {
                usernameError: "",
                passwordError: ""
            },
            formValid: {
                usernameValid: false,
                passwordValid: false
            }
        }

    }
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        const { form } = this.state
        form[name] = value
        this.setState({ form: form })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
       storeloginCredentials(this.props.dispatch,this.state.form)
    }

    render() {
        //console.log(this.props.state);
       if(this.props.state.LoggedOrNot.state){
        return <h1>{this.props.state.Messages.successMsg}</h1>
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
                                <form className='form' onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label name="userName">User Name:   </label>
                                        <input type={'text'} className="form-control" name='username' 
                                        placeholder='user name' onChange={this.handleChange}>
                                        </input>

                                    </div>
                                    <div className='form-group'>
                                        <label name="userName">Password:</label>
                                        <input type={'text'} className="form-control" name='password'
                                         placeholder='Password' onChange={this.handleChange}>
                                        </input>

                                    </div>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-primary mt-2'>Login</button>
                                    </div>

                                    <span className='text-danger'>{this.props.state.Messages.errorMsg}</span>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStatetoprops = (state) => ({
    state
})

const mapDispatchtoProps = (dispatch) => ({
    dispatch
})

export default connect(mapStatetoprops, mapDispatchtoProps)(Login)

