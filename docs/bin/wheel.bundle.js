var app=function(e,t,s,r,a,i,n,o){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,s=s&&s.hasOwnProperty("default")?s.default:s,r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a,i=i&&i.hasOwnProperty("default")?i.default:i,n=n&&n.hasOwnProperty("default")?n.default:n;const c=(e,t=!1)=>t?{__proto__:e,...t}:t=>c(e,t),l=e=>t=>Object.fromEntries(Object.entries(e).reduce((e,[s,r])=>{const a=t([s,r]);return a&&e.push(a),e},[])),h=e=>t=>Object.entries(e).forEach(t),u=e=>(t,s)=>Object.entries(e).reduce(t,s),d=Object.keys,p=Object.values,v=e=>u(e.get())((e,[t,s])=>"&"===t[0]?e:(e[t]=s.toJSON(),e),{}),g={toJSON(){switch(typeof this.value){case"undefined":case"number":case"string":return this.value;case"object":if(Array.isArray(this.value)||null===this.value)return this.value;if(this.value.toJSON)return this.value.toJSON()}return JSON.parse(JSON.stringify(this.value))}},f=new Set,m=()=>{requestAnimationFrame(m),f.clear()};m();const w=c(g,{get(){return this.value},notify(){if(this.subs){if(f.has(this))return requestAnimationFrame(()=>{f.has(this)||this.notify()});f.add(this),this.subs.forEach(e=>e(this.value))}},subscribe(e,t=!1){return this.subs||(this.subs=new Set),this.subs.add(e),t||e(this.value),()=>this.subs.delete(e)},listen(e){return this.subscribe(e)}}),y=(e,t)=>{const s=c(w,(e=>c(g,{value:e}))(e));return t&&t(e=>{s.value=e,s.notify(e)}),s},b=c(w,{set(e,t=!1){this.value=void 0===e?null:e,t||this.notify()},update(e){this.set(e(this.value))}}),_=e=>c(b,y(e)),z=c(b,{get(e=!1){const t=b.get.call(this);return!1===e?t:t[e]},set(e,t=!1){this.value=e;const{previous:s}=this,r=[];t||this.notify({add:d(e).filter(t=>{const a=void 0===s[t];return a||s[t]===e[t]||r.push(t),a}),remove:d(s).filter(t=>void 0===e[t]),modify:r,previous:s}),this.previous={__proto__:e.__proto__,...e}},subscribe(e){return e(this.value,{add:d(this.value),remove:[],modify:[],previous:this.value}),b.subscribe.call(this,e,!0)},notify(e){this.subs&&e&&this.subs.forEach(t=>t(this.value,e))}}),O=(e={})=>c(z,{..._(e),previous:{...e}}),E=c(z,{has(e){return void 0!==this.get(e)},get(e=!1){const t=z.get.call(this);return!1===e?t:t[e]},set(e,t=!1){const s={__proto__:e.__proto__,...l(e)(([e,t])=>[e,this.convert(t)])};z.set.call(this,s,t)},convert(e){return e&&"function"==typeof e.subscribe?e:this.fn?_(this.fn(e)):_(e)},add(e,t){return this.set(Object.assign(this.get(),e),t),this},write(e,t){const s={};h(e)(([e,t])=>{const r=this.get()[e];r?r.set(t):s[e]="object"==typeof t&&null!==t&&t.get?t:_(t)}),Object.keys(s).length>0&&this.add(s,t)},remove(e){const t=this.get();delete t[e],z.set.call(this,t)},toJSON(){return v(this)}}),$=(e={},t=!1)=>{const s=c(E,{...O({}),fn:t});return s.set(e),s},j=c(b,{set(e){return b.set.call(this,this.transform(e)),this}}),S=e=>c(j,{..._(),transform:e}),A=_(100),x=(y("/sheets/default_2.png"),y("localhost:5000"===window.location.host),_(!0),_({delay:100,duration:300}),_(!0),_(!1),_(10),_(.01),_(.1),y(1024)),M=y(32),N=(_("rgb(224, 168, 83)"),_("#033")),k=(_("green"),_("#023d55"),_("/sys"),y("",e=>N.listen(s=>e(t(s).darkenByRatio(.5).toCSS())))),F=(y("",e=>{let t="";k.listen(s=>{t=s,e([`border: 0.2rem solid ${t};`].join(""))})}),["groovy","cat","bird","dog","poop","cool","not","okay","great","terrible","wat","goblin","life","ferret","gregert","robert","zilla","red","shirt","pants","blue","luna","ember","embear","lunatic","boring","killa","notice","thank","tank","under","near","near","quaint","potato","egg","bacon","narwhal","lamp","stairs","king","tyrant","grave","dire","happy","amazing","terrific","terrible","good","boring","rip","hello","world","global","universal","television","computer"]),J=e=>Array.from(new Array(e)).map(()=>F[Math.floor(Math.random()*F.length)]).join(" "),R={get_space(){const e=this.id.get();let t;const s=e=>{if(-1!==e.indexOf("/"))return t=e.split("/")[0],!0};return this.weave.chain(e).some(s),void 0===t&&this.weave.chain(e,!0).some(s),this.weave.get_id(t)},listen(e){return this.value.listen(e)},get(){return this.value.get()},set(e){return this.value.set(e)},toJSON(){return{type:this.type.get(),value:this.value.toJSON()}}};var q=c({cancel(){const e=[...this.birds];requestAnimationFrame(()=>{this.weave.remove(...e)})},rez(){const{value:e,space:t,weave:r}=this;this.birds=[],t.get("count")||t.write({count:1},!0);let a="",i=0;this.value_cancel=((...e)=>t=>{const s=e.map(e=>e.get()),r=e.map((e,r)=>e.listen((e,a)=>{s[r]=e,t(...s)}));return()=>r.forEach(e=>e())})(e,t.get("count"))((e,n)=>{if(a===e&&n===i)return;a=e,i=n,this.cancel();const o=Object.fromEntries([...Array(n)].map((r,a)=>[`&${s()}`,{type:"space",value:{"!clone":e,"!leader":`~/${t.value.get("!name").get()}`,"!bird":a}}]));requestAnimationFrame(()=>{this.birds=Object.values(r.write_ids(o)).map(e=>e.id.get()),this.weave.rez(...this.birds)})})},derez(){this.value_cancel(),this.cancel()}});const W={stream:e=>JSON.stringify(e.value.get()),math:e=>e.math.get().trim(),mail:e=>e.whom.get().trim(),default:e=>e.warp.get(),space:e=>`./${e.value.get("!name")}`,sprite:e=>`@${e.value.get()}`,color:e=>`#${e.value.get()}`},L={color:e=>"#"===e[0],sprite:e=>"@"===e[0],mail:e=>{const t=e.match(Wheel.REG_ID);return!(!t||1!==t.length)&&t[0]===e},stream:e=>{try{return JSON.parse(e),!0}catch(e){return!1}}},T={math:e=>({type:"math",math:e}),mail:e=>({type:"mail",whom:e}),stream:e=>({type:"stream",value:JSON.parse(e)}),color:e=>({type:"color",value:e.slice(1)}),sprite:e=>{let t=parseInt(e.slice(1));return isNaN(t)&&(t=66),{type:"sprite",value:t}}},I=e=>{const t=(e=>{const t=Object.entries(L);for(let s=0;s<t.length;s++){const[r,a]=t[s];if(a(e))return r}return"math"})(e);return T[t](e)},D=(e,t,s)=>s?e.chain(t,!0).slice(1):e.chain(t).slice(0,-1),P=({address:e,weave:t,right:s=!1})=>{const r=D(t,e,s).map(e=>U(e,t));return s?r.reverse().join(" => "):r.join(" => ")},U=(e,t)=>{if("{"===e[0])return e;const s=t.warps.get()[e];if(!s)return"space";const r=s.type.get();return W[r]?W[r](s):r},B=({code:e,weave:t,address:r,prefix:a="",right:i=!1})=>{let n=e.replace(/[\r\n]/g,"").split("=>");i||(n=n.reverse());const o=t.wefts.get();t.remove(...D(t,r,i));const c=t.get_id(r.split("/")[0]);let l=r;const h=n.map(e=>{if(""===(e=e.trim()))return;const r=I(e);r.id=`${a}${s()}`;const n=t.add(r).id.get();return i?o[l]=n:o[n]=l,l=n,n});return c.rezed&&t.rez(...h),t.wefts.set(o),h};var C=c({grab_script(e,t,s){const r=e.weave,a=`${e.id.get()}/${t}`;if(0===r.chain(a,s).slice(0,-1).length)return;const{weave:i,id:n,space:o}=this,c=P({address:a,weave:r}),l=`${n}/${t}`,h=r.get_id(e.id.get()).value.get(t).get();o.value.has(t)||o.value.write({[t]:h}),requestAnimationFrame(()=>{this.scripts.push(...B({code:c,weave:i,address:l,right:s,prefix:"&"}))})},rez(){const{space:e,weave:t,value:s,id:r}=this;this.scripts=this.scripts||[],this.cancel=s.listen(s=>{this.weave.remove(...this.scripts);const a=Wheel.get(t.resolve(s,r));a||console.warn("Invalid other for clone");const i=a?a.value.get():{};d(i).forEach(e=>{this.grab_script(a,e),this.grab_script(a,e,!0)}),e.set({...e.get(),__proto__:i},!0)})},derez(){this.cancel(),this.space.set({...this.space.get()},!0),this.weave.remove(...this.scripts)}}),G=c({rez(){this.cancel=this.value.listen(e=>{const t=this.space.id.get(),s=Wheel.get(this.weave.resolve(e,t));if(!s)return void console.warn("leader not found");const r=s.value.get();if(!r["!birds"])return r["!birds"]=_(new Set([t])),void s.value.set(r);let a=r["!birds"].get();a.add||Array.isArray(a)||(a=new Set),Array.isArray(a)&&(a=new Set(a)),a.has(t)||(a.add(t),r["!birds"].set([...a]))})},derez(){const e=this.space.id.get();this.cancel();const t=Wheel.get(this.weave.resolve(this.value.get(),e));if(!t)return void console.warn("no leader");const s=t.value.get();if(!s)return void console.warn("no leader value");let r=s["!birds"].get();r.add||Array.isArray(r)||(r=new Set),Array.isArray(r)&&(r=new Set(r)),r.delete(e),s["!birds"].set([...r])}}),H=c({create(){this.cancel=this.value.listen(e=>{const t=this.weave.names.get();if(this.name_last){if(this.name_last===e)return;delete t[this.name_last]}t[e]=this.space,this.name_last=e,this.weave.names.set(t)})},destroy(){this.cancel(),this.weave.names.update(e=>(delete e[this.name_last],e))}}),X=c({create(){requestAnimationFrame(()=>{this.value.set([])})}});let Y;const Z=y(0,e=>{Y=e});let K=Date.now();y([0,0],e=>{let t;const s=[0,0],r=a=>{requestAnimationFrame(r),void 0===t&&(t=a),s[0]=a,s[1]=Math.round(a-t),t=a;const i=Date.now();i-K>=A.get()&&(K=i,Y(Z.get()+1)),e(s)};requestAnimationFrame(r)});const Q=new Worker("/bin/physics.bundle.js"),V=_({}),ee=()=>requestAnimationFrame(()=>{const e=l(V.get())(([e,t])=>{const s=t.get();return[e,{id:e,position:se(s.position,[0,0,0]),"!velocity":s["!velocity"]&&Array.isArray(s["!velocity"].get())?s["!velocity"].get().map(e=>null===e?0:e):[0,0,0],scale:se(s.scale,1),"!real":se(s["!real"],!1),"!name":se(s["!name"],`id-${e}`),mass:se(s.mass,1),"!force":se(s["!force"],void 0)}]});Q.postMessage({type:"solve",data:e})});let te=()=>{ee()};Q.onmessage=({data:e})=>{te=()=>{const t=V.get();h(e.bodies)(([e,s])=>{const r=t[e];r&&r.write(s)}),ee()}};const se=(e,t)=>e?e.get():t;Z.listen(()=>{te()});var re=c({rez(){((...e)=>{const t=V.get();e.forEach(e=>{t[e.id.get()]=e.value}),V.set(t,!0)})(this.space)},derez(){((...e)=>{const t=V.get();e.forEach(e=>{delete t[e.id.get()]}),V.set(t,!0)})(this.space)}}),ae=c({create(){this.value.set(void 0,!0),this.cancel=this.value.listen(()=>{})}});const ie={value:{},get:()=>ie.value,add:[],update:{},remove:[],hey(){const{add:e,update:t,remove:s}=ie;return ie.add=[],ie.update={},ie.remove=[],{add:e,update:t,remove:s}}};var ne=c({rez(){const e=this.space.id.get();ie.value[e]=this.space,ie.add.push(e),this.cancel=(e=>{const t={},s=e.id.get(),r=e.value.listen((e,{add:r,remove:a})=>{r.forEach(r=>{t[r]=e[r].listen(e=>{ie.update[s]||(ie.update[s]={}),ie.update[s][r]=e})}),a.forEach(e=>{ie.update[s]&&void 0!==ie.update[s][e]&&delete ie.update[s][e],t[e](),delete t[e]})});return()=>{r(),p(t).forEach(e=>e())}})(this.space)},derez(){this.cancel();const e=this.space.id.get();delete ie.value[e],ie.remove.push(e)}}),oe=c({play(){this.clip=r.clip({synth:"PolySynth",pattern:"[xx][xR]".repeat(4),notes:r.arp({chords:"Dm BbM Am FM BbM FM CM Gm",count:8,order:1022}),accent:"x-xx--xx"}),this.clip.start(),a.Transport.start()},stop(){this.clip&&this.clip.stop()},rez(){let e=!1;this.cancel=this.value.listen(t=>{e?(this.stop(),this.play()):e=!0})},derez(){this.cancel()}}),ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e,t){e(t={exports:{}},t.exports)}((function(e,t){!function(){function t(e,t,s){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i(r.response,t,s)},r.onerror=function(){console.error("could not download file")},r.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof ce&&ce.global===ce?ce:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(e,i,n){var o=a.URL||a.webkitURL,c=document.createElement("a");i=i||e.name||"download",c.download=i,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):s(c.href)?t(e,i,n):r(c,c.target="_blank")):(c.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),a);else if(s(e))t(e,a,i);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout((function(){r(n)}))}}:function(e,s,r,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return t(e,s,r);var n="application/octet-stream"===e.type,o=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||n&&o)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},l.readAsDataURL(e)}else{var h=a.URL||a.webkitURL,u=h.createObjectURL(e);i?i.location=u:location.href=u,i=null,setTimeout((function(){h.revokeObjectURL(u)}),4e4)}});a.saveAs=i.saveAs=i,e.exports=i}()}));const le=M.get(),he=x.get(),ue=new Promise(e=>{const t=new Image;t.src="/sheets/default_2.png",t.onload=()=>{const s=document.createElement("canvas");s.width=t.width,s.height=t.height;const r=s.getContext("2d");r.drawImage(t,0,0),e({ctx:r,canvas:s})}}),de=new Map,pe=(e,t)=>Math.floor(Math.random()*(Math.abs(e)+Math.abs(t))-Math.abs(e));_(!1),ve={width:4,height:4,data:["18 19 19 20","50 0 0 52","50 0 0 52","82 83 83 84"].join(" ")},new Promise(async e=>{const t=new Image;t.src=await(async({width:e,height:t,data:s,random:r=!1})=>{const{canvas:a}=await ue,i=`${e}:${t}:${s}`;if(!r&&de.has(i))return de.get(i);const n=document.createElement("canvas"),o=n.getContext("2d");if(n.width=16*e,n.height=16*t,r){let s,r,i,n;for(let c=0;c<e;c++)for(let e=0;e<t;e++)s=16*c,r=16*e,i=16*pe(0,le),n=16*pe(0,he/le),o.drawImage(a,i,n,16,16,s,r,16,16)}else if(s.length>0){let t,r;s.split(" ").forEach((s,i)=>{t=i%e,r=Math.floor(i/e);const n=parseInt(s,10),c=n%le,l=Math.floor(n/le),h=16*t,u=16*r,d=16*c,p=16*l;o.drawImage(a,d,p,16,16,h,u,16,16)})}const c=n.toDataURL("image/png");return r||de.set(i,c),c})(ve),t.onload=()=>e(t)});var ve;const ge=async(e,{autorun:t=!1}=!1)=>{const s=`https://raw.githubusercontent.com/${e[0]}/${e[1]}/master/${e[2]}.jpg`,r=new FileReader,a=await fetch(s).then(e=>e.blob());return r.readAsDataURL(a),new Promise((s,a)=>{r.addEventListener("load",()=>{const n=(e=>{try{const t=i.load(e);return JSON.parse(t["0th"][i.ImageIFD.Make])}catch(e){return!1}})(r.result);if(!n)return a(new Error(404));Wheel.spawn({[n.name]:n}),Wheel.get(n.name).write({"!info":{type:"space",value:{from:e.join("/"),url:`https://github.com/${e[0]}/${e[1]}/blob/master/${e[2]}.jpg`}}}),t&&Wheel.start(n.name),s(n.name)})})};var fe=c({create(){requestAnimationFrame(()=>{this.cancel=this.value.listen(e=>{(e=Array.isArray(e)?e:[e]).forEach(e=>{if("string"!=typeof e)return;const t=e.split("/");Wheel.get(t[t.length-1])||ge(t)})})})},destroy(){this.cancel&&this.cancel()}}),me=Object.freeze({__proto__:null,flock:q,clone:C,leader:G,name:H,birds:X,velocity:re,real:re,collide:ae,visible:ne,force:re,sound:oe,need:fe});const we=y(""),ye=y("space"),be=c(R,{address(){return`${this.weave.name.get()}/${this.name().get()||this.id.get()}`},name(){return this.value.get("!name")||we},create(){const e=this.id.get();this.twists={},this.cancel=this.value.listen((t,{add:s,remove:r})=>{(e=>(...t)=>Object.assign(e,...t))(this.twists)(s.reduce((e,s)=>{const r=me[s.slice(1)];if(void 0===r)return e;const a=r({weave:this.weave,value:t[s],space:this,id:this.id.get()});return a.create&&a.create(),this.rezed&&a.rez&&requestAnimationFrame(()=>a.rez()),e[s]=a,e},{})),r.forEach(t=>{const s=this.twists[t];this.weave.remove(...this.weave.chain(`${e}/${t}`).slice(0,-1)),this.weave.remove(...this.weave.chain(`${e}/${t}`,!0).slice(0,-1)),s&&(this.rezed&&s.derez&&s.derez(),s.destroy&&s.destroy(),delete this.twists[t])})})},remove(...e){const t=this.value.get();e.forEach(e=>{delete t[e]}),this.value.set(t)},destroy(){this.cancel(),h(this.twists)(([e,t])=>{this.rezed&&t.derez&&t.derez(),t.destroy&&t.destroy()}),this.twists={}},rez(){this.rezed=!0,h(this.twists)(([e,t])=>{t.rez&&t.rez()})},derez(){this.rezed=!1,h(this.twists)(([e,t])=>{t.derez&&t.derez()})},chain(){const e=this.value.get(),t=this.id.get();return d(e).reduce((e,s)=>(e.push(...this.weave.chain(`${t}/${s}`).slice(0,-1),...this.weave.chain(`${t}/${s}`,!0).slice(1)),e),[])},get(e){return this.value.get(e)},gets(...e){return e.reduce((e,t)=>(e[t]=this.get(t),e),{})},get_value(e){const t=this.value.get(e);if(t)return t.get()},get_values(...e){return e.reduce((e,t)=>(e[t]=this.get_value(t),e),{})},write(e,t){return this.value.write(e,t)}});const _e=y("stream"),ze=c(b,{set(e){try{b.set.call(this,(e=>{if("string"!=typeof e)return e;if(-1===e.indexOf(".")&&-1===e.indexOf(",")){const t=parseInt(e);if("number"==typeof t&&!isNaN(t))return t}return JSON.parse(e)})(e))}catch(t){b.set.call(this,e)}return this}});const Oe=y("sprite");const Ee=e=>{const s=t(e);return void 0===s.red?16777215:s.red+255*s.green+255*s.blue},$e=y("color");o.v3.setDefaultType(Array);const je={},Se=new n.Parser({in:!0,assignment:!0});Object.entries(o.v3).forEach(([e,t])=>{Se.functions[`v3_${e}`]=function(...e){return t(...e)}}),Object.entries(o.m4).forEach(([e,t])=>{Se.functions[`m4_${e}`]=function(...e){return t(...e)}}),Se.functions.Color=t;const Ae=()=>{},xe=/[ .~%!&/^]/g,Me=/[.*+?^${}()|[\]\\]/g,Ne=/\.\//g,ke=/~\//g,Fe=/\$/g,Je=y("math"),Re=c(R,{run(e){const t=e.match(Wheel.REG_ID),s={},r=this.weave.chain(this.id.get(),!0).shift();let a=this.weave.to_address(r);if(!a)return;if("space"!==Wheel.get(a).type.get()){const e=this.weave.chain(this.id.get()).shift();a=this.weave.to_address(e)}new Set(t).forEach(t=>{const r="$"===t[0],i=t.replace(Ne,`${a}/`).replace(ke,`/${this.weave.name.get()}/`).replace(Fe,"").trim(),n=Wheel.get(i);if(!n)return;const o=t.replace(Ne,"dot").replace(ke,"weave").replace(xe,"z");e=e.replace(new RegExp((e=>e.replace(Me,"\\$&"))(t),"g"),o),s[o]={warp:n,shh:r}});try{this.fn=(e=>{let t=je[e];return t||(t=Se.parse(e),je[e]=t),e=>{try{t.evaluate(e)}catch(t){console.warn("Math script error",t),console.log(e)}return e.return}})(e),this.values.set(s)}catch(e){console.warn("Math parse error",e)}},rez(){requestAnimationFrame(()=>{this.run(this.math.get())}),this.cancels=new Set,this.cancel_vs=this.values.listen(e=>{this.cancels.forEach(e=>e()),this.cancels.clear(),Object.entries(e).forEach(([e,{warp:t,shh:s}])=>{s||this.cancels.add(t.listen(()=>{this.value.set(this.value.last)}))})})},derez(){this.cancel_vs(),this.cancels.forEach(e=>e())},toJSON(){return{type:this.type.get(),value:null,math:this.math.get()}}}),qe=c(b,{set(e,t){b.set.call(this,e,t),t||this.warp.run(e)}}),We=c(b,{set(e,t){this.last=e;const s=this.warp.values.get();e=void 0===e?null:e;const r={...Object.fromEntries(Object.entries(s).map(([e,{warp:t}])=>[e,void 0===t.toJSON()?null:t.toJSON()])),value:e};r.null=null,r.delay=!1;const a=this.warp.fn(r);if(null!=a)return r.delay?(requestAnimationFrame(()=>{b.set.call(this,a)}),this):(b.set.call(this,a,t),this)}});const Le=y("mail"),Te=c(R,{fix(e){const t=this.get_space();return e.replace("$","").replace("~",`/${this.weave.name.get()}`).replace(".",`${this.weave.name.get()}/${t?t.get_value("!name"):"not connected"}`)},clear(){this.cancels.forEach(e=>e()),this.cancels.clear()},derez(){this.cancel_whom(),this.clear()},rez(){this.cancels=new Set,this.cancel_whom=this.whom.listen(e=>{this.clear();const t=this.fix(e),s=Wheel.get(t);if("$"===e[0])return s?void this.set(s.get()):this.set(null);if(!s)return;const r=s.type?s.value:s;this.cancels.add(r.listen(e=>{this.set(e)}))})},toJSON(){return{type:this.type.get(),value:this.value.get(),whom:this.whom.get()}},set(e){b.set.call(this.value,e)}}),Ie=c(b,{set(e,t){const s=this.mail.fix(this.mail.whom.get()),r=Wheel.get(s);r&&r.set&&(r.set(e),b.set.call(this,e,t))}});var De=Object.freeze({__proto__:null,space:({id:e,value:t={},weave:s})=>c(be,{type:ye,value:$(t),id:y(e),weave:s}),stream:({id:e,value:t=null})=>c(R,{type:_e,value:c(ze,_()).set(t),id:y(e)}),sprite:({value:e=0,id:t})=>c(R,{type:Oe,value:_(e),id:y(t)}),color:({value:e="#FFFFFF",id:t})=>c(R,{type:$e,value:S(Ee).set(e),id:y(t)}),math:({math:e="2+2",value:t,weave:s,id:r}=!1)=>{const a=c(Re,{type:Je,values:_({}),id:y(r),weave:s,fn:Ae});return a.value=c(We,{..._(t),warp:a}),a.math=c(qe,{..._(e),warp:a}),requestAnimationFrame(()=>a.math.set(e,!0)),a},mail:({whom:e="/sys/mouse/position",weave:t,id:s})=>{const r=c(Te,{type:Le,whom:_(e),id:y(s),weave:t});return r.value=c(Ie,{..._(),mail:r}),r}});const Pe={is_rezed(){return void 0!==Wheel.running.get()[this.name.get()]},add(e){e.id=e.id||s();const t=this.make(e);if(t)return this.warps.update(e=>(e[t.id.get()]=t,e)),t.create&&t.create(),t},remove_unnamed(){const e=this.warps.get(),t=[];return Object.keys(e).forEach(e=>{"&"===e[0]&&t.push(e)}),this.remove(...t),t.length},remove_name(e){const t=this.get_name(e);if(!t)return;const s=t.id.get();return this.remove(s)},remove(...e){this.warps.update(t=>{let s;const r=this.rezed.get(),a=this.is_rezed(),i=this.wefts.get();let n=!1;return e.forEach(e=>{i[e]&&(n=!0,delete i[e]);const o=t[e];o&&(a&&r[e]&&(s=!0,delete r[e],o.derez&&o.derez()),o.destroy&&o.destroy(),delete t[e])}),s&&this.rezed.set(r,!0),n&&this.wefts.set(i),t})},write_ids(e){const t=this.warps.get();return l(e)(([e,s])=>{const r=t[e];if(!r){s.value=s.value||{},s.id=e;const t=this.add(s);return t?[e,t]:[e,!1]}return h(s)(([e,t])=>{const s=r[e];"value"!==e?s.set&&s.set(t):s.set(Object.assign(s.get(),t))}),[e,r]})},write(e){const t=this.names.get();return l(e)(([e,s])=>{const r=t[e];if(!r){s.value=s.value||{},s.value["!name"]=s.value["!name"]||e;const t=this.add(s);return t?[e,t]:[e,!1]}return h(s)(([e,t])=>{const s=r[e];"value"!==e?s.set&&s.set(t):s.set(Object.assign(s.get(),t))}),[e,r]})},exists(e){const[t,s]=e.split("/"),r=this.warps.get()[t];return!!r&&(void 0===s||void 0!==r.value.get()[s])},validate(){let e=!1;const t=this.wefts.get(),s=this.warps.get(),r=[];return h(s)(([e,t])=>{if("space"===t.type.get())return;const a=this.chain(t.id.get(),!0),i=a[a.length-1].split("/")[0],n=a[0].split("/")[0],o=s[i],c=s[n];o&&"space"===o.type.get()||c&&"space"===c.type.get()||r.push(t.id.get())}),r.length>0&&this.remove(...r),h(t)(([s,r])=>{this.exists(s)&&this.exists(r)||(e=!0,delete t[s])}),e?(this.wefts.set(t),r.length):r.length},chain(e,t=!1){const s=t?this.wefts.get()[e]:this.wefts_r.get()[e];return s?[...this.chain(s,t),e]:[e]},to_address(e){const[t]=e.split("/"),s=this.get_id(t);if(s)return`/${this.name.get()}/${s.id.get()}`},get_name(e){return this.names.get()[e]},get_id(e){if(!e)return;const[t,s]=e.split("/"),r=this.warps.get()[t];if(!s)return r;if(!r)return;const a=r.value.get();return a&&a[s]?{value:a[s]}:void 0},make(e){return(({id:e=s(),type:t,knot:r,...a}=!1)=>{return!t&&r&&(t=r),"stitch"===t&&(t="space",a.value=a.value||{},a.value["!name"]=a.name),De[t]?De[t]({...a,id:e}):(console.warn(`Invalid warp ${t}`),!1)})({...e,weave:this})},resolve(e,t){return e.replace(".",this.to_address(this.chain(t,!0).shift())).replace("~",this.name.get())},derez(...e){const t=this.rezed.get(),s=this.warps.get();e.forEach(e=>{const r=s[e];r&&"space"===r.type.get()&&this.derez(...s[e].chain()),delete t[e]}),this.rezed.set(t)},rez(...e){const t=this.rezed.get(),s=this.warps.get();e.forEach(e=>{const r=s[e];r&&("space"===r.type.get()&&this.rez(...r.chain()),t[e]=!0)}),this.rezed.set(t)},destroy(){this.destroys.forEach(e=>e())},toJSON(){return{id:this.id.toJSON(),name:this.name.toJSON(),wefts:this.wefts.toJSON(),warps:v(this.warps),rezed:this.rezed.toJSON()}}};var Ue=({name:e=J(2),id:t=s(),warps:r={},wefts:a={},rezed:i={},knots:n,threads:o}=!1)=>{n&&(r=n),o&&(a=o);const l=c(Pe,{id:y(t),name:_(e),wefts:O(a),rezed:O(i),names:_({}),destroys:[]}),d=u(r)((e,[t,s])=>{s.id!==t&&(s.id=t);const r=l.make(s);return r?(e[t]=r,e):e},{});return h(d)(([e,t])=>t.create&&t.create()),l.warps=_(d),l.wefts_r=y({},e=>{const t={};l.destroys.push(l.wefts.listen((s,{add:r,remove:a,modify:i,previous:n})=>{a.forEach(e=>{delete t[n[e]]}),r.forEach(e=>{t[s[e]]=e}),i.forEach(e=>{t[s[e]]=e}),e(t)}))}),l};const Be=_({sys:Ue({name:"sys",id:"sys"})}),Ce=new Map;let Ge;const He=y({sys:!0},e=>{Ge=e}),Xe=_(),Ye=_(""),Ze=e=>{const[t,s,r]=(e=>{let t=e.split("/");return""===t[0]&&(t=t.slice(1)),t})(e),a=Be.get()[t];if(void 0===a)return;if(void 0===s)return a;let i=a.names.get()[s];if(void 0===i&&(i=a.warps.get()[s],!i))return;if(void 0===r)return i;const n=i.value.get();if(!n)return;const o=n[r];return void 0!==o?o:void 0},Ke=e=>{if("sys"===e)return;const t=Ce.get(e);void 0!==t&&(t(),Ce.delete(e));const s=He.get();delete s[e],Ge(s)},Qe=()=>{const e=Be.get();d(e).forEach(e=>Ke(e))};return e.REG_ID=/\$?[~.]?\/[a-zA-Z 0-9!%&/]+/g,e.SYSTEM="sys",e.chain=D,e.clear=()=>{Qe(),Be.set({sys:Be.get().sys})},e.compile=B,e.condense=(e,t)=>{const s=U(e,t).split(";"),r=s.pop().trim();return s.length>0?`{${s.length}} ${r}`:r},e.decompile=P,e.del=e=>{const t=He.get(),s=Be.get();let r=!1;e.forEach(e=>{"sys"!==e&&(t[e]&&Ke(e),s[e]&&(r=!0,s[e].destroy(),Xe.set(s[e]),delete s[e]))}),r&&Be.set(s)},e.exists=e=>void 0!==Ze(e),e.format=e=>e=(e=(e=e.split(";")).map((t,s)=>(t=t.trim(),s!==e.length-1&&(t+=";"),s===e.length-2&&(t+="\r\n"),t)).join("\r\n")).split("=>").join("\r\n\r\n=>"),e.get=Ze,e.name=Ye,e.restart=e=>{Wheel.stop(e),Wheel.start(e)},e.running=He,e.shared={},e.spawn=(e={})=>l(e)(([e,t])=>{if("sys"===e)return console.warn("tried to spawn sys"),[e,Ze(e)];const s=Be.get(),r=Ue({...t,name:e});return s[e]=r,Be.set(s),[e,r]}),e.start=e=>{if("sys"===e)return;const t=Ze(e);if(!t)return!1;const s=(e=>{const t=e.rezed.listen((t,{add:s,remove:r})=>{const a=[],i=e.warps.get();s.forEach(e=>{const s=i[e];if(!s)return delete t[e],a.push(e);s.rezed=!0,s.rez&&s.rez(),s.value.notify()}),r.forEach(e=>{const s=i[e];if(!s)return delete t[e],a.push(e);delete s.rezed,s.derez&&s.derez()}),a.length>0&&e.rezed.set(t,!0)});return()=>{t(),p(e.rezed.get()).forEach(e=>e&&e.derez&&e.derez())}})(t),r=(e=>{const t={},s=e.wefts.listen((s,{add:r,remove:a,modify:i})=>{let n;[...r,...i].forEach(r=>{const a=s[r],i=e.get_id(r),o=e.get_id(a);if(!o||!i)return n=!0,void delete s[r];t[r]&&t[r]();const c=e.get_id(r.split("/")[0]);t[r]=i.value.subscribe(e=>{c.rezed&&o.value.set(e)})}),a.forEach(e=>{const s=t[e];s&&(s(),delete t[e])}),n&&e.wefts.set(s,!0)});return()=>{s(),p(t).forEach(e=>e())}})(t);Ce.set(e,()=>{r(),s()}),Ge({...He.get(),[e]:!0})},e.stop=Ke,e.stop_all=Qe,e.toJSON=()=>({name:Ye.get(),weaves:v(Be),running:He.toJSON()}),e.translate=U,e.trash=Xe,e.weaves=Be,e}({},Color,cuid,scribble,Tone,EXT.piexifjs,exprEval,twgl);
