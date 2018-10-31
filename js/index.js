// Making Side Menu Button Appear Or Disappear in Index.html Page
$(document).ready(function() {
  $(".side-menu-button").on("click", function() {
    $(".side-menu").toggleClass("show-menu");
  });
});

// Making All Collapses Close When One Open
var $myGroup = $("#table-data-group");
$myGroup.on("show.bs.collapse", ".collapse", function() {
  $myGroup.find(".collapse.show").collapse("hide");
});
