# eKart eCommerce Shopping Website
- Its an eCommerce application created with Node.js, Express, React.js and MongoDB

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General Info
This project is a simple ecommerce full stack web application with admin and public roles and additional features loaded to explore maximum features included in the application

## Prerequisites
Please create accounts in Mongo DB for data storage and Cloudinary for images upload 
[Mongo DB](https://cloud.mongodb.com/)
[Cloudinary URL](https://cloudinary.com/)
## Technologies

Backend:

* bcrypt
* cloudinary
* concurrently
* cookie-parser
* cors
* dotenv
* express
* express-fileupload
* jsonwebtoken
* mongoose

Frontend:

* react-router-dom
* axios
* react-paypal-express-checkout
## Setup

To run this project install below packages using npm or yarn

For Server Side (Backend)
```
npm i bcrypt cloudinary concurrently cookie-parser cors dotenv express express-fileupload jsonwebtoken mongoose
```
For Client Side (Frontend)
```
npx create-react-app client
npm i react-router-dom axios react-paypal-express-checkout
```

## Technical Issues

If you any issues on starting the frontend application in the initial setup

```
Failed to load plugin 'jsx-a11y' declared in 'package.json » eslint-config-react-app': Cannot find module 'core-js-pure/stable/object/define-property'
```
Then add file .eslintrc
```
{
    "parser": "babel-eslint"
}
```
Also add devDependicies in the Package.json
```
"devDependencies": {
    "babel-eslint": "^10.0.2",
    "eslint": "^7.11.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.14.3",
    "eslint-plugin-react-hooks": "^1.7.0"
  }
```  
