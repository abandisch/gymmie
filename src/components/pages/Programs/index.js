import React from 'react';
import RequiresLogin from '../../RequiresLogin';
import TrainingProgramList from '../../ProgramList';

export const ProgramsPageComponent = () => (
  <section className="programs-page">
    <h2 className="section-title">Training Programs</h2>
    <p>
      Our trainers have created a list of workout programs.
      Feel free to select one from the below list.
    </p>
    <TrainingProgramList />
  </section>
);

export default RequiresLogin()(ProgramsPageComponent);
