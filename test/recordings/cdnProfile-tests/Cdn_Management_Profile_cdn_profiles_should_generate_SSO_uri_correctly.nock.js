// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile2165/generateSsoUri?api-version=2016-10-02')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=TdwLc59PmZOJag2xV6hWMhxwgaVzrB1dol1%2bJgQ9lwc%3d&timestamp=2016-10-27T22:56:37.5838466Z&cdnAccountId=408FA&userCustomId=SSO-8fda9e97-89dc-4f59-8639-d1b05b2bdded&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '32581714-a8e8-408c-b6c3-b0d2f90864b3',
  'x-ms-client-request-id': '20f8f435-910b-45c4-bb9a-52198f9b9bc8',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cd29f1bd-d157-43a7-85d8-867f33ac122d',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225637Z:cd29f1bd-d157-43a7-85d8-867f33ac122d',
  date: 'Thu, 27 Oct 2016 22:56:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup3471/providers/Microsoft.Cdn/profiles/cdnTestProfile2165/generateSsoUri?api-version=2016-10-02')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=TdwLc59PmZOJag2xV6hWMhxwgaVzrB1dol1%2bJgQ9lwc%3d&timestamp=2016-10-27T22:56:37.5838466Z&cdnAccountId=408FA&userCustomId=SSO-8fda9e97-89dc-4f59-8639-d1b05b2bdded&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '32581714-a8e8-408c-b6c3-b0d2f90864b3',
  'x-ms-client-request-id': '20f8f435-910b-45c4-bb9a-52198f9b9bc8',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cd29f1bd-d157-43a7-85d8-867f33ac122d',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T225637Z:cd29f1bd-d157-43a7-85d8-867f33ac122d',
  date: 'Thu, 27 Oct 2016 22:56:37 GMT',
  connection: 'close' });
 return result; }]];