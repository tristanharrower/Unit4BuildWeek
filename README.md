# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com

## Front-End URL: https://potluck-planner-007.herokuapp.com/
---
## Organizer API Endpoints

|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/register   | Body -> username, password    | organizer_id, username, password| registers and returns a new organizer   |
|POST     | /organizers/login   | Body -> username, password    | organizer_id, username, password, token| logs in an organizer and sends back JWT token  |
|GET     | /organizers/:id   | Header -> Authorization : token   | organizer_id, username, password| gets organizer by id, :id=organizer_id  |
|DELETE     | /organizers/:id   | Header -> Authorization : token  | message: organizer successfully deleted | deletes an organizer based on id, :id=organizer_id  |

---

## Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/:id/potlucks   | Header -> Authorization : token, Body -> event_name, description, event_date, event_time, location     |potluck_id, organizer_id, event_name, description, event_date, event_time, location| creates a potluck for specific organizer, :id=organizer_id|
|GET     | /organizers/:id/potlucks   | Header -> Authorization : token    | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets all potlucks from an organizer, :id=organizer_id  |
|GET     | /organizers/:id/potlucks/:potluckid   | Header -> Authorization:token     | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets single potluck by potluck ID, :id=potluck_id   |
|DELETE     | /organizers/:id/potlucks/:potluckid   |  Header -> Authorization:token     | 'Potluck Deleted!'| deletes single potluck, :id=organizer_id  |

---

## Foods API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /organizers/:id/potlucks/:potluckid/foods   | Header -> Authorization:token Body -> food_wanted |food_id, potluck_id, food_wanted | creates new food for a single potluck, :id=organizer_id|
|GET     | /organizers/:id/potlucks/:potluckid/foods   | Header -> Authorization:token    |list of foods for a single potluck| :id=organizer_id |
|DELETE     | /organizers/:id/potlucks/:potluckid/foods/:foodid   | Header -> Authorization:token | 'Food Deleted!'| deletes a single food item, :id=food_id  |




