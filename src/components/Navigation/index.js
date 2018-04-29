import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationMenu from './NavMenu';
import { openNavigation } from '../../actions';
import './Navigation.css';
import './Navigation-media-queries.css';

const Nav = ({ displayNavigation, onClickNavigation }) => (
  displayNavigation ?
    <nav>
      <NavigationMenu />
      <IconButton className="btn-navigation" aria-label="Open Navigation Menu">
        <NavigationMenuIcon onClick={onClickNavigation} />
      </IconButton>
    </nav> : null
);

Nav.propTypes = {
  onClickNavigation: PropTypes.func.isRequired,
  displayNavigation: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  displayNavigation: state.user.gymTrackerJWT !== undefined,
});

export const mapDispatchToProps = dispatch => ({
  onClickNavigation: () => dispatch(openNavigation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
