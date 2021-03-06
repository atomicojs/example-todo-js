import { c, html, css, useProp } from "atomico";
import tokens from "../tokens";

/**
 * This component has a special behavior, since
 * use an input inside the shadowDOM, I have created this situation
 * so that you know how to emit events automatically
 * through the props
 *
 * @param {import("atomico").Props<typeof todoTask.props>} props
 */
function todoTask({ checked }) {
  const [, setChecked] = useProp("checked");
  return html`<host shadowDom>
    <label>
      <!--
      In this case we must reflect the checked state 
      to the component that nests it, in order to 
      synchronize the state of both the parent and the child.
      -->
      <todo-checkbox
        checked="${checked}"
        onchange=${(event) => setChecked(event.target.checked)}
      />
      <span>
        <slot></slot>
      </span>
    </label>
  </host>`;
}

todoTask.props = {
  checked: {
    type: Boolean,
    reflect: true,
    event: {
      /**
       * The native event of the form does not traverse the shadowDOM
       * thanks to the following configuration we will emit a second event
       * through the shadowDOM
       */
      type: "change",
      bubbles: true,
      composed: true,
    },
  },
};

todoTask.styles = [
  tokens,
  css`
    label {
      display: grid;
      padding: 0.25rem 0.5rem;
      grid-template-columns: auto 12fr;
      grid-gap: 0.5rem;
      align-items: center;
      cursor: pointer;
    }

    label:hover {
      background-color: var(--token--secondary-light-1);
      border-radius: calc(var(--token--box-radius) * 0.33);
    }
  `,
];

export const TodoTask = c(todoTask);
