import{S as re,i as ae,s as ne,k as f,l as h,m as g,h as m,n as u,C as B,b as A,D as i,E as Ne,F as le,a as w,q as N,c as y,r as W,u as Le,G as de,w as Pe,H as Te,y as Z,z as x,A as ee,I as Ge,g as S,v as We,f as Fe,d as P,B as te,J as Je,K as Re,L as Ke,e as Be,M as Qe,N as Xe,O as Ye,P as Ze,Q as xe,R as et}from"../chunks/index.a9a6288a.js";import{i as ue}from"../chunks/menu.ab9c7d22.js";import{b as je}from"../chunks/paths.26e344b1.js";const tt=!0,st="always",Rt=Object.freeze(Object.defineProperty({__proto__:null,prerender:tt,trailingSlash:st},Symbol.toStringTag,{value:"Module"}));const lt="mailto:skyhawkbotics@gmail.com?subject=I wanted to get ahold of you.",rt="tel:971 384-0644",at="main@skyhawkbotics.org",nt="(971) 384-0644";function it(n){let e,t,r,a;return{c(){e=f("div"),t=f("div"),this.h()},l(s){e=h(s,"DIV",{class:!0});var l=g(e);t=h(l,"DIV",{class:!0}),g(t).forEach(m),l.forEach(m),this.h()},h(){u(t,"class","hamburger--burger svelte-5o3ibu"),u(e,"class","hamburger svelte-5o3ibu"),B(e,"open",n[0]),B(e,"desktop",n[2]),B(e,"mobile",n[1])},m(s,l){A(s,e,l),i(e,t),r||(a=Ne(e,"click",n[5]),r=!0)},p(s,[l]){l&1&&B(e,"open",s[0]),l&4&&B(e,"desktop",s[2]),l&2&&B(e,"mobile",s[1])},i:le,o:le,d(s){s&&m(e),r=!1,a()}}}function ot(n,e,t){let r,a,{value:s=!1}=e,{desktop:l=!1}=e,{mobile:c=!1}=e;const d=()=>t(0,s=!s);return n.$$set=_=>{"value"in _&&t(0,s=_.value),"desktop"in _&&t(3,l=_.desktop),"mobile"in _&&t(4,c=_.mobile)},n.$$.update=()=>{n.$$.dirty&24&&t(2,r=l&&!c),n.$$.dirty&24&&t(1,a=c&&!l)},[s,a,r,l,c,d]}class Ce extends re{constructor(e){super(),ae(this,e,ot,it,ne,{value:0,desktop:3,mobile:4})}}function De(n){let e,t;return{c(){e=f("i"),this.h()},l(r){e=h(r,"I",{class:!0}),g(e).forEach(m),this.h()},h(){u(e,"class",t=de(n[1])+" svelte-vyhm2o")},m(r,a){A(r,e,a)},p(r,a){a&2&&t!==(t=de(r[1])+" svelte-vyhm2o")&&u(e,"class",t)},d(r){r&&m(e)}}}function ct(n){let e,t,r,a=n[1]&&De(n);return{c(){e=f("a"),a&&a.c(),t=w(),r=N(n[0]),this.h()},l(s){e=h(s,"A",{class:!0,href:!0});var l=g(e);a&&a.l(l),t=y(l),r=W(l,n[0]),l.forEach(m),this.h()},h(){u(e,"class","sidebar-item svelte-vyhm2o"),u(e,"href",n[2])},m(s,l){A(s,e,l),a&&a.m(e,null),i(e,t),i(e,r)},p(s,[l]){s[1]?a?a.p(s,l):(a=De(s),a.c(),a.m(e,t)):a&&(a.d(1),a=null),l&1&&Le(r,s[0]),l&4&&u(e,"href",s[2])},i:le,o:le,d(s){s&&m(e),a&&a.d()}}}function ut(n,e,t){let r,{name:a}=e,{path:s}=e,{icon:l=void 0}=e;return n.$$set=c=>{"name"in c&&t(0,a=c.name),"path"in c&&t(3,s=c.path),"icon"in c&&t(1,l=c.icon)},n.$$.update=()=>{n.$$.dirty&8&&t(2,r=s.startsWith("http")?s:`${je}${s}`)},[a,l,r,s]}class ft extends re{constructor(e){super(),ae(this,e,ut,ct,ne,{name:0,path:3,icon:1})}}function Se(n){let e,t;return{c(){e=f("i"),this.h()},l(r){e=h(r,"I",{class:!0}),g(e).forEach(m),this.h()},h(){u(e,"class",t=de(n[2])+" svelte-1vcir1m")},m(r,a){A(r,e,a)},p(r,a){a&4&&t!==(t=de(r[2])+" svelte-1vcir1m")&&u(e,"class",t)},d(r){r&&m(e)}}}function ht(n){let e,t,r,a,s=n[2]&&Se(n);return{c(){e=f("a"),s&&s.c(),t=w(),r=f("p"),a=N(n[0]),this.h()},l(l){e=h(l,"A",{class:!0,href:!0});var c=g(e);s&&s.l(c),t=y(c),r=h(c,"P",{class:!0});var d=g(r);a=W(d,n[0]),d.forEach(m),c.forEach(m),this.h()},h(){u(r,"class","svelte-1vcir1m"),u(e,"class","sidebar-link svelte-1vcir1m"),u(e,"href",n[1])},m(l,c){A(l,e,c),s&&s.m(e,null),i(e,t),i(e,r),i(r,a)},p(l,[c]){l[2]?s?s.p(l,c):(s=Se(l),s.c(),s.m(e,t)):s&&(s.d(1),s=null),c&1&&Le(a,l[0]),c&2&&u(e,"href",l[1])},i:le,o:le,d(l){l&&m(e),s&&s.d()}}}function dt(n,e,t){let{text:r}=e,{url:a}=e,{icon:s=void 0}=e;return n.$$set=l=>{"text"in l&&t(0,r=l.text),"url"in l&&t(1,a=l.url),"icon"in l&&t(2,s=l.icon)},[r,a,s]}class Ae extends re{constructor(e){super(),ae(this,e,dt,ht,ne,{text:0,url:1,icon:2})}}function Me(n,e,t){const r=n.slice();return r[3]=e[t],r[5]=t,r}function mt(n){let e;return{c(){e=f("hr"),this.h()},l(t){e=h(t,"HR",{class:!0}),this.h()},h(){u(e,"class","sidebar--section--divider svelte-30tizm")},m(t,r){A(t,e,r)},d(t){t&&m(e)}}}function Ve(n){let e,t,r,a;const s=[n[3]];let l={};for(let d=0;d<s.length;d+=1)l=Ke(l,s[d]);e=new ft({props:l});let c=n[5]+1!=n[1].length&&mt();return{c(){Z(e.$$.fragment),t=w(),c&&c.c(),r=Be()},l(d){x(e.$$.fragment,d),t=y(d),c&&c.l(d),r=Be()},m(d,_){ee(e,d,_),A(d,t,_),c&&c.m(d,_),A(d,r,_),a=!0},p(d,_){const b=_&2?Qe(s,[Xe(d[3])]):{};e.$set(b)},i(d){a||(S(e.$$.fragment,d),a=!0)},o(d){P(e.$$.fragment,d),a=!1},d(d){te(e,d),d&&m(t),c&&c.d(d),d&&m(r)}}}function _t(n){let e,t,r,a,s,l,c,d,_,b,p,E,T,K,R,G,F,H,j,C,ie,U,$,O,D,Q,M,V,X,se,L,me,_e,ve,be,fe,ge,pe,ke,we,J,ye,q,Ee,$e,oe;function Ue(v){n[2](v)}let He={mobile:n[0]};n[0]!==void 0&&(He.value=n[0]),l=new Ce({props:He}),Pe.push(()=>Te(l,"value",Ue));let Y=n[1],k=[];for(let v=0;v<Y.length;v+=1)k[v]=Ve(Me(n,Y,v));const qe=v=>P(k[v],1,1,()=>{k[v]=null});return M=new Ae({props:{text:at,url:lt,icon:"fa-solid fa-envelope"}}),L=new Ae({props:{text:nt+" (Text Only)",url:rt,icon:"fa-solid fa-phone-flip"}}),{c(){e=f("div"),t=f("div"),r=f("p"),a=N("Menu"),s=w(),Z(l.$$.fragment),d=w(),_=f("br"),b=f("br"),p=w(),E=f("div");for(let v=0;v<k.length;v+=1)k[v].c();T=w(),K=f("br"),R=f("br"),G=w(),F=f("hr"),H=w(),j=f("br"),C=f("br"),ie=w(),U=f("p"),$=N("Get in Touch"),O=w(),D=f("br"),Q=w(),Z(M.$$.fragment),V=w(),X=f("hr"),se=w(),Z(L.$$.fragment),me=w(),_e=f("br"),ve=f("br"),be=w(),fe=f("hr"),ge=w(),pe=f("br"),ke=f("br"),we=w(),J=f("p"),ye=N(`© Hawkbot1cs. All rights reserved. Original design by
        `),q=f("a"),Ee=N("HTML5 UP"),$e=N("."),this.h()},l(v){e=h(v,"DIV",{class:!0});var o=g(e);t=h(o,"DIV",{class:!0});var z=g(t);r=h(z,"P",{class:!0});var I=g(r);a=W(I,"Menu"),I.forEach(m),s=y(z),x(l.$$.fragment,z),z.forEach(m),d=y(o),_=h(o,"BR",{}),b=h(o,"BR",{}),p=y(o),E=h(o,"DIV",{class:!0});var ce=g(E);for(let Ie=0;Ie<k.length;Ie+=1)k[Ie].l(ce);ce.forEach(m),T=y(o),K=h(o,"BR",{}),R=h(o,"BR",{}),G=y(o),F=h(o,"HR",{class:!0}),H=y(o),j=h(o,"BR",{}),C=h(o,"BR",{}),ie=y(o),U=h(o,"P",{class:!0});var Oe=g(U);$=W(Oe,"Get in Touch"),Oe.forEach(m),O=y(o),D=h(o,"BR",{}),Q=y(o),x(M.$$.fragment,o),V=y(o),X=h(o,"HR",{class:!0}),se=y(o),x(L.$$.fragment,o),me=y(o),_e=h(o,"BR",{}),ve=h(o,"BR",{}),be=y(o),fe=h(o,"HR",{class:!0}),ge=y(o),pe=h(o,"BR",{}),ke=h(o,"BR",{}),we=y(o),J=h(o,"P",{class:!0});var he=g(J);ye=W(he,`© Hawkbot1cs. All rights reserved. Original design by
        `),q=h(he,"A",{href:!0,target:!0,rel:!0,class:!0});var ze=g(q);Ee=W(ze,"HTML5 UP"),ze.forEach(m),$e=W(he,"."),he.forEach(m),o.forEach(m),this.h()},h(){u(r,"class","sidebar--title--text svelte-30tizm"),u(t,"class","sidebar--title svelte-30tizm"),u(E,"class","sidebar--section svelte-30tizm"),u(F,"class","sidebar--section--divider svelte-30tizm"),u(U,"class","sidebar--title--text svelte-30tizm"),u(X,"class","sidebar--section--divider svelte-30tizm"),u(fe,"class","sidebar--section--divider svelte-30tizm"),u(q,"href","https://html5up.net"),u(q,"target","_blank"),u(q,"rel","noreferrer"),u(q,"class","svelte-30tizm"),u(J,"class","sidebar--copyright svelte-30tizm"),u(e,"class","sidebar svelte-30tizm"),B(e,"open",n[0])},m(v,o){A(v,e,o),i(e,t),i(t,r),i(r,a),i(t,s),ee(l,t,null),i(e,d),i(e,_),i(e,b),i(e,p),i(e,E);for(let z=0;z<k.length;z+=1)k[z]&&k[z].m(E,null);i(e,T),i(e,K),i(e,R),i(e,G),i(e,F),i(e,H),i(e,j),i(e,C),i(e,ie),i(e,U),i(U,$),i(e,O),i(e,D),i(e,Q),ee(M,e,null),i(e,V),i(e,X),i(e,se),ee(L,e,null),i(e,me),i(e,_e),i(e,ve),i(e,be),i(e,fe),i(e,ge),i(e,pe),i(e,ke),i(e,we),i(e,J),i(J,ye),i(J,q),i(q,Ee),i(J,$e),oe=!0},p(v,[o]){const z={};if(o&1&&(z.mobile=v[0]),!c&&o&1&&(c=!0,z.value=v[0],Ge(()=>c=!1)),l.$set(z),o&2){Y=v[1];let I;for(I=0;I<Y.length;I+=1){const ce=Me(v,Y,I);k[I]?(k[I].p(ce,o),S(k[I],1)):(k[I]=Ve(ce),k[I].c(),S(k[I],1),k[I].m(E,null))}for(We(),I=Y.length;I<k.length;I+=1)qe(I);Fe()}(!oe||o&1)&&B(e,"open",v[0])},i(v){if(!oe){S(l.$$.fragment,v);for(let o=0;o<Y.length;o+=1)S(k[o]);S(M.$$.fragment,v),S(L.$$.fragment,v),oe=!0}},o(v){P(l.$$.fragment,v),k=k.filter(Boolean);for(let o=0;o<k.length;o+=1)P(k[o]);P(M.$$.fragment,v),P(L.$$.fragment,v),oe=!1},d(v){v&&m(e),te(l),Je(k,v),te(M),te(L)}}}function vt(n,e,t){let r;Re(n,ue,l=>t(0,r=l));const a=[{name:"Home",path:"/"},{name:"About Us",path:"/learn"},{name:"Donate",path:"/donate"},{name:"Our Work",path:"/work"},{name:"Event Calendar",path:"/calendar"},{name:"Documents and Records",path:"/documents"},{name:"Get Involved",path:"/involved"}];function s(l){r=l,ue.set(r)}return[r,a,s]}class bt extends re{constructor(e){super(),ae(this,e,vt,_t,ne,{})}}function gt(n){let e,t,r,a,s,l,c,d,_,b,p,E,T,K,R,G,F,H,j,C;function ie($){n[1]($)}let U={};return n[0]!==void 0&&(U.value=n[0]),t=new Ce({props:U}),Pe.push(()=>Te(t,"value",ie)),{c(){e=f("div"),Z(t.$$.fragment),a=w(),s=f("div"),l=f("a"),c=f("strong"),d=N("Hawkbot1cs"),_=N(" 20790"),b=w(),p=f("div"),E=f("a"),T=f("i"),K=w(),R=f("a"),G=f("i"),F=w(),H=f("a"),j=f("i"),this.h()},l($){e=h($,"DIV",{class:!0});var O=g(e);x(t.$$.fragment,O),a=y(O),s=h(O,"DIV",{class:!0});var D=g(s);l=h(D,"A",{href:!0,class:!0});var Q=g(l);c=h(Q,"STRONG",{class:!0});var M=g(c);d=W(M,"Hawkbot1cs"),M.forEach(m),_=W(Q," 20790"),Q.forEach(m),b=y(D),p=h(D,"DIV",{class:!0});var V=g(p);E=h(V,"A",{href:!0,target:!0,rel:!0,class:!0});var X=g(E);T=h(X,"I",{class:!0}),g(T).forEach(m),X.forEach(m),K=y(V),R=h(V,"A",{href:!0,target:!0,rel:!0,class:!0});var se=g(R);G=h(se,"I",{class:!0}),g(G).forEach(m),se.forEach(m),F=y(V),H=h(V,"A",{href:!0,target:!0,rel:!0,class:!0});var L=g(H);j=h(L,"I",{class:!0}),g(j).forEach(m),L.forEach(m),V.forEach(m),D.forEach(m),O.forEach(m),this.h()},h(){u(c,"class","svelte-1au9rih"),u(l,"href",je+"/"),u(l,"class","header--logo svelte-1au9rih"),u(T,"class","fa-brands fa-twitter"),u(E,"href","https://www.twitter.com/SkyHawk03350366"),u(E,"target","_blank"),u(E,"rel","noreferrer"),u(E,"class","svelte-1au9rih"),u(G,"class","fa-brands fa-facebook-f"),u(R,"href","https://www.facebook.com/profile.php?id=100075278091954"),u(R,"target","_blank"),u(R,"rel","noreferrer"),u(R,"class","svelte-1au9rih"),u(j,"class","fa-brands fa-instagram"),u(H,"href","https://www.instagram.com/hawk.botics/"),u(H,"target","_blank"),u(H,"rel","noreferrer"),u(H,"class","svelte-1au9rih"),u(p,"class","header--icons svelte-1au9rih"),u(s,"class","header svelte-1au9rih"),u(e,"class","header-wrapper svelte-1au9rih"),B(e,"open",n[0])},m($,O){A($,e,O),ee(t,e,null),i(e,a),i(e,s),i(s,l),i(l,c),i(c,d),i(l,_),i(s,b),i(s,p),i(p,E),i(E,T),i(p,K),i(p,R),i(R,G),i(p,F),i(p,H),i(H,j),C=!0},p($,[O]){const D={};!r&&O&1&&(r=!0,D.value=$[0],Ge(()=>r=!1)),t.$set(D),(!C||O&1)&&B(e,"open",$[0])},i($){C||(S(t.$$.fragment,$),C=!0)},o($){P(t.$$.fragment,$),C=!1},d($){$&&m(e),te(t)}}}function pt(n,e,t){let r;Re(n,ue,s=>t(0,r=s));function a(s){r=s,ue.set(r)}return[r,a]}class kt extends re{constructor(e){super(),ae(this,e,pt,gt,ne,{})}}function wt(n){let e,t,r,a,s,l,c;t=new bt({}),s=new kt({});const d=n[2].default,_=Ye(d,n,n[1],null);return{c(){e=f("div"),Z(t.$$.fragment),r=w(),a=f("div"),Z(s.$$.fragment),l=w(),_&&_.c(),this.h()},l(b){e=h(b,"DIV",{class:!0});var p=g(e);x(t.$$.fragment,p),r=y(p),a=h(p,"DIV",{class:!0});var E=g(a);x(s.$$.fragment,E),l=y(E),_&&_.l(E),E.forEach(m),p.forEach(m),this.h()},h(){u(a,"class","content svelte-1rdc1kp"),B(a,"open",n[0]),u(e,"class","wrapper svelte-1rdc1kp")},m(b,p){A(b,e,p),ee(t,e,null),i(e,r),i(e,a),ee(s,a,null),i(a,l),_&&_.m(a,null),c=!0},p(b,[p]){_&&_.p&&(!c||p&2)&&Ze(_,d,b,b[1],c?et(d,b[1],p,null):xe(b[1]),null),(!c||p&1)&&B(a,"open",b[0])},i(b){c||(S(t.$$.fragment,b),S(s.$$.fragment,b),S(_,b),c=!0)},o(b){P(t.$$.fragment,b),P(s.$$.fragment,b),P(_,b),c=!1},d(b){b&&m(e),te(t),te(s),_&&_.d(b)}}}function yt(n,e,t){let r;Re(n,ue,l=>t(0,r=l));let{$$slots:a={},$$scope:s}=e;return n.$$set=l=>{"$$scope"in l&&t(1,s=l.$$scope)},[r,s,a]}class Ht extends re{constructor(e){super(),ae(this,e,yt,wt,ne,{})}}export{Ht as component,Rt as universal};
