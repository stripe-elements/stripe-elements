import{r,h as i,H as t,d as n}from"./p-90247b61.js";import{c as a,g as o}from"./p-37330625.js";import{h as e}from"./p-7840618d.js";import"./p-8c01dd96.js";const s=class{constructor(i){r(this,i),this.animated=!1}render(){const r=this.animated&&a.getBoolean("animated",!0),n=e("ion-avatar",this.el)||e("ion-thumbnail",this.el),s=o(this);return i(t,{class:{[s]:!0,"skeleton-text-animated":r,"in-media":n}},i("span",null," "))}get el(){return n(this)}};s.style=":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";export{s as ion_skeleton_text}