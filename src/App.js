import React from "react";
import "./App.css";



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    }
  }

  addItem(todoValue) {
    if(todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
      };
      const list = [...this.state.list]; // ... appends all existing values in list
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }


  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
  }

  updateInput(input) {
    this.setState({newItem: input});
  }

  render(){
    return(
      <div>
      <h1 className="app-title">ToDo App</h1>
      <div className="container">
      <h3>Add an Item</h3>

      <input type="text" 
      className="input-text" 
      placeholder="write a Todo ..."
       required 
       value={this.state.newItem}
        onChange={e=> this.updateInput(e.target.value)}
         />

      <button 
      className = "add-btn"
      onClick = {() => this.addItem(this.state.newItem)}
      disabled={!this.state.newItem.length}
      >Add ToDo</button>
      <div className="list">
      <ul>
      {this.state.list.map(item => {
        return(
          <li key={item.id}>
          <input
          id={item.id}
          className="check"
          type="checkbox"
          name="isDone"
          />
          <label for={item.id}>{item.value}</label>
          <button
          className="btn"
          onClick = {() => this.deleteItem(item.id)}
          >Delete</button>
          </li>
        );
      })}
      <li>
     
      <input type="checkbox" className="check" id="check" />
      <label for="check">Read Books</label>
      </li>
      </ul>
      </div>
      </div>
      </div>
    );
  }

}


export default App;