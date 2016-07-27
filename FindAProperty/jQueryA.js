$(function() {
	$("#spinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	$("#spinner2").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	  $("#property").selectmenu();
});

$(function() {
	  $("#time").selectmenu();
});


$(function() {
	$("#slider-range").slider({
		range:true,
		min: 249500,
		max: 750000,
		values: [ 75, 300 ],
		slide: function( event, ui ){
			$("#amount").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#amount").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});


$(function() {
	$( "#Search" ).on("click", function(){
		
		var propType = $("#property").val();
	    var maxBed =  $("#spinner").val();
        var minBed =  $("#spinner2").val();
		var date =  $("#time").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propType == data.properties[i].type) || (propType=="Any"))
			   if (( minBed >= data.properties[i].bedrooms && maxBed <= data.properties[i].bedrooms ))
			   if (( date == data.properties[i].added.month) || (date=="Anytime"))
			   if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice ))
			   {
				   {
					   {
						   {
							   output+="<h2><li>" + "£" + data.properties[i].price +"</li></h2>" + "<img src=" + data.properties[i].picture + ">" + "<p>" + data.properties[i].description + "</p>" + "<button><a href='" + data.properties[i].url + "'>Visit Page</a></button>";
						   } } } } }
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});