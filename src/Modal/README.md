Renders a `<Card />` on a semi-black backdrop.

```jsx
import Button from '../Button';

initialState = { isOpen: false };
<div>
  <Button title="Open Modal" onClick={() => setState({ isOpen: true })} />
  {state.isOpen && <Modal onClose={() => setState({ isOpen: false })}><span>Hey I'm a Modal</span></Modal>}
</div>
```

Also, a CTA-enabled variant of the `<Card />` may be rendered inside the Modal.
In this example, the CTA button closes the Modal.


```jsx
import Button from '../Button';

initialState = { isOpen: false };
const onClose = () => setState({ isOpen: false });
<div>
  <Button title="Open Modal" onClick={() => setState({ isOpen: true })} />
  {state.isOpen && <Modal cta={<Button onClick={onClose} title="Close" />} onClose={onClose}><span>Hey I'm a Modal</span></Modal>}
</div>
```