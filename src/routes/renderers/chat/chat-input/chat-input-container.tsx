import React, { useState, useCallback } from 'react';

import ChatInputComponent from './chat-input-component';

import { getUserName } from '../../../../store/system/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../../../../store/chat/actions';

interface OwnProps {}

type Props = OwnProps;

const ChatInputContainer: React.FC<Props> = React.memo(() => {
  const [message, setMessage] = useState<string>('');
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(
      sendMessage({
        timestamp: new Date().getTime(),
        message,
        user: userName!,
      }),
    );
    setMessage('');
  }, [dispatch, message, setMessage, userName]);

  if (userName === undefined) {
    return null;
  }

  return (
    <ChatInputComponent
      message={message}
      handleInput={setMessage}
      handleSubmit={onSubmit}
    />
  );
});

export default ChatInputContainer;
