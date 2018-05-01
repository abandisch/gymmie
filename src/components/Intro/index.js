import React from 'react';
import './Intro.css';

const Intro = () => (
  <div className="intro">
    <h2>Welcome to Gymmie</h2>
    <p>
      Use Gymmie to track your strength exercises at the gym.
      If you don&rsquo;t have a regular workout, select from one of the predefined
      ones created by trainers.
    </p>
    <p>
      To start off, enter your email address.
      Then, either select &quot;Do My Own Workout&quot; to track your own strength exercises,
      or select &quot;Select a Trainer Workout&quot; to select from a list of exercises created
      by trainers.
    </p>
    <p>
      Whether your doing your own exercsies, or your doing ones provided buy trainers,
      once you&rsquo;ve done a set, record the weight in numbers (e.g. 40) or text
      (e.g. Body Weight), and the number of reps.
    </p>
    <p>
      The next time you go to the gym and see the same exercises, you&rsquo;ll be able to
      see your best set from the last session, and use that as a guage to increase your weight/reps.
    </p>
  </div>
);

export default Intro;
