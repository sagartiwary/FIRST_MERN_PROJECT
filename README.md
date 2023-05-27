# FIRST_MERN_PROJECT
### Part-1
  -- Create a server in Node and express
  -- command- npm-creation- npm init -y
  -- Pages
      -HOME
      -ABOUT
      CONTACT
      LOGIN
      REGISTER

 ### PART-2     
 Middleware-->The middleware in node.js is a function that will have all the access for
requesting an object, responding to an object, and moving to the next
middleware function in the application request-response cycle.


### PART-3
mongoose
  .connect(DB)
  .then((res) => {
    console.log("it has right access");
  })
  .catch((error) => {
    console.log("it is failed");
  });

  IT IS IMPORTANT TO USE .THEN AND .CATCH JUST TO KNOW THAT OUR DB IS CONNECTED TO SERVER.
  

  ### PART-04
  WE HAVE INSTALLED DOTENV PACKAGE FOR SECURING OUR DATA
  THEN WE CREATED .env file to store our data
  require("dotenv").config()


  ### PART-05
  CREATING USER-SCHEMA AND MODEL
  
  ### PART-06
  Express Router Middleware Setup & Getting Data Back From THUNDER-CLIENT to Our MERN Application;
  
