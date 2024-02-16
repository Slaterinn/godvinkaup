import Le from"./Icon.eff5e2df.js";import{_ as H,f as W,g as he,h as b,o as h,i as L,c as C,n as j,a as n,j as J,k as de,b as F,w as V,r as I,l as ge,m as fe,q as z,s as Re,P as Te,v as Ne,x as X,y as te,z as Ee,A as q,B as ke,C as ne,D as U,E as Z,F as xe,G as K,H as N,t as _,I as A,J as ze,K as De,L as Me,M as ae,N as ve,O as Oe,Q as ee,R as pe,u as Pe}from"./entry.56cdc5c7.js";import{_ as Fe}from"./nuxt-link.05facfc2.js";import{i as Ve}from"./index.344f9f74.js";import"./index.0490e451.js";function Ue(e,o){const t={...e};for(const a of o)delete t[a];return t}function He(e,o,t){typeof o=="string"&&(o=o.split(".").map(r=>{const i=Number(r);return isNaN(i)?r:i}));let a=e;for(const r of o){if(a==null)return t;a=a[r]}return a!==void 0?a:t}const re={to:{type:[String,Object],default:void 0},href:{type:[String,Object],default:void 0},target:{type:String,default:void 0},rel:{type:String,default:void 0},noRel:{type:Boolean,default:void 0},prefetch:{type:Boolean,default:void 0},noPrefetch:{type:Boolean,default:void 0},activeClass:{type:String,default:void 0},exactActiveClass:{type:String,default:void 0},prefetchedClass:{type:String,default:void 0},replace:{type:Boolean,default:void 0},ariaCurrentValue:{type:String,default:void 0},external:{type:Boolean,default:void 0}},We=e=>Object.keys(re).reduce((t,a)=>(e[a]!==void 0&&(t[a]=e[a]),t),{}),qe=W({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const o=he();return{dynamic:b(()=>{var a,r;return e.dynamic||((r=(a=o.ui)==null?void 0:a.icons)==null?void 0:r.dynamic)})}}});function Ge(e,o,t,a,r,i){const s=Le;return e.dynamic?(h(),L(s,{key:0,name:e.name},null,8,["name"])):(h(),C("span",{key:1,class:j(e.name)},null,2))}const oe=H(qe,[["render",Ge]]),Qe={},Xe={class:"relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('../assets/images/background.jpg')]"},Ke={class:"z-10 absolute w-full h-full flex justify-center items-center"},Ye={class:"text-center w-1/2"},Je=n("h1",{class:"text-9xl font-montserrat mb-10 text-white"},"Góð vínkaup",-1),Ze=n("p",{class:"mt-6 text-5xl tracking-wider font-teko text-white"}," Hjálpar þér að gera betri kaup ",-1),et={class:"mt-10 flex items-center justify-center gap-x-6"},tt={class:"absolute text-[#ACAC9A] flex bottom-5 justify-center items-center grid grid-cols-1 gap-3 text-center"},nt=n("p",{class:"text-xl md:text-2xl"},"Nokkur góð kaup",-1),at=n("div",{class:"z-2 absolute w-full h-full bg-black opacity-50"},null,-1);function rt(e,o){const t=oe;return h(),C("div",Xe,[n("div",Ke,[n("div",Ye,[Je,Ze,n("div",et,[n("button",{type:"button",onClick:o[0]||(o[0]=a=>("navigateTo"in e?e.navigateTo:J(de))("/wine")),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"},"Vín"),n("button",{type:"button",onClick:o[1]||(o[1]=a=>("navigateTo"in e?e.navigateTo:J(de))("/beer")),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-montserrat font-medium text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"},"Bjór")])]),n("div",tt,[nt,F(t,{name:"i-heroicons-arrow-small-down-solid",class:"text-7xl mx-auto"})])]),at])}const ot=H(Qe,[["render",rt]]),st=W({inheritAttrs:!1,props:{...re,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function o(t,a,{isActive:r,isExactActive:i}){return e.exactQuery&&!Ve(t.query,a.query)||e.exactHash&&t.hash!==a.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:o}}}),it=["href","aria-disabled","role","rel","target","onClick"];function lt(e,o,t,a,r,i){const s=Fe;return e.to?(h(),L(s,z({key:1},e.$props,{custom:""}),{default:V(({route:l,href:f,target:c,rel:g,navigate:u,isActive:d,isExactActive:p,isExternal:m})=>[n("a",z(e.$attrs,{href:e.disabled?void 0:f,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:g,target:c,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(l,e._.provides[Te]||e.$route,{isActive:d,isExactActive:p}),onClick:y=>!m&&u(y)}),[I(e.$slots,"default",ge(fe({isActive:e.active!==void 0?e.active:e.exact?p:d})))],16,it)]),_:3},16)):(h(),L(Re(e.as),z({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:V(()=>[I(e.$slots,"default",ge(fe({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const we=H(st,[["render",lt]]),_e=(e,o,t,a,r=!1)=>{const i=Ne(),s=he(),l=b(()=>{var d;const c=X(o),g=X(t),u=X(a);return te((c==null?void 0:c.strategy)||((d=s.ui)==null?void 0:d.strategy),u?{wrapper:u}:{},c||{},r?He(s.ui,e,{}):{},g||{})}),f=b(()=>Ue(i,["class"]));return{ui:l,attrs:f}};function ut({ui:e,props:o}){const t=ne();let a=t.parent,r;for(;a&&!r;){if(a.type.name==="ButtonGroup"){r=Ee(`group-${a.uid}`);break}a=a.parent}const i=b(()=>r==null?void 0:r.value.children.indexOf(t));return q(()=>{r==null||r.value.register(t)}),ke(()=>{r==null||r.value.unregister(t)}),{size:b(()=>(r==null?void 0:r.value.size)||o.size),rounded:b(()=>!r||i.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:i.value===0?r.value.rounded.start:i.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ct={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Ce={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},dt={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},be={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...Ce,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...be,option:{...be.option},arrow:{...Ce}});const B=te(U.ui.strategy,U.ui.button,ct),gt=W({components:{UIcon:oe,ULink:we},inheritAttrs:!1,props:{...re,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.size).includes(e)}},color:{type:String,default:()=>B.default.color,validator(e){return[...U.ui.colors,...Object.keys(B.color)].includes(e)}},variant:{type:String,default:()=>B.default.variant,validator(e){return[...Object.keys(B.variant),...Object.values(B.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>B.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:t,attrs:a}=_e("button",Z(e,"ui"),B),{size:r,rounded:i}=ut({ui:t,props:e}),s=b(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),l=b(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),f=b(()=>e.square||!o.default&&!e.label),c=b(()=>{var k,x;const y=((x=(k=t.value.color)==null?void 0:k[e.color])==null?void 0:x[e.variant])||t.value.variant[e.variant];return xe(K(t.value.base,t.value.font,i.value,t.value.size[r.value],t.value.gap[r.value],e.padded&&t.value[f.value?"square":"padding"][r.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?t.value.block:t.value.inline),e.class)}),g=b(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),u=b(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),d=b(()=>K(t.value.icon.base,t.value.icon.size[r.value],e.loading&&t.value.icon.loading)),p=b(()=>K(t.value.icon.base,t.value.icon.size[r.value],e.loading&&!s.value&&t.value.icon.loading)),m=b(()=>We(e));return{ui:t,attrs:a,isLeading:s,isTrailing:l,isSquare:f,buttonClass:c,leadingIconName:g,trailingIconName:u,leadingIconClass:d,trailingIconClass:p,linkProps:m}}});function ft(e,o,t,a,r,i){const s=oe,l=we;return h(),L(l,z({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:V(()=>[I(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(h(),L(s,{key:0,name:e.leadingIconName,class:j(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):N("",!0)]),I(e.$slots,"default",{},()=>[e.label?(h(),C("span",{key:0,class:j([e.truncate?e.ui.truncate:""])},_(e.label),3)):N("",!0)]),I(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(h(),L(s,{key:0,name:e.trailingIconName,class:j(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):N("",!0)])]),_:3},16,["type","disabled","class"])}const Se=H(gt,[["render",ft]]),vt=e=>{const o=A(0);function t(i){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",o.value=i.pageX,window.addEventListener("mousemove",r),window.addEventListener("mouseup",a)}function a(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)}function r(i){i.preventDefault();const s=i.pageX-o.value;o.value=i.pageX,e.value.scrollBy(-s,0)}q(()=>{e.value&&e.value.addEventListener("mousedown",t)}),ke(()=>{e.value&&e.value.removeEventListener("mousedown",t)})};function $e(e){return ze()?(De(e),!0):!1}function S(e){return typeof e=="function"?e():J(e)}const pt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const bt=Object.prototype.toString,mt=e=>bt.call(e)==="[object Object]",D=()=>{};function Be(e,o){function t(...a){return new Promise((r,i)=>{Promise.resolve(e(()=>o.apply(this,a),{fn:o,thisArg:this,args:a})).then(r).catch(i)})}return t}function yt(e,o={}){let t,a,r=D;const i=l=>{clearTimeout(l),r(),r=D};return l=>{const f=S(e),c=S(o.maxWait);return t&&i(t),f<=0||c!==void 0&&c<=0?(a&&(i(a),a=null),Promise.resolve(l())):new Promise((g,u)=>{r=o.rejectOnCancel?u:g,c&&!a&&(a=setTimeout(()=>{t&&i(t),a=null,g(l())},c)),t=setTimeout(()=>{a&&i(a),a=null,g(l())},f)})}}function ht(e,o=!0,t=!0,a=!1){let r=0,i,s=!0,l=D,f;const c=()=>{i&&(clearTimeout(i),i=void 0,l(),l=D)};return u=>{const d=S(e),p=Date.now()-r,m=()=>f=u();return c(),d<=0?(r=Date.now(),m()):(p>d&&(t||!s)?(r=Date.now(),m()):o&&(f=new Promise((y,k)=>{l=a?k:y,i=setTimeout(()=>{r=Date.now(),s=!0,y(m()),c()},Math.max(0,d-p))})),!t&&!i&&(i=setTimeout(()=>s=!0,d)),s=!1,f)}}function kt(e){return e||ne()}function xt(e,o=200,t={}){return Be(yt(o,t),e)}function wt(e,o=200,t=!1,a=!0,r=!1){return Be(ht(o,t,a,r),e)}function je(e,o=!0,t){kt()?q(e,t):o?e():Me(e)}function E(e){var o;const t=S(e);return(o=t==null?void 0:t.$el)!=null?o:t}const G=pt?window:void 0;function me(...e){let o,t,a,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,a,r]=e,o=G):[o,t,a,r]=e,!o)return D;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const i=[],s=()=>{i.forEach(g=>g()),i.length=0},l=(g,u,d,p)=>(g.addEventListener(u,d,p),()=>g.removeEventListener(u,d,p)),f=ae(()=>[E(o),S(r)],([g,u])=>{if(s(),!g)return;const d=mt(u)?{...u}:u;i.push(...t.flatMap(p=>a.map(m=>l(g,p,m,d))))},{immediate:!0,flush:"post"}),c=()=>{f(),s()};return $e(c),c}function _t(){const e=A(!1);return ne()&&q(()=>{e.value=!0}),e}function Ct(e){const o=_t();return b(()=>(o.value,!!e()))}function Ie(e,o,t={}){const{window:a=G,...r}=t;let i;const s=Ct(()=>a&&"ResizeObserver"in a),l=()=>{i&&(i.disconnect(),i=void 0)},f=b(()=>Array.isArray(e)?e.map(u=>E(u)):[E(e)]),c=ae(f,u=>{if(l(),s.value&&a){i=new ResizeObserver(o);for(const d of u)d&&i.observe(d,r)}},{immediate:!0,flush:"post",deep:!0}),g=()=>{l(),c()};return $e(g),{isSupported:s,stop:g}}function St(e,o={width:0,height:0},t={}){const{window:a=G,box:r="content-box"}=t,i=b(()=>{var u,d;return(d=(u=E(e))==null?void 0:u.namespaceURI)==null?void 0:d.includes("svg")}),s=A(o.width),l=A(o.height),{stop:f}=Ie(e,([u])=>{const d=r==="border-box"?u.borderBoxSize:r==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(a&&i.value){const p=E(e);if(p){const m=a.getComputedStyle(p);s.value=Number.parseFloat(m.width),l.value=Number.parseFloat(m.height)}}else if(d){const p=Array.isArray(d)?d:[d];s.value=p.reduce((m,{inlineSize:y})=>m+y,0),l.value=p.reduce((m,{blockSize:y})=>m+y,0)}else s.value=u.contentRect.width,l.value=u.contentRect.height},t);je(()=>{const u=E(e);u&&(s.value="offsetWidth"in u?u.offsetWidth:o.width,l.value="offsetHeight"in u?u.offsetHeight:o.height)});const c=ae(()=>E(e),u=>{s.value=u?o.width:0,l.value=u?o.height:0});function g(){f(),c()}return{width:s,height:l,stop:g}}const ye=1;function $t(e,o={}){const{throttle:t=0,idle:a=200,onStop:r=D,onScroll:i=D,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0},behavior:f="auto",window:c=G}=o,g=A(0),u=A(0),d=b({get(){return g.value},set(v){m(v,void 0)}}),p=b({get(){return u.value},set(v){m(void 0,v)}});function m(v,R){var w,O,P;if(!c)return;const $=S(e);$&&((P=$ instanceof Document?c.document.body:$)==null||P.scrollTo({top:(w=S(R))!=null?w:p.value,left:(O=S(v))!=null?O:d.value,behavior:S(f)}))}const y=A(!1),k=ve({left:!0,right:!1,top:!0,bottom:!1}),x=ve({left:!1,right:!1,top:!1,bottom:!1}),M=v=>{y.value&&(y.value=!1,x.left=!1,x.right=!1,x.top=!1,x.bottom=!1,r(v))},Ae=xt(M,t+a),Q=v=>{var R;if(!c)return;const w=v.document?v.document.documentElement:(R=v.documentElement)!=null?R:v,{display:O,flexDirection:P}=getComputedStyle(w),$=w.scrollLeft;x.left=$<g.value,x.right=$>g.value;const ie=Math.abs($)<=0+(s.left||0),le=Math.abs($)+w.clientWidth>=w.scrollWidth-(s.right||0)-ye;O==="flex"&&P==="row-reverse"?(k.left=le,k.right=ie):(k.left=ie,k.right=le),g.value=$;let T=w.scrollTop;v===c.document&&!T&&(T=c.document.body.scrollTop),x.top=T<u.value,x.bottom=T>u.value;const ue=Math.abs(T)<=0+(s.top||0),ce=Math.abs(T)+w.clientHeight>=w.scrollHeight-(s.bottom||0)-ye;O==="flex"&&P==="column-reverse"?(k.top=ce,k.bottom=ue):(k.top=ue,k.bottom=ce),u.value=T},se=v=>{var R;if(!c)return;const w=(R=v.target.documentElement)!=null?R:v.target;Q(w),y.value=!0,Ae(v),i(v)};return me(e,"scroll",t?wt(se,t,!0,!1):se,l),je(()=>{const v=S(e);v&&Q(v)}),me(e,"scrollend",M,l),{x:d,y:p,isScrolling:y,arrivedState:k,directions:x,measure(){const v=S(e);c&&v&&Q(v)}}}const Y=te(U.ui.strategy,U.ui.carousel,dt),Bt=W({components:{UButton:Se},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>Y.default.prevButton},nextButton:{type:Object,default:()=>Y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e){const{ui:o,attrs:t}=_e("carousel",Z(e,"ui"),Y,Z(e,"class")),a=A(),r=A(0),{x:i,arrivedState:s}=$t(a,{behavior:"smooth"}),{width:l}=St(a),{left:f,right:c}=Oe(s);vt(a),Ie(a,y=>{var x,M;const[k]=y;r.value=((M=(x=k==null?void 0:k.target)==null?void 0:x.firstElementChild)==null?void 0:M.clientWidth)||0});const g=b(()=>Math.round(i.value/r.value)+1),u=b(()=>r.value?e.items.length-Math.round(l.value/r.value)+1:0);function d(){i.value+=r.value}function p(){i.value-=r.value}function m(y){i.value=(y-1)*r.value}return{ui:o,attrs:t,isFirst:f,isLast:c,carouselRef:a,indicatorsCount:u,currentIndex:g,onClickNext:d,onClickPrev:p,onClick:m,twMerge:xe}}}),jt=["aria-label","onClick"];function It(e,o,t,a,r,i){const s=Se;return h(),C("div",z({class:e.ui.wrapper},e.attrs),[n("div",{ref:"carouselRef",class:j([e.ui.container,"no-scrollbar"])},[(h(!0),C(ee,null,pe(e.items,(l,f)=>(h(),C("div",{key:f,class:j(e.ui.item)},[I(e.$slots,"default",{item:l,index:f},void 0,!0)],2))),128))],2),e.arrows?(h(),C("div",{key:0,class:j(e.ui.arrows.wrapper)},[I(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var l;return[e.prevButton?(h(),L(s,z({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(l=e.prevButton)==null?void 0:l.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):N("",!0)]},!0),I(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var l;return[e.nextButton?(h(),L(s,z({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(l=e.nextButton)==null?void 0:l.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):N("",!0)]},!0)],2)):N("",!0),e.indicators?(h(),C("div",{key:1,class:j(e.ui.indicators.wrapper)},[(h(!0),C(ee,null,pe(e.indicatorsCount,l=>I(e.$slots,"indicator",{key:l,onClick:e.onClick,active:l===e.currentIndex,index:l},()=>[n("button",{type:"button",class:j([e.ui.indicators.base,l===e.currentIndex?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${l}`,onClick:f=>e.onClick(l)},null,10,jt)],!0)),128))],2)):N("",!0)],16)}const At=H(Bt,[["render",It],["__scopeId","data-v-f5508169"]]),Lt={class:"h-screen w-100 flex justify-center items-center"},Rt={class:"max-w-4xl md:w-full font-teko"},Tt=n("div",{class:"text-2xl font-montserrat mb-10 text-center text-[#FDA47E]"},[n("h3",null,"Verður að prófa")],-1),Nt=["src","alt"],Et={class:"grid grid-cols-1 gap-3 mx-[10%]"},zt={class:"text-5xl font-medium"},Dt={class:"text-md text-xl"},Mt=n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"SÖLUAÐILI")],-1),Ot={class:"text-md text-xl"},Pt=n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"VERÐ")],-1),Ft=n("div",null,[n("div",null,[n("span",{class:"text-md text-xl"},"Ítalía")]),n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"LAND")])],-1),Vt=n("div",null,[n("div",null,[n("span",{class:"text-md text-xl"},"4.2")]),n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"EINKUNN")])],-1),Ut={class:"text-md text-xl"},Ht=n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"ÞRÚGUR")],-1),Wt={class:"text-md text-xl"},qt=n("div",null,[n("span",{class:"text-md text-lg text-[#7a7a7a]"},"LÝSING")],-1),Gt={class:"h-screen w-100 flex justify-center items-center"},Qt={class:"max-w-4xl md:w-full font-teko"},Xt=n("div",{class:"text-2xl font-montserrat mb-10 text-[#DBD2D2] text-center"},[n("h3",null,"Skemmtileg kaup")],-1),Kt=["src","alt"],Yt={class:"grid grid-cols-1 gap-3 mx-[10%]"},Jt={class:"text-5xl font-medium"},Zt={class:"text-md text-xl"},en=n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"SÖLUAÐILI")],-1),tn={class:"text-md text-xl"},nn=n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"VERÐ")],-1),an=n("div",null,[n("div",null,[n("span",{class:"text-md text-xl"},"Ítalía")]),n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"LAND")])],-1),rn=n("div",null,[n("div",null,[n("span",{class:"text-md text-xl"},"4.2")]),n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"EINKUNN")])],-1),on={class:"text-md text-xl"},sn=n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"ÞRÚGUR")],-1),ln={class:"text-md text-xl"},un=n("div",null,[n("span",{class:"text-md text-[#7a7a7a]"},"Lýsing")],-1),cn=W({__name:"ProductCarousel",props:{wines:Array},setup(e){const o=[{name:"Mucho mas tinto",img:"https://images.vivino.com/thumbs/nMRl6FutRX26zFRR1iqtqQ_pb_x600.png",description:"Ávaxtaríkt en samt djúprautt vín frá fjölskyldufyrirtækinu Félix Solís. Þetta vín nær jafnvægi á milli þess að vera þurrt og sætt en það má búast við því að finna keim af vanillu, eik og tóbaki auk þess hefur það sætan keim af rauðum kirsuberjum og plómu.",seller:"ÁTVR",price:"2.599 kr",grapes:"Shiraz/Syrah, Tempranillo",country:"Spánn"},{name:"Marlborough sun",img:"https://images.vivino.com/thumbs/HUd1YqCsQjS657o-rAtXJg_pb_x600.png",description:"Þurrt og súrt hvítvín sem hefur ferskan ávaxtailm og bragð af sítrus, greip og ástaraldin.",seller:"ÁTVR",price:"2.799 kr",grapes:"Sauvignon Blanc",country:"Nýja-Sjáland"},{name:"Torre Mora Scalunera Etna Rosato",img:"https://images.vivino.com/thumbs/SWRDzZF1RWyMhSPMdyAcMA_pb_x600.png",description:"Óvænt en kærkomin hlýja og krydd einkenna lyktina af þessu fölbleika rósavíni sem hefur bragð af sítrusávöxtum í bland við málm- og saltkeim. ",seller:"ÁTVR",price:"3.499 kr",grapes:"Nerello Mascalese",country:"Ítalía"}],t=[{name:"Quattronotti Appassimento Negroamaro",img:"https://images.vivino.com/thumbs/Cu-HZ2XwR8evPLwpoR1kkA_pb_x600.png",description:"Dökkkirsuberjarautt, þétt og mikið vín frá Puglia á Ítalíu. Vínið 100% úr negroamaro þrúgunni sem gefur því ekki bara dökkan lit heldur bragð af brómberjum og þurrkuðu kryddi eins og blóðbergi.",seller:"ÁTVR",price:"3.716 kr",grapes:"Negroamaro 100%",country:"Ítalía"},{name:"The Chocolate Block",img:"https://images.vivino.com/thumbs/jQ-ODF_jRpuqCxlRytxYLw_pb_x600.png",description:"Skemmtilegt vín frá Suður-Afríku með undirliggjandi kryddbragð og rifsberjakeim. Vín með mikið body og eftirbragð sem situr lengi eftir. Hentar vel með rauðu kjöti.",seller:"ÁTVR",price:"3.995 kr",grapes:"Syrah 73%, Grenache 11%, Cinsault 8%, Cabernet Sauvignon 7%, Viognier 1%",country:"Suður-Afríka"},{name:"2011 Viña Bosconia Tinto Reserva",img:"https://images.vivino.com/thumbs/eDyHmY-EQcG28_Ezlpgq5A_pb_x600.png",description:"Þetta vín hefur yfir meira en áratug þróast yfir í djúpan rauðan lit með örlítilli appelsínugulu. Lyktin ber með sér ágenga ávexti og bragðið er þétt, mjúkt og fínt (þetta er ekki lýsing á rúminu mínu)",seller:"Sante",price:"4.900 kr",grapes:"Tempranillo 80%, Garnacha 15%, Mazuelo 3%, Graciano 2%.",country:"Spánn"}];return(a,r)=>{const i=At;return h(),C(ee,null,[n("div",Lt,[n("div",Rt,[Tt,F(i,{items:o,ui:{item:"basis-full"},arrows:"",class:"bg-[#FFE7D4] rounded-lg p-[5%]"},{default:V(({item:s})=>[n("img",{src:s.img,alt:s.name,draggable:"false",class:"ml-[10%]"},null,8,Nt),n("div",Et,[n("h2",zt,_(s.name),1),n("div",null,[n("div",null,[n("span",Dt,_(s.seller),1)]),Mt]),n("div",null,[n("div",null,[n("span",Ot,_(s.price),1)]),Pt]),Ft,Vt,n("div",null,[n("div",null,[n("span",Ut,_(s.grapes),1)]),Ht]),n("div",null,[n("div",null,[n("span",Wt,_(s.description),1)]),qt])])]),_:1})])]),n("div",Gt,[n("div",Qt,[Xt,F(i,{items:t,ui:{item:"basis-full"},arrows:"",class:"bg-[#DBD2D2] rounded-lg p-[5%]"},{default:V(({item:s})=>[n("img",{src:s.img,alt:s.name,draggable:"false",class:"ml-[10%]"},null,8,Kt),n("div",Yt,[n("h2",Jt,_(s.name),1),n("div",null,[n("div",null,[n("span",Zt,_(s.seller),1)]),en]),n("div",null,[n("div",null,[n("span",tn,_(s.price),1)]),nn]),an,rn,n("div",null,[n("div",null,[n("span",on,_(s.grapes),1)]),sn]),n("div",null,[n("div",null,[n("span",ln,_(s.description),1)]),un])])]),_:1})])])],64)}}}),bn={__name:"index",setup(e){return Pe({title:"Góð Vínkaup"}),(o,t)=>{const a=ot,r=cn;return h(),C("div",null,[F(a),F(r)])}}};export{bn as default};
