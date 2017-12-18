$(document).ready(readyNow);

var averageSalary = 0;

function readyNow() {
  console.log('JQ');
$('#submitBtn').on('click', submitClick);
}

function submitClick() {
  var salary = $('#salary').val();
  console.log('button clicked:', salary);
  $('#output').append('<p>' + salary + '</p>');
  averageSalary += salary / 12;
  $('#averageSalary').html('<strong>' + averageSalary + '</strong>');
}
