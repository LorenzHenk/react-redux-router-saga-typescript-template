import { connect } from 'react-redux';

import { AppState } from '../../../store';
import { updateSession } from '../../../store/system/actions';

const mapStateToProps = (state: AppState) => ({
  user: state.system.userInformation,
  loggedIn: state.system.loggedIn,
});

export type MapStateToProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  updateSession,
};

export type MapDispatchToProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
