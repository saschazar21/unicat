Displays a single brick. Can be used for tags, labels, etc...

```jsx
<div style={{ display: 'flex', alignItems: 'stretch' }}>
  <Brick>I'm a brick</Brick>
  <Brick variant="default">I'm a default brick</Brick>
  <Brick href="#" variant="success">
    I'm a success brick with a link
  </Brick>
</div>
```

Of course it's possible to add an icon:

```jsx
import { StarIcon } from '@saschazar/unicat-icons';

<Brick icon={<StarIcon />}>I'm an icon brick</Brick>;
```
