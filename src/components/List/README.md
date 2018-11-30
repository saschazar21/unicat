A simple list component

```jsx
<List>
  {[0, 1, 2, 3].map(n => <span key={n}>Entry #{n + 1}</span>)}
</List>
```

Other use cases for the `<List>` component may include the following:

```jsx
<List indicator={true}>
  {[0, 1, 2, 3].map(n => <span key={n}>Entry #{n + 1}</span>)}
</List>
```

```jsx
<List horizontal={true}>
  {[0, 1, 2, 0, 1, 2, 0, 1, 2, 3].map(n => <span key={n}>Entry #{n + 1}</span>)}
</List>
```