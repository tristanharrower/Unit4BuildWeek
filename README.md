# API Endpoints

## Deployed URL (root URL): https://lambda-build-week.herokuapp.com
---
## Organizer API Endpoints

|Method   | Endpoint      |Input    | Output  | Notes  |
|------   | -----------   | ------- | ------- | ------ |
|GET     | /organizers   | n/a     | all organizers|   |
|POST     | /organizers/register   | username, password    | organizer_id, username, password|   |
|POST     | /organizers/login   | username, password    | organizer_id, username, password, token|   |
|DELETE     | /organizers/:id   | n/a    | message: organizer successfully deleted |   |

