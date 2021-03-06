// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups/1434dc43-267a-4a05-8226-31593a0ba4ed?api-version=2015-01-14-preview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '176',
  'service-name': 'AdminExperienceService',
  'client-request-id': '50219b7a-6a96-480c-9986-5f6446065b92',
  'unique-request-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'x-ms-request-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'related-activity-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1196',
  'x-ms-correlation-request-id': '831a7775-6304-45b1-a7d8-7663579146c7',
  'x-ms-routing-request-id': 'WESTUS:20151204T223646Z:831a7775-6304-45b1-a7d8-7663579146c7',
  date: 'Fri, 04 Dec 2015 22:36:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups/1434dc43-267a-4a05-8226-31593a0ba4ed?api-version=2015-01-14-preview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '176',
  'service-name': 'AdminExperienceService',
  'client-request-id': '50219b7a-6a96-480c-9986-5f6446065b92',
  'unique-request-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'x-ms-request-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'related-activity-id': '2cae669f-4534-4b48-a41d-a445da303b53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1196',
  'x-ms-correlation-request-id': '831a7775-6304-45b1-a7d8-7663579146c7',
  'x-ms-routing-request-id': 'WESTUS:20151204T223646Z:831a7775-6304-45b1-a7d8-7663579146c7',
  date: 'Fri, 04 Dec 2015 22:36:46 GMT',
  connection: 'close' });
 return result; }]];