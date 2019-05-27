import React from 'react';

class EditItem extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         id: props.item.info._id,
         name: props.item.info.name,
         quantity: props.item.info.quantity,
         price: props.item.info.price,
     }
   }
   

   onChange(e) {
       let name = e.target.id;
       this.setState({
           [[name]]: e.target.value,
       },() => this.state)
   }

   validate(e) {
       e.preventDefault();
       if(window.confirm('save changes?'))
         this.props.item.update(this.state);
         
   }

   render() {
       return(
          <div className ="container">
           <div className = " addForm">
             <h3>Edit Item:</h3>
               <form onChange = {(e) => this.onChange(e)}>
                   <label>Name: </label>
                   <input type ="text" id = "name" placeholder = {this.state.name}></input>
                   <br></br>
                   <label>Quantity: </label>
                   <input type ="text" id = "quantity" placeholder = {this.state.quantity}></input>
                   <br></br>
                   <label>Price: </label>
                   <input type ="text" id = "price" placeholder = {this.state.price}></input>
                   <br></br>
                   <button id = "submit" onClick = {(e)=>this.validate(e)} >Save</button>
               </form>
           </div>
          </div>
       )
   }
} 

export default EditItem;