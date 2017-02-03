// Copyright 2015, Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @name Weather Based Campaign Management
 *
 * @overview The Weather Based Campaign management script allows you to perform
 *     various campaign management tasks based on weather information. See
 *     https://developers.google.com/adwords/scripts/docs/solutions/weather-based-campaign-management#generic-weather
 *     for more details.
 *
 * @author AdWords Scripts Team [adwords-scripts@googlegroups.com]
 *
 * @version 1.0
 *
 * @changelog
 * - version 1.0
 *   - Released initial version.
 */

// Register for an API key at http://openweathermap.org/appid
// and enter the key below.
var OPEN_WEATHER_MAP_API_KEY = 'INSERT_OPEN_WEATHER_MAP_API_KEY_HERE';

var OPEN_WEATHER_MAP_SERVER_URL = 'http://api.openweathermap.org/data/2.5';
var FORECAST_ENDPOINT = OPEN_WEATHER_MAP_SERVER_URL + '/forecast/daily';
var WEATHER_ENDPOINT = OPEN_WEATHER_MAP_SERVER_URL + '/weather';

function main() {
  // Uncomment the following lines if you are writing code for a single account.
  // processSingleAccount();

  // Uncomment the following lines if you are writing code for an MCC account.
  // var accounts = MccApp.accounts().withIds(['1234567890', '3456789012']);
  // accounts.executeInParallel("processSingleAccount");
}

/**
 * Process a single account.
 */
function processSingleAccount() {
  // Uncomment this block if you want to do campaign management based on
  // current weather.
  // manageCampaignsBasedOnCurrentWeather();

  // Uncomment this block if you want to do campaign management based on
  // weather forecast.
  // manageCampaignsBasedOnWeatherForecast();
}

/**
 * Manage your campaigns based on current weather. The contents of
 * this method are for your reference; replace it with your campaign
 * management logic.
 */
function manageCampaignsBasedOnCurrentWeather() {
  var nyWeather = getWeatherForLocation('New York City, US');

  // Example 1: Use weather summary provided by OpenWeathermap.
  // See http://openweathermap.org/weather-conditions for more details.
  if (nyWeather.weather.status.summary === 'Rain') {
    // Add your logic here.
  }

  // Example 2: Check more specific weather parameters.
  if (nyWeather.weather.snow > 5 && nyWeather.weather.temperature < 273) {
    // Add your logic here.
  }
}

/**
 * Manage your campaigns based on weather forecast. The contents of
 * this method are for your reference; replace it with your campaign
 * management logic.
 */
function manageCampaignsBasedOnWeatherForecast() {
  var nyWeather = getWeatherForecastForLocation('Toronto, CA');

  // Example 1: Use weather summary provided by OpenWeathermap.
  var rainyDays = 0;
  for (var date in nyWeather.forecast) {
    var forecast = nyWeather.forecast[date];
    if (forecast.status.summary === 'Rain') {
      rainyDays = rainyDays + 1;
    }
  }

  if (rainyDays > 4) {
    // Add your logic here.
  }

  // Example 2: Check more specific weather parameters.
  var coldDays = 0;
  for (var date in nyWeather.forecast) {
    var forecast = nyWeather.forecast[date];

    if (forecast.snow > 5 && forecast.temperature < 273) {
      coldDays = coldDays + 1;
    }
  }

  if (coldDays > 4) {
    // Add your logic here.
  }
}

/**
 * Make a call to the OpenWeatherMap server.
 *
 * @param {string} endpoint the server endpoint.
 * @param {string} location the location for which weather
 *     information is retrieved.
 * @return {Object} the server response.
 */
function callWeatherServer(endpoint, location) {
    var url = Utilities.formatString(
      '%s?APPID=%s&q=%s',
      endpoint,
      encodeURIComponent(OPEN_WEATHER_MAP_API_KEY),
      encodeURIComponent(location));
  var response = UrlFetchApp.fetch(url);
  if (response.getResponseCode() != 200) {
    throw Utilities.formatString(
        'Error returned by API: %s, Location searched: %s.',
        response.getContentText(), location);
  }

  var result = JSON.parse(response.getContentText());

  // OpenWeatherMap's way of returning errors.
  if (result.cod != 200) {
    throw Utilities.formatString(
        'Error returned by API: %s,  Location searched: %s.',
        response.getContentText(), location);
  }
  return result;
}

/**
 * Parse the weather response from the OpenWeatherMap server.
 *
 * @param {Object} weather the weather information from
 *     OpenWeatherMap server.
 * @return {Object} the parsed weather response.
 */
function parseWeather(weather) {
  var retval = {
    'rain': 0,
    'temperature': 0,
    'windspeed': 0,
    'snow': 0,
    'clouds': 0,
    'status': {
      'id': 0,
      'summary': '',
      'description': ''
    }
  };

  if (weather.rain) {
    if (typeof weather.rain === 'object' && weather.rain['3h']) {
      retval.rain = weather.rain['3h'];
    } else {
      retval.rain = weather.rain;
    }
  }

  if (weather.snow) {
    if (typeof weather.snow === 'object' && weather.snow['3h']) {
      retval.snow = weather.snow['3h'];
    } else {
      retval.snow = weather.snow;
    }
  }

  if (weather.clouds && weather.clouds.all) {
    retval.clouds = weather.clouds.all;
  }

  if (weather.main) {
    retval.temperature = weather.main.temp.toFixed(2);
  } else if (main.temp) {
    retval.temperature = weather.temp.toFixed(2);
  }

  if (weather.wind) {
    retval.windspeed = weather.wind.speed;
  } else if (weather.speed) {
    retval.windspeed = weather.speed;
  }

  if (weather.weather && weather.weather.length > 0) {
    retval.status.id = weather.weather[0].id;
    retval.status.summary = weather.weather[0].main;
    retval.status.description = weather.weather[0].description;
  }
  return retval;
}

/**
 * Get the weather forecast for a location for the next 7 days.
 *
 * @param {string} location the location for which weather
 *     forecast information is retrieved.
 * @return {Object} the parsed weather response.
 */
function getWeatherForecastForLocation(location) {
  var result = callWeatherServer(FORECAST_ENDPOINT, location);

  var retval = {
    'name': result.city.name,
    'country': result.city.country,
    'forecast': {
    }
  };

  for (var i = 0; i < result.list.length; i++) {
    var forecast = result.list[i];
    var date = formatDate(forecast.dt);
    retval.forecast[date] = parseWeather(forecast);
  }

  return retval;
}

/**
 * Get the current weather information for a location.
 *
 * @param {string} location the location for which weather
 *     information is retrieved.
 * @return {Object} the parsed weather response.
 */
function getWeatherForLocation(location) {
  var result = callWeatherServer(WEATHER_ENDPOINT, location);

  var retval = {
    'name': result.name,
    'country': result.sys.country,
    'weather': parseWeather(result)
  };

  return retval;
}

/**
 * Formats the date in yyyyMMdd format.
 *
 * @param {Number} dt unix timestamp from OpenWeatherMap server.
 * @return {string} the formatted date.
 */
function formatDate(dt) {
  var date = new Date(dt * 1000);
  return Utilities.formatDate(date, 'GMT', 'yyyyMMdd');
}