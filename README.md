The app is deployed and available for viewing at https://serene-eyrie-87226.herokuapp.com/

#Setup.

Clone the project

* Open a terminal window and create a new folder mkdir <foldername>
* Navigate into the newly created folder cd <foldername>
* Clone the project git clone https://github.com/leethor92/giphy-search.git
* The project folder giphy_search should now be available, run command ls to be sure.
* Navigate into the giphy_search folder by running command cd giphy_search
* You are now ready to complete the following steps in order to start the application successfully.

#Run the application

* Open a new terminal window within the folder giphy_search

* install dependencies npm install

* Navigate to the src folder giphy_search>src by using the command cd src

* Create a file called env.json by using nano env.json or an editor of your choice
Within this env.json file add the following
{
  "REACT_APP_GIPHY_API_KEY": "<Enter your gihpy api>"
}
* This is required in oder to successfully request data from the Giphy API, if not complete the application will not start as the reference within the application to the env.json file will fail to exist

* Before completing the next step ensure your are back in the giphy-react folder cd ..

* Once dependenices are installed and your api key has been added to the newly create env.json file run the application npm start

* The application should now be running on at the following address localhost:3000 -Do not close the terminal

#Testing
* some basic unit tests were included. To run these type npm test in the cli.

