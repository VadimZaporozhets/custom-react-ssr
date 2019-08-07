export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};