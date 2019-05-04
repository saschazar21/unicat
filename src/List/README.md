A simple, extensible `List`. May be rendered horizontally or vertically _(default)_.

```jsx
const items = ['Captain America', 'Iron Man', 'Black Widow', 'Spider Man', 'Hulk', 'Scarlet Witch'];

// Render as unordered list
<List items={items} />
```

```jsx
const items = ['Captain America', 'Iron Man', 'Black Widow', 'Spider Man', 'Hulk', 'Scarlet Witch'];

// Render as ordered list
<List items={items} ordered />
```

Render a horizontal list:

```jsx
const items = ['Thanos', 'Ronan', 'Venom'];

<List items={items} horizontal />;
```
