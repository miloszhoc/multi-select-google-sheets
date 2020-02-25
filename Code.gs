// In order to add next option: 
// 1. In view.html add:
//   <label class="container">
//       X - this is visible in dialog box
//       <input name= 'x' type="checkbox" value="x" /> - name should be unique, value is visible in your sheet
//       <span class="checkmark"></span>
//   </label>
// 2. In processForm function add "options.push(formObject.x);" line, 
// where x is input's name from form in view.html (eg. "<input name= 'option3' type="checkbox" value="option3" />").
// 3.Create new button and assign showDialog function to it.


// get current cell eg. D11
function get_current_cell() {
  var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
  var currentCell = selection.getCurrentCell();
  return currentCell;
}

// generates modal with checkboxes (form in view.html file)
function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('view') // html file name
      .setWidth(400) 
      .setHeight(300);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Box title'); // -----EDIT HERE BOX TITLE-----
}


// reads data from submitted form, filter out all null values and set current cell value to selected options
function processForm(formObject) {
  var options=[];
  options.push(formObject.option1);
  options.push(formObject.option2);
  options.push(formObject.option3);
  // ----ADD NEXT OPTION HERE-----
  
  var options = options.filter(function (x) {return x != null;}); // filter out all null values
  options = options.join(', ');  // combine list values into one string string with comma as a delimiter 
  current_cell = get_current_cell(); // get selected cell
  current_cell.setValue(options); // put string into cell
 }