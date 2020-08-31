import React from 'react';
//import './App.css';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListInput from './Components/ListInput';
import ToDoList from './Components/ToDoList';

class App extends React.Component {

  state={
    items:[{id:1, title:'wake up'}, {id:2, title:'Scrum call'}],
    id:uuidv4(),
    item: '',
    editItem: false
  };
  handleChange = (e)=>{
    console.log('handle change');
  };

  handleSubmit = (e)=>{
    console.log('handle Submit');
  };
  clearList = () => {console.log('clear List')};
  handleDelete = (id) =>{
    console.log(`handle edit ${id}`);
  };
  handleEdit = (id) =>{
    console.log(`edit ${id}`);
  } ;

  render(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">ToDo Input</h3>
              <ListInput 
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <ToDoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div> 
        </div>
    );
  }
}

export default App;
