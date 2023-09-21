This is a web app which contains
source code of frontend and backend
To see the working version of this
Click on ="https://currencyconverterapi.netlify.app"

To run this on your local machine follow the steps given below
For Backend:
write the following commands after pulling this to your local computer
1.) cd Backend
2.) npm init
3.) download all dependencies mentioned in package.json using command npm install dependency name
4.) create a .env file and add
{API= get api key from fixer.io and initiliaze
CLIENT_URL="http://localhost:4000"
MONGO_URL= Add your mongodb database url}
5.) run server using node index.js command

To run this on your local machine follow the steps given below
For Frontend:
write the following commands after pulling this to your local computer
1.) cd Frontend
3.) download all dependencies mentioned in package.json using command npm install dependency name
4.) create a env.environment.ts file and add
export const environment = {
serverUrl: {Your Backend server address}/conversion',
ratesUrl: {your backend server}/rates',
};
5.) run frontend using ng serve
