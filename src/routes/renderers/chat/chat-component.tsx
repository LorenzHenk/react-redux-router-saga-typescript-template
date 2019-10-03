import React from 'react';

import ChatHistory from './chat-history';

import ChatInput from './chat-input';

import { Link } from 'react-router-dom';
import { useStyles } from './chat-styles';

interface OwnProps {
  loggedIn: boolean;
}

type Props = OwnProps;

export const ChatComponent: React.FC<Props> = React.memo(({ loggedIn }) => {
  const classes = useStyles();

  if (!loggedIn) {
    // you need to be logged in to chat
    return (
      <div>
        Not logged in! <Link to="/">Go back to home</Link>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <ChatHistory />
      <ChatInput />
    </div>
  );
});

export default ChatComponent;
