# netflix clone

1. created the app using vite
2. tailwind css
3. set up the router via react-router's createBrowserRouter
4. wrapped the app inside RouterProvider from react-router/dom
5. using html form for login/sign up
6. accessing some form values via state variable and some via useRef - for practicing
7. form validation functions
8. install and regsiter firebase via the following commands and steps
   1. npm install -g firebase-tools
   2. firebase login
   3. (check if the CLI is properly installed and login is successful by)
      firebase projects:list
   4. regsiter webapp in firebase console (project settings -> general -> register web app)
   5. npm install firebase
   6. firebase init
      select Hosting: Configure files for Firebase hosting and optionally setup Github action deploys
      use an existing project
      build folder (enter as dist. since vite)
      configure as single page-app ? no
      setup automatic build and deploys with github? no
      with these steps we got .firebaserc and firebase.json files
      firebase.config.json has confidential keys related to project, hence its not committed to repo
9. build the app
10. deploy via the command
    firebase deploy
11. setup signin method in firebase console to email-password
    then use the firebase apis to write signin, signup functions
12. use redux to store the logged in user details
    1. npm install @reduxjs/toolkit react-redux
    2. create a default store via configureStore()
    3. provide the store to app via react-redux's Provider
    4. create redux state slice via @reduxjs/toolkit's createSlice
       this shall have a slice identifier string, initial state and reducer functions
       reducer functions will be exported as actions
    5. add slice reducers to store
    6. react-redux's useSelector and useDispatch to use the states and dispatch the actions respectively
13. added onAuthStateChanged listener in Header component
14. created TMDB account, fetched movies and stored them in movieSlice.
    showing the movie trailer in browse page background via Youtube iframe embedded
