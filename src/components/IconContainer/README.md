A simple icon container

```jsx
const { PersonIcon } = require('@saschazar/unicat-icons');
const { special } = require('../../_data/colors');

<IconContainer style={{ display: 'inline-block', height: 64, width: 64, padding: 16 }}>
  <PersonIcon style={{ fill: special.hex }} />
</IconContainer>
```