import { connect } from 'react-redux';

import { AppState } from '../../../store';

const mapStateToProps = (state: AppState) => ({
  user: state.system.userInformation,
});

export type MapStateToProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {};

export type MapDispatchToProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
