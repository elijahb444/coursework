const formEl = $('#skills-form');
const nameInputEl = $('#skill-name');
const dateInputEl = $('#datepicker');
const skillsListEl = $('#skills-list');

const printSkills = function (name, date) {
  const listEl = $('<li>');
  const listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = nameInputEl.val();
  const dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here
//
<<<<<<< HEAD
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#skill-name" ).autocomplete({
    source: availableTags
  });
} );
// Add Datepicker widget here
//
$( function() {
  $( "#datepicker" ).datepicker();
} );
=======

// Add Datepicker widget here
//
>>>>>>> c7636dc67ef98ece8fc11f8c979d38ca6b8dcd7d
