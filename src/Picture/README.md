Renders a responsive image using a given `srcset` property. Lazyloading is enabled by default internally and is handled by a higher order component called `withLazyLoading()()`.

```jsx
import Picture from './Picture';

const srcset = [
  {
    url: 'https://source.unsplash.com/random/2500x2000.jpg',
    width: 2500,
  },
  {
    url: 'https://source.unsplash.com/random/1920x1080.jpg',
    width: 1920,
  },
  {
    url: 'https://source.unsplash.com/random/640x480.jpg',
    width: 640,
  },
  {
    url: 'https://source.unsplash.com/random/320x240.jpg',
    width: 320,
  },
];

<Picture
  srcset={srcset}
  description="A placeholder image showing the currently used resolution"
  src="https://source.unsplash.com/random/160x120.jpg"
/>;
```

Furthermore, it's possible to crop an image (useful for keeping certain formats, e.g. avatars, etc...). By setting `eager` to the `loading` prop, lazyloading gets skipped and the image is fetched immediately upon render.

```jsx
import Picture from './Picture';

const srcset = [
  {
    url: 'https://source.unsplash.com/random/2500x2500.jpg',
    width: 2500,
  },
  {
    url: 'https://source.unsplash.com/random/1920x1920.jpg',
    width: 1920,
  },
  {
    url: 'https://source.unsplash.com/random/1200x1200.jpg',
    width: 1200,
  },
  {
    url: 'https://source.unsplash.com/random/800x800.jpg',
    width: 800,
  },
  {
    url: 'https://source.unsplash.com/random/640x640.jpg',
    width: 640,
  },
  {
    url: 'https://source.unsplash.com/random/320x320.jpg',
    width: 320,
  },
];

<Picture
  crop
  loading="eager"
  srcset={srcset}
  height="480px"
  width="640px"
  description="A placeholder image showing the currently used resolution"
  src="https://source.unsplash.com/random/160x120.jpg"
/>;
```
