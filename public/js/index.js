// Get references to page elements
var $ownedTixDropdown = $("#own-tix");
var $wantTixDropdown = $("#wanted-tix");
var $findMatchButton = $("#find-match-btn");
//var $exampleList = $("#example-list");

//save ticket type owned and ticket type wanted
//query db for ticket of type wanted (select * from tickets where type = 'volcano-bay')
//return results in a new table displayed on the results page
//messages

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/addtransaction",
      data: JSON.stringify(example)
    });
  },
  getTicketMatches: function() {
    return $.ajax({
      url: "api/ticketmatches",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/deletetransaction/:" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshTicketMatches = function() {
  API.getTicketMatches().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

$(".ticket-options").on("click", function(event){
  function showImage(){
    document.getElementById("loadingImage").style.visibility="visible";
}
showImage();
event.preventDefault();
});

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);



$(document).ready(function(){
  var nameInput = $("#name");
  var usernameInput = $("#username");

  $(document).on("submit",)
getExperiences();

function getExperinces(){
  $.get("/api/experiences", function(data){
    var rowsToAdd =[];
    for(var i = 0; i <data.length; i ++){
      rowsToAdd.push(createExperienceRow(data[i]));
    }
    renderExperienceList(rowsToAdd);
    nameInput.val("");
  })
}




})