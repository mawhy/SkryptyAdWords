function updateMasterA() {
var repArray = new Array();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var allSheets = ss.getSheets();
repArray.push("RaportA");
repArray.push("RaportB");  

// store all sheets in array
var sheetArray = [];

// loop through all rep sheets 
for (var j in repArray) {
// get each sheet
var tempSheet = ss.getSheetByName(repArray[j]);
// get sheet data
var dataRange = tempSheet.getDataRange().getValues();
// remove the first header row
dataRange.splice(parseInt(0), 1);

// append sheet data to array
var sheetArray = sheetArray.concat(dataRange); 
}
// Time to update the master sheet
var mSheet = ss.getSheetByName("MasterA");

// save top header row
var headerRow = mSheet.getRange(1,1,1,2).getValues();
// clear the whole sheet
mSheet.clear({contentsOnly:true});
// put back the header row
mSheet.getRange(1, 1, 1, 2).setValues(headerRow);
// write to the Master sheet via the array 
mSheet.getRange(2, 1, sheetArray.length, 2).setValues(sheetArray);
// force spreadsheet updates
SpreadsheetApp.flush();
// pause (1,000 milliseconds = 1 second)
Utilities.sleep(200);
// delete empty rows at bottom
var last = mSheet.getLastRow(); 
var max = mSheet.getMaxRows();
if (last !== max) {mSheet.deleteRows(last+1,max-last);}
}

function updateMasterB() {
var repArray = new Array();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var allSheets = ss.getSheets();
repArray.push("RaportC");
repArray.push("RaportD");  

// store all sheets in array
var sheetArray = [];

// loop through all rep sheets 
for (var j in repArray) {
// get each sheet
var tempSheet = ss.getSheetByName(repArray[j]);
// get sheet data
var dataRange = tempSheet.getDataRange().getValues();
// remove the first header row
dataRange.splice(parseInt(0), 1);

// append sheet data to array
var sheetArray = sheetArray.concat(dataRange); 
}
// Time to update the master sheet
var mSheet = ss.getSheetByName("MasterB");

// save top header row
var headerRow = mSheet.getRange(1,1,1,2).getValues();
// clear the whole sheet
mSheet.clear({contentsOnly:true});
// put back the header row
mSheet.getRange(1, 1, 1, 2).setValues(headerRow);
// write to the Master sheet via the array 
mSheet.getRange(2, 1, sheetArray.length, 2).setValues(sheetArray);
// force spreadsheet updates
SpreadsheetApp.flush();
// pause (1,000 milliseconds = 1 second)
Utilities.sleep(200);
// delete empty rows at bottom
var last = mSheet.getLastRow(); 
var max = mSheet.getMaxRows();
if (last !== max) {mSheet.deleteRows(last+1,max-last);}
}
// funnction add column
function updateMasterC() {
var repArray = new Array();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var masterASheet = ss.getSheetByName("MasterA");
var masterBSheet = ss.getSheetByName("MasterB");  
//save column B from MasterA
var last = masterASheet.getLastRow();
var columnB = masterASheet.getRange(1,2,last,1).getValues(); 
masterBSheet.getRange(1, 3, last, 1).setValues(columnB);  
// get sheet data
// force spreadsheet updates
SpreadsheetApp.flush();
// pause (1,000 milliseconds = 1 second)
Utilities.sleep(200);
}
