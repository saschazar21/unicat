A bordered text, acting as a Tag.

```jsx
<Chip>A demo chip</Chip>
```

It might as well be customized, by applying a different border color:

```jsx
const { alert } = require('../../_data/colors');

<Chip color={alert.hex}>Orange border chip</Chip>
```

Also, a Chip with integrated icon works:

```jsx
const { GithubIcon } = require('@saschazar/unicat-icons');

const { alert } = require('../../_data/colors');

<Chip icon={<GithubIcon />} color={alert.hex}>Orange border icon chip</Chip>
```
