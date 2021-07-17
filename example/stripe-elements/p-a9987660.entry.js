import{r as t,c as e,h as i,H as n,d as s}from"./p-e4c324f8.js";import{g as o}from"./p-599d93c7.js";import{j as r,d as a,e as l}from"./p-c73722f4.js";import{f as d,g as h,h as p}from"./p-51497723.js";import{h as c}from"./p-7840618d.js";import"./p-8c01dd96.js";import"./p-f2660943.js";const u=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((e=>e.value===t.value))},g=class{constructor(i){t(this,i),this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7),this.inputId="ion-sel-"+w++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,i)=>{if("undefined"==typeof MutationObserver)return;const n=new MutationObserver((t=>{i(((t,e)=>{let i;t.forEach((t=>{for(let n=0;n<t.addedNodes.length;n++)i=u(t.addedNodes[n],e)||i}))})(t,"ion-select-option"))}));return n.observe(t,{childList:!0,subtree:!0}),n})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then((()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()})),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,i);break;case"popover":const n=t.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(e,i));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(t,e){const i=t.map((t=>{const i=v(t),n=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" "),s=`${C} ${n}`;return{role:b(i,e,this.compareWith)?"selected":"",text:t.textContent,cssClass:s,handler:()=>{this.value=i}}}));return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(t,e,i){return t.map((t=>{const n=v(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{type:e,cssClass:`${C} ${s}`,label:t.textContent||"",value:n,checked:b(n,i,this.compareWith),disabled:t.disabled}}))}createPopoverOptions(t,e){return t.map((t=>{const i=v(t),n=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{text:t.textContent||"",cssClass:`${C} ${n}`,value:i,checked:b(i,e,this.compareWith),disabled:t.disabled,handler:()=>{this.value=i,this.close()}}}))}async openPopover(t){const e=this.interfaceOptions,i=o(this),n=this.value,s=Object.assign(Object.assign({mode:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:n,options:this.createPopoverOptions(this.childOpts,n)}});return d.create(s)}async openActionSheet(){const t=o(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return h.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,n=this.multiple?"checkbox":"radio",s=o(this),r=Object.assign(Object.assign({mode:s},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,n,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return p.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return r(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:x(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,el:e,inputId:s,isExpanded:r,name:d,placeholder:h,value:p}=this,u=o(this),{labelText:g,labelId:b}=a(e,s);l(!0,e,d,f(p),t);let v=!1,m=this.getText();""===m&&null!=h&&(m=h,v=!0);const x={"select-text":!0,"select-placeholder":v},y=v?"placeholder":"text",w=void 0!==g?""!==m?`${m}, ${g}`:g:m;return i(n,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":w,class:{[u]:!0,"in-item":c("ion-item",e),"select-disabled":t,"select-expanded":r}},i("div",{"aria-hidden":"true",class:x,part:y},m),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:b},w),i("button",{type:"button",disabled:t,id:s,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":`${r}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return s(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},b=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some((t=>m(t,e,i))):m(t,e,i)),v=t=>{const e=t.value;return void 0===e?t.textContent||"":e},f=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},m=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e,x=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map((e=>y(t,e,i))).filter((t=>null!==t)).join(", "):y(t,e,i)||"",y=(t,e,i)=>{const n=t.find((t=>m(v(t),e,i)));return n?n.textContent:null};let w=0;const C="select-interface-option";g.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{transform:translate3d(0,  -9px,  0)}"};export{g as ion_select}