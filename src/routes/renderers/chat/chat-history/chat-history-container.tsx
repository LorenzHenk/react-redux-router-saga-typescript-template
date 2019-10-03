import React from 'react';

import { useSelector } from 'react-redux';

import ChatHistoryComponent from './chat-history-component';
import { getMessagesWithUser } from '../../../../store/chat/selectors';

interface OwnProps {}

type Props = OwnProps;

const ChatHistoryContainer: React.FC<Props> = () => {
  const messages = useSelector(getMessagesWithUser);

  return <ChatHistoryComponent messages={messages} />;
};

export default ChatHistoryContainer;
