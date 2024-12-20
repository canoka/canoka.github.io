var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);


$(".stagger").fadeIn();

$( document ).ready(function() {
	$(".stagger").show();
	var numbersString = $(".stagger").text();
	var numbersArray = numbersString.split(' ');
	$(".stagger").html(" ");
	$.each(numbersArray, function(index, value) { 
		$(".stagger").append('<span class="stagger--item">' + value + ' </span>');
	});
	TweenMax.staggerTo(".stagger--item", 1, {css:{color:"#D3D3D3"}, delay:0.5, force3D:true}, 0.125);
});
