import { connect } from 'react-redux';

import { AppState } from '../../../../store';
import { sendMessage } from '../../../../store/chat/actions';

const mapStateToProps = (state: AppState) => ({
  user: state.system.userInformation!,
});

export type MapStateToProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  sendMessage,
};

export type MapDispatchToProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
