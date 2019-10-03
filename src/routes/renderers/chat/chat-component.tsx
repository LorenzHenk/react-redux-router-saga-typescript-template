import React from 'react';

import ChatHistory from './chat-history';

import ChatInput from './chat-input';

import { MapDispatchToProps, MapStateToProps } from './chat-redux';

import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useStyles } from './chat-styles';

interface OwnProps {}

type Props = OwnProps &
  RouteComponentProps &
  MapStateToProps &
  MapDispatchToProps;

export const ChatComponent: React.FC<Props> = ({ user }) => {
  const classes = useStyles();

  if (!user) {
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
};

export default ChatComponent;
