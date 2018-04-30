import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import NavigationLogoutIcon from 'material-ui/svg-icons/navigation/cancel';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ListIcon from 'material-ui/svg-icons/action/list';
import { Link } from 'react-router-dom';
import { closeNavigation, toggleNavigation, logout } from '../../actions';

export const NavMenu = ({
  isOpen, onClickClose, onToggleNavigation, userEmail, onClickLogout,
}) => (
  <Drawer
    docked={false}
    width={300}
    open={isOpen}
    onRequestChange={onToggleNavigation}
  >
    <AppBar
      iconElementLeft={<IconButton aria-label="Close Navigation Manu"><NavigationCloseIcon aria-hidden="true" /></IconButton>}
      title="Gymmie"
      onClick={onClickClose}
    />
    <div className="user-info">
      <p style={{ textAlign: 'center' }}>{userEmail}</p>
    </div>
    <Divider />
    <Menu>
      <MenuItem
        containerElement={<Link to="/dashboard" />}
        primaryText="Dashboard"
        leftIcon={<HomeIcon role="img" aria-hidden="true" />}
        onClick={onClickClose}
      />
      <MenuItem
        containerElement={<Link to="/dashboard/training-programs" />}
        primaryText="Training Programs"
        leftIcon={<ListIcon role="img" aria-hidden="true" />}
        onClick={onClickClose}
      />
      <MenuItem
        primaryText="Logout"
        leftIcon={<NavigationLogoutIcon role="img" aria-hidden="true" />}
        onClick={onClickLogout}
      />
    </Menu>
  </Drawer>
);

NavMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
  onToggleNavigation: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isOpen: state.navigation.open || false,
  userEmail: state.user.email,
});

export const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(closeNavigation()),
  onToggleNavigation: toggle => dispatch(toggleNavigation(toggle)),
  onClickLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
