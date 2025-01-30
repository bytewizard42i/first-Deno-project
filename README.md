Start by initializing the server with:
deno run --allow-net <main.ts or path to file for exe>

If the file has multiple API endpoints, the server will state that it is listening on port 8000. In this case, open a new terminal to serve as the client, as the main terminal is now "the server"

## API Endpoints

| **Endpoint**   | **Description**                           | **Example Response** |
|---------------|---------------------------------------|----------------------|
| `/hello`      | Returns a simple hello message       | `{ "message": "Hello, World!" }` |
| `/greet`      | Returns a greeting message          | `"Greetings from Deno!"` |
| `/data`       | Returns a structured JSON object    | `{ "id": 1, "name": "Alice", "role": "Developer" }` |
| `/time`       | Returns the current server time in ISO format | `{ "time": "2025-01-29T12:34:56.789Z" }` |
| `/status`     | Provides a status message about the server | `{ "status": "Server is running smoothly!" }` |
| `/random`     | Returns a random number between 1 and 100 | `{ "number": 42 }` |
| *Any other path* | Returns a `404 Not Found` response | `"Endpoint not found"` |

New Endpoints Added
Endpoint	Description	Example Response
/hello	Returns a simple hello message	{ "message": "Hello, World!" }
/greet	Returns a greeting message	"Greetings from Deno!"
/data	Returns a structured JSON object	{ "id": 1, "name": "Alice", "role": "Developer" }
/time	Returns the current server time in ISO format	{ "time": "2025-01-29T12:34:56.789Z" }
/status	Provides a status message about the server	{ "status": "Server is running smoothly!" }
/random	Returns a random number between 1 and 100	{ "number": 42 }
Any other path	Returns a 404 Not Found response	"Endpoint not found"
How to Test the Endpoints with curl
After starting your server with:

bash
Copy
Edit
deno run --allow-net --watch main.ts
You can test each endpoint:

Basic Hello World:

bash
Copy
Edit
curl http://localhost:8000/hello
Response:

json
Copy
Edit
{"message":"Hello, World!"}# first-Deno-project
