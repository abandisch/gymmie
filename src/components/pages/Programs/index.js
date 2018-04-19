import React from 'react';
import TrainingProgramList from '../../ProgramList';

const ProgramsPage = () => (
  <section className="programs-page">
    <h2 className="section-title">Training Programs</h2>
    <p>
      Our trainers have created a list of workout programs.
      Feel free to select one from the below list.
    </p>
    <TrainingProgramList />
  </section>
);

export default ProgramsPage;
