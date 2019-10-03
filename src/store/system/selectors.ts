import { AppState } from '..';

import { createSelector } from 'reselect';

export const isLoggedIn = (state: AppState) => state.system.loggedIn;

export const getSession = (state: AppState) => state.system.session;

export const getUserInformation = (state: AppState) =>
  state.system.userInformation;

export const getUserNameFromUserInformation = (
  user: ReturnType<typeof getUserInformation>,
) => user && user.name;

export const getUserName = createSelector(
  getUserInformation,
  getUserNameFromUserInformation,
);
