import{c as t,a as e,u as o,b as r,d as n,h as a,e as s}from"./vendor.6860be20.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const o of t)if("childList"===o.type)for(const t of o.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();var i=t`
  :host {
    --token--primary: var(--todo--primary, #ffee00);
    --token--secondary: var(--todo--secondary, black);
    --token--contrast: var(--todo--contrast, #fff);
    --token--secondary-light-1: var(
      --secondary-light-1,
      rgba(255, 255, 255, 0.2)
    );
    --token--secondary-light-2: var(
      --secondary-light-2,
      rgba(255, 255, 255, 0.5)
    );
    --token--box-radius: var(--todo--box-radius, 1rem);
    --token--box-min-height: var(--todo--box-min-height, 3rem);
    --token--box-gap: var(--todo--box-gap, 3rem);
  }
`;const d=({color:t,width:e})=>a`<svg height="2" width="${e}">
  <line
    x1="0"
    y1="50%"
    x2="100%"
    y2="50%"
    stroke="${t}"
    stroke-linecap="round"
    stroke-width="2"
    stroke-dasharray="0.1 5"
  />
</svg>`;function c({value:t="",...e}){const[,s]=o("value");return r("reset",(()=>s(""))),n((()=>a`<input
        ...${e}
        slot="input"
        type="text"
        value=${t}
        oninput=${t=>s(t.target.value)}
      />`)),a`<host shadowDom>
    <div class="box">
      <slot name="input"></slot>
      ${d({color:"var(--token--secondary-light-2)",width:"100%"})}
      ${d({color:"var(--token--primary)",width:1+.7*t.replace(/s+/g,"").length+"em"})}
    </div>
  </host>`}c.props={value:String,name:String,required:Boolean,placeholder:String},c.styles=[i,t`
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
  `];const l=e(c);function u(){return n((()=>a`<button slot="button">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          id="icon-plus"
          d="M5,11V7H1A1,1,0,0,1,1,5H5V1A1,1,0,0,1,7,1V5h4a1,1,0,0,1,0,2H7v4a1,1,0,0,1-2,0Z"
          fill="var(--token--primary)"
        />
      </svg>
    </button>`)),a`<host shadowDom>
    <slot name="button"></slot>
  </host>`}u.styles=[i,t`
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
  `];const h=e(u);function p(t){const[,e]=o("checked");return n((()=>a`<input
        slot="input"
        type="checkbox"
        onchange=${t=>{e(t.target.checked)}}
        ...${t}
      />`)),a`<host shadowDom>
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
  </host>`}p.props={checked:{type:Boolean,reflect:!0}},p.styles=[i,t`
    :host {
      position: relative;
      display: inline-flex;
    }

    ::slotted(input) {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: calc(var(--token--box-radius) * 0.33);
      appearance: unset;
      border: 2px solid var(--token--primary);
      margin: auto;
    }

    ::slotted(input:checked) {
      background: var(--token--primary);
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
  `];const m=e(p);function b(){return a`<host shadowDom>
    <button>
      <slot></slot>
    </button>
  </host>`}b.props={selected:{type:Boolean,reflect:!0}},b.styles=[i,t`
    button {
      border: none;
      background: none;
      color: currentColor;
      font-family: unset;
      height: calc(var(--token--box-min-height) * 0.75);
      position: relative;
      padding: 0px 0.5rem;
      cursor: pointer;
    }

    button:before {
      width: 100%;
      height: 10%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: transparent;
      content: "";
      display: block;
      border-radius: var(--token--box-radius) var(--token--box-radius) 0 0;
    }

    :host([selected]) button:before {
      background: var(--token--primary);
    }
  `];const k=e(b);let g=Date.now();function v(){const t=s("NewTask",{bubbles:!0,composed:!0});return a`<host shadowDom>
    <form
      class="header"
      onsubmit=${e=>{e.preventDefault();const{target:o}=e,{input:{value:r}}=o;r.trim()&&(g++,t({id:g,value:r,checked:!1}),o.reset())}}
    >
      <todo-input placeholder="Todo" required name="input"></todo-input>
      <todo-button
        style=${{"--radius":"0 var(--token--box-radius) 0 var(--token--box-radius)"}}
      ></todo-button>
    </form>
  </host>`}v.styles=[i,t`
    .header {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: var(--token--box-gap);
      padding-left: var(--token--box-gap);
      align-items: flex-end;
    }
  `];const f=e(v);function y({checked:t}){const[,e]=o("checked");return a`<host shadowDom>
    <label>
      <!--
      In this case we must reflect the checked state 
      to the component that nests it, in order to 
      synchronize the state of both the parent and the child
      -->
      <todo-checkbox
        checked="${t}"
        onchange=${t=>e(t.target.checked)}
      />
      <span>
        <slot></slot>
      </span>
    </label>
  </host>`}y.props={checked:{type:Boolean,reflect:!0}},y.styles=[i,t`
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
  `];const x=e(y);function w(){return a`<host shadowDom>
    <slot></slot>
  </host>`}w.styles=[i,t`
    :host {
      display: flex;
      padding: 0 var(--token--box-gap);
    }

    slot {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      background: var(--token--secondary-light-1);

      border-radius: var(--token--box-radius) var(--token--box-radius) 0 0;
      width: 100%;
    }
  `];const $=e(w);function D(){const[t,e]=o("task"),[r,n]=o("view");return a`<host shadowDom>
    <todo-header
      onNewTask=${t=>{e((e=>[...e,t.detail]))}}
    ></todo-header>
    <div class="tasks">
      <div class="list">
        ${t.filter((t=>"complete"==r?t.checked:"active"!=r||!t.checked)).map((({value:t,checked:o,id:r})=>a`<todo-task
              key=${r}
              data-key=${r}
              checked=${o}
              onchange=${t=>{const{target:o}=t;e((t=>t.map((t=>r===t.id?{...t,checked:o.checked}:t))))}}
            >
              ${t}
            </todo-task>`))}
      </div>
    </div>
    <todo-footer class="footer">
      <todo-tab selected=${"all"===r} onclick=${()=>n("all")}>
        All
      </todo-tab>
      <todo-tab
        selected=${"active"===r}
        onclick=${()=>n("active")}
      >
        Active
      </todo-tab>
      <todo-tab
        selected=${"complete"===r}
        onclick=${()=>n("complete")}
      >
        Complete
      </todo-tab>
    </todo-footer>
  </host>`}D.props={view:{type:String,value:"all"},task:{type:Array,value:()=>[]}},D.styles=[i,t`
    :host {
      display: flex;
      flex-flow: column nowrap;
      color: var(--token--contrast);
      border-radius: var(--token--box-radius);
      background: var(--token--secondary);
      min-height: 280px;
    }

    .tasks {
      padding: 1rem 2.5rem;
    }

    .footer {
      margin: auto 0px 0px;
    }
  `];const E=e(D);customElements.define("todo-input",l),customElements.define("todo-button",h),customElements.define("todo-checkbox",m),customElements.define("todo-tab",k),customElements.define("todo-header",f),customElements.define("todo-task",x),customElements.define("todo-footer",$),customElements.define("todo-app",E);
