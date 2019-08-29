import React, { Component } from 'react';
import Parent from '../parent';
import { fetchUsers, remove } from '../../actions/users';
import { connect } from "react-redux";
import '../../style.css';

class Tree extends Component {

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users, remove } = this.props;
    return (
      <div className="item">
        <Parent users={users} remove={remove} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(fetchUsers());
  },
  remove: (id) => {
    dispatch(remove(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);
