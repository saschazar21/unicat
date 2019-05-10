Renders a Box with a `box-shadow` in 5 different height levels.

By default the lowest level (4, or `Spacing.XS`) will be used and simulates an element lowest leveraged from the ground. In the same fashion, paddings may be customized using the `spacing` prop, also ranging from 0 (highest) to 4 (lowest).

Cards of level below 3 should only be used with caution!

## Card level 4

```jsx
import Heading from '../Heading/Heading.tsx';

<Card>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A default (level 4) card</span>
</Card>;
```

## Card level 3

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={3}>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 3 card</span>
</Card>;
```

## Card level 2

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={2}>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 2 card</span>
</Card>;
```

## Card level 1

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={1}>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 1 card</span>
</Card>;
```

## Card level 0

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level={0}>
  <Heading level={2} SEO={false}>
    Headline
  </Heading>
  <span>A level 0 card</span>
</Card>;
```
