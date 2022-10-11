import { Component } from 'react';
import CardList from './components/card-list/users_card-list.component';
import "./styles/css/styles.min.css";

class App extends Component {

  //this constructor function always calls first
  constructor(){
    super();

    // initializing the state
    this.state = {
      _users: [],
      searchField: '',
    };
  }

  // CODES THAT GETS THE API DATA
  componentDidMount() { 
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
        this.setState(
          () => { return {_users: users} },
          () => { return console.log(this.state);}
        )
    );
  }

  onSearchChanged = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField: searchField }
      });
  }

  //this runs 2nd, it determines what to show
  render(){

    const { _users, searchField } = this.state;
    const { onSearchChanged } = this;

    const filteredUsers = _users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search users'
          onChange={onSearchChanged}
        />
        
        {/* <CardList username={filteredUsers}/> */}
        {/* {filteredUsers.map((_user) => {
            return (
              <div key={_user.id}>
                <p>{_user.name}</p>
              </div>
            );
          }) }*/
        }
        <div>
          <CardList users={filteredUsers}/>
        </div>
      </div>
    );
  }

}

export default App;
