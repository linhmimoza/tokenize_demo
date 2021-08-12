import { DialogService } from 'components/Dialog';
import Storage from 'services/storage';
import { HOST } from 'common/AppConst';
import NavigationService from '../NavigationService';
import ScreenID from 'common/ScreenID';
import { isNil } from 'lodash';
import queryString from 'query-string';

export const host = HOST;
const noInternetError = 'You are not connected to the internet!';
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/x-www-form-urlencoded',
  'user-agent': 'Android;1.15.0',
  'TOK-DEVICE-ID': 'ea278b7741967a5e',
};
const login = (params) => {
  let formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return _fetchData('POST', `mobile-api/auth/login`, formBody, login, headers);
};

const getSummaries = () => {
  return _fetchData('GET', `public/v1/market/get-summaries`, undefined, getSummaries);
};

const getMarkets = () => {
  return _fetchData('GET', `mobile-api/market/getmarkets`, undefined, getMarkets, headers);
};

const _handleResponse = async (response, params, apiFunction) => {
  if (!response) throw new Error('Response is null or empty');
  if (response.status === 401) {
    // if (response.status === 401 || response.status === 400) {
    DialogService.alertError(
      'Token expired. Please login again!',
      'Error',
      () => {
        Storage.removeToken();
        NavigationService.pushToScreen(ScreenID.Login);
      },
    );
    throw new Error('User unauthorize');
  } else {
    // else if (res.status === 200 || res.status === 201) {
    return response.json();
  }
};

const _fetchData = async (method, path, params, apiFunction, headers = {}) => {
  const token = await Storage.getToken();
  let Authorization = `Bearer ${token}`;
  // if (__DEV__) console.log('Authorization token: ', token);

  let rqHeaders = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
      ...headers
    },
  };
  switch (method) {
    case 'GET':
      break;
    case 'POST':
      rqHeaders = { ...rqHeaders, body: params };
      break;
    case 'PATCH':
      rqHeaders = { ...rqHeaders, body: JSON.stringify(params) };
      break;
    case 'PUT':
      rqHeaders = { ...rqHeaders, body: JSON.stringify(params) };
      break;
    case 'DELETE':
      break;
    default:
      break;
  }
  return fetch(`${host}${path}`, rqHeaders)
    .then(res => {
      console.log(`API ${method} res: `, res);
      return _handleResponse(res, params, apiFunction);
    })
    .then(resJson => {
      console.log(`API ${method} resJson: `, resJson);
      return resJson;
    })
    .catch(error => {
      console.log(`API ${method} error: `, error);
      if (error.toString().includes('Network request failed')) {
        // DialogService.alertError(noInternetError);
      }
      return { error: error };
    });
};

export default {
  login,
  getSummaries,
  getMarkets
};