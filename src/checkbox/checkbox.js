import { c, useProp, html, css } from "atomico";
import tokens from "../tokens";
import { useRender } from "@atomico/hooks/use-render";

/**
 * @param {import("atomico").Props<typeof checkbox.props>}  props
 */
function checkbox(props) {
  /**
   * @type {import("atomico").UseProp<boolean>}
   */
  const [, setChecked] = useProp("checked");

  /**
   * useRender allows you to run a render on the lightDOM,
   * the goal of this is to render the input to reflect
   * the events that you manage from your webcomponent to the form
   * that you associate this component.
   */
  useRender(
    () =>
      html`<input
        slot="input"
        type="checkbox"
        onchange=${(event) => {
          setChecked(event.target.checked);
        }}
        ...${props}
      />`
  );

  return html`<host shadowDom>
    <slot name="input"></slot>
    <div class="icon">
      <slot name="checked">
        <svg width="12.728" height="12.728" viewBox="0 0 12.728 12.728">
          <path
            d="M326.657-927.172a1,1,0,0,1-1-1,1,1,0,0,1,1-1h3v-9a1,1,0,0,1,1-1,1,1,0,0,1,1,1v10a1,1,0,0,1-1,1Z"
            transform="translate(-885.884 433.82) rotate(45)"
          />
        </svg>
      </slot>
    </div>
  </host>`;
}

checkbox.props = {
  checked: {
    type: Boolean,
    reflect: true,
  },
};

checkbox.styles = [
  tokens,
  css`
    :host {
      position: relative;
      display: inline-flex;
    }

    ::slotted(input) {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: calc(var(--box-radius) * 0.33);
      appearance: unset;
      border: 2px solid var(--primary);
      margin: auto;
    }

    ::slotted(input:checked) {
      background: var(--primary);
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    :host([checked]) .icon {
      opacity: 1;
    }
  `,
];

export const Checkbox = c(checkbox);
