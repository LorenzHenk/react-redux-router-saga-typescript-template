import { SystemState, UPDATE_SESSION } from './types';

export function updateSession(session: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: session,
  };
}
