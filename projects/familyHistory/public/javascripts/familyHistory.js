$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {name:$("#name").val(),id:$("#id").val(),birth_place:$("#birth_place").val(),baptism:$("#baptism").val(),confirmation:$("#confirmation").val()}
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
          everything += "<li>name: " + com.name + " --id: " + com.id + " -- birthplace: " + com.birth_place + " --baptism " + com.baptism + " -- confirmation " + com.confirmation + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
});

