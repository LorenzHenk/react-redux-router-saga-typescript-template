import { takeEvery, put, delay } from 'redux-saga/effects';

import { SEND_MESSAGE } from './types';
import { sendMessage, receiveMessage } from './actions';

// example of what sagas can do

// if message is an url, it fakes a url fetch
export function* fakeFetchingBot(action: ReturnType<typeof sendMessage>) {
  const message = action.payload.message;
  if (!message.startsWith('http')) {
    return;
  }
  yield delay(3000);
  yield put(
    receiveMessage({
      user: 'FETCH BOT',
      timestamp: new Date().getTime(),
      message: `I've fetched your URL ${message}`,
    }),
  );
}

// prints the message you sent twice
export function* mirrorBot(action: ReturnType<typeof sendMessage>) {
  yield delay(2000);
  const message = receiveMessage({
    user: 'MIRRORING BOT',
    timestamp: new Date().getTime(),
    message: `${action.payload.message}`,
  });
  yield put(message);
}

// tries to evaluate the message
export function* evaluationBot(action: ReturnType<typeof sendMessage>) {
  const message = action.payload.message;

  try {
    // eslint-disable-next-line
    const result = eval(message);

    yield put(
      receiveMessage({
        user: 'EVAL BOT',
        timestamp: new Date().getTime(),
        message: `Result: ${result}`,
      }),
    );
  } catch {
    yield put(
      receiveMessage({
        user: 'EVAL BOT',
        timestamp: new Date().getTime(),
        message: `Failed to evaluate`,
      }),
    );
  }
}

export const chatSaga = [
  takeEvery(SEND_MESSAGE, fakeFetchingBot),
  takeEvery(SEND_MESSAGE, mirrorBot),
  takeEvery(SEND_MESSAGE, evaluationBot),
];
