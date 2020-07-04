# user-votes
This is a single page application that lets users vote through the Polls API.

This application inclueds following features:

* List of questions page, from this page user can slect question to vote. [Question list](https://polls.apiblueprint.org/questions)
* Question Details page, from this page user can vote on question with selecting choice.
* Create New Question page, User can new question with choices.
* Application is able to launch in offline mode as well.
* Layout is responsive (mobile, table, desktop).

## Steps to setup application in local
* Go to Root directory of application and execute following commands:
    ```sh
    $ cd vote-questions
    $ vote-questions> npm install
    $ vote-questions> npm start
    ```
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.