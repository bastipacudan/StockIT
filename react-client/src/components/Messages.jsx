import React from 'react';

class Messages extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         name: '',
         quantity: '',
         price: '',
         department: '',
         type:'',
     }
   }
   componentDidMount() {
       if(this.props.item.department === 'Admin') {
         this.setState({
            type: this.props.item.department,
            department: 'Engineering',
           })
       } else {
        this.setState({
            type:'User',
            department: this.props.item.department,
           })
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
       if(this.state.name.length <= 0 || this.state.price.length <= 0 || this.state.price.length <= 0 ) {
          alert('Please fill out all fields');
          return;
       } 
       this.props.item.submit(e, this.state);
       document.getElementById("form").reset();
         
   }
   isAdmin() {
       
       if(this.state.type === 'Admin') {
           return(
                <div>
                    <label>Department: </label>
                    <select name="cars" id = "department">
                    <option value="Engineering">Engineering</option>
                    <option value="Multimedia">Multimedia</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    </select>
               </div>
           )
       }
   }

   render() {
       return(
           <div className = " addForm">
              <h3>Messages:</h3>
               <form id ="form" onChange = {(e) => this.onChange(e)}>
                   <label>Name: </label>
                   <input type ="text" id = "name" placeholder="Product name..." required></input>
                   <br></br>
                   <label>Quantity: </label>
                   <input type ="number" id = "quantity" placeholder="Quantity.."required></input>
                   <br></br>
                   <label>Price: </label>
                   <input type ="number" id = "price" placeholder="Price..." required ></input>
                   <br></br>
                   {this.isAdmin()}
                    <button id = "submit" onClick = {(e)=>this.validate(e)} >Add</button>
               </form>
           </div>
       )
   }
} 

export default Messages;