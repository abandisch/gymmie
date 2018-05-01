# Gymmie - Strength/Workout Tracking Buddy [![Build Status](https://travis-ci.org/abandisch/gymmie.svg?branch=master)](https://travis-ci.org/abandisch/gymmie)

Use Gymmie to track your strength exercises at the gym. If a user doesn't have a regular workout, then they can select from one of the predefined ones created by trainers (sourced externally).
Users can track their exercise results (weight/reps) in every session, and review their pervious results, so that with each new session, they can use the results of the previous session as the goal to beat (or match) for the current session. Or in the case of a pre-defined workout, they just follow the recommended sets/weight.

## Minimum Viable Product URL

https://gymmie-abandisch.netlify.com/

## Stack

* Client: React
* Tests: Enzyme, Jest

## User Stories

### User Stories - PT Provided Training Sessions & Exercises

* As a gym goer/app user, I want to login to the app with Facebook, so I don't have to remember my login details
* As a gym goer/app user, I want to select a training program, so that I can do the predetermined exercises provided for me
* As a gym goer/app user, I want to record my a set (weight and reps) for an exercise
* As a gym goer/app user, I want to update the set (reps and weight), so that I can fix mistakes I may have made
* As a gym goer, I want to see my PT summary for the training session day and comments for each exercise, so that I can I know what to expect for the day/each exercise

### User Stories - Custom Training Sessions & Exercises

* As a gym goer/app user, I want to login to the app with Facebook, so I don't have to remember my login details
* As a gym goer, I want to select a training session, so that I can track my exercises for that session
* As a gym goer, I want to see the results of an exerise from my last training session (if any), so that I know what weight to lift and how many reps to do for that exercise in my current training session
* As a gym goer, I want to add exercises from a pre-defined list of exercises to a training session, so I can track the weight lifted, number of sets completed and my max reps for that exercise
* As a gym goer, I want to record each set (weight and reps) for an exercise, so I can keep track of my progress
* As a gym goer/app user, I want to update the set (reps and weight), so that I can fix mistakes I may have made
* As a gym goer/app user, I want to update a exercise name, so that I can fix any mistakes I may have made
* As a new gym goer, I want to see instructional guides for each exercise, so I know how to do the exercise properly without hurting myself

## User Stories for MVP

The MVP will only implement PT Provided Training Sessions & Exercises part of the app.

* As a gym goer/app user, I want to login to the app with an email, so I don't have to remember my login password details
* As a gym goer/app user, I want to select a training program, so that I can do the predetermined exercises provided for me
* As a gym goer/app user, I want to record my a set (weight and reps) for an exercise
* As a gym goer/app user, I want to update the set (reps and weight), so that I can fix mistakes I may have made
* As a gym goer, I want to see my PT summary for the training session day and comments for each exercise, so that I can I know what to expect for the day/each exercise

## MVP Feedback

Feedback from users was positive. They liked to be able to select from a pre-defined list of training sessions and adding sets for each exercise was easy to follow. They would have like to add their own exercises, but this was not part of the MVP.

## MVP App Screenshots

![Gymmie - Screen captures - 01](https://github.com/abandisch/gymmie/blob/master/mvp-screen-captures/gymmie-scrncap-01.jpg)

![Gymmie - Screen captures - 02](https://github.com/abandisch/gymmie/blob/master/mvp-screen-captures/gymmie-scrncap-02.jpg)

## Wireframes

[Gym Tracker Mobile App - Wireframes]( https://alexb-gt-wireframes.netlify.com/)

## App Screen List

* Landing page screen to login 
* Screen for listing all the training programs
* Screen for adding/editing sets for exercises

## User Flow Diagram

![Gym Tracker Mobile App - User Flow](https://github.com/abandisch/gym-tracker-mobile/blob/master/resources/mobile-app-user-flow.jpg)
