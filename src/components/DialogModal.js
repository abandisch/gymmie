import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { hideModal } from '../actions';

export const ModalComponent = ({
  title, message, actions, open, onClickClose,
}) => (
  <Dialog
    title={title}
    actions={actions}
    modal={false}
    open={open}
    onRequestClose={onClickClose}
  >
    {message}
  </Dialog>
);

ModalComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node).isRequired,
  open: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
};

ModalComponent.defaultProps = {
  title: '',
  message: '',
};

class DialogModal extends React.Component {
  onClickClose = () => {
    const { hideDialogModal } = this.props;
    hideDialogModal();
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary
        onClick={this.onClickClose}
      />,
    ];

    const { title, message } = this.props.modalProps;
    const { showModal } = this.props;

    return (<ModalComponent
      title={title}
      message={message}
      actions={actions}
      modal
      open={showModal}
      onClickClose={this.onClickClose}
    />);
  }
}

DialogModal.propTypes = {
  modalProps: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  showModal: PropTypes.bool.isRequired,
  hideDialogModal: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  modalProps: state.modal.modalProps,
});

export const mapDispatchToProps = dispatch => ({
  hideDialogModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
