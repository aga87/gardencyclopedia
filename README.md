# Gardencyclopedia

Create your own gardening calendar and diary.

## Demo

The demo is hosted on Heroku. [Go to Demo](https://sleepy-scrubland-50721.herokuapp.com/) and create your own account or use username: **test@test.com** and password: **test1234**.

## Storybook

The Storybook for the project is hosted on [Chromatic](https://www.chromatic.com/choose/storybook-deploy).\
[Go to Storybook](https://www.chromatic.com/library?appId=61b4b41159ad42003a08e784) to see the UI component library.

## Tech Stack

- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/) - for database
- [Node.js](https://nodejs.org/en/) - development server
- [Express.js](http://expressjs.com/) - as Node web framework, for routing
- [React.js](https://reactjs.org/) ([Create React App](https://create-react-app.dev/)) - for client
- [Redux](https://redux.js.org/) - for state management
- [Typescript](https://www.typescriptlang.org/) - for static typing
- [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) - for Accessibility
- [SASS](https://sass-lang.com/) - as CSS pre-processor
- [Storybook](https://storybook.js.org/) - as component library

## User stories / features

### Authentication

- [x] User can register with a username, (unique) email and password
- [x] User can log in and log out
- [x] All data entered by the user in the app is accessible only to that user

Upcoming:

- [ ] User will receive a verification email to confirm and complete the registration
- [ ] User can change their email and password
- [ ] User can delete their account

### Dashboard

Calendar:

- [x] User can create its own gardening calendar by creating new plant entries
- [x] User can record the following information about each plant: name (required), description, category (vegetables/ fruits/ herbs/ flowers), sowing period, harvesting period
- [x] User can filter plants by category
- [x] User can sort plants by name, category, sowing or harvesting period
- [x] User can edit created entries
- [x] User can delete created entries

Upcoming:

- [ ] User can search plants by name

Upcoming: Garden

- [ ] User can keep track of the plants in their garden
- [ ] User can record harvesting dates and yields for each plant
- [ ] User can archive selected plants for further reference
