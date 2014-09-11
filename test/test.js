$(document).ready(function() {
	function getKey(container, key)
	{
		container.html(JSON.stringify($.fn.toLocalStorage("getItem", key)));
	}

	$("#addRamones").click(function() {
		
		var ramones = ["Dee Dee Ramone", "Johnny Ramone", "Joey Ramone", "Tommy Ramone", "Marky Ramone"];
		
		$(ramones).toLocalStorage("setItem", { Key: "theRamones", ExpirationInMinutes: 60 });
		
		getKey($("#ramonesList"), "theRamones");
	});
	
	$("#addOffspring").click(function() {
		
		var offspring = ["Dexter Holland", "Greg K.", "Noodles", "Pete Parada"];
		
		$(offspring).toLocalStorage("setItem", { Key: "theOffspring", ExpirationInMinutes: 1 });
		
		getKey($("#offspringList"), "theOffspring");
	});
	
	function kill() {
		$.fn.toLocalStorage("clear", "theRamones");
		$.fn.toLocalStorage("clear", "theOffspring");
	}
	
	$("#kill").click(function() {
		$.when(kill())
		.done(function() {
			getKey($("#ramonesList"), "theRamones");
			getKey($("#offspringList"), "theOffspring");
		});
	})
	
	getKey($("#ramonesList"), "theRamones");
	getKey($("#offspringList"), "theOffspring");
	
});