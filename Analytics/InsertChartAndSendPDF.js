'use strict';
function doGet(e) {
 return HtmlService.createTemplateFromFile('index.html')
 .evaluate()
 .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
function onOpen(e) {
 SpreadsheetApp.getUi()
 .createMenu('Wykres')
 .addItem('W oknie dialogowym', 'showDialogChart')
 .addItem('Jako Sidebar', 'showSideBarChart')
 .addItem('Wstaw w arkusz', 'buildChart')
 .addItem('Wyślij PDF', 'exportSomeSheets')
 .addToUi();
}
/**
 * get the getPassengerData
 */
function getData() {
 // get the data in the active sheet
 var sheet = SpreadsheetApp.getActiveSheet();
 // if there is no sheet, then fallback to a specific sheet/spreadsheet
 // because we are executing as a webapp
 if (!sheet){
 sheet = SpreadsheetApp
 .openById('13kBi8B6jh21GhSTULexcMFbtuFCCfdTYfQanaAvIBV8')
 .getSheetByName('Passengers');
 }
 // just return the whole dataset
 return sheet.getDataRange().getValues();
}
function showDialogChart() {
 var html = HtmlService.createTemplateFromFile('index.html')
 .evaluate()
 .setSandboxMode(HtmlService.SandboxMode.IFRAME)
 .setWidth(400)
 .setHeight(300);
 SpreadsheetApp.getUi().showModalDialog(html, 'chart using gviz');
}
function showSideBarChart() {
 var ui = HtmlService.createTemplateFromFile('index.html')
 .evaluate()
 .setSandboxMode(HtmlService.SandboxMode.IFRAME)
 .setTitle('chart using gviz');
 SpreadsheetApp.getUi().showSidebar(ui);
}

function buildChart() {
 // get the sheet
 var sheet = SpreadsheetApp.getActiveSheet();
 // make a new chart, with top 10
 sheet.insertChart(
 sheet.newChart()
 .addRange(sheet.getRange(1,1, 11, 2))
 .setChartType (Charts.ChartType.BAR)
 .setOption('title' , 'Domestic US Passenger volumes 2014')
 .setPosition(1, sheet.getLastColumn()+1,0,0)
 .build()
 );
}


// Simple function to send Weekly Status Sheets to contacts listed on the "Contacts" sheet in the MPD.

// Load a menu item called "Project Admin" with a submenu item called "Send Status"
// Running this, sends the currently open sheet, as a PDF attachment


function exportSomeSheets() {
  // Set the Active Spreadsheet so we don't forget
  var originalSpreadsheet = SpreadsheetApp.getActive();
  
  // Set the message to attach to the email.
  var message = "Please see attached"; // Could make it a pop-up perhaps, but out of wine today
  
  // Get Project Name from Cell A1
  // var projectname = originalSpreadsheet.getRange("A1:A1").getValues(); 
  var projectname = "Raport";
  // Get Reporting Period from Cell B3
  //var period = originalSpreadsheet.getRange("B3:B3").getValues(); 
  var period = "Dziś";
  // Construct the Subject Line
  var subject = projectname + " - Weekly Status Sheet - " + period;

      
  // Get contact details from "Contacts" sheet and construct To: Header
  // Would be nice to include "Name" as well, to make contacts look prettier, one day.
  //var contacts = originalSpreadsheet.getSheetByName("Contacts");
  //var numRows = contacts.getLastRow();
  //var emailTo = contacts.getRange(2, 2, numRows, 1).getValues();
  var emailTo = "mmalaj@gmail.com";
  // Google scripts can't export just one Sheet from a Spreadsheet
  // So we have this disgusting hack

  // Create a new Spreadsheet and copy the current sheet into it.
  var newSpreadsheet = SpreadsheetApp.create("Spreadsheet to export");
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var projectname = SpreadsheetApp.getActiveSpreadsheet();
  sheet = originalSpreadsheet.getActiveSheet();
  sheet.copyTo(newSpreadsheet);
  
  // Find and delete the default "Sheet 1", after the copy to avoid triggering an apocalypse
  newSpreadsheet.getSheetByName('Arkusz1').activate();
  newSpreadsheet.deleteActiveSheet();
  
  // Make zee PDF, currently called "Weekly status.pdf"
  // When I'm smart, filename will include a date and project name
  //var pdf = DocsList.getFileById(newSpreadsheet.getId()).getAs('application/pdf').getBytes();
  var pdf = DriveApp.getFileById(newSpreadsheet.getId()).getAs('application/pdf').getBytes();
  var attach = {fileName:'Weekly Status.pdf',content:pdf, mimeType:'application/pdf'};

  // Send the freshly constructed email 
  MailApp.sendEmail(emailTo, subject, message, {attachments:[attach]});
  
  // Delete the wasted sheet we created, so our Drive stays tidy.
  DriveApp.getFileById(newSpreadsheet.getId()).setTrashed(true);  
}