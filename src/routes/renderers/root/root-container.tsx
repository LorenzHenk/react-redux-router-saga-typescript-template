import React, { useCallback } from 'react';

import { RouteComponentProps } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import {
  isLoggedIn,
  getUserInformation,
} from '../../../store/system/selectors';

import { updateSession } from '../../../store/system/actions';
import RootComponent from './root-component';

interface OwnProps {}

type Props = OwnProps & RouteComponentProps;

const LOGIN_DATA = {
  loggedIn: true,
  session: 's3ss1on',
  userInformation: { id: 'unique_identifier', name: 'Anonymous' },
};

const RootContainer: React.FC<Props> = React.memo(() => {
  const loggedIn = useSelector(isLoggedIn);
  const user = useSelector(getUserInformation);

  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(updateSession(LOGIN_DATA));
  }, [dispatch]);

  return <RootComponent loggedIn={loggedIn} user={user} handleLogin={login} />;
});

export default RootContainer;
