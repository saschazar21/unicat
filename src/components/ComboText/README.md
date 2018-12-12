A sample inline text prepended by an icon

```jsx
const { GithubIcon } = require('@saschazar/unicat-icons');

const { special } = require('../../_data/colors');

<ComboText icon={<GithubIcon />} fill={special.hex}>
  Oh look, an icon
</ComboText>;
```
