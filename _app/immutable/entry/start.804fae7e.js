import{o as ve,t as be}from"../chunks/index.a9a6288a.js";import{w as Ae}from"../chunks/index.d79d550a.js";import{a as nt,b as J}from"../chunks/paths.a01c21f9.js";function at(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function ot(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const it=["href","pathname","search","searchParams","toString","toJSON"];function st(e,n){const i=new URL(e);for(const o of it)Object.defineProperty(i,o,{get(){return n(),e[o]},enumerable:!0,configurable:!0});return ct(i),i}function ct(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const lt="/__data.json";function ft(e){return e.replace(/\/$/,"")+lt}function ut(...e){let n=5381;for(const i of e)if(typeof i=="string"){let o=i.length;for(;o;)n=n*33^i.charCodeAt(--o)}else if(ArrayBuffer.isView(i)){const o=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=o.length;for(;d;)n=n*33^o[--d]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const pe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&ae.delete(Ie(e)),pe(e,n));const ae=new Map;function dt(e,n){const i=Ie(e,n),o=document.querySelector(i);if(o!=null&&o.textContent){const{body:d,...f}=JSON.parse(o.textContent),m=o.getAttribute("data-ttl");return m&&ae.set(i,{body:d,init:f,ttl:1e3*Number(m)}),Promise.resolve(new Response(d,f))}return pe(e,n)}function pt(e,n,i){if(ae.size>0){const o=Ie(e,i),d=ae.get(o);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);ae.delete(o)}}return pe(n,i)}function Ie(e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const d=[];n.headers&&d.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&d.push(n.body),o+=`[data-hash="${ut(...d)}"]`}return o}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${_t(e).map(o=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(d)return n.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return n.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const m=o.split(/\[(.+?)\](?!\])/);return"/"+m.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return Ee(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Ee(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const _=ht.exec(h);if(!_)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,x,S,N]=_;return n.push({name:S,matcher:N,optional:!!C,rest:!!x,chained:x?p===1&&m[0]==="":!1}),x?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return Ee(h)}).join("")}).join("")}/?$`),params:n}}function mt(e){return!/^\([^)]+\)$/.test(e)}function _t(e){return e.slice(1).split("/").filter(mt)}function wt(e,n,i){const o={},d=e.slice(1);let f=0;for(let m=0;m<n.length;m+=1){const c=n[m];let h=d[m-f];if(c.chained&&c.rest&&f&&(h=d.slice(m-f,m+1).filter(p=>p).join("/"),f=0),h===void 0){c.rest&&(o[c.name]="");continue}if(!c.matcher||i[c.matcher](h)){o[c.name]=h;const p=n[m+1],_=d[m+1];p&&!p.rest&&p.optional&&_&&c.chained&&(f=0);continue}if(c.optional&&c.chained){f++;continue}return}if(!f)return o}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function yt({nodes:e,server_loads:n,dictionary:i,matchers:o}){const d=new Set(n);return Object.entries(i).map(([c,[h,p,_]])=>{const{pattern:C,params:x}=gt(c),S={id:c,exec:N=>{const P=C.exec(N);if(P)return wt(P,x,o)},errors:[1,..._||[]].map(N=>e[N]),layouts:[0,...p||[]].map(m),leaf:f(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(c){const h=c<0;return h&&(c=~c),[h,e[c]]}function m(c){return c===void 0?c:[d.has(c),e[c]]}}function We(e){try{return JSON.parse(sessionStorage[e])}catch{}}function qe(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}const vt="1694912458842",Ye="sveltekit:snapshot",Xe="sveltekit:scroll",V="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1};function Fe(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function te(){return{x:pageXOffset,y:pageYOffset}}function W(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ge={...de,"":de.hover};function Ze(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Be(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function ke(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,d=!i||!!o||ue(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(i==null?void 0:i.origin)===location.origin&&e.hasAttribute("download");return{url:i,external:d,target:o,download:f}}function fe(e){let n=null,i=null,o=null,d=null,f=null,m=null,c=e;for(;c&&c!==document.documentElement;)o===null&&(o=W(c,"preload-code")),d===null&&(d=W(c,"preload-data")),n===null&&(n=W(c,"keepfocus")),i===null&&(i=W(c,"noscroll")),f===null&&(f=W(c,"reload")),m===null&&(m=W(c,"replacestate")),c=Ze(c);function h(p){switch(p){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Ge[o??"off"],preload_data:Ge[d??"off"],keep_focus:h(n),noscroll:h(i),reload:h(f),replace_state:h(m)}}function He(e){const n=Ae(e);let i=!0;function o(){i=!0,n.update(m=>m)}function d(m){i=!1,n.set(m)}function f(m){let c;return n.subscribe(h=>{(c===void 0||i&&h!==c)&&m(c=h)})}return{notify:o,set:d,subscribe:f}}function bt(){const{set:e,subscribe:n}=Ae(!1);let i;async function o(){clearTimeout(i);try{const d=await fetch(`${nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const m=(await d.json()).version!==vt;return m&&(e(!0),clearTimeout(i)),m}catch{return!1}}return{subscribe:n,check:o}}function ue(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}const Et=-1,kt=-2,St=-3,Rt=-4,At=-5,It=-6;function Lt(e,n){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,o=Array(i.length);function d(f,m=!1){if(f===Et)return;if(f===St)return NaN;if(f===Rt)return 1/0;if(f===At)return-1/0;if(f===It)return-0;if(m)throw new Error("Invalid input");if(f in o)return o[f];const c=i[f];if(!c||typeof c!="object")o[f]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const h=c[0],p=n==null?void 0:n[h];if(p)return o[f]=p(d(c[1]));switch(h){case"Date":o[f]=new Date(c[1]);break;case"Set":const _=new Set;o[f]=_;for(let S=1;S<c.length;S+=1)_.add(d(c[S]));break;case"Map":const C=new Map;o[f]=C;for(let S=1;S<c.length;S+=2)C.set(d(c[S]),d(c[S+1]));break;case"RegExp":o[f]=new RegExp(c[1],c[2]);break;case"Object":o[f]=Object(c[1]);break;case"BigInt":o[f]=BigInt(c[1]);break;case"null":const x=Object.create(null);o[f]=x;for(let S=1;S<c.length;S+=2)x[c[S]]=d(c[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(c.length);o[f]=h;for(let p=0;p<c.length;p+=1){const _=c[p];_!==kt&&(h[p]=d(_))}}else{const h={};o[f]=h;for(const p in c){const _=c[p];h[p]=d(_)}}return o[f]}return d(0)}function Ut(e){return e.filter(n=>n!=null)}const Qe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Qe];const Ot=new Set([...Qe]);[...Ot];async function Pt(e){var n;for(const i in e)if(typeof((n=e[i])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([o,d])=>[o,await d])));return e}class ne{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(n,i){this.status=n,this.location=i}}const xt="x-sveltekit-invalidated",Nt="x-sveltekit-trailing-slash";function jt(e){e.client}const F={url:He({}),page:He({}),navigating:Ae(null),updated:bt()},K=We(Xe)??{},ee=We(Ye)??{};function Se(e){K[e]=te()}function Tt(e,n){var De;const i=yt(e),o=e.nodes[0],d=e.nodes[1];o(),d();const f=document.documentElement,m=[],c=[];let h=null;const p={before_navigate:[],on_navigate:[],after_navigate:[]};let _={branch:[],error:null,url:null},C=!1,x=!1,S=!0,N=!1,P=!1,G=!1,B=!1,M,$=(De=history.state)==null?void 0:De[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const he=K[$];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let q,re,Y;async function Le(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const t=new URL(location.href),l=Z(t,!0);h=null;const a=re={},s=l&&await _e(l);if(a===re&&s){if(s.type==="redirect")return oe(new URL(s.location,t).href,{},[t.pathname],a);s.props.page!==void 0&&(q=s.props.page),M.$set(s.props)}}function Ue(t){c.some(l=>l==null?void 0:l.snapshot)&&(ee[t]=c.map(l=>{var a;return(a=l==null?void 0:l.snapshot)==null?void 0:a.capture()}))}function Oe(t){var l;(l=ee[t])==null||l.forEach((a,s)=>{var r,u;(u=(r=c[s])==null?void 0:r.snapshot)==null||u.restore(a)})}function Pe(){Se($),qe(Xe,K),Ue($),qe(Ye,ee)}async function oe(t,{noScroll:l=!1,replaceState:a=!1,keepFocus:s=!1,state:r={},invalidateAll:u=!1},g,b){return typeof t=="string"&&(t=new URL(t,Fe(document))),le({url:t,scroll:l?te():null,keepfocus:s,redirect_chain:g,details:{state:r,replaceState:a},nav_token:b,accepted:()=>{u&&(B=!0)},blocked:()=>{},type:"goto"})}async function xe(t){return h={id:t.id,promise:_e(t).then(l=>(l.type==="loaded"&&l.state.error&&(h=null),l))},h.promise}async function ie(...t){const a=i.filter(s=>t.some(r=>s.exec(r))).map(s=>Promise.all([...s.layouts,s.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(a)}function Ne(t){var s;_=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),q=t.props.page,M=new e.root({target:n,props:{...t.props,stores:F,components:c},hydrate:!0}),Oe($);const a={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};p.after_navigate.forEach(r=>r(a)),x=!0}async function X({url:t,params:l,branch:a,status:s,error:r,route:u,form:g}){let b="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(b=y.slash);t.pathname=at(t.pathname,b),t.search=t.search;const E={type:"loaded",state:{url:t,params:l,branch:a,error:r,route:u},props:{constructors:Ut(a).map(y=>y.node.component)}};g!==void 0&&(E.props.form=g);let v={},L=!q,A=0;for(let y=0;y<Math.max(a.length,_.branch.length);y+=1){const w=a[y],O=_.branch[y];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(v={...v,...w.data},L&&(E.props[`data_${A}`]=v),A+=1)}return(!_.url||t.href!==_.url.href||_.error!==r||g!==void 0&&g!==q.form||L)&&(E.props.page={error:r,params:l,route:{id:(u==null?void 0:u.id)??null},status:s,url:new URL(t),form:g??null,data:L?v:q.data}),E}async function ge({loader:t,parent:l,url:a,params:s,route:r,server_data_node:u}){var v,L,A;let g=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((v=E.universal)!=null&&v.load){let U=function(...w){for(const O of w){const{href:j}=new URL(O,a);b.dependencies.add(j)}};const y={route:new Proxy(r,{get:(w,O)=>(b.route=!0,w[O])}),params:new Proxy(s,{get:(w,O)=>(b.params.add(O),w[O])}),data:(u==null?void 0:u.data)??null,url:st(a,()=>{b.url=!0}),async fetch(w,O){let j;w instanceof Request?(j=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):j=w;const D=new URL(j,a);return U(D.href),D.origin===a.origin&&(j=D.href.slice(a.origin.length)),x?pt(j,D.href,O):dt(j,O)},setHeaders:()=>{},depends:U,parent(){return b.parent=!0,l()}};g=await E.universal.load.call(null,y)??null,g=g?await Pt(g):null}return{node:E,loader:t,server:u,universal:(L=E.universal)!=null&&L.load?{type:"data",data:g,uses:b}:null,data:g??(u==null?void 0:u.data)??null,slash:((A=E.universal)==null?void 0:A.trailingSlash)??(u==null?void 0:u.slash)}}function je(t,l,a,s,r){if(B)return!0;if(!s)return!1;if(s.parent&&t||s.route&&l||s.url&&a)return!0;for(const u of s.params)if(r[u]!==_.params[u])return!0;for(const u of s.dependencies)if(m.some(g=>g(new URL(u))))return!0;return!1}function me(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function _e({id:t,invalidating:l,url:a,params:s,route:r}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:u,layouts:g,leaf:b}=r,E=[...g,b];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const L=_.url?t!==_.url.pathname+_.url.search:!1,A=_.route?r.id!==_.route.id:!1;let U=!1;const y=E.map((k,I)=>{var H;const R=_.branch[I],T=!!(k!=null&&k[0])&&((R==null?void 0:R.loader)!==k[1]||je(U,A,L,(H=R.server)==null?void 0:H.uses,s));return T&&(U=!0),T});if(y.some(Boolean)){try{v=await Ke(a,y)}catch(k){return se({status:k instanceof ne?k.status:500,error:await Q(k,{url:a,params:s,route:{id:r.id}}),url:a,route:r})}if(v.type==="redirect")return v}const w=v==null?void 0:v.nodes;let O=!1;const j=E.map(async(k,I)=>{var we;if(!k)return;const R=_.branch[I],T=w==null?void 0:w[I];if((!T||T.type==="skip")&&k[1]===(R==null?void 0:R.loader)&&!je(O,A,L,(we=R.universal)==null?void 0:we.uses,s))return R;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return ge({loader:k[1],url:a,params:s,route:r,parent:async()=>{var Me;const Ve={};for(let ye=0;ye<I;ye+=1)Object.assign(Ve,(Me=await j[ye])==null?void 0:Me.data);return Ve},server_data_node:me(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?R==null?void 0:R.server:void 0)})});for(const k of j)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await j[k])}catch(I){if(I instanceof Je)return{type:"redirect",location:I.location};let R=500,T;if(w!=null&&w.includes(I))R=I.status??R,T=I.error;else if(I instanceof ne)R=I.status,T=I.body;else{if(await F.updated.check())return await z(a);T=await Q(I,{params:s,url:a,route:{id:r.id}})}const H=await Te(k,D,u);return H?await X({url:a,params:s,branch:D.slice(0,H.idx).concat(H.node),status:R,error:T,route:r}):await Ce(a,{id:r.id},T,R)}else D.push(void 0);return await X({url:a,params:s,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function Te(t,l,a){for(;t--;)if(a[t]){let s=t;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:t,error:l,url:a,route:s}){const r={};let u=null;if(e.server_loads[0]===0)try{const v=await Ke(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;u=v.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||C)&&await z(a)}const b=await ge({loader:o,url:a,params:r,route:s,parent:()=>Promise.resolve({}),server_data_node:me(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await X({url:a,params:r,branch:[b,E],status:t,error:l,route:null})}function Z(t,l){if(ue(t,J))return;const a=ce(t);for(const s of i){const r=s.exec(a);if(r)return{id:t.pathname+t.search,invalidating:l,route:s,params:ot(r),url:t}}}function ce(t){return rt(t.pathname.slice(J.length)||"/")}function $e({url:t,type:l,intent:a,delta:s}){let r=!1;const u=ze(_,a,t,l);s!==void 0&&(u.navigation.delta=s);const g={...u.navigation,cancel:()=>{r=!0,u.reject(new Error("navigation was cancelled"))}};return P||p.before_navigate.forEach(b=>b(g)),r?null:u}async function le({url:t,scroll:l,keepfocus:a,redirect_chain:s,details:r,type:u,delta:g,nav_token:b={},accepted:E,blocked:v}){var j,D,k;const L=Z(t,!1),A=$e({url:t,type:u,delta:g,intent:L});if(!A){v();return}const U=$;E(),P=!0,x&&F.navigating.set(A.navigation),re=b;let y=L&&await _e(L);if(!y){if(ue(t,J))return await z(t);y=await Ce(t,{id:null},await Q(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(L==null?void 0:L.url)||t,re!==b)return A.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(s.length>10||s.includes(t.pathname))y=await se({status:500,error:await Q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return oe(new URL(y.location,t).href,{},[...s,t.pathname],b),!1;else((j=y.props.page)==null?void 0:j.status)>=400&&await F.updated.check()&&await z(t);if(m.length=0,B=!1,N=!0,Se(U),Ue(U),(D=y.props.page)!=null&&D.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const I=r.replaceState?0:1;if(r.state[V]=$+=I,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let R=$+1;for(;ee[R]||K[R];)delete ee[R],delete K[R],R+=1}}if(h=null,x){_=y.state,y.props.page&&(y.props.page.url=t);const I=(await Promise.all(p.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){p.after_navigate=p.after_navigate.filter(T=>!I.includes(T))};I.push(R),p.after_navigate.push(...I)}M.$set(y.props)}else Ne(y);const{activeElement:w}=document;if(await be(),S){const I=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!a&&!O&&Re(),S=!0,y.props.page&&(q=y.props.page),P=!1,u==="popstate"&&Oe($),A.fulfil(void 0),p.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),N=!1}async function Ce(t,l,a,s){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await se({status:s,error:a,url:t,route:l}):await z(t)}function z(t){return location.href=t.href,new Promise(()=>{})}function tt(){let t;f.addEventListener("mousemove",u=>{const g=u.target;clearTimeout(t),t=setTimeout(()=>{s(g,2)},20)});function l(u){s(u.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const a=new IntersectionObserver(u=>{for(const g of u)g.isIntersecting&&(ie(ce(new URL(g.target.href))),a.unobserve(g.target))},{threshold:0});function s(u,g){const b=Be(u,f);if(!b)return;const{url:E,external:v,download:L}=ke(b,J);if(v||L)return;const A=fe(b);if(!A.reload)if(g<=A.preload_data){const U=Z(E,!1);U&&xe(U)}else g<=A.preload_code&&ie(ce(E))}function r(){a.disconnect();for(const u of f.querySelectorAll("a")){const{url:g,external:b,download:E}=ke(u,J);if(b||E)continue;const v=fe(u);v.reload||(v.preload_code===de.viewport&&a.observe(u),v.preload_code===de.eager&&ie(ce(g)))}}p.after_navigate.push(r),r()}function Q(t,l){return t instanceof ne?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{ve(()=>(p.after_navigate.push(t),()=>{const l=p.after_navigate.indexOf(t);p.after_navigate.splice(l,1)}))},before_navigate:t=>{ve(()=>(p.before_navigate.push(t),()=>{const l=p.before_navigate.indexOf(t);p.before_navigate.splice(l,1)}))},on_navigate:t=>{ve(()=>(p.on_navigate.push(t),()=>{const l=p.on_navigate.indexOf(t);p.on_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(N||!x)&&(S=!1)},goto:(t,l={})=>oe(t,l,[]),invalidate:t=>{if(typeof t=="function")m.push(t);else{const{href:l}=new URL(t,location.href);m.push(a=>a.href===l)}return Le()},invalidate_all:()=>(B=!0,Le()),preload_data:async t=>{const l=new URL(t,Fe(document)),a=Z(l,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await xe(a)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:a,route:s}=_;if(!s)return;const r=await Te(_.branch.length,a,s.errors);if(r){const u=await X({url:l,params:_.params,branch:a.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:s});_=u.state,M.$set(u.props),be().then(Re)}}else t.type==="redirect"?oe(t.location,{invalidateAll:!0},[]):(M.$set({form:null,page:{...q,form:t.data,status:t.status}}),await be(),M.$set({form:t.data}),t.type==="success"&&Re())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let s=!1;if(Pe(),!P){const r=ze(_,void 0,null,"leave"),u={...r.navigation,cancel:()=>{s=!0,r.reject(new Error("navigation was cancelled"))}};p.before_navigate.forEach(g=>g(u))}s?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(l=navigator.connection)!=null&&l.saveData||tt(),f.addEventListener("click",a=>{var U;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const s=Be(a.composedPath()[0],f);if(!s)return;const{url:r,external:u,target:g,download:b}=ke(s,J);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const E=fe(s);if(!(s instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||b)return;if(u||E.reload){$e({url:r,type:"link"})?P=!0:a.preventDefault();return}const[L,A]=r.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(_.url.hash===r.hash){a.preventDefault(),(U=s.ownerDocument.getElementById(A))==null||U.scrollIntoView();return}if(G=!0,Se($),t(r),!E.replace_state)return;G=!1,a.preventDefault()}le({url:r,scroll:E.noscroll?te():null,keepfocus:E.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:E.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),f.addEventListener("submit",a=>{if(a.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||s.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||s.action);if(ue(g,J))return;const b=a.target,{keep_focus:E,noscroll:v,reload:L,replace_state:A}=fe(b);if(L)return;a.preventDefault(),a.stopPropagation();const U=new FormData(b),y=r==null?void 0:r.getAttribute("name");y&&U.append(y,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(U).toString(),le({url:g,scroll:v?te():null,keepfocus:E??!1,redirect_chain:[],details:{state:{},replaceState:A??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var s;if((s=a.state)!=null&&s[V]){if(a.state[V]===$)return;const r=K[a.state[V]];if(_.url.href.split("#")[0]===location.href.split("#")[0]){K[$]=te(),$=a.state[V],scrollTo(r.x,r.y);return}const u=a.state[V]-$;await le({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=a.state[V]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}else if(!G){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&F.navigating.set(null)});function t(a){_.url=a,F.page.set({...q,url:a}),F.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:a,params:s,route:r,data:u,form:g})=>{C=!0;const b=new URL(location.href);({params:s={},route:r={id:null}}=Z(b,!1)||{});let E;try{const v=a.map(async(U,y)=>{const w=u[y];return w!=null&&w.uses&&(w.uses=et(w.uses)),ge({loader:e.nodes[U],url:b,params:s,route:r,parent:async()=>{const O={};for(let j=0;j<y;j+=1)Object.assign(O,(await v[j]).data);return O},server_data_node:me(w)})}),L=await Promise.all(v),A=i.find(({id:U})=>U===r.id);if(A){const U=A.layouts;for(let y=0;y<U.length;y++)U[y]||L.splice(y,0,void 0)}E=await X({url:b,params:s,branch:L,status:t,error:l,form:g,route:A??null})}catch(v){if(v instanceof Je){await z(new URL(v.location,location.href));return}E=await se({status:v instanceof ne?v.status:500,error:await Q(v,{url:b,params:s,route:r}),url:b,route:r})}Ne(E)}}}async function Ke(e,n){const i=new URL(e);i.pathname=ft(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(Nt,"1"),i.searchParams.append(xt,n.map(d=>d?"1":"0").join(""));const o=await pe(i.href);if(!o.ok)throw new ne(o.status,await o.json());return new Promise(async d=>{var _;const f=new Map,m=o.body.getReader(),c=new TextDecoder;function h(C){return Lt(C,{Promise:x=>new Promise((S,N)=>{f.set(x,{fulfil:S,reject:N})})})}let p="";for(;;){const{done:C,value:x}=await m.read();if(C&&!p)break;for(p+=!x&&p?`
`:c.decode(x);;){const S=p.indexOf(`
`);if(S===-1)break;const N=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),N.type==="redirect")return d(N);if(N.type==="data")(_=N.nodes)==null||_.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=et(P.uses),P.data=h(P.data))}),d(N);else if(N.type==="chunk"){const{id:P,data:G,error:B}=N,M=f.get(P);f.delete(P),B?M.reject(h(B)):M.fulfil(h(G))}}}})}function et(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Re(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const d=[];for(let f=0;f<o.rangeCount;f+=1)d.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===d.length){for(let f=0;f<o.rangeCount;f+=1){const m=d[f],c=o.getRangeAt(f);if(m.commonAncestorContainer!==c.commonAncestorContainer||m.startContainer!==c.startContainer||m.endContainer!==c.endContainer||m.startOffset!==c.startOffset||m.endOffset!==c.endOffset)return}o.removeAllRanges()}})}}}function ze(e,n,i,o){var h,p;let d,f;const m=new Promise((_,C)=>{d=_,f=C});return m.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((h=e.route)==null?void 0:h.id)??null},url:e.url},to:i&&{params:(n==null?void 0:n.params)??null,route:{id:((p=n==null?void 0:n.route)==null?void 0:p.id)??null},url:i},willUnload:!n,type:o,complete:m},fulfil:d,reject:f}}async function Vt(e,n,i){const o=Tt(e,n);jt({client:o}),i?await o._hydrate(i):o.goto(location.href,{replaceState:!0}),o._start_router()}export{Vt as start};
