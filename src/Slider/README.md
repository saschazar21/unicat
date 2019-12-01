renders an overflowing container with `<Button />` components to slide through the items:

```jsx
import Picture from '../Picture';

<Slider>
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/320x240"
    key="slider-image-1"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/300x240"
    key="slider-image-2"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/340x240"
    key="slider-image-3"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/280x240"
    key="slider-image-4"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/310x240"
    key="slider-image-5"
  />
</Slider>;
```

also, an `autoscroll` functionality has been included, which may be started by setting the appropriate prop:

```jsx
import Picture from '../Picture';

<Slider autoscroll>
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/320x240"
    key="slider-image-1"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/300x240"
    key="slider-image-2"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/340x240"
    key="slider-image-3"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/280x240"
    key="slider-image-4"
  />
  <Picture
    alt="a random image from unsplash.com"
    src="https://source.unsplash.com/random/310x240"
    key="slider-image-5"
  />
</Slider>;
```
