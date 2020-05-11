import { takeEvery, call, put, all } from "redux-saga/effects";

 function* watcherSaga() {
     debugger
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    debugger
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData() {
    debugger
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
      response.json()
    );
  }


  export default function* rootSaga() {
    yield all([
        watcherSaga(),
    ]);
 }