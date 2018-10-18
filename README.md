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

## Further Improvements
Some features I might add in the future to get me started.
- ~~A Landing Page~~
- Ability to delete all objects.
- Filtered objects on GET request.
- Adapt this basic rest api to store movie data. See[project](https://github.com/evanhiroshige/Movie-Recommendations) I'm working on with a friend.
