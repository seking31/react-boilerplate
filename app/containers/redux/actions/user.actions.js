import { userConstants } from '../_constants';
import { userService } from '../_services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: deleteId,
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      },
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      () => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      },
    );
  };

  function request(userRequest) {
    return { type: userConstants.REGISTER_REQUEST, userRequest };
  }
  function success(userSuccess) {
    return { type: userConstants.REGISTER_SUCCESS, userSuccess };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function deleteId(id) {
  return dispatch => {
    dispatch(request(id));

    userService
      .deleteId(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(id, error.toString())),
      );
  };

  function request(deletRequestId) {
    return { type: userConstants.DELETE_REQUEST, deletRequestId };
  }
  function success(successId) {
    return { type: userConstants.DELETE_SUCCESS, successId };
  }
  function failure(faliureId, error) {
    return { type: userConstants.DELETE_FAILURE, faliureId, error };
  }
}
