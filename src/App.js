import React, { Component } from 'react';

import Teacher from './Teacher';

class App extends Component {

  state = {
    teacher: ''
  };

  updateTeacher = teacher => {
    this.setState({ teacher });
  }

  render() {
    const teachers = ['jay', 'vivianne', 'ecma', 'json'];

    return (
      <div className="App">
        <header>
          <h1>Meet the Teachers</h1>
          {teachers.map((teacher,i) =>
            <button
              key={teacher}
              type="button"
              value={teacher}
              onClick={e => this.updateTeacher(e.target.value)}
            >{teacher}
            </button>)}
        </header>

        <Teacher teacher={this.state.teacher} />
      </div>
    );
  }
}

export default App;
