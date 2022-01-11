# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com

## Front-End URL: https://potluck-planner-007.herokuapp.com/
---
## Auth API Endpoints

|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /authorization/register   | Body -> username, password    | person_id, username, password| registers and returns a new user   |
|POST     | /authorization/login   | Body -> username, password    | person_id, username, password, token| logs in an organizer and sends back JWT token  |

---

## User API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /user/:id   | Header -> Authorization:token  |person_id, username, password | returns a single user's information by id|
|DELETE     | /user/:id   | Header -> Authorization:token  | 1 if deleted, 0 if not | deletes a user by id|

---

## Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /user/:id/potlucks   | Header -> Authorization : token, Body -> event_name, description, event_date, event_time, location     |potluck_id, person_id, event_name, description, event_date, event_time, location| creates a potluck for a specific user|
|GET     | /user/:id/potlucks   | Header -> Authorization : token    | potluck_id, person_id, event_name, description, event_date, event_time, location| gets all potlucks from a user |
|GET     | /user/:id/potlucks/:potluckid   | Header -> Authorization:token     | potluck_id, person_id, event_name, description, event_date, event_time, location| gets single potluck by potluck ID |
|DELETE     | /user/:id/potlucks/:potluckid   |  Header -> Authorization:token     | 'Potluck Deleted!'| deletes single potluck  |

---

## Potluck Foods API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /potlucks/:potluckid/foods   | Header -> Authorization:token Body -> food_wanted |food_id, potluck_id, food_wanted | creates new food for a single potluck |
|GET     | /potlucks/:potluckid/foods   | Header -> Authorization:token    |food_id,potluck_id, food_wanted | list of foods for a single potluck|
|DELETE     | /potlucks/:potluckid/foods/:foodid   | Header -> Authorization:token | 'Food Deleted!'| deletes a single food item |


## Meet The Team

Brittany Petersen Front End React I Engineer

Github: https://github.com/BrittanyPete

LinkedIn: https://www.linkedin.com/in/brittany-petersen2021/

Jorge Evangelista Front End React I Engineer

Github: https://github.com/JorgeEvangelista500

LinkedIn: https://www.linkedin.com/in/jorge-evangelista/

Yuriko Takamiya Front End React I Engineer

Github: https://github.com/yuririnnnu

LinkedIn: https://www.linkedin.com/in/yuriko-takamiya/

Shivneel Prasad Front End Architect React II Engineer

Github: https://github.com/Shivneel-Prasad

LinkedIn: https://www.linkedin.com/in/shivneel-s-prasad/

Safia Omar Front End Architect React II Engineer

Github: https://github.com/SafiaOmar

LinkedIn: https://www.linkedin.com/in/safia-omar-913284221/

Tristan Harrower Backend Engineer

Github: https://github.com/tristanharrower

LinkedIn: https://www.linkedin.com/in/tristan-harrower-a8b0b5185/




