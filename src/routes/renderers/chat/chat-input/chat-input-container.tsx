import React, { useState } from 'react';

import { MapDispatchToProps, MapStateToProps } from './chat-input-redux';

import ChatInputComponent from './chat-input-component';

interface OwnProps {}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ChatInputContainer: React.FC<Props> = ({ sendMessage, user }) => {
  const [message, setMessage] = useState<string>('');

  const onSubmit = () => {
    sendMessage({ timestamp: new Date().getTime(), message, user: user.name });
    setMessage('');
  };

  return (
    <ChatInputComponent
      message={message}
      handleInput={setMessage}
      handleSubmit={onSubmit}
    />
  );
};

export default ChatInputContainer;
