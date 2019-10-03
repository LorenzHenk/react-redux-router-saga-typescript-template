import React from 'react';

import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { MapStateToProps, MapDispatchToProps } from './root-redux';

interface OwnProps {}

type Props = OwnProps &
  RouteComponentProps &
  MapStateToProps &
  MapDispatchToProps;

const RootComponent: React.FC<Props> = ({ loggedIn, user, updateSession }) => {
  const login = () => {
    updateSession({
      loggedIn: true,
      session: 's3ss1on',
      userInformation: { id: 'unique_identifier', name: 'Anonymous' },
    });
  };
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
          <Button variant="outlined" onClick={login}>
            Login as Anonymous
          </Button>
        )}
      </div>
    </div>
  );
};

export default RootComponent;
