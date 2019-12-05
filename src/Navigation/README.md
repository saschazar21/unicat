renders a horizontally scrollable navigation ribbon:

```jsx
const items = [
  { href: '#', text: 'NavigationItem 1' },
  { text: 'NavigationItem 2' },
  { disabled: true, href: '#', text: 'NavigationItem 3' },
  { href: '#', text: 'NavigationItem 4' },
  { text: 'NavigationItem 5' },
  { disabled: true, href: '#', text: 'NavigationItem 6' },
  { href: '#', text: 'NavigationItem 7' },
  { text: 'NavigationItem 8' },
  { disabled: true, href: '#', text: 'NavigationItem 9' },
];

<Navigation items={items} />;
```
