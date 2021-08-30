import{c as o,a as t,u as e,b as r,d as n,h as a,e as s}from"./vendor.6860be20.js";!function(){const o=document.createElement("link").relList;if(!(o&&o.supports&&o.supports("modulepreload"))){for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver((o=>{for(const e of o)if("childList"===e.type)for(const o of e.addedNodes)"LINK"===o.tagName&&"modulepreload"===o.rel&&t(o)})).observe(document,{childList:!0,subtree:!0})}function t(o){if(o.ep)return;o.ep=!0;const t=function(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),"use-credentials"===o.crossorigin?t.credentials="include":"anonymous"===o.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(o);fetch(o.href,t)}}();var i=o`
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
`;const d=({color:o,width:t})=>a`<svg height="2" width="${t}">
  <line
    x1="0"
    y1="50%"
    x2="100%"
    y2="50%"
    stroke="${o}"
    stroke-linecap="round"
    stroke-width="2"
    stroke-dasharray="0.1 5"
  />
</svg>`;function l({value:o="",...t}){const[,s]=e("value");return r("reset",(()=>s(""))),n((()=>a`<input
        ...${t}
        slot="input"
        type="text"
        value=${o}
        oninput=${o=>s(o.target.value)}
      />`)),a`<host shadowDom>
    <div class="box">
      <slot name="input"></slot>
      ${d({color:"var(--token--secondary-light-2)",width:"100%"})}
      ${d({color:"var(--token--primary)",width:1+.7*o.replace(/s+/g,"").length+"em"})}
    </div>
  </host>`}l.props={value:String,name:String,required:Boolean,placeholder:String},l.styles=[i,o`
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
    }
  `];const c=t(l);function u(){return n((()=>a`<button slot="button">
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          id="icon-plus"
          d="M5,11V7H1A1,1,0,0,1,1,5H5V1A1,1,0,0,1,7,1V5h4a1,1,0,0,1,0,2H7v4a1,1,0,0,1-2,0Z"
          fill="var(--token--primary)"
        />
      </svg>
    </button>`)),a`<host shadowDom>
    <slot name="button"></slot>
  </host>`}u.styles=[i,o`
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
    }
  `];const h=t(u);function p(o){const[,t]=e("checked");return n((()=>a`<input
        slot="input"
        type="checkbox"
        onchange=${o=>{t(o.target.checked)}}
        ...${o}
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
  </host>`}p.props={checked:{type:Boolean,reflect:!0}},p.styles=[i,o`
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
  `];const m=t(p);function b(){return a`<host shadowDom>
    <button>
      <slot></slot>
    </button>
  </host>`}b.props={selected:{type:Boolean,reflect:!0}},b.styles=[i,o`
    button {
      border: none;
      background: none;
      color: currentColor;
      font-family: unset;
      height: calc(var(--token--box-min-height) * 0.75);
      position: relative;
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
  `];const k=t(b);let v=Date.now();function g(){const o=s("NewTask",{bubbles:!0,composed:!0});return a`<host shadowDom>
    <form
      class="header"
      onsubmit=${t=>{t.preventDefault();const{target:e}=t,{input:{value:r}}=e;r.trim()&&(v++,o({id:v,value:r,checked:!1}),e.reset())}}
    >
      <todo-input placeholder="Todo" required name="input"></todo-input>
      <todo-button
        style=${{"--radius":"0 var(--token--box-radius) 0 var(--token--box-radius)"}}
      ></todo-button>
    </form>
  </host>`}g.styles=[i,o`
    .header {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: var(--token--box-gap);
      padding-left: var(--token--box-gap);
      align-items: flex-end;
    }
  `];const f=t(g);function y({checked:o}){return a`<host shadowDom>
    <label>
      <todo-checkbox checked="${o}" />
      <span>
        <slot></slot>
      </span>
    </label>
  </host>`}y.props={checked:{type:Boolean,reflect:!0}},y.styles=[i,o`
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
  `];const x=t(y);function w(){return a`<host shadowDom>
    <slot></slot>
  </host>`}w.styles=[i,o`
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
  `];const $=t(w);function D(){const[o,t]=e("task"),[r,n]=e("view");return n("all"),a`<host shadowDom>
    <todo-header
      onNewTask=${o=>{t((t=>[...t,o.detail]))}}
    ></todo-header>
    <div class="tasks">
      <div class="list">
        ${o.filter((o=>"complete"==r?o.checked:"active"!=r||!o.checked)).map((({value:o,checked:e,id:r})=>a`<todo-task
              checked=${e}
              onchange=${o=>{const{target:e}=o;t((o=>o.map((o=>r===o.id?{...o,checked:e.checked}:o))))}}
            >
              ${o}
            </todo-task>`))}
      </div>
    </div>
    <todo-footer class="footer">
      <todo-tab selected=${"all"==r} onclick=${()=>n("all")}>
        All
      </todo-tab>
      <todo-tab selected=${"active"==r} onclick=${()=>n("active")}>
        Active
      </todo-tab>
      <todo-tab
        selected=${"complete"==r}
        onclick=${()=>n("complete")}
      >
        Complete
      </todo-tab>
    </todo-footer>
  </host>`}D.props={view:{type:String,value:"all"},task:{type:Array,value:()=>[]}},D.styles=[i,o`
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
  `];const E=t(D);customElements.define("todo-input",c),customElements.define("todo-button",h),customElements.define("todo-checkbox",m),customElements.define("todo-tab",k),customElements.define("todo-header",f),customElements.define("todo-task",x),customElements.define("todo-footer",$),customElements.define("todo-app",E);
