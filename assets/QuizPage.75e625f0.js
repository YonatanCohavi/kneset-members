import{a as y,c as T,r as m,w as X,d as Y,h,X as Z,b as M,Y as ee,f as R,j as S,g as te,m as ae,q as le,F as $,H as f,I as _,J as g,Z as O,_ as ne,$ as ie,U as se,K as v,L as w,a0 as I,S as F,a1 as Q,a2 as oe,a3 as re,Q as ue,a4 as ce,a5 as de,a6 as ge,P as N}from"./index.13e7d924.js";import{Q as me,a as j,b as q,c as k,u as V,d as fe}from"./QSelect.e6ce8da5.js";import{u as ve}from"./statistics-store.663fc835.js";import{u as z}from"./settings-store.d4e1c54d.js";const he={ratio:[String,Number]};function _e(e,u){return y(()=>{const n=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const ye=16/9;var D=T({name:"QImg",props:{...he,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ye},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:n}){const r=m(e.initialRatio),s=_e(e,r);let a=null,o=!1;const i=[m(null),m(x())],c=m(0),d=m(!1),l=m(!1),b=y(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),H=y(()=>({width:e.width,height:e.height})),G=y(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),W=y(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));X(()=>P(),B);function P(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function x(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function B(t){a!==null&&(clearTimeout(a),a=null),l.value=!1,t===null?(d.value=!1,i[c.value^1].value=x()):d.value=!0,i[c.value].value=t}function K({target:t}){o!==!0&&(a!==null&&(clearTimeout(a),a=null),r.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,L(t,1))}function L(t,p){o===!0||p===1e3||(t.complete===!0?U(t):a=setTimeout(()=>{a=null,L(t,p+1)},50))}function U(t){o!==!0&&(c.value=c.value^1,i[c.value].value=null,d.value=!1,l.value=!1,n("load",t.currentSrc||t.src))}function A(t){a!==null&&(clearTimeout(a),a=null),d.value=!1,l.value=!0,i[c.value].value=null,i[c.value^1].value=x(),n("error",t)}function E(t){const p=i[t].value,C={key:"img_"+t,class:G.value,style:W.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...p};return c.value===t?(C.class+=" q-img__image--waiting",Object.assign(C,{onLoad:K,onError:A})):C.class+=" q-img__image--loaded",h("div",{class:"q-img__container absolute-full",key:"img"+t},h("img",C))}function J(){return d.value!==!0?h("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},M(u[l.value===!0?"error":"default"])):h("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[h(ee,{color:e.spinnerColor,size:e.spinnerSize})])}return B(P()),Y(()=>{o=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const t=[];return s.value!==null&&t.push(h("div",{key:"filler",style:s.value})),l.value!==!0&&(i[0].value!==null&&t.push(E(0)),i[1].value!==null&&t.push(E(1))),t.push(h(Z,{name:"q-transition--fade"},J)),h("div",{class:b.value,style:H.value,role:"img","aria-label":e.alt},t)}}}),be=T({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:u}){const{proxy:{$q:n}}=te(),r=R(ae,S);if(r===S)return console.error("QPage needs to be a deep child of QLayout"),S;if(R(le,S)===S)return console.error("QPage needs to be child of QPageContainer"),S;const a=y(()=>{const i=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const c=r.isContainer.value===!0?r.containerHeight.value:n.screen.height;return e.styleFn(i,c)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-i+"px":n.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":n.screen.height-i+"px"}}),o=y(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:o.value,style:a.value},M(u.default))}});const Se=$({__name:"OptionsSelector",props:{options:{},disable:{}},emits:["selected"],setup(e,{emit:u}){const n=z(),r=u;return(s,a)=>(f(),_(me,null,{default:g(()=>[(f(!0),O(ie,null,ne(s.options,o=>se((f(),_(j,{clickable:"",onClick:i=>r("selected",o),key:o.Id,disable:s.disable.includes(o.Id)},{default:g(()=>[v(q,null,{default:g(()=>[v(k,null,{default:g(()=>[w(I(o.Name),1)]),_:2},1024),F(n).showFraction?(f(),_(k,{key:0,caption:"",lines:"1"},{default:g(()=>[w(I(o.Faction),1)]),_:2},1024)):Q("",!0)]),_:2},1024),s.disable.includes(o.Id)?(f(),_(q,{key:0,side:"",avatar:""},{default:g(()=>[v(oe,null,{default:g(()=>[v(D,{src:o.LobbyImage},null,8,["src"])]),_:2},1024)]),_:2},1024)):Q("",!0)]),_:2},1032,["onClick","disable"])),[[re]])),128))]),_:1}))}}),pe={class:"flex column q-gutter-md relative"},Ce=$({__name:"MembersList",props:{disable:{}},emits:["selected"],setup(e,{emit:u}){const n=m(),r=z(),s=V(),a=m([...s.allMembers]),o=u,i=(c,d)=>{c==""?d(()=>{a.value=[...s.allMembers]}):d(()=>{const l=c.toLowerCase();a.value=s.allMembers.filter(b=>b.Name.toLowerCase().indexOf(l)>-1)})};return(c,d)=>(f(),O("div",pe,[v(fe,{filled:"",modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value=l),options:a.value,label:"\u05D7\u05D1\u05E8\u05D9 \u05DB\u05E0\u05E1\u05EA","option-label":"Name","use-input":"","input-debounce":"0",onFilter:i,"emit-value":"","map-options":"",clearable:""},{option:g(l=>[v(j,ce(de(l.itemProps)),{default:g(()=>[v(q,null,{default:g(()=>[v(k,null,{default:g(()=>[w(I(l.opt.Name),1)]),_:2},1024),F(r).showFraction?(f(),_(k,{key:0,caption:""},{default:g(()=>[w(I(l.opt.Faction),1)]),_:2},1024)):Q("",!0)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),v(ue,{label:"\u05D6\u05D4 \u05D4\u05D7\u05D1\u05E8",color:"primary",disable:!n.value,onClick:d[1]||(d[1]=l=>o("selected",n.value))},null,8,["disable"])]))}});const we={class:"row full-width",style:{position:"relative"}},Ie={class:"row full-width"},Qe={class:"col"},ke=$({__name:"QuizPage",setup(e){const u=ve(),n=V(),r=z(),s=m(n.getNextMember()),a=m(n.getOptions(s.value)),o=m([]),i=m();y(()=>{const l=s.value.Comettees.find(b=>b.Role.includes("\u05D9\u05D5\u05E9\u05D1-\u05E8\u05D0\u05E9"));return(l==null?void 0:l.Role)||""});function c(l){if(l.Id==s.value.Id){u.setCorrectGuess(s.value.Id,!0),d();return}u.setWrongGuess(s.value.Id,!0),u.setWrongGuess(s.value.Id,!0),u.setWrongGuess(l.Id,!1),o.value.push(l.Id),i.value=l}function d(){s.value=n.getNextMember(),a.value=n.getOptions(s.value),o.value=[],i.value=void 0}return(l,b)=>(f(),_(be,{class:"column items-center justify-evenly q-pa-md"},{default:g(()=>[N("div",we,[v(D,{src:s.value.LobbyImage,fit:"cover",ratio:"1",style:{height:"250px","max-width":"250px"},class:"image"},null,8,["src"]),i.value?(f(),_(D,{key:0,src:i.value.LobbyImage,fit:"cover",ratio:"1",style:{height:"150px","max-width":"150px",position:"absolute",left:"0px",bottom:"0px"},class:"image"},null,8,["src"])):Q("",!0)]),N("div",Ie,[N("div",Qe,[F(r).showOptions?(f(),_(Se,{key:0,options:a.value,onSelected:c,disable:o.value},null,8,["options","disable"])):(f(),_(Ce,{key:1,disable:o.value,onSelected:c},null,8,["disable"]))])])]),_:1}))}});var $e=ge(ke,[["__scopeId","data-v-02820c55"]]);export{$e as default};
