import React from 'react';

import { MapDispatchToProps, MapStateToProps } from './chat-history-redux';

import ChatHistoryComponent from './chat-history-component';

interface OwnProps {}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ChatHistoryContainer: React.FC<Props> = ({
  user,
  chat: { messages },
}) => {
  const formattedMessages = messages.map(message => ({
    ...message,
    isLeft: message.user !== user,
  }));

  return <ChatHistoryComponent messages={formattedMessages} />;
};

export default ChatHistoryContainer;
