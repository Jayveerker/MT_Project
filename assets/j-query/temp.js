var items = $(".cards .cards-title");
var numItems = items.length;
var perPage = 8;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
