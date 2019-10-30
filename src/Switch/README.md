Renders a boolean Switch:

```jsx
<Switch name="hello" />
```

To render a pre-checked version, append a `checked` prop:

```jsx
<Switch name="hello" checked />
```

Also, a `large` variant is possible:

```jsx
<Switch name="hello" large />
```

For verbosity, custom labels may be rendered using the correct `prefix`/`suffix` props:

```jsx
<Switch name="hello" prefix="nay" suffix="okay" />
```
