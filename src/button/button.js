import { c, html, css } from "atomico";
import tokens from "../tokens";
import { useRender } from "@atomico/hooks/use-render";

function button() {
  /**
   * useRender allows you to run a render on the lightDOM,
   * the goal of this is to render the input to reflect
   * the events that you manage from your webcomponent to the form
   * that you associate this component.
   */
  useRender(
    () => html`<button slot="button">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          id="icon-plus"
          d="M5,11V7H1A1,1,0,0,1,1,5H5V1A1,1,0,0,1,7,1V5h4a1,1,0,0,1,0,2H7v4a1,1,0,0,1-2,0Z"
          fill="var(--token--primary)"
        />
      </svg>
    </button>`
  );

  return html`<host shadowDom>
    <slot name="button"></slot>
  </host>`;
}

button.styles = [
  tokens,
  css`
    :host {
      --radius: var(--token--box-radius);
    }
    ::slotted(button) {
      --size: var(--token--box-min-height);
      width: var(--size);
      height: var(--size);
      background: var(--token--secondary-light-1);
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
    }
  `,
];

export const Button = c(button);
