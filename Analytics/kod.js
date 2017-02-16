function runDrive(){
UserPerMonth2016();
Utilities.sleep(200);
UserPerMonth2015();
Utilities.sleep(200);
GoalClickTel();  
Utilities.sleep(200);  
GoalClickEmail();
Utilities.sleep(200);
Goal3Minuts();
Utilities.sleep(200);
Goal5Minuts();
Utilities.sleep(200);
Goal5Pages();
Utilities.sleep(200);
SourceGoal();
Utilities.sleep(200);
AvgTimeOnPage();
Utilities.sleep(200);
PageViewPerSession();
Utilities.sleep(200);
TopBrowsers(); 
Utilities.sleep(200);
TopCountry();
Utilities.sleep(200);
TimeLoadingPage();
Utilities.sleep(200);
Devices();
Utilities.sleep(200);
City();
Utilities.sleep(200);
BestPage();
Utilities.sleep(200);
BounceRate();   
}


Setting = {
  ProfileId:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("B1").getValue(),
  DayStart:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C2").getValue(),
  DayEnd: SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C3").getValue(),
  DayStartYear2016:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C6").getValue(),
  DayEndYear2016:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C7").getValue(),
  DayStartRaportA:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C8").getValue(),
  DayEndRaportA:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C9").getValue(),
  DayStartRaportB:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C10").getValue(),
  DayEndRaportB:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C11").getValue(),
  DayStartRaportC:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C12").getValue(),
  DayEndRaportC:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C13").getValue(),
  DayStartRaportD:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C14").getValue(),
  DayEndRaportD:SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Setting').getRange("C15").getValue()
}

  
  
function deleteSheet(name){
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  try{
    sheet = spreadsheet.getSheetByName(name);
  if (sheet != null) {
    //spreadsheet.deleteSheet(sheet);
    }
  }
  catch (e) {
  }  
}

function UserRaportA() {
  try {
    var name = "RaportA";
    var profileId = Setting.ProfileId ;
    var begin = Setting.DayStartRaportA;
    var end = Setting.DayEndRaportA;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForRaport(profileId, metrics, optArgs, begin, end);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function UserRaportB() {
  try {
    var name = "RaportB";
    var profileId = Setting.ProfileId ;
    var begin = Setting.DayStartRaportB;
    var end = Setting.DayEndRaportB;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForRaport(profileId, metrics, optArgs, begin, end);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function UserRaportC() {
  try {
    var name = "RaportC";
    var profileId = Setting.ProfileId ;
    var begin = Setting.DayStartRaportC;
    var end = Setting.DayEndRaportC;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForRaport(profileId, metrics, optArgs, begin, end);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function UserRaportD() {
  try {
    var name = "RaportD";
    var profileId = Setting.ProfileId ;
    var begin = Setting.DayStartRaportD;
    var end = Setting.DayEndRaportD;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForRaport(profileId, metrics, optArgs, begin, end);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}



function UserPerMonth2016() {
  try {
    var name = "U¿ytkownicy miesiêcznie 2016";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileYear2016(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function UserPerMonth2015() {
  try {
    var name = "U¿ytkownicy miesiêcznie 2015";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:users';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function GoalClickTel() {
  try {
    var name = "Klikniêcia w telefon";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goal3Completions';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function GoalClickEmail() {
  try {
    var name = "Klikniêcia w email";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goal4Completions';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function Goal3Minuts() {
  try {
    var name = "3 minut";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goal5Completions';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function Goal5Minuts() {
  try {
    var name = "5 minut";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goal6Completions';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function Goal5Pages() {
  try {
    var name = "5 stron";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goal7Completions';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function SourceGoal() {
  try {
    var name = "¯ród³a celu";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:goalCompletionsAll';
    var optArgs = {'dimensions': 'ga:source', 'sort': '-ga:goalCompletionsAll','max-results': '10' };
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function AvgTimeOnPage() {
  try {
    var name = "Czas na stronie 2";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:avgsessionDuration, ga:sessions';
    var optArgs = {'dimensions': 'ga:month','max-results': '3' };
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function PageViewPerSession() {
  try {
    var name = "Ile stron na sesjê";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:pageviewsPerSession';
    var optArgs = {'dimensions': 'ga:month','max-results': '3' };
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function TopBrowsers() {
  try {
    var name = "Top przegl¹darki";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:browser','sort': '-ga:sessions','max-results': '5' };
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function TopCountry() {
  try {
    var name = "Top kraje 2";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:country','sort': '-ga:sessions','max-results': '5' };
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function Sources() {
  try {
    var name = "¯ród³a 2";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:source', 'sort': '-ga:sessions', 'max-results': '15'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}


function TimeLoadingPage() {
  try {
    var name = "Czas ³adowania 3";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:avgPageLoadTime';
    var optArgs = {'dimensions': 'ga:month'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function Devices() {
  try {
    var name = "Urz¹dzenia";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:deviceCategory', 'sort': '-ga:sessions', 'max-results': '10'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function City() {
  try {
    var name = "City";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:city', 'sort': '-ga:sessions', 'max-results': '10'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function BestPage() {
  try {
    var name = "Page";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:sessions';
    var optArgs = {'dimensions': 'ga:pagePath', 'sort': '-ga:sessions', 'max-results': '10'};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function BounceRate() {
  try {
    var name = "BounceRate";
    deleteSheet(name);
    var profileId = 53417072 ;
    var metrics = 'ga:bounceRate';
    var optArgs = {};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}

function NewSessions() {
  try {
    var name = "Nowi";
    var profileId = 53417072 ;
    var metrics = 'ga:percentNewSessions';
    var optArgs = {};
    var userPerMonth = getReportDataForProfileMonth(profileId, metrics, optArgs);
    outputToSpreadsheet(userPerMonth, name);
    
  } catch(error) {
    Browser.msgBox(error.message);
  }
}
function getReportDataForRaport(profileId,metrics,optArgs,begin,end) {

  //var profileId = firstProfile.getId();
  // TODO:napisaæ funkcje do obliuczania dni
  
  var profileId = Setting.ProfileId;
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(begin);   // 2 weeks (a fortnight) ago.
  var endDate = getLastNdays(end);      // Today.
  var metrics = metrics;
  var optArgs = optArgs;
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      metrics,                    // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    throw new Error('No views (profiles) found');
  }
}


function getReportDataForProfileMonth(profileId,metrics,optArgs) {

  //var profileId = firstProfile.getId();
  // TODO:napisaæ funkcje do obliuczania dni
  
  var profileId = Setting.ProfileId;
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(Setting.DayStart);   // 2 weeks (a fortnight) ago.
  var endDate = getLastNdays(Setting.DayEnd);      // Today.
  var metrics = metrics;
  var optArgs = optArgs;
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      metrics,                    // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    throw new Error('No views (profiles) found');
  }
}

function getReportDataForProfileYear2016(profileId,metrics,optArgs) {

  //var profileId = firstProfile.getId();
  // TODO:napisaæ funkcje do obliuczania dni
  
  var profileId = profileId ;
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(Setting.DayStartYear2016);   // 2 weeks (a fortnight) ago.
  var endDate = getLastNdays(Setting.DayEndYear2016);      // Today.
  var metrics = metrics;
  var optArgs = optArgs;
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      metrics,                    // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    throw new Error('No views (profiles) found');
  }
}


function getReportDataForProfileYear2015(profileId,metrics,optArgs) {

  //var profileId = firstProfile.getId();
  
  var profileId = profileId ;
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(776);   // 2 weeks (a fortnight) ago.
  var endDate = getLastNdays(381);      // Today.
  var metrics = metrics;
  var optArgs = optArgs;
  // Make a request to the API.
  var results = Analytics.Data.Ga.get(
      tableId,                    // Table id (format ga:xxxxxx).
      startDate,                  // Start-date (format yyyy-MM-dd).
      endDate,                    // End-date (format yyyy-MM-dd).
      metrics,                    // Comma seperated list of metrics.
      optArgs);

  if (results.getRows()) {
    return results;

  } else {
    throw new Error('No views (profiles) found');
  }
}

function getDay(date) {
  var day = new Date();
  day.setDate(date);
  return Utilities.formatDate(day, 'GMT', 'yyyy-MM-dd');
}


function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}

function outputToSpreadsheet(results) {
  //sprawdzamy czy arkusz istnieje
  //try{
    sheet = spreadsheet.getSheetByName(name);
    
  if (sheet != null) {
    spreadsheet.deleteSheet(sheet);
    }
  
  //
  var sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();

  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  sheet.getRange(1, 1, 1, headerNames.length)
      .setValues([headerNames]);

  // Print the rows of data.
  sheet.getRange(2, 1, results.getRows().length, headerNames.length)
      .setValues(results.getRows());
} 
function outputToSpreadsheet(results, name) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if(sheet != null){
    sheet.clear();
  } else { 
    sheet = spreadsheet.insertSheet(name);
  }
  
  // Print the headers.
  var headerNames = [];
  for (var i = 0, header; header = results.getColumnHeaders()[i]; ++i) {
    headerNames.push(header.getName());
  }
  sheet.getRange(1, 1, 1, headerNames.length)
      .setValues([headerNames]);

  // Print the rows of data.
  sheet.getRange(2, 1, results.getRows().length, headerNames.length)
      .setValues(results.getRows());
} 