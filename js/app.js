$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyA1RfI5BTkn10GI4KvzlTn5l2qxmfW9I2Q',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}

function showResults(results){
	var html = "";
	$.each(results, function(index, value){
		var thumbId = value.id.videoId;
		html += '<a href="https://www.youtube.com/watch?v=' + thumbId + '"><img src="' + value.snippet.thumbnails.default.url + '"></a><br/>';
	});
	$('#search-results').html(html);
}