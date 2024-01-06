import{c as P,a as p,h as y,b as O,r as S,i as Te,o as V,d as _,n as Se,e as G,g as W,l as A,f as ne,j as R,w as C,k as Ae,m as oe,P as Be,p as Ce,q as se,s as F,t as J,u as ce,v as Ve,x as j,y as Oe,z as Ne,A as je,B as Fe,C as Ke,D as Ie,E as Ue,F as Xe,G as ze,T as Ye,H as Ge,I as Je,J as Ze,K as He,L as et,M as tt,N as nt,O as N,Q as ot,R as lt,S as it,U as at,V as rt,W as ut,X as st,Y as ct,Z as de,_ as fe,$ as L,a0 as T,a1 as X,a2 as he,a3 as dt,a4 as ft,a5 as ve,a6 as ht,a7 as vt}from"./index.95e7b260.js";import{u as mt}from"./statisticsStore.4141eea0.js";var gt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=p(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:n.value},O(o.default))}}),pt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=p(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:n.value,role:"toolbar"},O(o.default))}});function bt(){const e=S(!Te.value);return e.value===!1&&V(()=>{e.value=!0}),e}const Le=typeof ResizeObserver!="undefined",me=Le===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Z=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,t,l={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?a():n===null&&(n=setTimeout(a,e.debounce))}function a(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:r}=t;(s!==l.width||r!==l.height)&&(l={width:s,height:r},o("resize",l))}}const{proxy:c}=W();if(c.trigger=u,Le===!0){let s;const r=m=>{t=c.$el.parentNode,t?(s=new ResizeObserver(u),s.observe(t),a()):m!==!0&&G(()=>{r(!0)})};return V(()=>{r()}),_(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),Se}else{let m=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,A.passive),r=void 0)},b=function(){m(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,A.passive),a())};const s=bt();let r;return V(()=>{G(()=>{t=c.$el,t&&b()})}),_(m),()=>{if(s.value===!0)return y("object",{style:me.style,tabindex:-1,type:"text/html",data:me.url,"aria-hidden":"true",onLoad:b})}}}}),yt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=W(),l=ne(oe,R);if(l===R)return console.error("QHeader needs to be child of QLayout"),R;const u=S(parseInt(e.heightHint,10)),a=S(!0),c=p(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||t.platform.is.ios&&l.isContainer.value===!0),s=p(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?u.value:0;const d=u.value-l.scroll.value.position;return d>0?d:0}),r=p(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),m=p(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),b=p(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=p(()=>{const d=l.rows.value.top,g={};return d[0]==="l"&&l.left.space===!0&&(g[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),d[2]==="r"&&l.right.space===!0&&(g[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),g});function i(d,g){l.update("header",d,g)}function h(d,g){d.value!==g&&(d.value=g)}function q({height:d}){h(u,d),i("size",d)}function $(d){m.value===!0&&h(a,!0),n("focusin",d)}C(()=>e.modelValue,d=>{i("space",d),h(a,!0),l.animate()}),C(s,d=>{i("offset",d)}),C(()=>e.reveal,d=>{d===!1&&h(a,e.modelValue)}),C(a,d=>{l.animate(),n("reveal",d)}),C(l.scroll,d=>{e.reveal===!0&&h(a,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const k={};return l.instances.header=k,e.modelValue===!0&&i("size",u.value),i("space",e.modelValue),i("offset",s.value),_(()=>{l.instances.header===k&&(l.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const d=Ae(o.default,[]);return e.elevated===!0&&d.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(y(Z,{debounce:0,onResize:q})),y("header",{class:b.value,style:w.value,onFocusin:$},d)}}});const xt=y("div",{class:"q-space"});var wt=P({name:"QSpace",setup(){return()=>xt}});function ee(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Be.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Dt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Et({showing:e,avoidEmit:o,configureAnchorEl:n}){const{props:t,proxy:l,emit:u}=W(),a=S(null);let c=null;function s(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const r={};n===void 0&&(Object.assign(r,{hide(i){l.hide(i)},toggle(i){l.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ce(i,13)===!0&&r.toggle(i)},contextClick(i){l.hide(i),se(i),G(()=>{l.show(i),i.qAnchorHandled=!0})},prevent:se,mobileTouch(i){if(r.mobileCleanup(i),s(i)!==!0)return;l.hide(i),a.value.classList.add("non-selectable");const h=i.target;F(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,l.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),e.value===!0&&i!==void 0&&ee()}}),n=function(i=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let h;i===!0?l.$q.platform.is.mobile===!0?h=[[a.value,"touchstart","mobileTouch","passive"]]:h=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:h=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],F(r,"anchor",h)});function m(){J(r,"anchor")}function b(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function w(){if(t.target===!1||t.target===""||l.$el.parentNode===null)a.value=null;else if(t.target===!0)b(l.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,i=>{a.value!==null&&(m(),n(i))}),C(()=>t.target,()=>{a.value!==null&&m(),w()}),C(()=>t.noParentEvent,i=>{a.value!==null&&(i===!0?m():n())}),V(()=>{w(),o!==!0&&t.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),_(()=>{c!==null&&clearTimeout(c),m()}),{anchorEl:a,canShow:s,anchorEvents:r}}function Tt(e,o){const n=S(null);let t;function l(c,s){const r=`${s!==void 0?"add":"remove"}EventListener`,m=s!==void 0?s:t;c!==window&&c[r]("scroll",m,A.passive),window[r]("scroll",m,A.passive),t=s}function u(){n.value!==null&&(l(n.value),n.value=null)}const a=C(()=>e.noParentEvent,()=>{n.value!==null&&(u(),o())});return _(a),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const{notPassiveCapture:K}=A,Q=[];function I(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let n=ce.length-1;for(;n>=0;){const t=ce[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=Q.length-1;t>=0;t--){const l=Q[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(o)===!1)&&(o===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(o)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function St(e){Q.push(e),Q.length===1&&(document.addEventListener("mousedown",I,K),document.addEventListener("touchstart",I,K))}function ge(e){const o=Q.findIndex(n=>n===e);o>-1&&(Q.splice(o,1),Q.length===0&&(document.removeEventListener("mousedown",I,K),document.removeEventListener("touchstart",I,K)))}let pe,be;function ye(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ct(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const te={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{te[`${e}#ltr`]=e,te[`${e}#rtl`]=e});function xe(e,o){const n=e.split(" ");return{vertical:n[0],horizontal:te[`${n[1]}#${o===!0?"rtl":"ltr"}`]}}function zt(e,o){let{top:n,left:t,right:l,bottom:u,width:a,height:c}=e.getBoundingClientRect();return o!==void 0&&(n-=o[1],t-=o[0],u+=o[1],l+=o[0],a+=o[0],c+=o[1]),{top:n,bottom:u,height:c,left:t,right:l,width:a,middle:t+(l-t)/2,center:n+(u-n)/2}}function Ht(e,o,n){let{top:t,left:l}=e.getBoundingClientRect();return t+=o.top,l+=o.left,n!==void 0&&(t+=n[1],l+=n[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function Lt(e,o){return{top:0,center:o/2,bottom:o,left:0,middle:e/2,right:e}}function we(e,o,n,t){return{top:e[n.vertical]-o[t.vertical],left:e[n.horizontal]-o[t.horizontal]}}function qe(e,o=0){if(e.targetEl===null||e.anchorEl===null||o>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{qe(e,o+1)},10);return}const{targetEl:n,offset:t,anchorEl:l,anchorOrigin:u,selfOrigin:a,absoluteOffset:c,fit:s,cover:r,maxHeight:m,maxWidth:b}=e;if(Ve.is.ios===!0&&window.visualViewport!==void 0){const D=document.body.style,{offsetLeft:x,offsetTop:z}=window.visualViewport;x!==pe&&(D.setProperty("--q-pe-left",x+"px"),pe=x),z!==be&&(D.setProperty("--q-pe-top",z+"px"),be=z)}const{scrollLeft:w,scrollTop:i}=n,h=c===void 0?zt(l,r===!0?[0,0]:t):Ht(l,c,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:m||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:$}=n,{elWidth:k,elHeight:d}=s===!0||r===!0?{elWidth:Math.max(h.width,q),elHeight:r===!0?Math.max(h.height,$):$}:{elWidth:q,elHeight:$};let g={maxWidth:b,maxHeight:m};(s===!0||r===!0)&&(g.minWidth=h.width+"px",r===!0&&(g.minHeight=h.height+"px")),Object.assign(n.style,g);const v=Lt(k,d);let f=we(h,v,u,a);if(c===void 0||t===void 0)Y(f,h,v,u,a);else{const{top:D,left:x}=f;Y(f,h,v,u,a);let z=!1;if(f.top!==D){z=!0;const H=2*t[1];h.center=h.top-=H,h.bottom-=H+2}if(f.left!==x){z=!0;const H=2*t[0];h.middle=h.left-=H,h.right-=H+2}z===!0&&(f=we(h,v,u,a),Y(f,h,v,u,a))}g={top:f.top+"px",left:f.left+"px"},f.maxHeight!==void 0&&(g.maxHeight=f.maxHeight+"px",h.height>f.maxHeight&&(g.minHeight=g.maxHeight)),f.maxWidth!==void 0&&(g.maxWidth=f.maxWidth+"px",h.width>f.maxWidth&&(g.minWidth=g.maxWidth)),Object.assign(n.style,g),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==w&&(n.scrollLeft=w)}function Y(e,o,n,t,l){const u=n.bottom,a=n.right,c=j(),s=window.innerHeight-c,r=document.body.clientWidth;if(e.top<0||e.top+u>s)if(l.vertical==="center")e.top=o[t.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(o[t.vertical]>s/2){const m=Math.min(s,t.vertical==="center"?o.center:t.vertical===l.vertical?o.bottom:o.top);e.maxHeight=Math.min(u,m),e.top=Math.max(0,m-u)}else e.top=Math.max(0,t.vertical==="center"?o.center:t.vertical===l.vertical?o.top:o.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+a>r)if(e.maxWidth=Math.min(a,r),l.horizontal==="middle")e.left=o[t.horizontal]>r/2?Math.max(0,r-a):0;else if(o[t.horizontal]>r/2){const m=Math.min(r,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.right:o.left);e.maxWidth=Math.min(a,m),e.left=Math.max(0,m-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?o.middle:t.horizontal===l.horizontal?o.left:o.right),e.maxWidth=Math.min(a,r-e.left)}var qt=P({name:"QTooltip",inheritAttrs:!1,props:{...Dt,...Oe,...Ne,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ye},self:{type:String,default:"top middle",validator:ye},offset:{type:Array,default:()=>[14,14],validator:Ct},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...je],setup(e,{slots:o,emit:n,attrs:t}){let l,u;const a=W(),{proxy:{$q:c}}=a,s=S(null),r=S(!1),m=p(()=>xe(e.anchor,c.lang.rtl)),b=p(()=>xe(e.self,c.lang.rtl)),w=p(()=>e.persistent!==!0),{registerTick:i,removeTick:h}=Fe(),{registerTimeout:q}=Ke(),{transitionProps:$,transitionStyle:k}=Ie(e),{localScrollTarget:d,changeScrollEvent:g,unconfigureScrollTarget:v}=Tt(e,re),{anchorEl:f,canShow:D,anchorEvents:x}=Et({showing:r,configureAnchorEl:Me}),{show:z,hide:H}=Ue({showing:r,canShow:D,handleShow:$e,handleHide:ke,hideOnRouteChange:w,processOnMount:!0});Object.assign(x,{delayShow:_e,delayHide:We});const{showPortal:le,hidePortal:ie,renderPortal:Pe}=Xe(a,s,Re,"tooltip");if(c.platform.is.mobile===!0){const E={anchorEl:f,innerRef:s,onClickOutside(M){return H(M),M.target.classList.contains("q-dialog__backdrop")&&Ge(M),!0}},U=p(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);C(U,M=>{(M===!0?St:ge)(E)}),_(()=>{ge(E)})}function $e(E){le(),i(()=>{u=new MutationObserver(()=>B()),u.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),B(),re()}),l===void 0&&(l=C(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,B)),q(()=>{le(!0),n("show",E)},e.transitionDuration)}function ke(E){h(),ie(),ae(),q(()=>{ie(!0),n("hide",E)},e.transitionDuration)}function ae(){u!==void 0&&(u.disconnect(),u=void 0),l!==void 0&&(l(),l=void 0),v(),J(x,"tooltipTemp")}function B(){qe({targetEl:s.value,offset:e.offset,anchorEl:f.value,anchorOrigin:m.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function _e(E){if(c.platform.is.mobile===!0){ee(),document.body.classList.add("non-selectable");const U=f.value,M=["touchmove","touchcancel","touchend","click"].map(ue=>[U,ue,"delayHide","passiveCapture"]);F(x,"tooltipTemp",M)}q(()=>{z(E)},e.delay)}function We(E){c.platform.is.mobile===!0&&(J(x,"tooltipTemp"),ee(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),q(()=>{H(E)},e.hideDelay)}function Me(){if(e.noParentEvent===!0||f.value===null)return;const E=c.platform.is.mobile===!0?[[f.value,"touchstart","delayShow","passive"]]:[[f.value,"mouseenter","delayShow","passive"],[f.value,"mouseleave","delayHide","passive"]];F(x,"anchor",E)}function re(){if(f.value!==null||e.scrollTarget!==void 0){d.value=ze(f.value,e.scrollTarget);const E=e.noParentEvent===!0?B:H;g(d.value,E)}}function Qe(){return r.value===!0?y("div",{...t,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,k.value],role:"tooltip"},O(o.default)):null}function Re(){return y(Ye,$.value,Qe)}return _(ae),Object.assign(a.proxy,{updatePosition:B}),Pe}}),Pt=P({name:"QBar",props:{...Je,dense:Boolean},setup(e,{slots:o}){const{proxy:{$q:n}}=W(),t=Ze(e,n),l=p(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${t.value===!0?"dark":"light"}`);return()=>y("div",{class:l.value,role:"toolbar"},O(o.default))}}),$t=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=W(),t=ne(oe,R);if(t===R)return console.error("QPageContainer needs to be child of QLayout"),R;He(et,!0);const l=p(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>y("div",{class:"q-page-container",style:l.value},O(o.default))}});const{passive:De}=A,kt=["both","horizontal","vertical"];var _t=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,u;C(()=>e.scrollTarget,()=>{s(),c()});function a(){t!==null&&t();const b=Math.max(0,tt(l)),w=nt(l),i={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const h=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==h,n.delta=i,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function c(){l=ze(u,e.scrollTarget),l.addEventListener("scroll",r,De),r(!0)}function s(){l!==void 0&&(l.removeEventListener("scroll",r,De),l=void 0)}function r(b){if(b===!0||e.debounce===0||e.debounce==="0")a();else if(t===null){const[w,i]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];t=()=>{i(w),t=null}}}const{proxy:m}=W();return C(()=>m.$q.lang.rtl,a),V(()=>{u=m.$el.parentNode,c()}),_(()=>{t!==null&&t(),s()}),Object.assign(m,{trigger:r,getPosition:()=>n}),Se}}),Wt=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=W(),l=S(null),u=S(t.screen.height),a=S(e.container===!0?0:t.screen.width),c=S({position:0,direction:"down",inflectionPoint:0}),s=S(0),r=S(Te.value===!0?0:j()),m=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=p(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=p(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),i=p(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function h(v){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:v.position.top,direction:v.direction,directionChanged:v.directionChanged,inflectionPoint:v.inflectionPoint.top,delta:v.delta.top};c.value=f,e.onScroll!==void 0&&n("scroll",f)}}function q(v){const{height:f,width:D}=v;let x=!1;u.value!==f&&(x=!0,u.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),k()),a.value!==D&&(x=!0,a.value=D),x===!0&&e.onResize!==void 0&&n("resize",v)}function $({height:v}){s.value!==v&&(s.value=v,k())}function k(){if(e.container===!0){const v=u.value>s.value?j():0;r.value!==v&&(r.value=v)}}let d=null;const g={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:l,height:u,containerHeight:s,scrollbarWidth:r,totalWidth:p(()=>a.value+r.value),rows:p(()=>{const v=e.view.toLowerCase().split(" ");return{top:v[0].split(""),middle:v[1].split(""),bottom:v[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:c,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(v,f,D){g[v][f]=D}};if(He(oe,g),j()>0){let D=function(){v=null,f.classList.remove("hide-scrollbar")},x=function(){if(v===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(v);v=setTimeout(D,300)},z=function(H){v!==null&&H==="remove"&&(clearTimeout(v),D()),window[`${H}EventListener`]("resize",x)},v=null;const f=document.body;C(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),ot(()=>{z("remove")})}return()=>{const v=lt(o.default,[y(_t,{onScroll:h}),y(Z,{onResize:q})]),f=y("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:l,tabindex:-1},v);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:l},[y(Z,{onResize:$}),y("div",{class:"absolute-full",style:w.value},[y("div",{class:"scroll",style:i.value},[f])])]):f}}});function Ee(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}var Mt=it({name:"close-popup",beforeMount(e,{value:o}){const n={depth:Ee(o),handler(t){n.depth!==0&&setTimeout(()=>{const l=at(e);l!==void 0&&rt(l,t,n.depth)})},handlerKey(t){Ce(t,13)===!0&&n.handler(t)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:o,oldValue:n}){o!==n&&(e.__qclosepopup.depth=Ee(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}});function Qt(){return ne(ut)}const Rt=vt("div",{class:"text-h6"},"\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA",-1),Vt=st({__name:"MainLayout",setup(e){const o=Qt(),n=S(!1),t=mt();function l(){o.dialog({title:"\u05DE\u05D7\u05D9\u05E7\u05EA \u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",message:"\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05EA\u05D0\u05E4\u05E1 \u05D0\u05EA \u05E1\u05D8\u05D8\u05D9\u05D8\u05D9\u05E7\u05EA \u05D4\u05D1\u05D7\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05DA",cancel:!0,persistent:!0}).onOk(()=>{o.notify({message:"\u05D6\u05D4\u05D5 \u05D4\u05DC\u05DB\u05D4 \u05DB\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05DC\u05DA \u{1F60E}",color:"green"}),t.reset()})}function u(){n.value=!0}return(a,c)=>{const s=ct("router-view");return de(),fe(Wt,{view:"lHh Lpr lFf"},{default:L(()=>[T(yt,{elevated:""},{default:L(()=>[T(pt,null,{default:L(()=>[T(X,{flat:"",dense:"",round:"",icon:"settings","aria-label":"Menu",onClick:u}),T(gt,null,{default:L(()=>[he(" \u05D4\u05DB\u05E8 \u05D0\u05EA \u05D4\u05D7\u05D1\u05E8 ")]),_:1})]),_:1})]),_:1}),T(ht,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=r=>n.value=r),persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},{default:L(()=>[T(dt,{class:"bg-primary text-white"},{default:L(()=>[T(Pt,null,{default:L(()=>[T(wt),ft((de(),fe(X,{dense:"",flat:"",icon:"close"},{default:L(()=>[T(qt,{class:"bg-white text-primary"},{default:L(()=>[he("Close")]),_:1})]),_:1})),[[Mt]])]),_:1}),T(ve,null,{default:L(()=>[Rt]),_:1}),T(ve,{class:"q-pt-none"},{default:L(()=>[T(X,{label:"\u05E0\u05E7\u05D4 \u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4",color:"red",onClick:c[0]||(c[0]=r=>l())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),T($t,null,{default:L(()=>[T(s)]),_:1})]),_:1})}}});export{Vt as default};
