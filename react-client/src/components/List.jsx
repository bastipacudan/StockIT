import React from 'react';

const List = (props) => {

  
    const data = props.data.items.map((item, i) => {
      return ( 
         <tr key = {i}> 
           <td>{i+1}</td>
           <td>{item.name}</td>
           <td>{item.quantity}</td>
           <td>${item.price}</td>
           <td>{item.department}</td>
           <td><button onClick = {() => props.data.edit(i)}>edit</button><button onClick = {() => props.data.delete(i)}>delete</button></td>
         </tr>
      )
    });

    return (
       <div>
          <h2>Products</h2>
          <table >
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>quantity</th>
            <th>Price</th>
            <th>Department</th>
            <th></th>
          </tr>
          {data}
          </table>
      </div>
    )
   
  
  }





 


export default List;