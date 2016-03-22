$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {first:$("#first").val(),last:$("#last").val(),birth_place:$("#birth_place").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);

	
       var url = "familyHistory";
        $.ajax({
        url:url,
        type: "POST",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
        $("#done").html(textStatus);
        }
      })
    });

   $("#getThem").click(function() {
      $.getJSON('familyHistory', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var familyHistory in data) {
          com = data[familyHistory];
          everything += "<li>first: " + com.first + " -- last: " + com.last + " -- birthplace: " + com.birth_place + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
});

