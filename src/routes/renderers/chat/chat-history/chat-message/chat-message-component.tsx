import React from 'react';
import { useStyles } from './chat-message-styles';

import { MessageWithUser } from '../../../../../store/chat/selectors';

interface Props {
  message: MessageWithUser;
}

const ChatMessage: React.FC<Props> = React.memo(({
  message: { message, timestamp, user, isFromCurrentUser },
}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        isFromCurrentUser ? classes.right : classes.left
      }`}
    >
      <div className={classes.author}>{user}</div>
      <div className={classes.date}>
        {new Date(timestamp).toLocaleTimeString()}
      </div>
      <div className={classes.message}>{message}</div>
    </div>
  );
});

export default ChatMessage;
