Renders a Box with a `box-shadow` in 5 different height levels.

```jsx
import Heading from '../Heading/Heading.tsx';

<Card>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A default (level 4) card</span>
</Card>;
```

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={3}>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 3 card</span>
</Card>;
```

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={2} variant="primary">
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 2 card</span>
</Card>;
```

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={1} variant="success">
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 1 card</span>
</Card>;
```

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={0} variant="warning">
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 0 card</span>
</Card>;
```
