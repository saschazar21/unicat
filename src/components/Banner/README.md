A default Banner showing some demo text:

```jsx
<Banner>A demo banner</Banner>
```

A default Banner showing some demo text and a title:

```jsx
<Banner title="A fancy title">A demo banner</Banner>
```

A default Banner with a little longer text:

```jsx
<Banner>
  Et adipisci voluptatibus dolores aut. Sit quis sed quam ullam in iste officia
  qui. Quod temporibus dolor molestiae sit aliquid sequi. Illum nostrum
  voluptatibus rem dolorum. Consectetur in tenetur occaecati. Officiis placeat
  repellendus minima id repellat. Illum nulla eos ut et amet magnam autem rerum.
  Magnam blanditiis sunt ipsa odit incidunt voluptatem eligendi error. Quo aut
  maiores voluptas quo quos. Impedit dignissimos magni molestias repellendus
  nostrum pariatur. Velit ab sunt consequuntur et amet vitae aspernatur illum.
  Et sapiente modi enim nostrum.
</Banner>
```

The same also works with different colors (types):

```jsx
const { BannerType } = require('./index.tsx');

<Banner type={BannerType.alert}>An alert banner</Banner>;
```

```jsx
const { BannerType } = require('./index.tsx');
<Banner type={BannerType.primary}>A primary banner</Banner>;
```

```jsx
const { BannerType } = require('./index.tsx');
<Banner type={BannerType.special}>A special banner</Banner>;
```

```jsx
const { BannerType } = require('./index.tsx');
<Banner type={BannerType.success}>A success banner</Banner>;
```
