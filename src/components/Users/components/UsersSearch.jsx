// import { Component } from 'react';

// export class UsersSearch extends Component {
//   render() {
//     return (
//       <div className="input-group mb-3">
//         <input type="text" className="form-control" placeholder="Search username" />
//         <button className="btn btn-primary" type="submit">Search</button>
//       </div>
//     );
//   }
// }

import { Component } from 'react';

export class UsersSearch extends Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search username"
          value={search}
          onChange={this.handleChange}

        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}

// import { Component } from "react";

// export class UsersSearch extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state.search);
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <form className="input-group mb-3" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search username"
//           value={search}
//           onChange={this.handleChange}
//         />
//         <button className="btn btn-primary" type="submit">
//           Search
//         </button>
//       </form>
//     );
//   }
// }
