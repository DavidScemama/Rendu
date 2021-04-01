import React from 'react'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <TodoList items={this.state.items} />
          <form className="label" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <input placeholder="Ajoute une mission ici " style={{marginBottom:20, borderRadius :8, border:'none', backgroundColor: '#F2F2F9', height: 30, width:200}}
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button  >
              Ajouter une mission {this.state.items.length + 3}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <p key={item.id}>{item.text}</p>
          ))}
        </ul>
      );
    }
  }

  export default TodoApp;