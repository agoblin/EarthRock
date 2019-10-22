var app=function(){"use strict";function e(){}function t(e,t){for(const a in t)e[a]=t[a];return e}function a(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(a)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t,a){const n=t.subscribe(a);e.$$.on_destroy.push(n.unsubscribe?()=>n.unsubscribe():n)}function c(e,t){e.appendChild(t)}function d(e,t,a){e.insertBefore(t,a||null)}function l(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function g(){return u(" ")}function m(){return u("")}function h(e,t,a,n){return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)}function p(e,t,a){null==a?e.removeAttribute(t):e.setAttribute(t,a)}function $(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t,a){e.style.setProperty(t,a)}function _(e,t,a){e.classList[a?"add":"remove"](t)}let b;function k(e){b=e}function x(e){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(e)}function y(){const e=b;return(t,a)=>{const n=e.$$.callbacks[t];if(n){const r=function(e,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(e,!1,!1,t),a}(t,a);n.slice().forEach(t=>{t.call(e,r)})}}}const w=[],E=[],M=[],S=[],T=Promise.resolve();let C=!1;function A(e){M.push(e)}function R(){const e=new Set;do{for(;w.length;){const e=w.shift();k(e),O(e.$$)}for(;E.length;)E.pop()();for(let t=0;t<M.length;t+=1){const a=M[t];e.has(a)||(a(),e.add(a))}M.length=0}while(w.length);for(;S.length;)S.pop()();C=!1}function O(e){e.fragment&&(e.update(e.dirty),r(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(A))}const L=new Set;let j;function I(){j={remaining:0,callbacks:[]}}function N(){j.remaining||r(j.callbacks)}function P(e,t){e&&e.i&&(L.delete(e),e.i(t))}function U(e,t,a,n){if(e&&e.o){if(L.has(e))return;L.add(e),j.callbacks.push(()=>{L.delete(e),n&&(a&&e.d(1),n())}),e.o(t)}}function W(e,t){U(e,1,1,()=>{t.delete(e.key)})}function z(e,t){const a={},n={},r={$$scope:1};let o=e.length;for(;o--;){const s=e[o],i=t[o];if(i){for(const e in s)e in i||(n[e]=1);for(const e in i)r[e]||(a[e]=i[e],r[e]=1);e[o]=i}else for(const e in s)r[e]=1}for(const e in n)e in a||(a[e]=void 0);return a}function D(e,t,n){const{fragment:s,on_mount:i,on_destroy:c,after_update:d}=e.$$;s.m(t,n),A(()=>{const t=i.map(a).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]}),d.forEach(A)}function H(e,t){e.$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function Y(e,t){e.$$.dirty||(w.push(e),C||(C=!0,T.then(R)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function B(t,a,o,s,i,c){const d=b;k(t);const l=a.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:null};let u=!1;var g;f.ctx=o?o(t,l,(e,a)=>{f.ctx&&i(f.ctx[e],f.ctx[e]=a)&&(f.bound[e]&&f.bound[e](a),u&&Y(t,e))}):l,f.update(),u=!0,r(f.before_update),f.fragment=s(f.ctx),a.target&&(a.hydrate?f.fragment.l((g=a.target,Array.from(g.childNodes))):f.fragment.c(),a.intro&&P(t.$$.fragment),D(t,a.target,a.anchor),R()),k(d)}class F{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(){}}const K=new Promise(e=>{const t=new Image;t.src="/sheets/default.png",t.onload=(()=>{const a=document.createElement("canvas");a.width=t.width,a.height=t.height;const n=a.getContext("2d");n.drawImage(t,0,0),e({ctx:n,canvas:a})})}),q=new Map,G=(e,t)=>Math.floor(Math.random()*(Math.abs(e)+Math.abs(t))-Math.abs(e));var J=async({width:e,height:t,data:a,random:n=!1})=>{const{canvas:r}=await K,o=`${e}:${t}:${a}`;if(!n&&q.has(o))return q.get(o);let s=document.createElement("canvas");const i=s.getContext("2d");if(s.width=16*e,s.height=16*t,n){let a,n,o,s;for(let c=0;c<e;c++)for(let e=0;e<t;e++)a=16*c,n=16*e,o=17*G(0,32),s=17*G(0,32),i.drawImage(r,o,s,16,16,a,n,16,16)}else if(a.length>0){let t,n;a.split(" ").forEach((a,o)=>{t=o%e,n=Math.floor(o/e);let s=parseInt(a,10),c=s%32,d=Math.floor(s/32),l=16*t,f=16*n,u=17*c,g=17*d;i.drawImage(r,u,g,16,16,l,f,16,16)})}const c=s.toDataURL("image/png");return n||q.set(KeyboardEvent,c),c};function X(t){var a;return{c(){p(a=f("img"),"class","tileset svelte-1bdmb53"),p(a,"alt","tileset image")},m(e,n){d(e,a,n),t.img_binding(a)},p:e,i:e,o:e,d(e){e&&l(a),t.img_binding(null)}}}function Q(e,t,a){let n,{data:r="",width:o=10,height:s=7,spacing:i=0,random:c=!1}=t;return x(async()=>{n.src=await J({width:o,height:s,data:r,random:c}),a("image",n)}),e.$set=(e=>{"data"in e&&a("data",r=e.data),"width"in e&&a("width",o=e.width),"height"in e&&a("height",s=e.height),"spacing"in e&&a("spacing",i=e.spacing),"random"in e&&a("random",c=e.random)}),{data:r,width:o,height:s,spacing:i,random:c,image:n,img_binding:function(e){E[e?"unshift":"push"](()=>{a("image",n=e)})}}}class V extends F{constructor(e){super(),B(this,e,Q,X,s,["data","width","height","spacing","random"])}}function Z(t){var a,n,r,o,s,i,c,u,m,$,v,_=new V({props:{random:!0}});return{c(){a=f("div"),_.$$.fragment.c(),n=g(),(r=f("h1")).textContent="EarthRock",o=g(),(s=f("h2")).textContent="The Uncollectable Card Game",i=g(),(c=f("button")).textContent="START",u=g(),(m=f("div")).textContent="We don't use cookies or store anything about you server side.",p(a,"class","background svelte-1ks0xde"),p(r,"class","title svelte-1ks0xde"),p(s,"class","desc svelte-1ks0xde"),p(c,"class","svelte-1ks0xde"),p(m,"class","notice svelte-1ks0xde"),v=h(c,"click",t.clicked)},m(e,t){d(e,a,t),D(_,a,null),d(e,n,t),d(e,r,t),d(e,o,t),d(e,s,t),d(e,i,t),d(e,c,t),d(e,u,t),d(e,m,t),$=!0},p:e,i(e){$||(P(_.$$.fragment,e),$=!0)},o(e){U(_.$$.fragment,e),$=!1},d(e){e&&l(a),H(_),e&&(l(n),l(r),l(o),l(s),l(i),l(c),l(u),l(m)),v()}}}function ee(e){return{clicked:()=>{alert("Woah there speedy aint got nothing more yet")}}}class te extends F{constructor(e){super(),B(this,e,ee,Z,s,[])}}function ae(t,a=e){let n;const r=[];function o(e){if(s(t,e)){if(t=e,!n)return;r.forEach(e=>e[1]()),r.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,i=e){const c=[s,i];return r.push(c),1===r.length&&(n=a(o)||e),s(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}const ne=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),re=e=>{const t=[];for(let a=0;a<e;a++)t.push(Math.floor(1024*Math.random()));return t.join(" ")},oe=()=>({id:ne(),name:re(5),image:re(25),cost:Math.floor(10*Math.random()),effect1:re(3),effect2:re(3),effect3:re(3)}),se=e=>{const t=[];for(let a=0;a<e;a++)t.push(oe());return t},ie={faked:!1,tasks:{STATE:new Set},state:{away_deck:ae([]),away_hand:ae([]),away_discard:ae([]),away_field:ae([]),away_back:ae(""),home_deck:ae([]),home_hand:ae([]),home_discard:ae([]),home_field:ae([]),home_back:ae("")},server_fake:()=>{ie.faked=(e=>{const t={away_deck:se(30),home_deck:se(30),away_hand:se(5),home_hand:se(5),away_back:re(15),home_back:re(15),home_discard:[],away_discard:[]},a={PLAY:({id:n})=>{const{home_hand:r,home_discard:o}=t;for(let s=0;s<t.home_hand.length;s++){const i=t.home_hand[s];if(i.id===n)return r.splice(s,1),o.unshift(i),e.do({task:"STATE",data:{home_hand:r,home_discard:o}}),a.SUCCESS()}},DRAW:()=>{const{home_deck:n,home_hand:r}=t;return r.push(n.pop()),e.do({task:"STATE",data:{home_deck:n,home_hand:r}}),a.SUCCESS()},SUCCESS:()=>({code:200,text:"SuCcEsS"}),ERROR_404:()=>({code:404,text:"TaSk NoT FoUnD"})};return e.do({task:"STATE",data:t}),({task:e,data:t})=>a[e]?a[e](t):a.ERROR_404()})(ie)},do:({task:e,data:t})=>{void 0!==ie.tasks[e]?ie.tasks[e].forEach(e=>e(t)):console.error(`Tried to call an undefined task ${e}`)},do_server:async e=>{if(ie.faked)return ie.faked(e);return(await fetch("/do",{method:"POST",mode:"same-origin",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()},when:(e,t)=>{if(void 0!==ie.tasks[e])return ie.tasks[e].add(t),()=>{ie.tasks[e].delete(t)};console.error(`Tried to wait for an undefined task ${e}`)}};function ce(e,t,a){const n=Object.create(e);return n.line=t[a],n}function de(e){var t,a,n,r,o,s,i;return{c(){t=f("div"),a=g(),n=f("div"),r=g(),o=f("div"),s=g(),i=f("div"),p(t,"class","border border-top svelte-4sybem"),p(n,"class","border border-bottom svelte-4sybem"),p(o,"class","border border-left svelte-4sybem"),p(i,"class","border border-right svelte-4sybem")},m(e,c){d(e,t,c),d(e,a,c),d(e,n,c),d(e,r,c),d(e,o,c),d(e,s,c),d(e,i,c)},d(e){e&&(l(t),l(a),l(n),l(r),l(o),l(s),l(i))}}}function le(e){var t,a,n,r,o,s,i,m,h,v,_,b,k,x=e.vitals[0],y=e.vitals[1],w=new V({props:{width:1,height:1,random:!0}}),E=new V({props:{width:1,height:1,random:!0}}),M=new V({props:{width:1,height:1,random:!0}});return{c(){t=f("div"),a=f("div"),n=f("div"),w.$$.fragment.c(),r=g(),o=f("div"),s=f("div"),E.$$.fragment.c(),i=g(),m=u(x),h=g(),v=f("div"),M.$$.fragment.c(),_=g(),b=u(y),p(n,"class","tile svelte-4sybem"),p(a,"class","icon svelte-4sybem"),p(s,"class","tile svelte-4sybem"),p(v,"class","tile svelte-4sybem"),p(o,"class","vitals svelte-4sybem"),p(t,"class","line svelte-4sybem")},m(e,l){d(e,t,l),c(t,a),c(a,n),D(w,n,null),c(t,r),c(t,o),c(o,s),D(E,s,null),c(o,i),c(o,m),c(o,h),c(o,v),D(M,v,null),c(o,_),c(o,b),k=!0},p(e,t){k&&!e.vitals||x===(x=t.vitals[0])||$(m,x),k&&!e.vitals||y===(y=t.vitals[1])||$(b,y)},i(e){k||(P(w.$$.fragment,e),P(E.$$.fragment,e),P(M.$$.fragment,e),k=!0)},o(e){U(w.$$.fragment,e),U(E.$$.fragment,e),U(M.$$.fragment,e),k=!1},d(e){e&&l(t),H(w),H(E),H(M)}}}function fe(e){for(var t,a,n,o,s,i,m,b,k,x,y,w,E,M,S,T,C,A,R,O,L,j,W,z=e.borders&&de(),Y=new V({props:{width:3,height:5,data:e.back}}),B=new V({props:{data:e.name,width:5,height:1}}),F=new V({props:{width:5,height:5,data:e.image}}),K=e.lines,q=[],G=0;G<K.length;G+=1)q[G]=le(ce(e,K,G));const J=e=>U(q[e],1,1,()=>{q[e]=null});return{c(){t=f("div"),a=f("div"),z&&z.c(),n=g(),o=f("div"),Y.$$.fragment.c(),s=g(),i=f("div"),m=f("div"),b=f("div"),B.$$.fragment.c(),k=g(),x=f("div"),y=g(),w=f("div"),E=u(e.cost),M=g(),S=f("div"),F.$$.fragment.c(),T=g(),C=f("div");for(var r=0;r<q.length;r+=1)q[r].c();A=g(),R=f("div"),O=g(),(L=f("div")).textContent="E A R T H R O C K",p(o,"class","back svelte-4sybem"),v(o,"filter","sepia(1) hue-rotate("+e.color+"deg)"),p(b,"class","title svelte-4sybem"),p(x,"class","flex svelte-4sybem"),p(w,"class","cost svelte-4sybem"),p(m,"class","header svelte-4sybem"),p(S,"class","image svelte-4sybem"),p(R,"class","flex svelte-4sybem"),p(C,"class","details svelte-4sybem"),p(L,"class","earthrock svelte-4sybem"),p(i,"class","front svelte-4sybem"),p(a,"class","contents svelte-4sybem"),_(a,"flip",e.flip),p(t,"style",e.style),p(t,"class","card svelte-4sybem"),_(t,"fade",e.fade),_(t,"dragging",e.dragging),W=[h(o,"click",e.beginInteract),h(i,"mousedown",e.beginInteract),h(t,"mouseenter",e.delay_hover.on),h(t,"mouseleave",e.delay_hover.off)]},m(e,r){d(e,t,r),c(t,a),z&&z.m(a,null),c(a,n),c(a,o),D(Y,o,null),c(a,s),c(a,i),c(i,m),c(m,b),D(B,b,null),c(m,k),c(m,x),c(m,y),c(m,w),c(w,E),c(i,M),c(i,S),D(F,S,null),c(i,T),c(i,C);for(var l=0;l<q.length;l+=1)q[l].m(C,null);c(C,A),c(C,R),c(i,O),c(i,L),j=!0},p(e,r){r.borders?z||((z=de()).c(),z.m(a,n)):z&&(z.d(1),z=null);var s={};e.back&&(s.data=r.back),Y.$set(s),j&&!e.color||v(o,"filter","sepia(1) hue-rotate("+r.color+"deg)");var i={};e.name&&(i.data=r.name),B.$set(i),j&&!e.cost||$(E,r.cost);var c={};if(e.image&&(c.data=r.image),F.$set(c),e.vitals||e.lines){K=r.lines;for(var d=0;d<K.length;d+=1){const t=ce(r,K,d);q[d]?(q[d].p(e,t),P(q[d],1)):(q[d]=le(t),q[d].c(),P(q[d],1),q[d].m(C,A))}for(I(),d=K.length;d<q.length;d+=1)J(d);N()}e.flip&&_(a,"flip",r.flip),j&&!e.style||p(t,"style",r.style),e.fade&&_(t,"fade",r.fade),e.dragging&&_(t,"dragging",r.dragging)},i(e){if(!j){P(Y.$$.fragment,e),P(B.$$.fragment,e),P(F.$$.fragment,e);for(var t=0;t<K.length;t+=1)P(q[t]);j=!0}},o(e){U(Y.$$.fragment,e),U(B.$$.fragment,e),U(F.$$.fragment,e),q=q.filter(Boolean);for(let e=0;e<q.length;e+=1)U(q[e]);j=!1},d(e){e&&l(t),z&&z.d(),H(Y),H(B),H(F),function(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}(q,e),r(W)}}}ie.when("STATE",e=>Object.entries(e).forEach(([e,t])=>ie.state[e].set(t)));const ue=.5;function ge(e,t,a){let n;const r=y();let{deck:o="",id:s="foobar",cost:c=0,name:d="16 55 33 44 55",image:l="",effect1:f="",effect2:u="",effect3:g="",back:m="",borders:h=!0,vitals:p=[1,1],invert:$=!1,interact:v=!0,drag:_=!1,position:b=[0,0],position_raw:k=!1,rotation:w=0,scale:E=1,color:M=90,card:S={},young:T=!0,fade:C=!1}=t;const A=[f,u,g],R=ae([0,0]);i(e,R,e=>{a("$mouse_pos",n=e)});const O=[0,0];window.addEventListener("mousemove",e=>{O[0]=e.clientX,O[1]=e.clientY,O[0]===n[0]&&O[1]===n[1]||R.set([...O])});let L=!0;x(()=>{setTimeout(()=>{a("young",T=!1),a("flip",L=!v)},250)});let j=!1;const I=(({time:e=250,on:t=(()=>{}),off:a=(()=>{})})=>{let n;return{on:()=>{v&&(n&&clearTimeout(n),t())},off:()=>{v&&(n&&clearTimeout(n),n=setTimeout(()=>{n=0,a()},e))}}})({time:100,on:()=>{a("hover",W=!0)},off:()=>{const e=W=!1;return a("hover",W),e}});let N,P,U,W=!1;return e.$set=(e=>{"deck"in e&&a("deck",o=e.deck),"id"in e&&a("id",s=e.id),"cost"in e&&a("cost",c=e.cost),"name"in e&&a("name",d=e.name),"image"in e&&a("image",l=e.image),"effect1"in e&&a("effect1",f=e.effect1),"effect2"in e&&a("effect2",u=e.effect2),"effect3"in e&&a("effect3",g=e.effect3),"back"in e&&a("back",m=e.back),"borders"in e&&a("borders",h=e.borders),"vitals"in e&&a("vitals",p=e.vitals),"invert"in e&&a("invert",$=e.invert),"interact"in e&&a("interact",v=e.interact),"drag"in e&&a("drag",_=e.drag),"position"in e&&a("position",b=e.position),"position_raw"in e&&a("position_raw",k=e.position_raw),"rotation"in e&&a("rotation",w=e.rotation),"scale"in e&&a("scale",E=e.scale),"color"in e&&a("color",M=e.color),"card"in e&&a("card",S=e.card),"young"in e&&a("young",T=e.young),"fade"in e&&a("fade",C=e.fade)}),e.$$.update=((e={hover:1,scale:1,rotation:1,dragging:1,$mouse_pos:1,position_raw:1,tru_rotation:1,tru_scale:1,position:1,invert:1})=>{(e.hover||e.scale)&&a("tru_scale",N=W?1.168*E:E),(e.hover||e.rotation)&&a("tru_rotation",P=W?0:w),(e.dragging||e.$mouse_pos||e.position_raw||e.tru_rotation||e.tru_scale||e.position||e.hover||e.invert)&&a("style",U=j?`transform: translate(${n[0]-window.innerWidth/2-250}px, ${n[1]-window.innerHeight/2-400}px) rotate(0deg) scale(${ue});z-index: 100`:k?`transform: translate(${k[0]-window.innerWidth/2-250}px, ${k[1]-window.innerHeight/2-400}px) rotate(${P}deg) scale(${N}) ; z-index: ${Math.round(100*N)}`:`transform: translate(${-50+b[0]}%, ${-50+b[1]+(W?$?5:-5:0)}%) rotate(${P}deg) scale(${N}) ; z-index: ${Math.round(100*N)}`)}),{deck:o,id:s,cost:c,name:d,image:l,effect1:f,effect2:u,effect3:g,back:m,borders:h,vitals:p,invert:$,interact:v,drag:_,position:b,position_raw:k,rotation:w,scale:E,color:M,card:S,young:T,fade:C,lines:A,mouse_pos:R,flip:L,dragging:j,beginInteract:()=>{if(r("click",S),_){a("dragging",j=!0);const e=window.addEventListener("mouseup",()=>{r("dragend",S),a("dragging",j=!1),window.removeEventListener("mouseup",e)})}},delay_hover:I,style:U}}class me extends F{constructor(e){super(),B(this,e,ge,fe,s,["deck","id","cost","name","image","effect1","effect2","effect3","back","borders","vitals","invert","interact","drag","position","position_raw","rotation","scale","color","card","young","fade"])}}function he(e,t,a){const n=Object.create(e);return n.card=t[a],n.index=a,n}function pe(e){var a,n=[e.card,{scale:e.scale},{invert:e.invert},{interact:e.interact},{color:e.color},{card:e.card},{drag:e.drag},{fade:e.fade},{back:e.$back},{position:0!==e.rotation?[e.position[0],e.position[1]+e.tru_index(e.index)*e.tru_spread-e.tru_length/2*e.tru_spread]:[e.position[0]+e.tru_index(e.index)*e.tru_spread-e.tru_length/2*e.tru_spread,e.position[1]+(e.invert?-1:1)*e.Math.abs(e.tru_index(e.index)-e.tru_length/2)*e.spread_y]},{rotation:e.rotation+(e.tru_index(e.index)-e.tru_length/2)*e.tru_rotate*(e.invert?-1:1)+(e.invert?180:0)}];let r={};for(var o=0;o<n.length;o+=1)r=t(r,n[o]);var s=new me({props:r});return s.$on("dragend",e.dragend_handler),s.$on("click",e.click_handler),{c(){s.$$.fragment.c()},m(e,t){D(s,e,t),a=!0},p(e,t){var a=e.$cards||e.scale||e.invert||e.interact||e.color||e.drag||e.fade||e.$back||e.rotation||e.position||e.tru_index||e.tru_spread||e.tru_length||e.Math||e.spread_y||e.tru_rotate?z(n,[e.$cards&&t.card,e.scale&&{scale:t.scale},e.invert&&{invert:t.invert},e.interact&&{interact:t.interact},e.color&&{color:t.color},e.$cards&&{card:t.card},e.drag&&{drag:t.drag},e.fade&&{fade:t.fade},e.$back&&{back:t.$back},(e.rotation||e.position||e.tru_index||e.$cards||e.tru_spread||e.tru_length||e.invert||e.Math||e.spread_y)&&{position:0!==t.rotation?[t.position[0],t.position[1]+t.tru_index(t.index)*t.tru_spread-t.tru_length/2*t.tru_spread]:[t.position[0]+t.tru_index(t.index)*t.tru_spread-t.tru_length/2*t.tru_spread,t.position[1]+(t.invert?-1:1)*t.Math.abs(t.tru_index(t.index)-t.tru_length/2)*t.spread_y]},(e.rotation||e.tru_index||e.$cards||e.tru_length||e.tru_rotate||e.invert)&&{rotation:t.rotation+(t.tru_index(t.index)-t.tru_length/2)*t.tru_rotate*(t.invert?-1:1)+(t.invert?180:0)}]):{};s.$set(a)},i(e){a||(P(s.$$.fragment,e),a=!0)},o(e){U(s.$$.fragment,e),a=!1},d(e){H(s,e)}}}function $e(e,t){var a,n,r,o=t.tru_index(t.index)<t.max&&pe(t);return{key:e,first:null,c(){a=m(),o&&o.c(),n=m(),this.first=a},m(e,t){d(e,a,t),o&&o.m(e,t),d(e,n,t),r=!0},p(e,t){t.tru_index(t.index)<t.max?o?(o.p(e,t),P(o,1)):((o=pe(t)).c(),P(o,1),o.m(n.parentNode,n)):o&&(I(),U(o,1,1,()=>{o=null}),N())},i(e){r||(P(o),r=!0)},o(e){U(o),r=!1},d(e){e&&l(a),o&&o.d(e),e&&l(n)}}}function ve(e){var t,a,n=[],r=new Map,o=e.$cards;const s=e=>e.card.id;for(var i=0;i<o.length;i+=1){let t=he(e,o,i),a=s(t);r.set(a,n[i]=$e(a,t))}return{c(){for(i=0;i<n.length;i+=1)n[i].c();t=m()},m(e,r){for(i=0;i<n.length;i+=1)n[i].m(e,r);d(e,t,r),a=!0},p(e,a){const o=a.$cards;I(),n=function(e,t,a,n,r,o,s,i,c,d,l,f){let u=e.length,g=o.length,m=u;const h={};for(;m--;)h[e[m].key]=m;const p=[],$=new Map,v=new Map;for(m=g;m--;){const e=f(r,o,m),i=a(e);let c=s.get(i);c?n&&c.p(t,e):(c=d(i,e)).c(),$.set(i,p[m]=c),i in h&&v.set(i,Math.abs(m-h[i]))}const _=new Set,b=new Set;function k(e){P(e,1),e.m(i,l),s.set(e.key,e),l=e.first,g--}for(;u&&g;){const t=p[g-1],a=e[u-1],n=t.key,r=a.key;t===a?(l=t.first,u--,g--):$.has(r)?!s.has(n)||_.has(n)?k(t):b.has(r)?u--:v.get(n)>v.get(r)?(b.add(n),k(t)):(_.add(r),u--):(c(a,s),u--)}for(;u--;){const t=e[u];$.has(t.key)||c(t,s)}for(;g;)k(p[g-1]);return p}(n,e,s,1,a,o,r,t.parentNode,W,$e,t,he),N()},i(e){if(!a){for(var t=0;t<o.length;t+=1)P(n[t]);a=!0}},o(e){for(i=0;i<n.length;i+=1)U(n[i]);a=!1},d(e){for(i=0;i<n.length;i+=1)n[i].d(e);e&&l(t)}}}function _e(e,t,a){let n,r;const o=y();let{cards:s=ae([]),max:c=10,position:d=[0,0],invert:l=!1,fade:f=!1,drag:u=!1,reverse:g=!1,scale:m=1,spread:h=10,spread_y:p=2,interact:$=!0,rotate:v=5,rotation:_=0,color:b=90}=t;i(e,s,e=>{a("$cards",n=e)});let{back:k=ae("")}=t;i(e,k,e=>{a("$back",r=e)});let x,w,E,M;return e.$set=(e=>{"cards"in e&&a("cards",s=e.cards),"max"in e&&a("max",c=e.max),"position"in e&&a("position",d=e.position),"invert"in e&&a("invert",l=e.invert),"fade"in e&&a("fade",f=e.fade),"drag"in e&&a("drag",u=e.drag),"reverse"in e&&a("reverse",g=e.reverse),"scale"in e&&a("scale",m=e.scale),"spread"in e&&a("spread",h=e.spread),"spread_y"in e&&a("spread_y",p=e.spread_y),"interact"in e&&a("interact",$=e.interact),"rotate"in e&&a("rotate",v=e.rotate),"rotation"in e&&a("rotation",_=e.rotation),"color"in e&&a("color",b=e.color),"back"in e&&a("back",k=e.back)}),e.$$.update=((e={$cards:1,max:1,tru_length:1,spread:1,x_factor:1,rotate:1})=>{(e.$cards||e.max)&&a("tru_length",x=n.length>c?c:n.length),(e.tru_length||e.max)&&a("x_factor",w=Math.max(x/c,.5)),(e.spread||e.x_factor)&&a("tru_spread",E=h/w),(e.rotate||e.x_factor)&&a("tru_rotate",M=v/w)}),{dispatch:o,cards:s,max:c,position:d,invert:l,fade:f,drag:u,reverse:g,scale:m,spread:h,spread_y:p,interact:$,rotate:v,rotation:_,color:b,back:k,tru_index:e=>g?n.length-e:e,tru_length:x,$cards:n,Math:Math,tru_spread:E,tru_rotate:M,$back:r,dragend_handler:function({detail:e}){return o("dragend",e)},click_handler:function({detail:e}){return o("click",e)}}}class be extends F{constructor(e){super(),B(this,e,_e,ve,s,["cards","max","position","invert","fade","drag","reverse","scale","spread","spread_y","interact","rotate","rotation","color","back"])}}function ke(e){var a,n,r,o,s,i,c=new be({props:{cards:ie.state.home_hand,scale:xe,position:[0,40],back:ie.state.home_back,drag:!0}});c.$on("dragend",e.dragend_handler);var f=[e.deck,{cards:ie.state.home_deck},{position:[90,40]},{back:ie.state.home_back}];let u={};for(var m=0;m<f.length;m+=1)u=t(u,f[m]);var h=new be({props:u});h.$on("click",e.click_handler);var p=[e.discard,{cards:ie.state.home_discard},{position:[-110,50]},{back:ie.state.home_back}];let $={};for(m=0;m<p.length;m+=1)$=t($,p[m]);var v=new be({props:$}),_=new be({props:{cards:ie.state.away_hand,scale:xe,position:[0,-40],interact:!1,color:180,invert:!0,back:ie.state.away_back}}),b=[{invert:!0},e.deck,{cards:ie.state.away_deck},{color:180},{position:[90,-40]},{back:ie.state.away_back}];let k={};for(m=0;m<b.length;m+=1)k=t(k,b[m]);var x=new be({props:k}),y=[e.discard,{cards:ie.state.away_discard},{position:[-40,40]},{back:ie.state.away_back},{invert:!0}];let w={};for(m=0;m<y.length;m+=1)w=t(w,y[m]);var E=new be({props:w});return{c(){c.$$.fragment.c(),a=g(),h.$$.fragment.c(),n=g(),v.$$.fragment.c(),r=g(),_.$$.fragment.c(),o=g(),x.$$.fragment.c(),s=g(),E.$$.fragment.c()},m(e,t){D(c,e,t),d(e,a,t),D(h,e,t),d(e,n,t),D(v,e,t),d(e,r,t),D(_,e,t),d(e,o,t),D(x,e,t),d(e,s,t),D(E,e,t),i=!0},p(e,t){var a={};e.game&&(a.cards=ie.state.home_hand),e.scale&&(a.scale=xe),e.game&&(a.back=ie.state.home_back),c.$set(a);var n=e.deck||e.game?z(f,[e.deck&&t.deck,e.game&&{cards:ie.state.home_deck},{position:[90,40]},e.game&&{back:ie.state.home_back}]):{};h.$set(n);var r=e.discard||e.game?z(p,[e.discard&&t.discard,e.game&&{cards:ie.state.home_discard},{position:[-110,50]},e.game&&{back:ie.state.home_back}]):{};v.$set(r);var o={};e.game&&(o.cards=ie.state.away_hand),e.scale&&(o.scale=xe),e.game&&(o.back=ie.state.away_back),_.$set(o);var s=e.deck||e.game?z(b,[{invert:!0},e.deck&&t.deck,e.game&&{cards:ie.state.away_deck},{color:180},{position:[90,-40]},e.game&&{back:ie.state.away_back}]):{};x.$set(s);var i=e.discard||e.game?z(y,[e.discard&&t.discard,e.game&&{cards:ie.state.away_discard},{position:[-40,40]},e.game&&{back:ie.state.away_back},{invert:!0}]):{};E.$set(i)},i(e){i||(P(c.$$.fragment,e),P(h.$$.fragment,e),P(v.$$.fragment,e),P(_.$$.fragment,e),P(x.$$.fragment,e),P(E.$$.fragment,e),i=!0)},o(e){U(c.$$.fragment,e),U(h.$$.fragment,e),U(v.$$.fragment,e),U(_.$$.fragment,e),U(x.$$.fragment,e),U(E.$$.fragment,e),i=!1},d(e){H(c,e),e&&l(a),H(h,e),e&&l(n),H(v,e),e&&l(r),H(_,e),e&&l(o),H(x,e),e&&l(s),H(E,e)}}}const xe=.25;function ye(e){const t={scale:xe,spread:1,max:4,reverse:!0,interact:!1},a={scale:xe,spread:5,spread_y:0,rotate:0,rotation:90,fade:!0,drag:!0,max:7};return ie.server_fake(),{deck:t,discard:a,dragend_handler:function({detail:{id:e}}){ie.do_server({task:"PLAY",data:{id:e}})},click_handler:function(){ie.do_server({task:"DRAW"})}}}class we extends F{constructor(e){super(),B(this,e,ye,ke,s,[])}}function Ee(t){var a,n,r,o=t.playing?"🕪":"🕨";return{c(){a=f("div"),n=u(o),p(a,"class","sound svelte-niubn2"),r=h(a,"click",t.toggle)},m(e,t){d(e,a,t),c(a,n)},p(e,t){e.playing&&o!==(o=t.playing?"🕪":"🕨")&&$(n,o)},i:e,o:e,d(e){e&&l(a),r()}}}function Me(e,t,a){const n=new Audio("/music/earthrock-final-theme.mp3");n.loop=!0,n.volume=.5;let r=!1;return{playing:r,toggle:()=>{r?n.pause():n.play(),a("playing",r=!r)}}}class Se extends F{constructor(e){super(),B(this,e,Me,Ee,s,[])}}function Te(t){var a,n,r,o=new te({}),s=new Se({}),i=new we({});return{c(){o.$$.fragment.c(),a=g(),s.$$.fragment.c(),n=g(),i.$$.fragment.c()},m(e,t){D(o,e,t),d(e,a,t),D(s,e,t),d(e,n,t),D(i,e,t),r=!0},p:e,i(e){r||(P(o.$$.fragment,e),P(s.$$.fragment,e),P(i.$$.fragment,e),r=!0)},o(e){U(o.$$.fragment,e),U(s.$$.fragment,e),U(i.$$.fragment,e),r=!1},d(e){H(o,e),e&&l(a),H(s,e),e&&l(n),H(i,e)}}}return new class extends F{constructor(e){super(),B(this,e,null,Te,s,[])}}({target:document.body,props:{name:"stage"}})}();
