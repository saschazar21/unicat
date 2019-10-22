Renders a `<button />`.

```jsx
<Button name="default">A default button</Button>
```

An alternative `<button />` may be rendered using the `light` variant.

```jsx
<Button name="light" variant="light">
  A light button
</Button>
```

If a larger version is wanted, the `large` prop type may be added.

```jsx
<Button name="large" large>
  A large button
</Button>
```

To disable a button, the `disabled` prop works just like normal.

```jsx
<Button name="disabled" disabled>
  A disabled button
</Button>
```

To add an icon, just add an `</svg >` element to the `icon` prop.

```jsx
<Button
  name="icon"
  icon={
    <svg viewBox="0 0 64 64">
      <path d="M58.245 12.152C54.943 5.81 49.81 3.455 44.231 4.91c-5.098 1.33-9.79 5.742-11.762 11.094L32 17.277l-.47-1.274c-1.97-5.352-6.662-9.765-11.76-11.093-5.578-1.454-10.712.9-14.014 7.243C1.012 21.262 9.709 37.021 32 59.294 54.291 37.02 62.988 21.263 58.245 12.152z" />
    </svg>
  }
>
  An icon button
</Button>
```
