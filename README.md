# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com
---
## Organizer API Endpoints

|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /organizers   | n/a     | gets all organizers|   |
|POST     | /organizers/register   | username, password    | organizer_id, username, password| creates and returns a new organizer   |
|POST     | /organizers/login   | username, password    | organizer_id, username, password, token| logs in an organizer and sends back JWT token  |
|GET     | /organizers/:id   | n/a    | organizer_id, username, password| gets organizer by id, :id=organizer_id  |
|GET     | /organizers/:id/potlucks   | n/a    | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets all potlucks by organizer id, :id=organizer_id  |
|DELETE     | /organizers/:id   | n/a    | message: organizer successfully deleted | deletes an organizer based on id, :id=organizer_id  |

---

## Potlucks API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /potlucks   | n/a     | all potlucks| gets all potlucks   |
|POST     | /potlucks   | Header -> Authorization : token, Body -> organizer_id, event_name, description, event_date, event_time, location     |potluck_id, organizer_id, event_name, description, event_date, event_time, location| creates a potluck and connects to organizer using organizer_id in request body   |
|GET     | /potlucks/:id   | Header -> Authorization:token     | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets potluck by potluck ID, :id=potluck_id   |

---

## Foods API Endpoints
|Method   | Endpoint      |Request    | Response  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|POST     | /foods   | potluck_id, food_wanted     |food_id, potluck_id, food_wanted | creates new food for specific potluck|
|GET     | /foods/:id   | n/a    |list of foods for that specific potluck| The id in the url corresponds to the potluck_i, :id=potluck_id  |




