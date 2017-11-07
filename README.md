# TODO:
Find another way to iterate through the object/array and display versionNames correctly.

Current behavior:

Object:
```javascript
{ latest: '5.5.1',
  next: '5.5.1',
  'latest-2': '2.15.12',
  'next-2': '2.15.12',
  'latest-1': '1.4.29',
  lts: '5.3.0',
  'latest-3': '3.10.10',
  'next-3': '3.10.10',
  'latest-4': '4.6.1',
  'next-4': '4.6.1',
  'latest-5': '5.5.1',
  'next-5': '5.5.1',
  'v5.5-next': '5.5.1' }
```

Response:
`npm -> latest: 5.5.1 | latest: 5.5.1 | latest: 5.5.1 | latest: 5.5.1 | latest: 5.5.1 | lts: 5.3.0 | latest-4: 4.6.1 | latest-4: 4.6.1 | latest-3: 3.10.10 | latest-3: 3.10.10 | latest-2: 2.15.12 | latest-2: 2.15.12 | latest-1: 1.4.29`
