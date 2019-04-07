/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import { connect } from 'react-redux';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserProfilePage from 'containers/UserProfilePage';
import HomePage from 'containers/HomePage';
import LogInPage from 'containers/LogInPage';
import RegisterPage from 'containers/RegisterPage';
import { PrivateRoute } from '../../_components/index';
import { alertActions } from '../redux/actions/alert.actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // eslint-disable-next-line
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <div>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LogInPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute
                  exact
                  path="/userprofile"
                  component={UserProfilePage}
                />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  alert: PropTypes.instanceOf(Object),
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
