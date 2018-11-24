A simple title construct with a short description underneath, combined with a rounded image container. May be used to show an author information, or as pagination construct, or something else (like a color bean).

### Horizontally aligned Bean

```jsx
<Bean
  name="Sascha Zarhuber"
  description="Frontend Web Developer"
  image="https://avatars0.githubusercontent.com/u/9016897"
/>
```

Furthermore, it is also possible to alter the image size on the Bean:

```jsx
<Bean
  name="Sascha Zarhuber"
  description="Frontend Web Developer"
  image="//placehold.it/64/64"
  size={32}
/>
```

A more reduced example (without any description) would look like this:

```jsx
<Bean name="Previous Page" image="//placehold.it/64/64" size={48} />
```

Or to reverse the fun, go ahead:

```jsx
<Bean name="Next Page" image="//placehold.it/64/64" reverse={true} size={48} />
```

### Vertically aligned Bean

```jsx
<Bean
  name="Sascha Zarhuber"
  description="Frontend Web Developer"
  image="https://avatars0.githubusercontent.com/u/9016897"
  column={true}
/>
```

Also you may enhance the image size for special occasions:

```jsx
<Bean
  name="Sascha Zarhuber"
  description="Frontend Web Developer"
  image="//placehold.it/64/64"
  column={true}
  size={128}
/>
```
