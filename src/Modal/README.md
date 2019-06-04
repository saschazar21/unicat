Renders a `<Card />` on a semi-black backdrop.

```jsx
import Button from '../Button';

initialState = { isOpen: false };
<div>
  <Button title="Open Modal" onClick={() => setState({ isOpen: true })} />
  {state.isOpen && <Modal onClose={() => setState({ isOpen: false })}><span>Hey I'm a Modal</span></Modal>}
</div>
```