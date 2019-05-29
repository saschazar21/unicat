Renders a Box with a `box-shadow`.

```jsx
import Heading from '../Heading/Heading.tsx';

<Card>
  <Heading level="h2">Headline</Heading>
  <span>A default Card</span>
</Card>;
```

If there's a special need for a smaller use case, the `light` variant prop type may also be used.

```jsx
import Heading from '../Heading/Heading.tsx';

<Card variant="light">
  <Heading level="h2">Headline</Heading>
  <span>A smaller version of the Card.</span>
</Card>;
```
