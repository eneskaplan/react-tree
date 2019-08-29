import React, { Component } from 'react';
import Child from '../child';

class Parent extends Component {
  render() {
    const { users, remove } = this.props;
    return users.map((user, i) => {
      return (
        <div className="item" key={user.id}>
          <Child user={user} remove={remove} />
        </div>
      );
    });
  }
}

export default Parent;
