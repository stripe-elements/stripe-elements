import{c as t}from"./p-74529b1d.js";import{g as o}from"./p-e6b17ee2.js";import"./p-c73722f4.js";import"./p-e4c324f8.js";const r=(r,i)=>{const e="back"===i.direction,a=i.leavingEl,s=o(i.enteringEl),p=s.querySelector("ion-toolbar"),c=t();if(c.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),e?c.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),p){const o=t();o.addElement(p),c.addAnimation(o)}if(a&&e){c.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=t();r.addElement(o(a)).onFinish((t=>{1===t&&r.elements.length>0&&r.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),c.addAnimation(r)}return c};export{r as mdTransitionAnimation}