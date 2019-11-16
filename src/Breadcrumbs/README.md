Renders a simple breadcrumbs list. Based on the array in the given `items` prop, it conditionally renders either a `<a />` or a `<span />`.

```jsx
const items = [
  {
    name: 'Home',
  },
  {
    href: '#components',
    name: 'Components',
  },
  {
    active: true,
    href: '#button',
    name: 'Button',
  },
];

<Breadcrumbs items={items} />;
```
