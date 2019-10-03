import React from 'react';
import { IconButton, TextField, Tooltip } from '@material-ui/core';
import { useStyles } from './chat-input-styles';

import SendIcon from '@material-ui/icons/Send';

interface OwnProps {
  message: string;
  handleInput: (message: string) => void;
  handleSubmit: () => void;
}

type Props = OwnProps;

export const ChatInputComponent: React.FC<Props> = ({
  message,
  handleInput,
  handleSubmit,
}) => {
  const classes = useStyles();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(evt.target.value);
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        onChange={handleChange}
        value={message}
        placeholder={'Type in your message'}
        fullWidth={true}
        onKeyPress={handleKeyPress}
      />
      <Tooltip title="Send" placement="right">
        <div>
          <IconButton onClick={handleSubmit} disabled={!message} size="small">
            <SendIcon />
          </IconButton>
        </div>
      </Tooltip>
    </div>
  );
};

export default ChatInputComponent;
