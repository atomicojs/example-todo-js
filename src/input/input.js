import { c, useProp, html, css } from "atomico";
import tokens from "../tokens";
import { useRender } from "@atomico/hooks/use-render";
import { useFormListener } from "@atomico/hooks/use-form";

/**
 *
 * @param {{color:string,width:string}} props
 */
const svg = ({ color, width }) => html`<svg height="2" width="${width}">
  <line
    x1="0"
    y1="50%"
    x2="100%"
    y2="50%"
    stroke="${color}"
    stroke-linecap="round"
    stroke-width="2"
    stroke-dasharray="0.1 5"
  />
</svg>`;

/**
 * @param {import("atomico").Props<typeof input.props>}  props
 */
function input({ value = "", ...props }) {
  /**
   * @type {import("atomico").UseProp<string>}
   */
  const [, setValue] = useProp("value");
  /**
   * useFormListener will allow us to listen to the reset
   * event in order to clear the status of our form.
   */
  useFormListener("reset", () => setValue(""));
  /**
   * useRender allows you to run a render on the lightDOM,
   * the goal of this is to render the input to reflect
   * the events that you manage from your webcomponent to the form
   * that you associate this component.
   */
  useRender(
    () =>
      html`<input
        ...${props}
        slot="input"
        type="text"
        value=${value}
        oninput=${(event) => setValue(event.target.value)}
      />`
  );

  return html`<host shadowDom>
    <div class="box">
      <slot name="input"></slot>
      ${svg({ color: "var(--token--secondary-light-2)", width: "100%" })}
      ${svg({
        color: "var(--token--primary)",
        width: 1 + value.replace(/s+/g, "").length * 0.7 + "em",
      })}
    </div>
  </host>`;
}

input.props = {
  value: String,
  name: String,
  required: Boolean,
  placeholder: String,
};

input.styles = [
  tokens,
  css`
    .box {
      position: relative;
    }
    .box svg {
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 100%;
    }

    ::slotted(input) {
      width: 100%;
      box-sizing: border-box;
      background: transparent;
      border: none;
      color: unset;
      padding: 0.5em 1em 0.25em 1em;
      outline: none;
      font-size: 1em;
      font-family: unset;
      cursor: pointer;
    }
  `,
];

export const Input = c(input);
