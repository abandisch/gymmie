import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node).isRequired,
  open: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
};

class DialogModal extends React.Component {
  state = {
    open: true,
  };

  onClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log('in modal');
    const actions = [
      <FlatButton
        label="Ok"
        primary
        onClick={this.onClickClose}
      />,
    ];

    const { title, message } = this.props;

    return (<ModalComponent
      title={title}
      message={message}
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.onClickClose}
    />);
  }
}

DialogModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default DialogModal;
