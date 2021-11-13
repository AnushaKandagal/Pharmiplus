# Pharmiplus
Full stack web application using MERN ( mongoDB , express , react , nodejs )

frontend - react and redux.
backend - nodejs.
database - mongoDB cloud database.
Uses json web token for authentication and authorization.

A web application that sells medicines online , similar to any ecommerce website

Some cool user requirements implimented.
1) The system excepts only one time registration for a valid email id, in other words no 2 users can have a same email id.
2) Password will remain a secret even to the admin who has access to the mongoDB database since passwords are stored in the encrypted format.
3) Orders that are shipped cannot be cancelled.
4) Orders cannot be cannot be cancelled after 24 of booking. In case 3 and 4 the order state in the database will be changed to shipped so the cancell button in the frontend will be automatically dissabeled.
5) Navigation -- as you start this application a landing page appears which will show some adds,if you are logged in then clicking on any product will take you to shopping page , not logged in or first time users will first take you to login/signup page and then to shopping page.

and many more.. ;)

After download install the dependencies listed out in the file package.json.
Run the command - "node server" to run backend
for Frontend  - run the command "npm start"
If you want to run both of them simultaneously, then I have configured the run scripts in the package.json for a shortcut , type npm run dev to run both the above 2 scripts simultaneously. 
Open browser and type http://localhost:5000 or the port no. you want (then you should change in the code)...tada!! Welcome to pharmiplus!!
