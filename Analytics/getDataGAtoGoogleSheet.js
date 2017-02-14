function runDemo() {
  try {
    //var myProfile = listAccounts();
    //var firstProfile = getFirstProfile();
    var results = getReportDataForProfile();
    outputToSpreadsheet(results);

  } catch(error) {
    Browser.msgBox(error.message);
  }
}
function getFirstProfile() {
  var accounts = Analytics.Management.Accounts.list();
  if (accounts.getItems()) {
    var firstAccountId = accounts.getItems()[0].getId();
    Logger.log(accounts.getItems())

    var webProperties = Analytics.Management.Webproperties.list(firstAccountId);
    if (webProperties.getItems()) {

      var firstWebPropertyId = webProperties.getItems()[0].getId();
      var profiles = Analytics.Management.Profiles.list(firstAccountId, firstWebPropertyId);

      if (profiles.getItems()) {
        var firstProfile = profiles.getItems()[0];
        Logger.log(firstProfile)
        return firstProfile;

      } else {
        throw new Error('No views (profiles) found.');
      }
    } else {
      throw new Error('No webproperties found.');
    }
  } else {
    throw new Error('No accounts found.');
  }
}

function listAccounts() {
  var accounts = Analytics.Management.Accounts.list();
  if (accounts.items && accounts.items.length) {
    for (var i = 0; i < accounts.items.length; i++) {
      var account = accounts.items[i];
      Logger.log('Account: name "%s", id "%s".', account.name, account.id);

      // List web properties in the account.
      listWebProperties(account.id);
    }
  } else {
    Logger.log('No accounts found.');
  }
}

function listWebProperties(accountId) {
  var webProperties = Analytics.Management.Webproperties.list(accountId);
  if (webProperties.items && webProperties.items.length) {
    for (var i = 0; i < webProperties.items.length; i++) {
      var webProperty = webProperties.items[i];
      Logger.log('\tWeb Property: name "%s", id "%s".', webProperty.name,
          webProperty.id);

      // List profiles in the web property.
      listProfiles(accountId, webProperty.id);
      }
  } else {
    Logger.log('\tNo web properties found.');
  }
}

function listProfiles(accountId, webPropertyId) {
  // Note: If you experience "Quota Error: User Rate Limit Exceeded" errors
  // due to the number of accounts or profiles you have, you may be able to
  // avoid it by adding a Utilities.sleep(1000) statement here.
  Utilities.sleep(1000)
  var profiles = Analytics.Management.Profiles.list(accountId,
      webPropertyId);
  if (profiles.items && profiles.items.length) {
    for (var i = 0; i < profiles.items.length; i++) {
      var profile = profiles.items[i];
      Logger.log('\t\tProfile: name "%s", id "%s".', profile.name,
          profile.id);
    }
  } else {
    Logger.log('\t\tNo web properties found.');
  }
}

function getReportDataForProfile() {

  //var profileId = firstProfile.getId();
  
  var profileId = 21952173;
  var tableId = 'ga:' + profileId;
  var startDate = getLastNdays(14);   // 2 weeks (a fortnight) ago.
  var endDate = getLastNdays(0);      // Today.
  var metrics = 'ga:sessions,ga:pageviews,ga:uniquePageviews';
  var optArgs = {
    'dimensions': 'ga:keyword',              // Comma separated list of dimensions.
    'sort': '-ga:sessions,ga:keyword',       // Sort by sessions descending, then keyword.
    'segment': 'dynamic::ga:isMobile==Yes',  // Process only mobile traffic.
    'filters': 'ga:source==google',          // Display only google traffic.
    'start-index': '1',
    'max-results': '250'                     // Display the first 250 results.
  };

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

function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}

function outputToSpreadsheet(results) {
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