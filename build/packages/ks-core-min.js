/*
Copyright 2010, KISSY UI Library v1.0.8
MIT Licensed
build: 846 Jul 11 00:10
*/
(function(b,p,l){if(b[p]===l)b[p]={};p=b[p];var n=b.document,q=function(r,o,i,f){if(!o||!r)return r;if(i===l)i=true;var t,c,e;if(f&&(e=f.length))for(t=0;t<e;t++){c=f[t];if(c in o)if(i||!(c in r))r[c]=o[c]}else for(c in o)if(i||!(c in r))r[c]=o[c];return r},s=false,j=[],m=false,u=0;q(p,{id:function(){return u++},version:"1.0.8",_init:function(){this.Env={mods:{}}},add:function(r,o){this.Env.mods[r]={name:r,fn:o};o(this);return this},ready:function(r){m||this._bindReady();s?r.call(b,this):j.push(r);
return this},_bindReady:function(){var r=this,o=n.documentElement.doScroll,i=o?"onreadystatechange":"DOMContentLoaded",f=function(){r._fireReady()};m=true;if(n.readyState==="complete")return f();if(n.addEventListener){var t=function(){n.removeEventListener(i,t,false);f()};n.addEventListener(i,t,false)}else{var c=function(){if(n.readyState==="complete"){n.detachEvent(i,c);f()}};n.attachEvent(i,c);b.attachEvent("onload",f);if(b==b.top){var e=function(){try{o("left");f()}catch(a){setTimeout(e,1)}};e()}}},
_fireReady:function(){if(!s){s=true;if(j){for(var r,o=0;r=j[o++];)r.call(b,this);j=null}}},mix:q,merge:function(){var r={},o,i=arguments.length;for(o=0;o<i;++o)q(r,arguments[o]);return r},augment:function(){var r=arguments,o=r.length-2,i=r[0],f=r[o],t=r[o+1],c=1;if(!p.isArray(t)){f=t;t=l;o++}if(!p.isBoolean(f)){f=l;o++}for(;c<o;c++)q(i.prototype,r[c].prototype||r[c],f,t);return i},extend:function(r,o,i,f){if(!o||!r)return r;var t=Object.prototype,c=o.prototype,e=function(a){function d(){}d.prototype=
a;return new d}(c);r.prototype=e;e.constructor=r;r.superclass=c;if(o!==Object&&c.constructor===t.constructor)c.constructor=o;i&&q(e,i);f&&q(r,f);return r},namespace:function(){var r=arguments.length,o=null,i,f,t;for(i=0;i<r;++i){t=(""+arguments[i]).split(".");o=this;for(f=b[t[0]]===o?1:0;f<t.length;++f)o=o[t[f]]=o[t[f]]||{}}return o},app:function(r,o){var i=b[r]||{};q(i,this,true,["_init","add","namespace"]);i._init();return q(b[r]=i,typeof o==="function"?o():o)},log:function(r,o,i){if(this.Config.debug){if(i)r=
i+": "+r;if(b.console!==l&&console.log)console[o&&console[o]?o:"log"](r)}return this},error:function(r){if(this.Config.debug)throw r;}});p._init();p.Config={debug:""}})(window,"KISSY");
KISSY.add("kissy-lang",function(b,p){function l(a){var d=typeof a;return a===null||d!=="object"&&d!=="function"}var n=window,q=document,s=location,j=Array.prototype,m=j.indexOf,u=j.filter,r=String.prototype.trim,o=Object.prototype.toString,i=encodeURIComponent,f=decodeURIComponent,t=/^\s+|\s+$/g,c=/^(\w+)\[\]$/,e=/\S/;b.mix(b,{isUndefined:function(a){return a===p},isBoolean:function(a){return typeof a==="boolean"},isString:function(a){return typeof a==="string"},isNumber:function(a){return typeof a===
"number"&&isFinite(a)},isPlainObject:function(a){return a&&o.call(a)==="[object Object]"&&!a.nodeType&&!a.setInterval},isEmptyObject:function(a){for(var d in a)return false;return true},isFunction:function(a){return o.call(a)==="[object Function]"},isArray:function(a){return o.call(a)==="[object Array]"},trim:r?function(a){return a==p?"":r.call(a)}:function(a){return a==p?"":a.toString().replace(t,"")},each:function(a,d,k){for(var g=a&&a.length||0,h=0;h<g;++h)d.call(k||n,a[h],h,a)},indexOf:m?function(a,
d){return m.call(d,a)}:function(a,d){for(var k=0,g=d.length;k<g;++k)if(d[k]===a)return k;return-1},inArray:function(a,d){return b.indexOf(a,d)>-1},makeArray:function(a){if(a===null||a===p)return[];if(b.isArray(a))return a;if(typeof a.length!=="number"||typeof a==="string"||b.isFunction(a))return[a];if(a.item&&b.UA.ie){for(var d=[],k=0,g=a.length;k<g;++k)d[k]=a[k];return d}return j.slice.call(a)},filter:u?function(a,d,k){return u.call(a,d,k)}:function(a,d,k){var g=[];b.each(a,function(h,v,w){d.call(k,
h,v,w)&&g.push(h)});return g},param:function(a){if(!b.isPlainObject(a))return"";var d=[],k,g;for(k in a){g=a[k];k=i(k);if(l(g))d.push(k,"=",i(g+""),"&");else if(b.isArray(g)&&g.length)for(var h=0,v=g.length;h<v;++h)l(g[h])&&d.push(k,"[]=",i(g[h]+""),"&")}d.pop();return d.join("")},unparam:function(a,d){if(typeof a!=="string"||(a=b.trim(a)).length===0)return{};var k={};a=a.split(d||"&");for(var g,h,v,w=0,x=a.length;w<x;++w){d=a[w].split("=");g=f(d[0]);try{h=f(d[1]||"")}catch(y){h=d[1]||""}if((v=g.match(c))&&
v[1]){k[v[1]]=k[v[1]]||[];k[v[1]].push(h)}else k[g]=h}return k},later:function(a,d,k,g,h){d=d||0;g=g||{};var v=a,w=b.makeArray(h),x;if(typeof a==="string")v=g[a];v||b.error("method undefined");a=function(){v.apply(g,w)};x=k?setInterval(a,d):setTimeout(a,d);return{id:x,interval:k,cancel:function(){this.interval?clearInterval(x):clearTimeout(x)}}},now:function(){return(new Date).getTime()},globalEval:function(a){if(a&&e.test(a)){var d=q.getElementsByTagName("head")[0]||q.documentElement,k=q.createElement("script");
k.text=a;d.insertBefore(k,d.firstChild);d.removeChild(k)}}});if(s&&s.search&&s.search.indexOf("ks-debug")!==-1)b.Config.debug=true});
KISSY.add("kissy-ua",function(b){var p=navigator.userAgent,l,n={webkit:0,chrome:0,safari:0,gecko:0,firefox:0,ie:0,opera:0,mobile:""},q=function(s){var j=0;return parseFloat(s.replace(/\./g,function(){return j++===0?".":""}))};if((l=p.match(/AppleWebKit\/([\d.]*)/))&&l[1]){n.webkit=q(l[1]);if((l=p.match(/Chrome\/([\d.]*)/))&&l[1])n.chrome=q(l[1]);else if((l=p.match(/\/([\d.]*) Safari/))&&l[1])n.safari=q(l[1]);if(/ Mobile\//.test(p))n.mobile="Apple";else if(l=p.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))n.mobile=
l[0]}else if((l=p.match(/Opera\/.* Version\/([\d.]*)/))&&l[1]){n.opera=q(l[1]);if(p.match(/Opera Mini[^;]*/))n.mobile=l[0]}else if((l=p.match(/MSIE\s([^;]*)/))&&l[1])n.ie=q(l[1]);else if(l=p.match(/Gecko/)){n.gecko=1;if((l=p.match(/rv:([\d.]*)/))&&l[1])n.gecko=q(l[1]);if((l=p.match(/Firefox\/([\d.]*)/))&&l[1])n.firefox=q(l[1])}b.UA=n});KISSY.add("dom",function(b){b.DOM={_isElementNode:function(p){return p&&p.nodeType===1}}});
KISSY.add("selector",function(b,p){function l(c,e){var a,d=[],k,g;e=n(e);if(b.isString(c)){c=b.trim(c);if(f.test(c)){if(c=q(c.slice(1)))d=[c]}else if(a=t.exec(c)){k=a[1];g=a[2];a=a[3];if(e=k?q(k):e)if(a)if(!k||c.indexOf(o)!==-1)d=j(a,g,e);else{if((c=q(k))&&r.hasClass(c,a))d=[c]}else if(g)d=s(e,g)}else if(b.ExternalSelector)return b.ExternalSelector(c,e);else m(c)}else if(c&&c.nodeType)d=[c];else if(c&&(b.isArray(c)||c.item||c.getDOMNode))d=c;if(d.item)d=b.makeArray(d);return d}function n(c){if(c===
p)c=u;else if(b.isString(c)&&f.test(c))c=q(c.slice(1));else if(c&&c.nodeType!==1&&c.nodeType!==9)c=null;return c}function q(c){return u.getElementById(c)}function s(c,e){return c.getElementsByTagName(e)}function j(c,e,a){a=c=a.getElementsByClassName(c);var d=0,k=0,g=c.length,h;if(e&&e!==i){a=[];for(e=e.toUpperCase();d<g;++d){h=c[d];if(h.tagName===e)a[k++]=h}}return a}function m(c){b.error("Unsupported selector: "+c)}var u=document,r=b.DOM,o=" ",i="*",f=/^#[\w-]+$/,t=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;
(function(){var c=u.createElement("div");c.appendChild(u.createComment(""));if(c.getElementsByTagName(i).length>0)s=function(e,a){e=e.getElementsByTagName(a);if(a===i){a=[];for(var d=0,k=0,g;g=e[d++];)if(g.nodeType===1)a[k++]=g;e=a}return e}})();u.getElementsByClassName||(j=u.querySelectorAll?function(c,e,a){return a.querySelectorAll((e?e:"")+"."+c)}:function(c,e,a){e=a.getElementsByTagName(e||i);a=[];var d=0,k=0,g=e.length,h,v;for(c=o+c+o;d<g;++d){h=e[d];if((v=h.className)&&(o+v+o).indexOf(c)>-1)a[k++]=
h}return a});b.query=l;b.get=function(c,e){return l(c,e)[0]||null};b.mix(r,{query:l,get:b.get,filter:function(c,e){var a=l(c),d,k,g,h=[];if(b.isString(e)&&(d=t.exec(e))&&!d[1]){k=d[2];g=d[3];e=function(v){return!(k&&v.tagName!==k.toUpperCase()||g&&!r.hasClass(v,g))}}if(b.isFunction(e))h=b.filter(a,e);else if(e&&b.ExternalSelector)h=b.ExternalSelector._filter(c,e);else m(e);return h},test:function(c,e){c=l(c);return r.filter(c,e).length===c.length}})});
KISSY.add("dom-class",function(b,p){function l(j,m,u,r){if(!(m=b.trim(m)))return r?false:p;j=b.query(j);var o=0,i=j.length;m=m.split(q);for(var f;o<i;o++){f=j[o];if(f.nodeType===1){f=u(f,m,m.length);if(f!==p)return f}}if(r)return false}var n=b.DOM,q=/[\.\s]\s*\.?/,s=/[\n\t]/g;b.mix(n,{hasClass:function(j,m){return l(j,m,function(u,r,o){if(u=u.className){u=" "+u+" ";for(var i=0,f=true;i<o;i++)if(u.indexOf(" "+r[i]+" ")<0){f=false;break}if(f)return true}},true)},addClass:function(j,m){l(j,m,function(u,
r,o){var i=u.className;if(i){var f=" "+i+" ";i=i;for(var t=0;t<o;t++)if(f.indexOf(" "+r[t]+" ")<0)i+=" "+r[t];u.className=b.trim(i)}else u.className=m})},removeClass:function(j,m){l(j,m,function(u,r,o){var i=u.className;if(i)if(o){i=(" "+i+" ").replace(s," ");for(var f=0,t;f<o;f++)for(t=" "+r[f]+" ";i.indexOf(t)>=0;)i=i.replace(t," ");u.className=b.trim(i)}else u.className=""})},replaceClass:function(j,m,u){n.removeClass(j,m);n.addClass(j,u)},toggleClass:function(j,m,u){var r=b.isBoolean(u),o;l(j,
m,function(i,f,t){for(var c=0,e;c<t;c++){e=f[c];o=r?!u:n.hasClass(i,e);n[o?"removeClass":"addClass"](i,e)}})}})});
KISSY.add("dom-attr",function(b,p){function l(c,e){return e&&e.nodeName.toUpperCase()===c.toUpperCase()}var n=b.UA,q=n.ie,s=q&&q<8,j=document.documentElement.textContent!==p?"textContent":"innerText",m=b.DOM,u=m._isElementNode,r=/href|src|style/,o=/href|src|colspan|rowspan/,i=/\r/g,f=/radio|checkbox/,t={readonly:"readOnly"};s&&b.mix(t,{"for":"htmlFor","class":"className"});b.mix(m,{attr:function(c,e,a){if(e=b.trim(e)){e=e.toLowerCase();e=t[e]||e;if(a===p){c=b.get(c);if(!u(c))return p;var d;r.test(e)||
(d=c[e]);if(d===p)d=c.getAttribute(e);if(s)if(o.test(e))d=c.getAttribute(e,2);else if(e==="style")d=c.style.cssText;return d===null?p:d}b.each(b.query(c),function(k){if(u(k))if(s&&e==="style")k.style.cssText=a;else k.setAttribute(e,""+a)})}},removeAttr:function(c,e){b.each(b.query(c),function(a){u(a)&&a.removeAttribute(e)})},val:function(c,e){if(e===p){var a=b.get(c);if(!u(a))return p;if(l("option",a))return(a.attributes.value||{}).specified?a.value:a.text;if(l("select",a)){var d=a.selectedIndex;
c=a.options;if(d<0)return null;else if(a.type==="select-one")return m.val(c[d]);a=[];for(var k=0,g=c.length;k<g;++k)c[k].selected&&a.push(m.val(c[k]));return a}if(n.webkit&&f.test(a.type))return a.getAttribute("value")===null?"on":a.value;return(a.value||"").replace(i,"")}b.each(b.query(c),function(h){if(l("select",h)){if(b.isNumber(e))e+="";var v=b.makeArray(e),w=h.options,x;k=0;for(g=w.length;k<g;++k){x=w[k];x.selected=b.inArray(m.val(x),v)}if(!v.length)h.selectedIndex=-1}else if(u(h))h.value=e})},
text:function(c,e){if(e===p){c=b.get(c);if(u(c))return c[j]||""}else b.each(b.query(c),function(a){if(u(a))a[j]=e})}})});
KISSY.add("dom-style",function(b,p){function l(i,f){var t=b.get(i),c=f===j?t.offsetWidth:t.offsetHeight;b.each(f===j?["Left","Right"]:["Top","Bottom"],function(e){c-=parseFloat(n._getComputedStyle(t,"padding"+e))||0;c-=parseFloat(n._getComputedStyle(t,"border"+e+"Width"))||0});return c}var n=b.DOM,q=document,s=q.documentElement,j="width",m=/width|height|top|left|right|bottom|margin|padding/i,u=/-([a-z])/ig,r=function(i,f){return f.toUpperCase()},o={};b.mix(n,{_CUSTOM_STYLES:o,_getComputedStyle:function(i,
f){var t="",c=i.ownerDocument;if(i.style)t=c.defaultView.getComputedStyle(i,null)[f];return t},css:function(i,f,t){if(b.isPlainObject(f))for(var c in f)n.css(i,c,f[c]);else{if(f.indexOf("-")>0)f=f.replace(u,r);f=o[f]||f;if(t===p){i=b.get(i);c="";if(i&&i.style){c=f.get?f.get(i):i.style[f];if(c===""&&!f.get)c=n._getComputedStyle(i,f)}return c===p?"":c}else{if(t===null||t==="")t="";else if(!isNaN(new Number(t))&&m.test(f))t+="px";(f===j||f==="height")&&parseFloat(t)<0||b.each(b.query(i),function(e){if(e&&
e.style)f.set?f.set(e,t):(e.style[f]=t)})}}},width:function(i,f){if(f===p)return l(i,j);else n.css(i,j,f)},height:function(i,f){if(f===p)return l(i,"height");else n.css(i,"height",f)},addStyleSheet:function(i,f){var t;if(f)t=b.get(f);t||(t=n.create("<style>",{id:f}));b.get("head").appendChild(t);if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(q.createTextNode(i))}});if(s.style.cssFloat!==p)o["float"]="cssFloat";else if(s.style.styleFloat!==p)o["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(b,p){if(b.UA.ie){var l=b.DOM,n=document,q=n.documentElement,s=l._CUSTOM_STYLES,j=/^-?\d+(?:px)?$/i,m=/^-?\d/,u=/^auto$/i,r=/^width|height$/;try{if(q.style.opacity===p&&q.filters)s.opacity={get:function(i){var f=100;try{f=i.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(t){try{f=i.filters("alpha").opacity}catch(c){}}return f/100+""},set:function(i,f){i=i.style;i.zoom=1;i.filter="alpha(opacity="+f*100+")"}}}catch(o){b.log("IE filters ActiveX is disabled. ex = "+
o)}if(!(n.defaultView||{}).getComputedStyle&&q.currentStyle)l._getComputedStyle=function(i,f){var t=i.style,c=i.currentStyle[f];if(r.test(f))c=l[f](i)+"px";else if(!j.test(c)&&m.test(c)||u.test(c)){i=t.left;t.left=f==="fontSize"?"1em":c||0;c=t.pixelLeft+"px";t.left=i}return c}}});
KISSY.add("dom-offset",function(b,p){function l(e){var a=0,d=0;if(e!==m.body&&e!==u&&e[c]){e=e[c]();a=e.left+q.scrollLeft();d=e.top+q.scrollTop()}return{left:a,top:d}}function n(e,a){var d=q.css(e,f);if(d==="static")d=e.style[f]=t;var k=l(e);d=d===t;var g=i(q.css(e,"left"),10),h=i(q.css(e,"top"),10);g=b.isNumber(g)?g:d?0:e.offsetLeft;h=b.isNumber(h)?h:d?0:e.offsetTop;q.css(e,{left:g+a.left-k.left,top:h+a.top-k.top})}var q=b.DOM,s=b.UA,j=window,m=document,u=m.documentElement,r=m.compatMode==="CSS1Compat",
o=Math.max,i=parseInt,f="position",t="relative",c="getBoundingClientRect";b.mix(q,{offset:function(e,a){if(!(e=b.get(e))||!e.ownerDocument)return null;if(a===p)return l(e);n(e,a)},scrollLeft:function(){return j.pageXOffset||u.scrollLeft||m.body.scrollLeft},scrollTop:function(){return j.pageYOffset||u.scrollTop||m.body.scrollTop},docHeight:function(){return o(!r?m.body.scrollHeight:u.scrollHeight,q.viewportHeight())},docWidth:function(){return o(!r?m.body.scrollWidth:u.scrollWidth,q.viewportWidth())},
viewportHeight:function(){return s.ie?r?u.clientHeight:m.body.clientHeight:j.innerHeight},viewportWidth:function(){return!r&&!s.opera?m.body.clientWidth:s.ie?u.clientWidth:j.innerWidth}})});
KISSY.add("dom-traversal",function(b,p){function l(j,m,u,r){if(!(j=b.get(j)))return null;if(m===p)m=1;var o=null,i,f;if(b.isNumber(m)&&m>=0){if(m===0)return j;i=0;f=m;m=function(){return++i===f}}for(;j=j[u];)if(s(j)&&(!m||q.test(j,m))&&(!r||r(j))){o=j;break}return o}function n(j,m,u){var r=[];var o=j=b.get(j);if(j&&u)o=j.parentNode;if(o){u=0;for(o=o.firstChild;o;o=o.nextSibling)if(s(o)&&o!==j&&(!m||q.test(o,m)))r[u++]=o}return r}var q=b.DOM,s=q._isElementNode;b.mix(q,{parent:function(j,m){return l(j,
m,"parentNode",function(u){return u.nodeType!=11})},next:function(j,m){return l(j,m,"nextSibling")},prev:function(j,m){return l(j,m,"previousSibling")},siblings:function(j,m){return n(j,m,true)},children:function(j,m){return n(j,m)},contains:function(j,m){var u=false;if((j=b.get(j))&&(m=b.get(m)))if(j.contains)return j.contains(m);else if(j.compareDocumentPosition)return!!(j.compareDocumentPosition(m)&16);else for(;!u&&(m=m.parentNode);)u=m==j;return u}})});
KISSY.add("dom-create",function(b,p){function l(g,h){var v=setInterval(function(){if(j.getElementById(g)){clearInterval(v);h&&h()}},100)}function n(g,h,v,w){if(typeof h=="undefined")h="";if(v!==true){g.innerHTML=h;w&&w()}else{var x="kissy_tmp_"+b.id();h+='<span id="'+x+'"></span>';l(x,function(){for(var y=document.getElementsByTagName("head")[0],z=/(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/ig,D=/\ssrc=([\'\"])(.*?)\1/i,E=/\stype=([\'\"])(.*?)\1/i,A;A=z.exec(h);){var B=A[1],C=B?B.match(D):false;
if(C&&C[2]){A=document.createElement("script");A.src=C[2];if((B=B.match(E))&&B[2])A.type=B[2];y.appendChild(A)}else A[2]&&A[2].length>0&&b.globalEval(A[2])}(y=document.getElementById(x))&&y.parentNode.removeChild(y);w&&w()});g.innerHTML=h.replace(/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,"")}}function q(g,h){if(o(g)&&h)for(var v in h)m.attr(g,v,h[v]);return g}function s(g,h){var v=null,w;if(g&&(g.push||g.item)&&g[0]){h=h||g[0].ownerDocument;v=h.createDocumentFragment();if(g.item)g=b.makeArray(g);
h=0;for(w=g.length;h<w;h++)v.appendChild(g[h])}else b.log("Unable to convert "+g+" to fragment.");return v}var j=document,m=b.DOM,u=b.UA,r=u.ie,o=m._isElementNode,i=j.createElement("div"),f=/<(\w+)/,t=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;b.mix(m,{create:function(g,h,v){if(o(g))return g;if(!(g=b.trim(g)))return null;var w=null;w=m._creators;var x,y="div",z;if(x=t.exec(g))w=(v||j).createElement(x[1]);else{if((x=f.exec(g))&&(z=x[1])&&b.isFunction(w[z=z.toLowerCase()]))y=z;g=w[y](g,v).childNodes;w=g.length===
1?g[0].parentNode.removeChild(g[0]):s(g,v||j)}return q(w,h)},_creators:{div:function(g,h){h=h?h.createElement("div"):i;h.innerHTML=g;return h}},html:function(g,h,v,w){if(h===p){g=b.get(g);if(o(g))return g.innerHTML}else b.each(b.query(g),function(x){o(x)&&n(x,h,v,w)})},remove:function(g){b.each(b.query(g),function(h){o(h)&&h.parentNode&&h.parentNode.removeChild(h)})}});var c=m._creators,e=m.create,a=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,d={option:"select",td:"tr",tr:"tbody",tbody:"table",
col:"colgroup",legend:"fieldset"};if(u.gecko||r){for(var k in d)(function(g){c[k]=function(h,v){return e("<"+g+">"+h+"</"+g+">",null,v)}})(d[k]);if(r){c.script=function(g,h){h=h?h.createElement("div"):i;h.innerHTML="-"+g;h.removeChild(h.firstChild);return h};if(r<8)c.tbody=function(g,h){h=e("<table>"+g+"</table>",null,h);var v=h.children.tags("tbody")[0];h.children.length>1&&v&&!a.test(g)&&v.parentNode.removeChild(v);return h}}b.mix(c,{optgroup:c.option,th:c.td,thead:c.tbody,tfoot:c.tbody,caption:c.tbody,
colgroup:c.tbody})}});KISSY.add("dom-insertion",function(b){var p=b.DOM;b.mix(p,{insertBefore:function(l,n){l=p.create(l);n=b.get(n);l&&n&&n.parentNode&&n.parentNode.insertBefore(l,n);return l},insertAfter:function(l,n){l=p.create(l);n=b.get(n);if(l&&n&&n.parentNode)n.nextSibling?n.parentNode.insertBefore(l,n.nextSibling):n.parentNode.appendChild(l);return l}})});
KISSY.add("event",function(b,p){function l(a,d,k,g,h){if(b.isString(d))d=b.query(d);if(b.isArray(d)){b.each(d,function(v){e[a](v,k,g,h)});return true}if((k=b.trim(k))&&k.indexOf(f)>0){b.each(k.split(f),function(v){e[a](d,v,g,h)});return true}}function n(a){return j(a)?-1:a[i]}function q(a,d){if(j(a))return b.error("Text or comment node is not valid event target.");try{a[i]=d}catch(k){b.error(k)}}function s(a){try{a[i]=p;delete a[i]}catch(d){}}function j(a){return a.nodeType===3||a.nodeType===8}var m=
window,u=document,r=u.addEventListener?function(a,d,k,g){a.addEventListener&&a.addEventListener(d,k,!!g)}:function(a,d,k){a.attachEvent&&a.attachEvent("on"+d,k)},o=u.removeEventListener?function(a,d,k,g){a.removeEventListener&&a.removeEventListener(d,k,!!g)}:function(a,d,k){a.detachEvent&&a.detachEvent("on"+d,k)},i="ksEventTargetId",f=" ",t=b.now(),c={},e={EVENT_GUID:i,special:{},add:function(a,d,k,g){if(!l("add",a,d,k,g)){var h=n(a),v,w;if(!(h===-1||!d||!b.isFunction(k))){if(!h){q(a,h=t++);c[h]=
{target:a,events:{}}}w=c[h].events;v=!a.isCustomEventTarget&&e.special[d]||{};if(!w[d]){h=function(x,y){if(!x||!x.fixed){x=new b.EventObject(a,x,d);b.isPlainObject(y)&&b.mix(x,y)}v.setup&&v.setup(x);return(v.handle||e._handle)(a,x,w[d].listeners,g)};w[d]={handle:h,listeners:[]};if(a.isCustomEventTarget)a._addEvent&&a._addEvent(d,h);else r(a,v.fix||d,h,v.capture)}w[d].listeners.push(k)}}},remove:function(a,d,k){if(!l("remove",a,d,k)){var g=n(a),h,v,w,x,y,z;if(g!==-1)if(g&&(h=c[g]))if(h.target===a){h=
h.events||{};if(v=h[d]){w=v.listeners;y=w.length;if(b.isFunction(k)&&y&&b.inArray(k,w)){z=[];for(x=0;x<y;++x)k!==w[x]&&z.push(w[x]);y=z.length}if(k===p||y===0){if(a.isCustomEventTarget)a._addEvent&&a._removeEvent(d,v.handle);else o(a,d,v.handle);delete h[d]}}if(d===p||b.isEmptyObject(h)){for(d in h)e.remove(a,d);delete c[g];s(a)}}}},_handle:function(a,d,k,g){k=k.slice(0);var h,v=0,w=k.length;for(g=g||a;v<w;++v){h=k[v].call(g,d);if(h===false&&a.isCustomEventTarget||d.isImmediatePropagationStopped)break}return h},
_getCache:function(a){return c[a]},_simpleAdd:r,_simpleRemove:o};e.on=e.add;b.Event=e;m.attachEvent&&!m.addEventListener&&m.attachEvent("onunload",function(){var a,d;for(a in c)if(d=c[a].target)try{e.remove(d)}catch(k){}})});
KISSY.add("event-object",function(b,p){function l(s,j,m){this.currentTarget=s;this.originalEvent=j||{};if(j){this.type=j.type;this._fix()}else{this.type=m;this.target=s}this.fixed=true}var n=document,q="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");b.mix(l.prototype,
{_fix:function(){for(var s=this.originalEvent,j=q.length,m;j;){m=q[--j];this[m]=s[m]}if(!this.target)this.target=this.srcElement||n;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===p&&this.clientX!==p){s=n.documentElement;j=n.body;this.pageX=this.clientX+(s&&s.scrollLeft||j&&j.scrollLeft||0)-(s&&s.clientLeft||j&&j.clientLeft||0);this.pageY=this.clientY+
(s&&s.scrollTop||j&&j.scrollTop||0)-(s&&s.clientTop||j&&j.clientTop||0)}if(this.which===p)this.which=this.charCode!==p?this.charCode:this.keyCode;if(this.metaKey===p)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==p)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var s=this.originalEvent;if(s.preventDefault)s.preventDefault();else s.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var s=this.originalEvent;if(s.stopPropagation)s.stopPropagation();
else s.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var s=this.originalEvent;s.stopImmediatePropagation?s.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(s){s?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});b.EventObject=l});
KISSY.add("event-target",function(b,p){var l=b.Event,n=l.EVENT_GUID;b.EventTarget={isCustomEventTarget:true,fire:function(q,s){if((q=((l._getCache(this[n]||-1)||{}).events||{})[q])&&b.isFunction(q.handle))return q.handle(p,s)},on:function(q,s,j){l.add(this,q,s,j)},detach:function(q,s){l.remove(this,q,s)}}});
KISSY.add("event-mouseenter",function(b){var p=b.Event;b.UA.ie||b.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(l){p.special[l.name]={fix:l.fix,setup:function(n){n.type=l.name},handle:function(n,q,s){var j=q.relatedTarget;try{for(;j&&j!==n;)j=j.parentNode;j!==n&&p._handle(n,q,s)}catch(m){}}}})});
KISSY.add("event-focusin",function(b){var p=b.Event;document.addEventListener&&b.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(l){p.special[l.name]={fix:l.fix,capture:true,setup:function(n){n.type=l.name}}})});
KISSY.add("node",function(b){function p(n,q,s){var j;if(!(this instanceof p))return new p(n,q,s);if(!n)return null;if(l._isElementNode(n))j=n;else if(typeof n==="string")j=l.create(n,q,s);this[0]=j}var l=b.DOM;b.augment(p,{length:1,getDOMNode:function(){return this[0]}});b.one=function(n,q){return new p(b.get(n,q))};b.Node=p});
KISSY.add("nodelist",function(b){function p(q){if(!(this instanceof p))return new p(q);n.push.apply(this,q||[])}var l=b.DOM,n=Array.prototype;b.mix(p.prototype,{length:0,item:function(q){var s=null;if(l._isElementNode(this[q]))s=new b.Node(this[q]);return s},getDOMNodes:function(){return n.slice.call(this)},each:function(q,s){for(var j=this.length,m=0,u;m<j;++m){u=new b.Node(this[m]);q.call(s||u,u,m,this)}return this}});b.all=function(q,s){return new p(b.query(q,s,true))};b.NodeList=p});
KISSY.add("node-attach",function(b,p){function l(f,t){b.each(f,function(c){b.each([s,j],function(e,a){e[c]=function(d){switch(t){case r:return function(k,g){var h=this[a?u:m]();if(g===p)return d(h,k);else{d(h,k,g);return this}};case o:return function(k){var g=this[a?u:m]();if(k===p)return d(g);else{d(g,k);return this}};case i:return function(){var k=this[a?u:m]();return(k=d.apply(n,[k].concat(b.makeArray(arguments))))?new b[k.length?"NodeList":"Node"](k):null};default:return function(){var k=this[a?
u:m]();k=d.apply(n,[k].concat(b.makeArray(arguments)));return k===p?this:k}}}(n[c])})})}var n=b.DOM,q=b.Event,s=b.Node.prototype,j=b.NodeList.prototype,m="getDOMNode",u=m+"s",r=1,o=2,i=4;b.mix(s,{one:function(f){return b.one(f,this[0])},all:function(f){return b.all(f,this[0])}});l(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);l(["attr","removeAttr"],r);l(["val","text"],o);l(["css"],r);l(["width","height"],o);l(["offset"],o);l(["parent","next","prev","siblings","children"],i);
l(["contains"]);l(["html"],o);l(["remove"]);l(["insertBefore","insertAfter"],i);b.mix(s,{append:function(f){if(f=n.create(f))this[0].appendChild(f);return this},appendTo:function(f){if((f=b.get(f))&&f.appendChild)f.appendChild(this[0]);return this}});b.each([s,j],function(f){b.mix(f,b.EventTarget);f._addEvent=function(t,c){for(var e=0,a=this.length;e<a;e++)q._simpleAdd(this[e],t,c)};f._removeEvent=function(t,c){for(var e=0,a=this.length;e<a;e++)q._simpleRemove(this[e],t,c)};delete f.fire})});
KISSY.add("ajax",function(b){var p=document,l=p.createElement("script").readyState?function(n,q){n.onreadystatechange=function(){var s=n.readyState;if(s==="loaded"||s==="complete"){n.onreadystatechange=null;q.call(this)}}}:function(n,q){n.onload=q};b.Ajax={request:function(){b.error("not implemented")},getScript:function(n,q,s){var j=p.getElementsByTagName("head")[0]||p.documentElement,m=p.createElement("script");m.src=n;if(s)m.charset=s;m.async=true;b.isFunction(q)&&l(m,q);j.appendChild(m)}}});
