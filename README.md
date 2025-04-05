# netflix clone

1. created the app using vite
2. tailwind css
3. set up the router via react-router's createBrowserRouter
4. wrapped the app inside RouterProvider from react-router/dom
5. using html form for login/sign up
6. accessing some form values via state variable and some via useRef - for practicing
7. form validation functions
8. install and regsiter firebase via the following commands and steps
   8.1 npm install -g firebase-tools
   8.2 firebase login
   8.3 (check if the CLI is properly installed and login is successful by)
   firebase projects:list
   8.4 regsiter webapp in firebase console (project settings -> general -> register web app)
   8.5 npm install firebase
   8.6 firebase init
   select Hosting: Configure files for Firebase hosting and optionally setup Github action deploys
   use an existing project
   build folder (enter as dist. since vite)
   configure as single page-app ? no
   setup automatic build and deploys with github? no
   with these steps we got .firebaserc and firebase.json files
9. build the app
10. deploy via the command
    firebase deploy
