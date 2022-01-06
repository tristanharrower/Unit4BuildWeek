# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com

## Front-End URL: https://potluck-planner-007.herokuapp.com/
---
## Organizer API Endpoints

|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/register   | Body -> username, password    | organizer_id, username, password| registers and returns a new organizer   |
|POST     | /organizers/login   | Body -> username, password    | organizer_id, username, password, token| logs in an organizer and sends back JWT token  |
|GET     | /organizers/:id   | Header -> Authorization : token   | organizer_id, username, password| gets organizer by id,   |
|DELETE     | /organizers/:id   | Header -> Authorization : token  | message: organizer successfully deleted | deletes an organizer based on id  |

---

## Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/:id/potlucks   | Header -> Authorization : token, Body -> event_name, description, event_date, event_time, location     |potluck_id, organizer_id, event_name, description, event_date, event_time, location| creates a potluck for specific organizer|
|GET     | /organizers/:id/potlucks   | Header -> Authorization : token    | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets all potlucks from an organizer |
|GET     | /organizers/:id/potlucks/:potluckid   | Header -> Authorization:token     | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets single potluck by potluck ID |
|DELETE     | /organizers/:id/potlucks/:potluckid   |  Header -> Authorization:token     | 'Potluck Deleted!'| deletes single potluck  |

---

## Foods API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/:id/potlucks/:potluckid/foods   | Header -> Authorization:token Body -> food_wanted |food_id, potluck_id, food_wanted | creates new food for a single potluck |
|GET     | /organizers/:id/potlucks/:potluckid/foods   | Header -> Authorization:token    |list of foods for a single potluck| |
|DELETE     | /organizers/:id/potlucks/:potluckid/foods/:foodid   | Header -> Authorization:token | 'Food Deleted!'| deletes a single food item |


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




