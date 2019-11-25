Displays a single brick. Can be used for tags, labels, etc...

```jsx
import KeyGenerator from '../__tools__/key-generator';

const iter = new KeyGenerator('Brick');

<div style={{ display: 'flex', alignItems: 'stretch' }}>
  <Brick className={iter.next()} key={iter.next()}>
    I'm a brick
  </Brick>
  <Brick key={iter.next()} variant="default">
    I'm a default brick
  </Brick>
  <Brick key={iter.next()} href="#" variant="success">
    I'm a success brick with a link
  </Brick>
</div>;
```

Of course it's possible to add an icon:

```jsx
import { StarIcon } from '@saschazar/unicat-icons';

<Brick icon={<StarIcon focusable="false" aria-hidden="true" key="StarIcon" />}>
  I'm an icon brick
</Brick>;
```
