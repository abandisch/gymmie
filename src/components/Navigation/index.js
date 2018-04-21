import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { closeNavigation } from '../../actions';

export const Nav = ({ isOpen, onClickClose }) => (
  <Drawer
    docked={false}
    width={300}
    open={isOpen}
  >
    <MenuItem onClick={onClickClose}>Menu Item</MenuItem>
    <MenuItem onClick={onClickClose}>Menu Item 2</MenuItem>
  </Drawer>
);

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  isOpen: state.navigation.open || false,
});

export const mapDispatchToProps = dispatch => ({
  onClickClose: dispatch(closeNavigation()),
});

export default connect(mapStateToProps)(Nav);
