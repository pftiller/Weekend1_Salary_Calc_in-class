$(document).ready(readyNow);

function readyNow() {
  console.log('JQ');
$('#submitBtn').on('click', submitClick);
}

function submitClick() {
  var salary = $('#salary').val();
  console.log('button clicked:', salary);
}
