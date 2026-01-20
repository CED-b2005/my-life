# self-manager
an application for management everything from task, money, hobbies, write some stories, .... (custom by me and different other apps )

# Set up project
-  step 1: run 
    npm install

- step 2: create file name db.json in folder database and copy this data:
    {
      task-manager: []
    }

- step 3: create file .env from .env.template and set all variables

- step 4: run json-server as database: (localhost:8888)
    npm run start:db

- step 5: run backend (localhost:3000 // .env)
    npm start

#run backend in dev:
    npm run dev