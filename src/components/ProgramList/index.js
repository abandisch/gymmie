import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { graphql, withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DialogModal from '../DialogModal';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="More"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color="grey" />
  </IconButton>
);

const rightIconMenu = (onClickMenuSummary, onClickMenuProgram) => (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onClick={onClickMenuSummary}>Full Summary</MenuItem>
    <MenuItem onClick={onClickMenuProgram}>Select Program</MenuItem>
  </IconMenu>
);

export const CreateListItem = ({
  item, onSelectProgram, onClickMenuSummary, onClickMenuProgram,
}) => (
  <div>
    <ListItem
      onClick={onSelectProgram(item.id)}
      primaryText={item.name}
      rightIconButton={
        rightIconMenu(
          onClickMenuSummary(item.name, item.summary),
          onClickMenuProgram(item.id),
        )
      }
      secondaryText={
        <p>
          <span style={{ color: 'black' }}>Program Details</span> -- {item.summary}
        </p>
      }
      secondaryTextLines={2}
    />
    <Divider />
  </div>);

CreateListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  onSelectProgram: PropTypes.func.isRequired,
  onClickMenuSummary: PropTypes.func.isRequired,
  onClickMenuProgram: PropTypes.func.isRequired,
};

export const CreateList =
  ({
    allPrograms, onSelectProgram, onClickSummaryMenuItem, onClickSelectProgramMenuItem,
  }) => (
    <List>
      {allPrograms.map(program =>
      (<CreateListItem
        key={program.id}
        item={program}
        onSelectProgram={onSelectProgram}
        onClickMenuSummary={onClickSummaryMenuItem}
        onClickMenuProgram={onClickSelectProgramMenuItem}
      />))}
    </List>);

CreateList.propTypes = {
  onSelectProgram: PropTypes.func.isRequired,
  onClickSummaryMenuItem: PropTypes.func.isRequired,
  allPrograms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

class ProgramList extends React.Component {
  onSelectProgram = programId => () => {
    this.selectProgram(programId);
  };

  onClickSummaryMenuItem = (programName, programSummary) => () => {
    console.log('clicked the sumamry menu item.');
    console.log('name:', programName);
    console.log('summary:', programSummary);
    return <DialogModal title={programName} message={programSummary} />;
  };

  onClickSelectProgramMenuItem = programId => () => {
    this.selectProgram(programId);
  };

  selectProgram = (programId) => {
    const { history } = this.props;
    history.push(`/dashboard/training-programs/${programId}`);
  };

  render() {
    const { programs, isLoadingSelectedProgram } = this.props;
    if (isLoadingSelectedProgram) {
      return <p>Loading selected Training Program...</p>;
    }
    if (programs.loading) {
      return (
        <p>Getting Training Programs ...</p>
      );
    }

    return (<CreateList
      allPrograms={programs.allPrograms}
      onSelectProgram={this.onSelectProgram}
      onClickSummaryMenuItem={this.onClickSummaryMenuItem}
      onClickSelectProgramMenuItem={this.onClickSelectProgramMenuItem}
    />);
  }
}

ProgramList.propTypes = {
  isLoadingSelectedProgram: PropTypes.bool.isRequired,
  programs: PropTypes.PropTypes.shape({}).isRequired,
  history: PropTypes.PropTypes.shape({}).isRequired,
};

const ALL_PROGRAMS_QUERY = gql`
  {allPrograms {
    id
    name
    summary
  }}`;

export const mapStateToProps = state => ({
  isLoadingSelectedProgram: !!state.loading.selectProgram,
});

export default compose(
  connect(mapStateToProps),
  graphql(ALL_PROGRAMS_QUERY, { name: 'programs' }),
  withApollo,
  withRouter,
)(ProgramList);
