Renders a responsive image using a given `srcset` property.

```jsx
const sources = [
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg',
    width: '2448w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
    width: '1080w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
    width: '400w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
    width: '200w',
  },
];

const sizes = [
  {
    mediaQuery: '(min-width: 376px)',
    width: '200w',
  },
  {
    mediaQuery: '(min-width: 720px)',
    width: '380w',
  },
  {
    mediaQuery: '(min-width: 1200px)',
    width: '930w',
  },
];

<Picture
  srcset={sources}
  sizes={sizes}
  description="Autumn trees in Montreal"
  caption="Photo by Joe Example on unsplash"
  src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
/>;
```

Furthermore, it's possible to crop an image (useful for keeping certain formats, e.g. avatars, etc...)

```jsx
const sources = [
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg',
    width: '2448w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
    width: '1080w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
    width: '400w',
  },
  {
    url:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
    width: '200w',
  },
];

const sizes = [
  {
    mediaQuery: '(min-width: 376px)',
    width: '200w',
  },
  {
    mediaQuery: '(min-width: 720px)',
    width: '640w',
  },
  {
    mediaQuery: '(min-width: 1200px)',
    width: '640w',
  },
];

<Picture
  crop={{ height: '480px', width: '640px' }}
  srcset={sources}
  sizes={sizes}
  description="Autumn trees in Montreal"
  caption="Photo by Joe Example on unsplash"
  src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
/>;
```
