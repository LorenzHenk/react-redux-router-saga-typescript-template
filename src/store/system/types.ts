export interface UserInformation {
  id: string;
  name: string;
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userInformation?: UserInformation;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
