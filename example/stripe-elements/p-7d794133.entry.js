import{r as t,c as o,a as i,f as s,h as n,H as r,d as l}from"./p-e4c324f8.js";import{g as e,c as a}from"./p-599d93c7.js";import{i as c}from"./p-8c01dd96.js";import{c as h,h as d}from"./p-7840618d.js";const p=class{constructor(i){t(this,i),this.ionScrollStart=o(this,"ionScrollStart",7),this.ionScroll=o(this,"ionScroll",7),this.ionScrollEnd=o(this,"ionScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){this.isMainContent=null===this.el.closest("ion-menu, ion-popover, ion-modal")}disconnectedCallback(){this.onScrollEnd()}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t}=this,o=e(this);return void 0===t?"ios"===o&&c("ios"):t}resize(){this.fullscreen?i((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,s(this))}readDimensions(){const t=g(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,s(this))}onScroll(t){const o=Date.now(),s=!this.isScrolling;this.lastScroll=o,s&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,i((o=>{this.queued=!1,this.detail.event=t,v(this.detail,this.scrollEl,o,s),this.ionScroll.emit(this.detail)})))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const s=this.scrollEl;if(i<32)return null!=o&&(s.scrollTop=o),void(null!=t&&(s.scrollLeft=t));let n,r=0;const l=new Promise((t=>n=t)),e=s.scrollTop,a=s.scrollLeft,c=null!=o?o-e:0,h=null!=t?t-a:0,d=t=>{const o=Math.min(1,(t-r)/i)-1,l=Math.pow(o,3)+1;0!==c&&(s.scrollTop=Math.floor(l*c+e)),0!==h&&(s.scrollLeft=Math.floor(l*h+a)),l<1?requestAnimationFrame(d):n()};return requestAnimationFrame((t=>{r=t,d(t)})),l}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:o,scrollY:i}=this,s=e(this),l=this.shouldForceOverscroll(),c=t?"main":"div",p="ios"===s&&a.getBoolean("experimentalTransitionShadow",!0);return this.resize(),n(r,{class:h(this.color,{[s]:!0,"content-sizing":d("ion-popover",this.el),overscroll:l}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},n("div",{id:"background-content",part:"background"}),n(c,{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":i,overscroll:(o||i)&&l},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},n("slot",null)),p?n("div",{class:"transition-effect"},n("div",{class:"transition-cover"}),n("div",{class:"transition-shadow"})):null,n("slot",{name:"fixed"}))}get el(){return l(this)}},g=t=>{const o=t.closest("ion-tabs");if(o)return o;return t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},v=(t,o,i,s)=>{const n=t.currentX,r=t.currentY,l=o.scrollLeft,e=o.scrollTop,a=i-t.currentTime;if(s&&(t.startTime=i,t.startX=l,t.startY=e,t.velocityX=t.velocityY=0),t.currentTime=i,t.currentX=t.scrollLeft=l,t.currentY=t.scrollTop=e,t.deltaX=l-t.startX,t.deltaY=e-t.startY,a>0&&a<100){const o=(e-r)/a;t.velocityX=(l-n)/a*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};p.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);box-sizing:border-box;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';export{p as ion_content}