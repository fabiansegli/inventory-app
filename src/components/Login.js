import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import './Login.css'
import { Redirect } from "react-router-dom"

class Login extends Component {
    state = {
        user: '',
        pass: '',
        loggedIn: false
    }
    
    handleChangeUser = (e) => {
        this.setState({user:e.target.value})
    }

    handleChangePass = (e) => {
        this.setState({pass:e.target.value})
    }
  
    submit = (e) => {
        e.preventDefault()
        // if(this.state.user == '' && this.state.pass == '') {
            this.setState({loggedIn: true})
        // }
        
    }

    
    render() {
        if(this.state.loggedIn == false) {
            return (
                <form className= 'form' style={{ display: 'flex', flexDirection: 'column'}} onSubmit={this.submit}>
                    <TextField 
                        id='user'
                        label='User Name'
                        value={this.state.user}
                        onChange={this.handleChangeUser}
                        required
                        />
                    <TextField
                    id='pass'
                    label='password'
                    type='password'
                    value={this.state.pass}
                    onChange={this.handleChangePass} 
                    required 
                    />
                    <Button 
                    variant="contained" 
                    type='submit'
                    >Login
                    </Button>
               </form>
                
             )
        } else {
            return(
                <Redirect to= "/home"> </Redirect>
            )
        }
   
  }
}
export default Login