Formats a date string or `Date` object into a self-updating semantic string (updates every minute by default):

```jsx
<DateTime date={new Date()} />
```

It's also possible to change the default update interval by setting a millisecond value to the `update` prop:

```jsx
<DateTime date={new Date()} update={1000} />
```

By appending the `raw` prop, it just prints the static formatted date string without an update interval:

```jsx
<DateTime date={new Date()} raw />
```
