import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailure } from "./userState";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => {throw error})
}

function* fetchUsers() {
    try{
        const users = yield call(getApi)
        console.log(users);
        yield put(getUsersSuccess(users))
    }catch(e) {
        yield put(getUsersFailure(e.message))
    }
}

function* userSaga() {
    yield takeEvery('user/getUsersFetch', fetchUsers);
}

export default userSaga;