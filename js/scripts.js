//Content/Functionality
//
//Collect at least 10 images by known artists/photographers (they can be your own) that have a theme in common.
//The site should display the images, the image titles, and 1 - 3 image tags for each.
//The user should be able to click on buttons to see all images with a particular tag.
//
//
//Code
//
//Use JavaScript object constructors and methods to manage the data connected to each image.
//Use CSS to control the appearance of the images.
//Populate the page with the images by modifying the DOM to insert the image data.
//
//
//Git
//
//Use version control to save key stages of your project. 
//Make at least 3 commits 
//Activate a GitHub page for your project.

function Quote(quoteText, author, tags, color) {
	this.quote = quoteText;
	this.author = author;
	this.tags = tags;
	this.color = color;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color)
		container.addClass("quote")

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";

		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}

var quotes = [
	new Quote('"We don\'t make mistakes, just happy little accidents."', "Bob Ross", ["painting", "mistakes"], "#0a3410"),
	new Quote('"Creativity takes courage"', "Henry Matisse", ["painting", "creativity"], "lightblue"),
	new Quote('"this is another one"', "Christine", ["tag1"], "violet")
]

//global taglist
var tagList = []

quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
		// check to see if tag has been added to taglist
		if(!tagList.includes(tag)) {
			// if it isnt added, add it
			tagList.push(tag);
			// and also make a button for it.
			$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
		}
	})
})
console.log(tagList)

$(".filter").on("click", function() {
	var tag = $(this).attr("id");
	console.log(tag)
	
	$(".quote").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")

})