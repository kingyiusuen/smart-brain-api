# Smart Brain API

A web app that locates human faces in a picture.

<img src="screenshot.png">

## Introduction

This is the back-end part of the app. The code for front-end part is [here](). 

The app allows users to input a URL that links to an image and locate the faces that appear in the image with bounding boxes. The API for the face detection algorithm is provided by [Clarifai](https://www.clarifai.com/). 

The code here handles the connection to the Clarifai API and a database that stores user login information.

## Database Schema

users
- id: unique identifier
- name: name of user
- email: login email
- joined: registration date and time

login
- id: unique identifier
- hash: hashed user password
- email: login email

## Technologies Used

- Javascript
    - express (server framework)
    - bcrpyt (password protection)
    - knex (database connection)
- PostgreSQL
