var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "ab11eaac9c2b4258b918fff09d691f49");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function search() {
        apiSearch();
}

function toggleBackground() {
      var currentBackground = $('body').css('background-image');
      if (currentBackground.includes('ghost.jpg')) {
          $('body').css('background-image', 'url("pumpkin.jpg")'); 
      }
      else {
          $('body').css('background-image', 'url("ghost.jpg")'); 
      }
}

function showTimeDialog() {
    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    $('#time').html(currentTime);
    $('#time').dialog();
}
 
