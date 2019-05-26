Renders a responsive image using a given `srcset` property.

```jsx
const srcset = [
  {
    url: 'https://placehold.it/2500x2000.jpg',
    width: '2448w',
  },
  {
    url: 'https://placehold.it/1920x1080.jpg',
    width: '1080w',
  },
  {
    url: 'https://placehold.it/640x480.jpg',
    width: '400w',
  },
  {
    url: 'https://placehold.it/320x240.jpg',
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
  sizes={sizes}
  srcset={srcset}
  description="A placeholder image showing the currently used resolution"
  src="https://placehold.it/160x120.jpg"
/>;
```

Furthermore, it's possible to crop an image (useful for keeping certain formats, e.g. avatars, etc...)

```jsx
const srcset = [
{
    url: 'https://placehold.it/2500x2000.jpg',
    width: '2448w',
  },
  {
    url: 'https://placehold.it/1920x1080.jpg',
    width: '1080w',
  },
  {
    url: 'https://placehold.it/640x480.jpg',
    width: '400w',
  },
  {
    url: 'https://placehold.it/320x240.jpg',
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
  crop
  sizes={sizes}
  srcset={srcset}
  height="480px"
  width="640px"
  description="A placeholder image showing the currently used resolution"
  src="https://placehold.it/160x120.jpg"
/>;
```
