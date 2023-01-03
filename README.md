# Social-Network-API

![badge](https://img.shields.io/badge/License-None-blue.svg)<br />

## Description
  ![image](https://user-images.githubusercontent.com/49098706/207756769-46755d8b-4846-4aeb-b5b5-db87c7a41c3e.png)

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  
  ## Installation
   Mongoose and Express
  
  ## Usage
  Watch Video: https://drive.google.com/file/d/13yE9Q4bJ-jHcwqr6QkZVtPSpm3blyajs/view
  
  ![image](https://user-images.githubusercontent.com/49098706/207756720-c6989395-e070-407c-b0f7-48c272ad0d3e.png)

  
  ## Questions
 Find me on GitHub: Shelly Foxworth-Hill [sfhill24](https://github.com/sfhill24)<br /> 
 </br>
 For additional questions, email me at sfhill24@gmail.com.  
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation

Mongoose <br/>
Express <br/>
Nodemon <br/>

## Usage

Watch Video: https://drive.google.com/file/d/13yE9Q4bJ-jHcwqr6QkZVtPSpm3blyajs/view

The following endpoints were used to retireve thoughts and reactions:</br>
</br>
//GET all and POST at /api/thoughts</br>
router.route('/').get(getAllThoughts).post(createThought);</br>
</br>
//GET one and PUT at /api/thoughts/:thoughtId</br>
router.route('/:thoughtId').get(getThoughtById).put(updateThought);</br>
</br>
//DELETE at /api/thoughts/:thoughtId</br>
router.route('/:thoughtId/:userId').delete(deleteThought);</br>
</br>
//POST at /api/thoughts/:thoughtId/reactions</br>
router.route('/:thoughtId/reactions').post(createReaction);</br>
</br>
//DELETE at /api/thoughts/:thoughtId/reactions/:reactionId</br>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);</br>
</br>
The following endpoints were used to retireve users and friends:</br>
</br>
//GET all and POST at /api/users</br>
router.route('/').get(getAllUsers).post(createUser);</br>
</br>
//GET one, PUT, and DELETE at /api/users/:id</br>
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);</br>
</br>
//PUT, and DELETE at /api/users/:id/friends/:friendId</br>
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);</br>

## Questions

Find me on GitHub: Shelly Foxworth-Hill [sfhill24](https://github.com/sfhill24)<br />
</br>
For additional questions, email me at sfhill24@gmail.com.
