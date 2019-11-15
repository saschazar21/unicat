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

<Card
  cta={
    <Button onClick={() => null} name="Close" variant="light">
      I'm a CTA button
    </Button>
  }
  variant="light"
>
  <Heading level="h2">Headline</Heading>
  <span>A smaller version of the Card.</span>
</Card>;
```

Also, a 'close'-button could be included as well.

```jsx
import Button from '../Button/Button.tsx';
import Heading from '../Heading/Heading.tsx';

initialState = { isOpen: true };
const onClose = () => setState({ isOpen: false });

<div>
  {state.isOpen && (
    <Card onClose={onClose} variant="light">
      <Heading level="h2">Headline</Heading>
      <span>A smaller version of the Card.</span>
    </Card>
  )}
</div>;
```

An image may be included like this:

```jsx
import Button from '../Button/Button.tsx';
import Heading from '../Heading/Heading.tsx';
import Picture from '../Picture/Picture.tsx';

<Card
  image={
    <Picture
      srcset={[
        {
          url: 'https://source.unsplash.com/random/800x533.jpg',
          width: 800,
        },
        {
          url: 'https://source.unsplash.com/random/640x420.jpg',
          width: 640,
        },
        {
          url: 'https://source.unsplash.com/random/320x212.jpg',
          width: 320,
        },
      ]}
      src="//source.unsplash.com/random/300x100"
      description="A placeholder"
    />
  }
>
  <Heading level="h2">Headline</Heading>
  <span>A smaller version of the Card.</span>
</Card>;
```
