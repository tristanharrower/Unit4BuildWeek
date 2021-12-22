# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com
---
## Organizer API Endpoints

|Method   | Endpoint      |Input    | Output  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /organizers   | n/a     | all organizers|   |
|POST     | /organizers/register   | username, password    | organizer_id, username, password| creates a new organizer   |
|POST     | /organizers/login   | username, password    | organizer_id, username, password, token| logs in an organizer and sends back JWT token  |
|GET     | /organizers/:id   | n/a    | organizer_id, username, password| gets organizer by id  |
|GET     | /organizers/:id/potlucks   | n/a    | potluck_id, organizer_id, event_name, description, event_date, event_time, location| gets all potlucks by organizer id  |
|DELETE     | /organizers/:id   | n/a    | message: organizer successfully deleted | deletes an organizer based on id  |

