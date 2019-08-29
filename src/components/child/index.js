import React, { Component } from 'react';
import Parent from '../parent';

class Child extends Component {
  state = {
    toggle: false
  };
  toggle() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  remove(e, user) {
    const { remove } = this.props;
    e.stopPropagation()
    this.setState({toggle: false})
    remove(user.id)
  }

  hasChildren(item) {
    return item.children && item.children.length;
  }

  render() {
    const { user, remove } = this.props;
    const { toggle } = this.state;
    return (
      <div>
        <div onClick={() => this.toggle()} className="parent">
          <span className="link">{user.title}</span>
          <button className="link remove-btn" onClick={(e) => this.remove(e, user)}>
            Sil
          </button>
        </div>
        {toggle && !!this.hasChildren(user) && <Parent users={user.children} remove={remove} />}
      </div>
    );
  }
}

export default Child;
