# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com

## Front-End URL: https://potluck-planner-client.herokuapp.com
---
## Auth API Endpoints

|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /authorization/register   | Body -> email, username, password    | email, person_id, username, password| registers and returns a new user   |
|POST     | /authorization/login   | Body -> email, password    | person_id, email,  username, password, token| logs in an organizer and sends back JWT token  |

---

## User API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /user  | Header -> Authorization:token  |person_id, username, password, created_at, updated_at | returns a list of all user's|
|GET     | /user/:userid   | Header -> Authorization:token  |person_id, email,  username, password | returns a single user's information by id|
|PUT     | /user/:userid   | Header -> Authorization:token  |person_id, email,  username, password | updates a user by person_id|
|DELETE     | /user/:userid   | Header -> Authorization:token  | 1 if deleted, 0 if not | deletes a user by id|

---

## Organizer Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /potlucks   | Header -> Authorization : token, Body -> person_id, username, event_name, description, event_date, event_time, location, role     |potluck_id, person_id, username, event_name, description, event_date, event_time, location, role| organizes a potluck for a user|
|GET     | /potlucks   | Header -> Authorization : token   | potluck_id, person_id, username, event_name, description, event_date, event_time, location, role| gets all organized potlucks, specify req in params|
|PUT     | /potlucks/:potluckid   |  Header -> Authorization:token, Body -> person_id, username,event_name, description, event_date, event_time, location, role     | potluck_id, username, person_id, event_name, description, event_date, event_time, location| updates potluck by potluck_id  |
|DELETE     | /potlucks/:potluckid   |  Header -> Authorization:token     | 'Potluck Deleted!'| deletes single potluck  |

---

## Attending Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /attending-potlucks   | Header -> Authorization : token, Body ->(potluck_id, person_id, username,) event_name, description, event_date, event_time, location, role     |potluck_id, person_id, username, event_name, description, event_date, event_time, location, role| attends a potluck for a user|
|GET     | /attending-potlucks   | Header -> Authorization : token    | potluck_id, person_id, username, event_name, description, event_date, event_time, location, role| gets all attending potlucks, specify req in params|
|DELETE     | /attending-potlucks/:potluckid   |  Header -> Authorization:token, Body -> person_id     | User {req.body.person}_id no longer attending Potluck: {req.params.potluckid}| deletes single attending potluck  |
---

## Potluck Foods API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /potlucks/:potluckid/foods   | Header -> Authorization:token Body -> food_wanted |food_id, potluck_id, food_wanted | creates new food for a single potluck |
|GET     | /potlucks/:potluckid/foods   | Header -> Authorization:token    |food_id,potluck_id,username,food_wanted | list of foods for a single potluck|
|PUT     | /potlucks/:potluckid/foods/:foodid   | Header -> Authorization:token    |food_id,potluck_id, person_id, food_wanted | updates food by food_id|
|DELETE     | /potlucks/:potluckid/foods/:foodid   | Header -> Authorization:token | 'Food Deleted!'| deletes a single food item |


## Meet The Team

Tristan Harrower Frontend and Backend Engineer

Github: https://github.com/tristanharrower

LinkedIn: https://www.linkedin.com/in/tristan-harrower-a8b0b5185/

To-do: Re-create Front End using React and Redux!



