import{e as o,r as i,h as n,H as t,d as r}from"./p-e4c324f8.js";let s;const e=(o,i,n,t,r)=>(n="ios"===(n&&h(n))?"ios":"md",t&&"ios"===n?o=h(t):r&&"md"===n?o=h(r):(o||!i||l(i)||(o=i),a(o)&&(o=h(o))),a(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null),c=o=>a(o)&&(o=o.trim(),l(o))?o:null,l=o=>o.length>0&&/(\/|\.)/.test(o),a=o=>"string"==typeof o,h=o=>o.toLowerCase(),d=o=>{if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(let i=0;i<o.attributes.length;i++){const n=o.attributes[i].value;if(a(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let i=0;i<o.childNodes.length;i++)if(!d(o.childNodes[i]))return!1}return!0},f=new Map,u=new Map,m=class{constructor(o){i(this,o),this.iconName=null,this.isVisible=!1,this.mode=p(),this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,i,n){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const t=this.io=new window.IntersectionObserver((o=>{o[0].isIntersecting&&(t.disconnect(),this.io=void 0,n())}),{rootMargin:i});t.observe(o)}else n()}loadIcon(){if(this.isVisible){const i=(i=>{let n=c(i.src);if(n)return n;if(n=e(i.name,i.icon,i.mode,i.ios,i.md),n)return t=n,(()=>{if("undefined"==typeof window)return new Map;if(!s){const o=window;o.Ionicons=o.Ionicons||{},s=o.Ionicons.map=o.Ionicons.map||new Map}return s})().get(t)||o(`svg/${t}.svg`);var t;if(i.icon){if(n=c(i.icon),n)return n;if(n=c(i.icon[i.mode]),n)return n}return null})(this);i&&(f.has(i)?this.svgContent=f.get(i):((o,i)=>{let n=u.get(o);if(!n){if("undefined"==typeof fetch||"undefined"==typeof document)return f.set(o,""),Promise.resolve();n=fetch(o).then((n=>{if(n.ok)return n.text().then((n=>{n&&!1!==i&&(n=(o=>{const i=document.createElement("div");i.innerHTML=o;for(let o=i.childNodes.length-1;o>=0;o--)"svg"!==i.childNodes[o].nodeName.toLowerCase()&&i.removeChild(i.childNodes[o]);const n=i.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const o=n.getAttribute("class")||"";if(n.setAttribute("class",(o+" s-ion-icon").trim()),d(n))return i.innerHTML}return""})(n)),f.set(o,n||"")}));f.set(o,"")})),u.set(o,n)}return n})(i,this.sanitize).then((()=>this.svgContent=f.get(i))))}const i=this.iconName=e(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||i&&(this.ariaLabel=i.replace(/\-/g," "))}render(){const{iconName:o}=this,i=this.mode||"md",r=this.flipRtl||o&&(o.indexOf("arrow")>-1||o.indexOf("chevron")>-1)&&!1!==this.flipRtl;return n(t,{role:"img",class:Object.assign(Object.assign({[i]:!0},w(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!r&&"rtl"===this.el.ownerDocument.dir})},n("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return r(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}},p=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",w=o=>o?{"ion-color":!0,[`ion-color-${o}`]:!0}:null;m.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";export{m as ion_icon}