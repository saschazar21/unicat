A simple header text, may be customized using the `level` prop. Sets the `font-family` automatically to the `--font-heading` custom CSS property.

```jsx
<Heading level="h1">
  I'm a <code>span</code> looking like a <code>h1</code> by default
</Heading>
```

When explicitely setting the `SEO` prop to `false`, a `<span>` tag is rendered:

```jsx
<Heading level="h3" SEO>
  I'm actually a real <code>h3</code>
</Heading>
```
