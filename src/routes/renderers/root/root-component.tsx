import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { UserInformation } from '../../../store/system/types';

interface OwnProps {
  loggedIn: boolean;
  user?: UserInformation;
  handleLogin: () => void;
}

type Props = OwnProps;

const RootComponent: React.FC<Props> = React.memo(
  ({ loggedIn, handleLogin, user }) => {
    return (
      <div>
        <h1>Home</h1>
        <div>
          {loggedIn ? (
            <div>
              <span>You are logged in as {user!.name}</span>
              <br />
              <Link to="/chat">Start chatting!</Link>
            </div>
          ) : (
            <Button variant="outlined" onClick={handleLogin}>
              Login as Anonymous
            </Button>
          )}
        </div>
      </div>
    );
  },
);

export default RootComponent;
