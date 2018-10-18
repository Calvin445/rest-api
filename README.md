# rest-api

## Running the API locally
- In server.js, set on line 17
```javascript
const database = dbConfig.local;
```
- Using MongoDB
```bash
$ mongod
```
```bash
$ node server.js
```
- And you're good to go!

## Heroku
- go to https://calvin-rest-api.herokuapp.com/ to see the landing page on Heroku.

## Testing
- Import the collection tests/Rest API Test Collection.postman_collection.json into Postman
- Set the environment appropriately (heroku or local)
- Use the Collection Runner to run the requests

## Further Improvements
Some features I'd like to add in the future...
- ~~A Landing Page~~
- Ability to delete all objects.
- Filtered objects on GET request.
- Adapt this API to query movie data. See this [project](https://github.com/evanhiroshige/Movie-Recommendations) I'm working on with a friend.
