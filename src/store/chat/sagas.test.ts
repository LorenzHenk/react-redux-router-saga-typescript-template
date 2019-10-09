import { evaluationBot, mirrorBot, fakeFetchingBot } from './sagas';

import { ReceiveMessageResult, sendMessage } from './actions';
import { recordSaga } from '../../testHelpers';

test('evaluationBot', async () => {
  const additionAction = sendMessage({
    message: '1 + 1',
    timestamp: new Date().getTime(),
    user: 'Anonymous',
  });

  const dispatchedAddition = await recordSaga({
    saga: evaluationBot,
    initialAction: additionAction,
  });

  expect((dispatchedAddition[0] as ReceiveMessageResult).payload.message).toBe(
    `Result: 2`,
  );

  const evaluationErrorAction = sendMessage({
    message: 'failing',
    timestamp: new Date().getTime(),
    user: 'Anonymous',
  });

  const dispatchedEvaluationError = await recordSaga({
    saga: evaluationBot,
    initialAction: evaluationErrorAction,
  });

  expect(
    (dispatchedEvaluationError[0] as ReceiveMessageResult).payload.message,
  ).toBe(`Failed to evaluate`);
});

test('mirrorBot', async () => {
  const additionAction = sendMessage({
    message: 'Mirror me',
    timestamp: new Date().getTime(),
    user: 'Anonymous',
  });

  const dispatchedAddition = await recordSaga({
    saga: mirrorBot,
    initialAction: additionAction,
  });

  expect((dispatchedAddition[0] as ReceiveMessageResult).payload.message).toBe(
    additionAction.payload.message,
  );
});

test('fakeFetchingBot', async () => {
  const additionAction = sendMessage({
    message: 'http://fake.me',
    timestamp: new Date().getTime(),
    user: 'Anonymous',
  });

  const dispatchedAddition = await recordSaga({
    saga: fakeFetchingBot,
    initialAction: additionAction,
  });

  expect((dispatchedAddition[0] as ReceiveMessageResult).payload.message).toBe(
    `I've fetched your URL ${additionAction.payload.message}`,
  );
});
