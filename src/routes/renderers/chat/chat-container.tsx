import React from 'react';

import { RouteComponentProps } from 'react-router';

import { useSelector } from 'react-redux';

import { isLoggedIn } from '../../../store/system/selectors';

import ChatComponent from './chat-component';

interface OwnProps {}

type Props = OwnProps & RouteComponentProps;

const ChatContainer: React.FC<Props> = React.memo(() => {
  const loggedIn = useSelector(isLoggedIn);

  return <ChatComponent loggedIn={loggedIn} />;
});

export default ChatContainer;
