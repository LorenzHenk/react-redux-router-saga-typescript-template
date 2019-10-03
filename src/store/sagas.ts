import { all } from 'redux-saga/effects';

import { chatSaga } from './chat/sagas';

export default function* rootSaga() {
  yield all([...chatSaga]);
}
