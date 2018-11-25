A simple image container supporting a srcset and a caption.

```jsx
<ImageContainer
  caption="Various images from unsplash.com"
  height="480px"
  image="//placehold.it/800x480/BDBF09"
  srcset={[
    {
      src: '//placehold.it/320x180/BDBF09',
      width: 320,
    },
    {
      src: '//placehold.it/480x240/BDBF09',
      width: 480,
    },
    {
      src: '//placehold.it/940x520/BDBF09',
      width: 940,
    },
  ]}
/>
```

Also, a border radius value is supported for rounded corners:

```jsx
<ImageContainer
  caption="Various images from unsplash.com"
  image="//placehold.it/800x480/BDBF09"
  radius="12px"
/>
```
