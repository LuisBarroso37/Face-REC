## Face REC 

Face recognition web app which allows users to upload images and get a bounding box around the face or faces present in the image. 

This is done using the Clarifai API which gives us access to a face detection model. Everytime an user presses the 'Detect' button an entries count is incremented, keeping track of how many images the user has run through the face detection model. Users can register and login to the app and their information is kept in a 
postgreSQL database.

**The API for this app is in a separate github repo.**

### Instructions
To run this app in a local environment, in the project directory:
  - Clone the repo
  - Run `npm install` to install the dependencies
  - Run `npm start`
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Information

This app was created by using React, Node.js, Express.js, Knex.js, PostgreSQL, Redis, JWT and the Clarifai API.

[Clarifai](https://docs.clarifai.com/) - Clarifai offers several different types of machine learning models that can be used for many situations. They have a free plan which allows us to integrate their API on our project, test it and showcase it to other people.

### Screenshots

![Face REC login](https://user-images.githubusercontent.com/58770446/90749696-0f8c0480-e2d4-11ea-9737-1d0de876bdbe.png)

![Face REC home](https://user-images.githubusercontent.com/58770446/90749744-1d418a00-e2d4-11ea-8711-de2e3a84cd44.png)