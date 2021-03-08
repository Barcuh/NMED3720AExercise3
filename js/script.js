function Image(image, quote, tags, color) {
    this.imageItem = image;
    this.quoteItem = quote;
    this.tags = tags;
    this.color = color;

    this.display = function () {
        var container = $("<div>");
        this.tags.forEach(function (tag) {
            container.addClass(tag);
        })

        container.css("background", this.color);
        container.addClass("image");

        var quoteString = "";
        var imageString = "";
        imageString += "<img src=" + this.imageItem + ">";
        imageString += "<p>" + this.quoteItem + "</p>";

        container.html(imageString);

        $(".images").prepend(container);
    }
}
//"images/bulldog.jpg"
//"images/chowchow.jpg"

var images = [
	new Image("images/hot1.jpg", "Heart of Tyre", ["HeartofTyre", "Single"], "#ff726f"),
	new Image("images/hot2.jpg", "Heart of Tyre", ["HeartofTyre", "Single"], "#ff726f"),
	new Image("images/hot3.jpg", "Heart of Tyre", ["HeartofTyre", "Group"], "#ff726f"),
    new Image("images/sas1.jpg", "Steel and Silence", ["SteelandSilence", "Single"], "#6fcdff"),
    new Image("images/sas2.jpg", "Steel and Silence", ["SteelandSilence", "Group"], "#6fcdff"),
    new Image("images/sc1.jpg", "ShatteredCrowns", ["ShatteredCrowns", "Group"], "#e6d088"),
    new Image("images/sc2.jpg", "ShatteredCrowns", ["ShatteredCrowns", "Group"], "#e6d088"),
    new Image("images/sc3.jpg", "ShatteredCrowns", ["ShatteredCrowns", "Group"], "#e6d088"),
    new Image("images/hc1.jpg", "HeraldsCall", ["HeraldsCall", "Group"], "#786fff"),
    new Image("images/hc2.jpg", "HeraldsCall", ["HeraldsCall", "Single"], "#786fff")
]

//global taglist
var tagList = [];

images.forEach(function (image) {
    image.display();
    image.tags.forEach(function (tag) {
        // check to see if tag has been added to taglist
        if (!tagList.includes(tag)) {
            // if it isnt added, add it
            tagList.push(tag);
            // and also make a button for it.
            $(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>");
        }
    })
})
console.log(tagList);

$(".filter").on("click", function () {
    var tag = $(this).attr("id");
    console.log(tag);

    $(".image").not("." + tag).hide();
    $("." + tag).fadeIn();

    $(".filter").removeClass("active");
    $(this).addClass("active");
})
