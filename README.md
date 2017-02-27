# api-basic

# My Community App

This app will help my community organize events more easily!


## REST API

### Basic

Routes | HTTP | Description
--- | --- | ---
**/api/hello?name={name}** | `GET` | Print hello, {name} !

### AUTH API

Routes | HTTP | Description
--- | --- | ---
**/api/signup** | `POST` | Signup a new user
**/api/signin** | `POST` | User sign in and get credetial token after login

### User API

Routes | HTTP | Description
--- | --- | ---
**/api/users** | `GET` | Get all users
**/api/users/:id** | `GET` | Get Single User
**/api/users/** | `POST` | Create a user
**/api/users/:id** | `DELETE` | Delete a user
**/api/users/:id** | `PUT` | Update data of a user
**/api/users/:id** | `PATCH` | Update data of a user with specific new info

### Filter routes

Routes | HTTP | Description
--- | --- | ---
**/api/users?name="{name}"** | `GET` | Get **{name}** matched in users list
**/api/users?name="{na}"** | `GET` | Get **{na}** like in users list
