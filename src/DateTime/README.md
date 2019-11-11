Formats a date string or `Date` object into a self-updating semantic string (updates every second by default):

```jsx
<DateTime date={new Date()} />
```

It's also possible to change the default update interval by setting a millisecond value to the `interval` prop:

```jsx
<DateTime date={new Date()} interval={60000} />
```

By appending the `raw` prop, it just prints the static formatted date string:

```jsx
import { RawDateTime } from './DateTime';

<RawDateTime date={new Date()} />;
```
