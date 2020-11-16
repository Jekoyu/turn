function zoomedIn() {
	if ($(".zoom-viewport").turn("value")==1)
		alert("No zoom");
	else if ($(".zoom-viewport").turn("value")>1)
		alert("Zoomed In");
}


function addPage(page, book) {
	var id, pages = book.turn('images');
	var element = $('<div />', {});

		if (book.turn('addPage', element, page)) {
		element.html('<div class="gradient"></div><div class="loader"></div>');
		loadPage(page, element);
	}

}

function loadPage(page, pageElement) {
	var img = $('<img />');
	img.mousedown(function(e) {
		e.preventDefault();
	});
	img.load(function() {
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		pageElement.find('.loader').remove();
	});
	img.attr('src', 'images/' +  page + '.jpg');

}


function loadLargePage(page, pageElement) {
	
	var img = $('<img />');

	img.load(function() {

		var prevImg = pageElement.find('img');
		$(this).css({width: '100%', height: '100%'});
		$(this).appendTo(pageElement);
		prevImg.remove();
		
	});
	// img.attr('src', 'images/' +  page + '-large.jpg');
	img.attr('src','images/'+ page +'.jpg');
}


function loadSmallPage(page, pageElement) {
	var img = pageElement.find('img');
	img.css({width: '100%', height: '100%'});
	img.unbind('load');
	img.attr('src', 'images/' +  page + '.jpg');
}


function isChrome() {


	return navigator.userAgent.indexOf('Chrome')!=-1;

}