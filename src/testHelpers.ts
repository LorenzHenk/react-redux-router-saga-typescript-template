import { runSaga, Saga } from 'redux-saga';
import { AnyAction } from 'redux';

interface RecordSagaParameters {
  saga: Saga;
  initialAction: AnyAction;
  initialState?: Record<any, any>;
}

export async function recordSaga({
  saga,
  initialAction,
  initialState = {},
}: RecordSagaParameters) {
  const dispatched: AnyAction[] = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action as AnyAction),
      getState: () => initialState,
    },
    saga,
    initialAction,
  ).toPromise();

  return dispatched;
}
