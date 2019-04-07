import { fromJS } from 'immutable';
import createNewUserPageReducer from '../../redux/_reducers';

describe('createNewUserPageReducer', () => {
  it('returns the initial state', () => {
    expect(createNewUserPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
