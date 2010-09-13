/*
Copyright 2010, KISSY UI Library v1.1.4
MIT Licensed
build time: Sep 13 17:31
*/
KISSY.add("node",function(a){function g(b,h,o){var l;if(!(this instanceof g))return new g(b,h,o);if(b){if(d(b,1)||d(b,3))l=b;else if(a.isString(b))l=p.create(b,h,o);this[0]=l}else this.length=0}var p=a.DOM,d=p._nodeTypeIs;g.TYPE="-ks-Node";a.augment(g,{length:1,getDOMNode:function(){return this[0]},nodeType:g.TYPE});a.one=function(b,h){return(b=a.get(b,h))?new g(b):null};a.Node=g});
KISSY.add("nodelist",function(a){function g(b){if(!(this instanceof g))return new g(b);d.push.apply(this,b||[])}var p=a.DOM,d=Array.prototype;a.mix(g.prototype,{length:0,item:function(b){var h=null;if(p._isElementNode(this[b]))h=new a.Node(this[b]);return h},getDOMNodes:function(){return d.slice.call(this)},each:function(b,h){var o=this.length,l=0,k;for(k=new a.Node(this[0]);l<o&&b.call(h||k,k,l,this)!==false;k=new a.Node(this[++l]));return this}});a.all=function(b,h){return new g(a.query(b,h,true))};
a.NodeList=g});
KISSY.add("node-attach",function(a,g){function p(e,arguments,j,c){var i=[this[e?s:r]()].concat(a.makeArray(arguments));if(arguments[j]===g)return c.apply(b,i);else{c.apply(b,i);return this}}function d(e,j){a.each(e,function(c){a.each([k,t],function(i,f){i[c]=function(n){switch(j){case u:return function(){return p.call(this,f,arguments,1,n)};case q:return function(){return p.call(this,f,arguments,0,n)};case v:return function(){var m=this[f?s:r]();return(m=n.apply(b,[m].concat(a.makeArray(arguments))))?new (a[a.isArray(m)?
"NodeList":"Node"])(m):null};default:return function(){var m=this[f?s:r]();m=n.apply(b,[m].concat(a.makeArray(arguments)));return m===g?this:m}}}(b[c])})})}var b=a.DOM,h=a.Event,o=b._nodeTypeIs,l=b._isKSNode,k=a.Node.prototype,t=a.NodeList.prototype,r="getDOMNode",s=r+"s",u=1,q=2,v=4;a.mix(k,{one:function(e){return a.one(e,this[0])},all:function(e){return a.all(e,this[0])}});d(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);d(["attr","removeAttr"],u);d(["val","text"],q);d(["css"],
u);d(["width","height"],q);d(["offset"],q);d(["scrollIntoView"]);d(["parent","next","prev","siblings","children"],v);d(["contains"]);d(["html"],q);d(["remove"]);a.each(["insertBefore","insertAfter"],function(e){k[e]=function(j){b[e].call(b,this[0],j);return this}});a.each([k,t],function(e,j){a.mix(e,{append:function(c){c&&a.each(this,function(i){var f;if(j||a.isString(c))f=b.create(c);else{if(o(c,1)||o(c,3))f=c;if(l(c))f=c[0]}i.appendChild(f)});return this},appendTo:function(c){if((c=a.get(c))&&c.appendChild)a.each(this,
function(i){c.appendChild(i)});return this}})});a.each([k,t],function(e){a.mix(e,a.EventTarget,{_supportSpecialEvent:true});e._addEvent=function(j,c,i){for(var f=0,n=this.length;f<n;f++)h._simpleAdd(this[f],j,c,i)};e._removeEvent=function(j,c,i){for(var f=0,n=this.length;f<n;f++)h._simpleRemove(this[f],j,c,i)};delete e.fire})});
