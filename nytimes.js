/**
 * Created by Ariel on 3/7/2017.
 */
$("#search").on("click", function () {
event.preventDefault();


// our api key
    var key = "a1699c1cddf743888c4fca0bbf277bbc";
// building query url
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    var searchTerm = $("#search-term").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();

    url += '?' + $.param({
            'api-key': key,
            'q': searchTerm,
            'begin_date': startYear + "0101",
            'end_date': endYear + "1231",
        });
    console.log(url);
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(response) {
        var results = response.response.docs;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var articleDiv = $("<div class='article'>").addClass("indiv-article well");
            var headline = results[i].headline.main;
            var a = $("<a>");
            articleDiv.append(headline + "<br>").addClass("heading");


            var author = results[i].byline.original;
            if (typeof author !== 'undefined') {
                console.log(author);
                 articleDiv.append(author + "<br>");
            }

            var pubDate = results[i].pub_date;
            var webLink = results[i].web_url;
            a.text(webLink);
            articleDiv.append(pubDate + "<br>");
            articleDiv.append(a);

            $("#article-dump").prepend(articleDiv);

        }


    }).fail(function(err) {
        throw err;
    });


})
