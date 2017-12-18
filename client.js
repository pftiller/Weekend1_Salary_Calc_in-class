$(document).ready(readyNow);

var averageSalary = 0;

function readyNow() {
  console.log('JQ');
$('#submitBtn').on('click', submitClick);
$('#output').on('click', '.delete', deleteRow);
}

function submitClick() {
  var salary = $('#salary').val();
  var row = $('<tr></tr>');
  row.append('<td>' + $('#first').val() + '</td>');
  row.append('<td>' + $('#last').val() + '</td>');
  row.append('<td>' + $('#title').val() + '</td>');
  row.append('<td class="tdSalary">' + $('#salary').val() + '</td>');
  row.append('<td>' + $('#empID').val() + '</td>');
  row.append('<td><button class="delete">Delete</button></td>');
  console.log('button clicked:', salary);
  $('#output').append(row);
  averageSalary += salary / 12;
  $('#averageSalary').html('<strong>' + averageSalary + '</strong>');
  $('#inputs input').val('');
}
function deleteRow(){
  var empSalary = $(this).closest('tr').find('.tdSalary').text();
  empSalary = averageSalary -= empSalary /12;
  $(this).closest('tr').remove();
}
