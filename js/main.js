(function () {

	function updateQueryStringParameter(uri, key, value) {
	  var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
	  separator = uri.indexOf('?') !== -1 ? "&" : "?";
	  if (uri.match(re)) {
	  	console.log(uri.replace(re, '$1' + key + "=" + value + '$2'));
	    return uri.replace(re, '$1' + key + "=" + value + '$2');
	  }
	  else {
	  	console.log(uri + separator + key + "=" + value);
	    return uri + separator + key + "=" + value;
	  }
	};

	$('a').on('click', function (event) {
		that = $(this);
		thatQuery = that.attr('data-tracking');
		event.preventDefault();
		location = updateQueryStringParameter(location.href, 'page', thatQuery);
	});
})();
