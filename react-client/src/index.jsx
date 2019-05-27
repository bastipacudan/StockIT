import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import AddItem from './components/AddItem.jsx';
import EditItem from './components/EditItem.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      currentIdx: {},
      currentPage: 0,
      department:''
    }
    this.login = this.login.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
    this.update = this.update.bind(this)
  }
  
  getData(department) {
      let url = '/items';
      if(department != 'Admin') 
         url = '/items/'+department;
      
      fetch(url)
      .then(itemList => itemList.json())
      .then(items => this.setState({currentPage: 1, items: items, department: department}))
      .catch(err => console.log(err));

  }
  
  edit(idx) {
    this.setState({
       currentPage: 2,
       currentIdx: this.state.items[idx],
      });
  }

  update(formData) {
    fetch('/items/'+formData.id, {
      method: 'put',
      body: JSON.stringify(formData), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(() => this.getData(this.state.department))
    .catch(err => console.log(err))
  }

  delete(idx) {

    if(window.confirm('delete this item?')) {
      fetch('/items', {
        method: 'DELETE',
        body: JSON.stringify(this.state.items[idx]), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(() => this.getData(this.state.department))
      .catch(err => console.log(err))
    }
    
      
  }

  login(department) {
    this.getData(department)
  }


  submit(e, formData) {
     if(e)
       e.preventDefault();

      fetch('/items', {
        method: 'POST',
        body: JSON.stringify(formData), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(() => this.getData(this.state.department))
      .catch(err => console.log(err));
      
  }
  renderLoginPage() {
      return (
         <div>
            <Login login = {this.login}/>
         </div>
      )
  }
  renderEditPage() {
    return (
       <div>
          <EditItem item = {{info: this.state.currentIdx, update: this.update , department: this.state.department}}/>
      </div>)
  }
  renderHomePage() {
    return (
      <div>
         <List data={{items: this.state.items, edit: this.edit, delete: this.delete}}/>
         <br></br>
         <div className = "container">
            <br></br>
            <AddItem item = {{submit: this.submit, department: this.state.department}}/>
         </div>
     </div>)
  }
  render () {
    let div;
    if(this.state.currentPage == 2)
      div = this.renderEditPage();
    else if(this.state.currentPage == 1)
      div = this.renderHomePage();
    else 
      return this.renderLoginPage();
    

     return(
       <div>
          <div className="topnav">
          <a className="active" onClick = {() => this.setState({currentPage: 1 })}>Home</a>
          <a href="" onClick = {() => this.setState({currentPage: 0 })}>Logout</a>
          </div> 
          {div}
       </div>
     )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));