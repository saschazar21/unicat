A bordered text, acting as a Tag.

```jsx
<Chip>A demo chip</Chip>
```

It might as well be customized, by applying a different border color:

```jsx
const { alert } = require('../../_data/colors');

<Chip color={alert.hex}>Orange border chip</Chip>;
```

Also, a Chip with integrated icon works:

```jsx
const { GithubIcon } = require('@saschazar/unicat-icons');

const { alert } = require('../../_data/colors');

<Chip icon={<GithubIcon />} color={alert.hex}>
  Orange border icon chip
</Chip>;
```

You can also convert a Chip to a Button automatically, if an `onClick` function was given:

```jsx
const { BitbucketIcon } = require('@saschazar/unicat-icons');

const { success } = require('../../_data/colors');

<Chip color={success.hex} icon={<BitbucketIcon />} onClick={() => null}>
  I'm a button!
</Chip>;
```
