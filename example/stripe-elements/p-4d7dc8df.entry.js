import{r as s,h as t,H as i}from"./p-90247b61.js";import{g as o}from"./p-37330625.js";import{m as r}from"./p-fa3de369.js";import{u as n}from"./p-c6651b87.js";import"./p-8c01dd96.js";import"./p-f2660943.js";import"./p-c73722f4.js";import"./p-74529b1d.js";const e=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>r.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await n(this.menu)}render(){const s=o(this),r=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":r?"true":null,class:{[s]:!0,"menu-toggle-hidden":r}},t("slot",null))}};e.style=":host(.menu-toggle-hidden){display:none}";export{e as ion_menu_toggle}