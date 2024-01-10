import{a as h,c as j,r as g,w as V,d as W,h as v,T as K,b as F,a9 as A,f as B,j as _,g as U,m as X,G as Y,aa as Z,S as J,V as S,W as I,X as f,Y as m,a3 as w,ab as ee,ac as te,ad as ae,ae as $,Z as le,a0 as ne,_ as T,af as D,ag as ie,ah as se,ai as re,aj as ue}from"./index.05ddf736.js";import{u as oe,Q as ce,a as de,b as P,c as R}from"./members-store.25c5f88a.js";import{u as ge}from"./statistics-store.c0023c6f.js";const ve={ratio:[String,Number]};function fe(e,r){return h(()=>{const i=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const me=16/9;var Q=j({name:"QImg",props:{...ve,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:me},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:i}){const a=g(e.initialRatio),y=fe(e,a);let l=null,o=!1;const n=[g(null),g(p())],u=g(0),s=g(!1),c=g(!1),d=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),x=h(()=>({width:e.width,height:e.height})),L=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),E=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));V(()=>k(),N);function k(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function p(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function N(t){l!==null&&(clearTimeout(l),l=null),c.value=!1,t===null?(s.value=!1,n[u.value^1].value=p()):s.value=!0,n[u.value].value=t}function G({target:t}){o!==!0&&(l!==null&&(clearTimeout(l),l=null),a.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,q(t,1))}function q(t,b){o===!0||b===1e3||(t.complete===!0?H(t):l=setTimeout(()=>{l=null,q(t,b+1)},50))}function H(t){o!==!0&&(u.value=u.value^1,n[u.value].value=null,s.value=!1,c.value=!1,i("load",t.currentSrc||t.src))}function M(t){l!==null&&(clearTimeout(l),l=null),s.value=!1,c.value=!0,n[u.value].value=null,n[u.value^1].value=p(),i("error",t)}function z(t){const b=n[t].value,C={key:"img_"+t,class:L.value,style:E.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...b};return u.value===t?(C.class+=" q-img__image--waiting",Object.assign(C,{onLoad:G,onError:M})):C.class+=" q-img__image--loaded",v("div",{class:"q-img__container absolute-full",key:"img"+t},v("img",C))}function O(){return s.value!==!0?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},F(r[c.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[v(A,{color:e.spinnerColor,size:e.spinnerSize})])}return N(k()),W(()=>{o=!0,l!==null&&(clearTimeout(l),l=null)}),()=>{const t=[];return y.value!==null&&t.push(v("div",{key:"filler",style:y.value})),c.value!==!0&&(n[0].value!==null&&t.push(z(0)),n[1].value!==null&&t.push(z(1))),t.push(v(K,{name:"q-transition--fade"},O)),v("div",{class:d.value,style:x.value,role:"img","aria-label":e.alt},t)}}}),he=j({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:i}}=U(),a=B(X,_);if(a===_)return console.error("QPage needs to be a deep child of QLayout"),_;if(B(Y,_)===_)return console.error("QPage needs to be child of QPageContainer"),_;const l=h(()=>{const n=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const u=a.isContainer.value===!0?a.containerHeight.value:i.screen.height;return e.styleFn(n,u)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-n+"px":i.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":i.screen.height-n+"px"}}),o=h(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:o.value,style:l.value},F(r.default))}});const ye=e=>(re("data-v-ee17ec48"),e=e(),ue(),e),_e={class:"row full-width"},Se=ye(()=>w("div",{class:"col-0 col-md-4"},null,-1)),be={class:"col-6 col-md-4 row items-center justify-evenly"},Ce=J({__name:"QuizPage",setup(e){const r=ge(),i=oe(),a=g(i.getNextMember()),y=g(i.getOptions(a.value)),l=g([]),o=g();h(()=>{const s=a.value.Comettees.find(c=>c.Role.includes("\u05D9\u05D5\u05E9\u05D1-\u05E8\u05D0\u05E9"));return(s==null?void 0:s.Role)||""});function n(s){if(s.Id==a.value.Id){r.setCorrectGuess(a.value.Id,!0),u();return}r.setWrongGuess(a.value.Id,!0),r.setWrongGuess(a.value.Id,!0),r.setWrongGuess(s.Id,!1),l.value.push(s.Id),o.value=s}function u(){a.value=i.getNextMember(),y.value=i.getOptions(a.value),l.value=[],o.value=void 0}return(s,c)=>(S(),I(he,{class:"column items-center justify-evenly"},{default:f(()=>[m(Q,{src:a.value.LobbyImage,fit:"cover",ratio:"1",style:{height:"250px","max-width":"250px"},class:"image"},null,8,["src"]),w("div",_e,[Se,m(ce,{class:"col-6 col-md-4"},{default:f(()=>[(S(!0),ee(ae,null,te(y.value,d=>ne((S(),I(de,{clickable:"",onClick:x=>n(d),key:d.Id,disable:l.value.includes(d.Id)},{default:f(()=>[m(P,null,{default:f(()=>[m(R,null,{default:f(()=>[T(D(d.Name),1)]),_:2},1024),m(R,{caption:"",lines:"1"},{default:f(()=>[T(D(d.Faction),1)]),_:2},1024)]),_:2},1024),l.value.includes(d.Id)?(S(),I(P,{key:0,side:"",avatar:""},{default:f(()=>[m(ie,null,{default:f(()=>[m(Q,{src:d.LobbyImage},null,8,["src"])]),_:2},1024)]),_:2},1024)):$("",!0)]),_:2},1032,["onClick","disable"])),[[se]])),128))]),_:1}),w("div",be,[o.value?(S(),I(Q,{key:0,src:o.value.LobbyImage,fit:"cover",ratio:"1",style:{height:"150px","max-width":"150px"},class:"image"},null,8,["src"])):$("",!0)])]),m(le,{onClick:c[0]||(c[0]=d=>u()),color:"primary",label:"\u05D4\u05D1\u05D0"})]),_:1}))}});var we=Z(Ce,[["__scopeId","data-v-ee17ec48"]]);export{we as default};
