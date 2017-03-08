/**
 * Created by Ariel on 3/7/2017.
 */

// our api key
var key = "a1699c1cddf743888c4fca0bbf277bbc";
// building query url
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
        'api-key': key;
    });
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    console.log(result);
}).fail(function(err) {
    throw err;
});