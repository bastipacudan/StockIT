import React from 'react';

class Login extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         username: '',
         password: ''
     }
   }

   onChange(e) {
       e.preventDefault()
       let key = e.target.id;
       this.setState({
           [[key]]: e.target.value,
       })
   }

   validate(e) {
       e.preventDefault();
       let departments = ['marketing','engineering','multimedia','finance'];
       let dept = this.state.username;
       dept = dept.charAt(0).toUpperCase() + dept.slice(1);

       if(this.state.username == 'admin' && this.state.password =='admin') {
           this.props.login(dept);
       } else if(departments.includes(this.state.username)) {
           this.props.login(dept);
       } else {
           alert('Login failed');
       }
         
   }

   render() {
       return(
           <div className ="container">
             <div  className = " addForm" >
              <h3>Login</h3>
               <form onChange = {(e) => this.onChange(e)}>
                   <input type ="text" id = "username" placeholder="username..." required></input>
                   <br></br>
                   <input type ="password" id = "password" placeholder="password.."required></input>
                    <br></br>
                    <button id = "submit" onClick = {(e)=>this.validate(e)} >Login</button>
               </form>
             </div>
           </div>
       )
   }
} 

export default Login;