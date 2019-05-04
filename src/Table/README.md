Renders a preformatted `<table>` using a single data map.

```jsx
const data = [
  { key: 'Continent', set: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'] },
  {
    key: 'Country',
    set: ['South Africa', 'Canada', 'Japan', 'United Kingdom', 'New Zealand'],
  },
  {
    key: 'Capital',
    set: ['Pretoria', 'Ottawa', 'Tokyo', 'London', 'Wellington'],
  },
  {
    key: 'Currency',
    set: [
      'South African Rand',
      'Canadian Dollar',
      'Japanese Yen',
      'Pound Sterling',
      'New Zealand Dollar',
    ],
  },
  { key: 'Code', set: ['ZAR', 'CAD', 'JPY', 'GBP', 'NZD'] },
];

<Table data={data} />;
```
