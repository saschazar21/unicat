Displays a single brick. Can be used for tags, labels, etc...

```jsx
<Brick>I'm a brick</Brick>
<Brick variant="default">I'm a default brick</Brick>
<Brick variant="success">I'm a success brick</Brick>
```

Of course it's possible to add an icon:

```jsx
import { StarIcon } from '@saschazar/unicat-icons';

<Brick icon={<StarIcon />}>I'm an icon brick</Brick>;
```
