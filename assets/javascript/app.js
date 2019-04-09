
var animals = ["cat", "dog", "shark", "lion", "bat", "bee", "bird", "Bear", "fish", "tiger", "deer", "duck", "eagle"];

var button;
var newTopic = "";


var buttonCreator = function (){
	
	 $("#animal-input").empty();
	
	for(i = 0; i < animals.length; i++) {
		button = $("<input type=" + "submit" + ">" + animals[i] + "</form>").addClass("btn btn-warning").attr("data",animals[i]);
		$("#animal-input").append(button);
	};
}

$("#animal-input").on("click", ".btn", function(){
  		var search = $(this).attr("data");
  		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "=JE3JWkUgCeR9PHKu5SKEcikiiAEmpP4b&limit=30";
   
  		$.ajax({
  			url: queryURL,
  			method: "GET" 

  		}).done(function(response){
  			console.log(response);
        console.log(results);
        
          	var results = response.data;

          	for (var i = 0; i < results.length; i++) {
          		
	          	var topicDiv = $("<div>");
	 			
 			}
  		})
  })



$("#gifArea").on("click", ".gif", function(event){
	event.preventDefault();
	
	var animate = $(this).attr("data-animate");
	
	
	if (animate === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-animate", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-animate", "still");
  }

})

$(".submit").on("click", function(event){
	event.preventDefault();

	console.log("submit");
	
	newTopic = $("#topic-input").val();
	
	topics.push(newTopic);
  
  console.log(topics);
	
	buttonCreator();
});

buttonCreator();