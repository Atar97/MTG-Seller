export const RECEIVE_USERS = 'RECEIVE_USERS';
import * as UserAPIUtil from '../util/user_api_util';

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const createUser = user => dispatch => {
    return UserAPIUtil.createUser(user)
        .then(res => dispatch(receiveUsers(res)))
};