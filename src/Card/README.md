Renders a Box with a `box-shadow` in 5 different height levels.

By default the lowest level (`xs`) will be used and simulates an element lowest leveraged from the ground. In the same fashion, paddings may be customized using the `spacing` prop, also ranging from `xl` (highest) to `xs` (lowest).

Cards of level below 3 should only be used with caution!

## Card level 'xs'

```jsx
import Heading from '../Heading/Heading.tsx';

<Card>
  <Heading level="h2">Headline</Heading>
  <span>
    A default card in size and elevation <code>xs</code>
  </span>
</Card>;
```

## Card level 's'

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level="s" spacing="l">
  <Heading level="h2">Headline</Heading>
  <span>
    A card in size <code>l</code>, but elevated as <code>s</code>
  </span>
</Card>;
```

## Card level 'm'

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level="m">
  <Heading level="h2">Headline</Heading>
  <span>
    A level <code>m</code> card
  </span>
</Card>;
```

## Card level 'l'

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level="l">
  <Heading level="h2">Headline</Heading>
  <span>
    A level <code>l</code> card
  </span>
</Card>;
```

## Card level 'xl'

```jsx
import Heading from '../Heading/Heading.tsx';

<Card level="xl">
  <Heading level="h2">Headline</Heading>
  <span>
    A level <code>xl</code> card
  </span>
</Card>;
```
