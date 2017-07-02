$(document).ready(function() {
	/*$("#submitNewPost").click(function() {
		//alert("submit caled");
		var jsonObj = {};
		jsonObj.title = $("#inputTitle").prop("value");
		jsonObj.body = $("#inputPost").prop("value");
		jsonObj.username = $("#inputUsername").prop("value");

		$.ajax({
			type: "POST",
			url: "/blog",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(jsonObj),
			success: function(jsonData) {
				location.reload();
			},
			error: function(jsonData) {
				alert("some error occurred " + jsonData.error);
			}
		});
	}); */

	$(".editButton").click(function() {
		//alert("edit caled");
		var id = $(this).parent().attr("id");
		console.log("id is " + id);
		$("#" + id + ".blogPost .titleInput").show();
		$("#" + id + ".blogPost .titleSpan").hide();
		$("#" + id + ".blogPost .bodyInput").show();
		$("#" + id + ".blogPost .bodySpan").hide();

		$("#" + id + ".blogPost .editButton").hide();
		$("#" + id + ".blogPost .deleteButton").hide();
		$("#" + id + ".blogPost .postButton").show();
	});
	
	$(".postButton").click(function() {
		//alert("submit caled");
		var id = $(this).parent().attr("id");
		var jsonObj = {};
		jsonObj.title = $("#" + id + ".blogPost .titleInput").prop("value");
		jsonObj.body = $("#" + id + ".blogPost .bodyInput").prop("value");
		//jsonObj.id = id;
		$.ajax({
			type: "PATCH",
			url: "/blogs/" + id,
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(jsonObj),
			success: function(jsonData) {
				location.reload();
			},
			error: function(jsonData) {
				alert("some error occurred " + jsonData.error);
			}
		});
	});
/*
	$(".deleteButton").click(function() {
		//alert("delete caled");
		var id = $(this).parent().attr("id");
		var jsonObj = {};
		jsonObj.id = id;
		$.ajax({
			type: "DELETE",
			url: "/blogs",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(jsonObj),
			success: function(jsonData) {
				location.reload();
			},
			error: function(jsonData) {
				alert("some error occurred " + jsonData.error);
			}
		});
	});*/
});