
import { call, put, takeEvery } from "redux-saga/effects";
import {
  
  fetchUsersSuccess,
  
} from "./slice/userSlice";
function* fetchUsersWorker() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const data = yield cats.json();
  yield put(fetchUsersSuccess(data));
}
function* watchFetchUsers() {
  yield takeEvery("user/fetchUsersStart", fetchUsersWorker);
}
export default watchFetchUsers;