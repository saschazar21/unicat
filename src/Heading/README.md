A simple header text, may be customized using the `level` prop.

```jsx
<Heading level={1}>
  I'm a <code>h1</code> by default
</Heading>
```

When explicitely setting the `SEO` prop to `false`, a `<span>` tag is rendered:

```jsx
<Heading level={3} SEO={false}>
  I'm a span looking like a <code>h3</code>
</Heading>
```
