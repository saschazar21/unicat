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

For special occasions, a CTA-area may also be added.

```jsx
import Button from '../Button/Button.tsx';
import Heading from '../Heading/Heading.tsx';

<Card cta={<Button onClick={() => null} title="I'm a CTA button" variant="light" />} variant="light">
  <Heading level="h2">Headline</Heading>
  <span>A smaller version of the Card.</span>
</Card>;
```