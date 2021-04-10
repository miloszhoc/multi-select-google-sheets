function get_options() {
  //get values from first column in first row
  var row = 1;
  var col = 1;

  var value = SpreadsheetApp.getActiveSheet().getRange(row, col).getValue();
  values_list = value.split(',');
  return values_list;
}


function get_current_cell() {
  // get current cell eg. D11
  var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
  var currentCell = selection.getCurrentCell();
  return currentCell;
}

function showDialog() {
  // generates modal with checkboxes (form in view.html file)
  var html = HtmlService.createHtmlOutputFromFile('view') // html file name
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi()
    .showModalDialog(html, 'Box title'); // -----EDIT HERE BOX TITLE-----
}


function processForm(formObject) {
  // reads data from submitted form, filter out all null values and set current cell value to selected options
  var options = [];
  for (let i in formObject) {
    options.push(i);
  }

  var options = options.filter(function (x) { return x != null; }); // filter out all null values
  options = options.join(', ');  // combine list values into one string string with comma as a delimiter 
  current_cell = get_current_cell();
  current_cell.setValue(options);
}