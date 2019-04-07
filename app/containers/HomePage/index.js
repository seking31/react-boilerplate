import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { userActions } from '../redux/actions/user.actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return () => this.props.dispatch(userActions.deleteId(id));
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <ul>
            {users.items.map(mappedUser => (
              <li key={mappedUser.id}>
                {`${mappedUser.firstName} ${mappedUser.lastName}`}
                {mappedUser.deleting ? (
                  <em> - Deleting...</em>
                ) : (
                  mappedUser.deleteError
                )}
              </li>
            ))}
          </ul>
        )}
        <button type="button">
          <Link to="/login">Logout</Link>
        </button>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  users: PropTypes.instanceOf(Object),
};

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
