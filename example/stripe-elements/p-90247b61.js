let e,t,n,l=!1,s=!1,o=!1,i=!1,r=!1;const c="undefined"!=typeof window?window:{},a=c.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=y(e,n),i=$(t,s),r=m(n);f.ael(o,l,i,r),(t.o=t.o||[]).push((()=>f.rel(o,l,i,r)))}))},$=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){me(e)}},y=(e,t)=>4&t?a:8&t?c:16&t?a.body:e,m=e=>0!=(2&e),h="http://www.w3.org/1999/xlink",w=new WeakMap,b=(e,t)=>"sc-"+(t&&32&e.t?e.p+"-"+t:e.p),g=e=>ge.push(e),v=e=>de(e).$,k={},j=e=>"object"==(e=typeof e)||"function"===e,S=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!j(l))&&(l+=""),i&&r?c[c.length-1].m+=l:c.push(i?O(null,l):l),r=i)};if(a(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,M);const f=O(e,null);return f.h=t,c.length>0&&(f.g=c),f.v=s,f.k=o,f},O=(e,t)=>({t:0,j:e,m:t,S:null,g:null,h:null,v:null,k:null}),C={},M={forEach:(e,t)=>e.map(x).forEach(t),map:(e,t)=>e.map(x).map(t).map(R)},x=e=>({vattrs:e.h,vchildren:e.g,vkey:e.v,vname:e.k,vtag:e.j,vtext:e.m}),R=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),S(e.vtag,t,...e.vchildren||[])}const t=O(e.vtag,e.vtext);return t.h=e.vattrs,t.g=e.vchildren,t.v=e.vkey,t.k=e.vname,t},T=(e,t,n,l,s,o)=>{if(n!==l){let i=ye(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=P(n),o=P(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=j(l);if((i||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let a=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!i||4&o||s)&&!c&&(l=!0===l?"":l,a?e.setAttributeNS(h,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ye(c,r)?r.slice(2):r[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)}},L=/\s/,P=e=>e?e.split(L):[],U=(e,t,n,l)=>{const s=11===t.S.nodeType&&t.S.host?t.S.host:t.S,o=e&&e.h||k,i=t.h||k;for(l in o)l in i||T(s,l,o[l],void 0,n,t.t);for(l in i)T(s,l,o[l],i[l],n,t.t)},W=(s,r,c,f)=>{let u,d,p,$=r.g[c],y=0;if(l||(o=!0,"slot"===$.j&&(e&&f.classList.add(e+"-s"),$.t|=$.g?2:1)),null!==$.m)u=$.S=a.createTextNode($.m);else if(1&$.t)u=$.S=a.createTextNode("");else{if(i||(i="svg"===$.j),u=$.S=a.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.j),i&&"foreignObject"===$.j&&(i=!1),U(null,$,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),$.g)for(y=0;y<$.g.length;++y)d=W(s,$,y,u),d&&u.appendChild(d);"svg"===$.j?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=n,3&$.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=$.k||"",p=s&&s.g&&s.g[c],p&&p.j===$.j&&s.S&&E(s.S,!1)),u},E=(e,t)=>{f.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const s=l[e];s["s-hn"]!==n&&s["s-ol"]&&(H(s).insertBefore(s,B(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&E(s,t)}f.t&=-2},D=(e,t,l,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=W(null,l,o,e),r&&(s[o].S=r,c.insertBefore(r,B(t))))},F=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.S,G(l),s=!0,o["s-ol"]?o["s-ol"].remove():E(o,!0),o.remove())},A=(e,t)=>e.j===t.j&&("slot"===e.j?e.k===t.k:e.v===t.v),B=e=>e&&e["s-ol"]||e,H=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,N=(e,t)=>{const n=t.S=e.S,l=e.g,s=t.g,o=t.j,r=t.m;let c;null===r?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||U(e,t,i),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],p=l.length-1,$=l[0],y=l[p];for(;i<=f&&r<=p;)if(null==u)u=t[++i];else if(null==d)d=t[--f];else if(null==$)$=l[++r];else if(null==y)y=l[--p];else if(A(u,$))N(u,$),u=t[++i],$=l[++r];else if(A(d,y))N(d,y),d=t[--f],y=l[--p];else if(A(u,y))"slot"!==u.j&&"slot"!==y.j||E(u.S.parentNode,!1),N(u,y),e.insertBefore(u.S,d.S.nextSibling),u=t[++i],y=l[--p];else if(A(d,$))"slot"!==u.j&&"slot"!==y.j||E(d.S.parentNode,!1),N(d,$),e.insertBefore(d.S,u.S),d=t[--f],$=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].v&&t[a].v===$.v){c=a;break}c>=0?(o=t[c],o.j!==$.j?s=W(t&&t[r],n,c,e):(N(o,$),t[c]=void 0,s=o.S),$=l[++r]):(s=W(t&&t[r],n,r,e),$=l[++r]),s&&H(u.S).insertBefore(s,B(u.S))}i>f?D(e,null==l[p+1]?null:l[p+1].S,n,l,r,p):r>p&&F(t,i,f)})(n,l,t,s):null!==s?(null!==e.m&&(n.textContent=""),D(n,null,t,s,0,s.length-1)):null!==l&&F(l,0,l.length-1),i&&"svg"===o&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.m!==r&&(n.data=r)},q=e=>{let t,n,l,s,o,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(i=r[s].nodeType,r[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===i&&o===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){t.hidden=!0;break}q(t)}},V=[],_=e=>{let t,n,l,o,i,r,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,o)?(i=V.find((e=>e.O===n)),s=!0,n["s-sn"]=n["s-sn"]||o,i?i.C=t:V.push({C:t,O:n}),n["s-sr"]&&V.map((e=>{z(e.O,n["s-sn"])&&(i=V.find((e=>e.O===n)),i&&!e.C&&(e.C=i.C))}))):V.some((e=>e.O===n))||V.push({O:n}));1===t.nodeType&&_(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,G=e=>{e.h&&e.h.ref&&e.h.ref(null),e.g&&e.g.map(G)},I=e=>de(e).M,J=(e,t,n)=>{const l=I(e);return{emit:e=>K(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},K=(e,t,n)=>{const l=f.ce(t,n);return e.dispatchEvent(l),l},Q=(e,t)=>{t&&!e.R&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.R=t)))},X=(e,t)=>{if(e.t|=16,!(4&e.t))return Q(e,e.T),xe((()=>Y(e,t)));e.t|=512},Y=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>se(n,e,t))),e.u=null),l=se(n,"componentWillLoad")):l=se(n,"componentWillUpdate"),l=oe(l,(()=>se(n,"componentWillRender"))),oe(l,(()=>Z(e,n,t)))},Z=async(e,t,n)=>{const l=e.M,s=l["s-rc"];n&&(e=>{const t=e.L,n=e.M,l=t.t,s=((e,t,n)=>{let l=b(t,n),s=be.get(l);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,n=w.get(e=e.head||e);n||w.set(e,n=new Set),n.has(l)||(t=a.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s"))})(e);ee(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>te(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},ee=(i,r)=>{try{r=r.render&&r.render(),i.t&=-17,i.t|=2,((i,r)=>{const c=i.M,u=i.L,d=i.P||O(null,null),p=(e=>e&&e.j===C)(r)?r:S(null,null,r);if(n=c.tagName,u.U&&(p.h=p.h||{},u.U.map((([e,t])=>p.h[t]=c[e]))),p.j=null,p.t|=4,i.P=p,p.S=d.S=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&u.t),s=!1,N(d,p),f.t|=1,o){let e,t,n,l,s,o;_(p.S);let i=0;for(;i<V.length;i++)e=V[i],t=e.O,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<V.length;i++)if(e=V[i],t=e.O,e.C){for(l=e.C.parentNode,s=e.C.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&q(p.S),f.t&=-2,V.length=0})(i,r)}catch(e){me(e,i.M)}return null},te=e=>{const t=e.M,n=e.i,l=e.T;64&e.t?se(n,"componentDidUpdate"):(e.t|=64,ie(t),se(n,"componentDidLoad"),e.W(t),l||le()),e.D(t),e.R&&(e.R(),e.R=void 0),512&e.t&&Ce((()=>X(e,!1))),e.t&=-517},ne=e=>{{const t=de(e),n=t.M.isConnected;return n&&2==(18&t.t)&&X(t,!1),n}},le=()=>{ie(a.documentElement),Ce((()=>K(c,"appload",{detail:{namespace:"stripe-elements"}})))},se=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){me(e)}},oe=(e,t)=>e&&e.then?e.then(t):t(),ie=e=>e.classList.add("hydrated"),re=(e,t,n)=>{if(t.F){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.F),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>de(this).B.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=de(e),o=s.M,i=s.B.get(t),r=s.t,c=s.i;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.F[t][0]),!(8&r&&void 0!==i||n===i)&&(s.B.set(t,n),c)){if(l.A&&128&r){const e=l.A[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){me(e,o)}}))}2==(18&r)&&X(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=de(this);return n.H.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){f.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.U.push([e,s]),s}))}}return e},ce=e=>{se(e,"connectedCallback")},ae=(e,t={})=>{const n=[],l=t.exclude||[],s=c.customElements,o=a.head,i=o.querySelector("meta[charset]"),r=a.createElement("style"),u=[];let $,y=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map((e=>e[1].map((t=>{const o={t:t[0],p:t[1],F:t[2],N:t[3]};o.F=t[2],o.N=t[3],o.U=[],o.A={};const i=o.p,r=class extends HTMLElement{constructor(e){super(e),$e(e=this,o),1&o.t&&e.attachShadow({mode:"open",delegatesFocus:!!(16&o.t)})}connectedCallback(){$&&(clearTimeout($),$=null),y?u.push(this):f.jmp((()=>(e=>{if(0==(1&f.t)){const t=de(e),n=t.L,l=()=>{};if(1&t.t)p(e,t,n.N),ce(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Q(t,t.T=n);break}}n.F&&Object.entries(n.F).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=we(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.A=s.watchers,re(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){me(e)}t.t&=-9,t.t|=128,e(),ce(t.i)}if(s.style){let l=s.style;"string"!=typeof l&&(l=l[t.$=(e=>ge.map((t=>t(e))).find((e=>!!e)))(e)]);const o=b(n,t.$);if(!be.has(o)){const e=()=>{};((e,t,n)=>{let l=be.get(e);d&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,be.set(e,l)})(o,l,!!(1&n.t)),e()}}}const o=t.T,i=()=>X(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(e,t,n)}l()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=de(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),se(t,"disconnectedCallback")}})()))}componentOnReady(){return de(this).q}};o.V=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,re(r,o,1)))})))),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),y=!1,u.length?u.map((e=>e.connectedCallback())):f.jmp((()=>$=setTimeout(le,30)))},fe=e=>{const t=new URL(e,f.l);return t.origin!==c.location.origin?t.href:t.pathname},ue=new WeakMap,de=e=>ue.get(e),pe=(e,t)=>ue.set(t.i=e,t),$e=(e,t)=>{const n={t:0,M:e,L:t,B:new Map};return n.H=new Promise((e=>n.D=e)),n.q=new Promise((e=>n.W=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.N),ue.set(e,n)},ye=(e,t)=>t in e,me=(e,t)=>(0,console.error)(e,t),he=new Map,we=e=>{const t=e.p.replace(/-/g,"_"),n=e.V,l=he.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(he.set(n,e),e[t])),me)},be=new Map,ge=[],ve=[],ke=[],je=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&f.t?Ce(Oe):f.raf(Oe))},Se=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){me(e)}e.length=0},Oe=()=>{Se(ve),Se(ke),(r=ve.length>0)&&f.raf(Oe)},Ce=e=>u().then(e),Me=je(ve,!1),xe=je(ke,!0),Re={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1};export{Re as B,C as H,Me as a,ae as b,J as c,I as d,fe as e,ne as f,v as g,S as h,u as p,pe as r,g as s,xe as w}