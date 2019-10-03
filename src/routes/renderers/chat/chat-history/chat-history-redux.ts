import { connect } from 'react-redux';

import { AppState } from '../../../../store';
import { deleteMessage } from '../../../../store/chat/actions';

const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
  user: state.system.userInformation!.name,
});

export type MapStateToProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  deleteMessage,
};

export type MapDispatchToProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
