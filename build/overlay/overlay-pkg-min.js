/*
Copyright 2010, KISSY UI Library v1.1.4
MIT Licensed
build time: Sep 13 17:31
*/
KISSY.add("mask",function(c,h){function j(e){if(!(this instanceof j))return new j(e);e=c.merge(b,e);var g=e.shim,k=g?a:o+e.style,m=g?0:e.opacity,p=l("<iframe>",k,m,!g);if(!g&&i)this.layer=l("<div>",k,m,true);this.config=e;this.iframe=p}function l(e,g,k,m){e=d.create(e);d.attr(e,"style",g);d.css(e,"opacity",k);if(m){d.height(e,d.docHeight());n&&d.width(e,d.docWidth())}document.body.appendChild(e);return e}function f(e,g,k){if(e){d.width(e,g);d.height(e,k)}}var d=c.DOM,i=c.UA.ie,n=i===6,o="position:absolute;left:0;top:0;width:100%;border:0;background:black;z-index:9998;display:none;",
a="position:absolute;z-index:9997;border:0;display:none;",b={shim:false,opacity:0.6,style:""};c.augment(j,{show:function(){d.show([this.iframe,this.layer])},hide:function(){d.hide([this.iframe,this.layer])},toggle:function(){this[d.css(this.iframe,"display")!=="none"?"hide":"show"]()},setSize:function(e,g){f(this.iframe,e,g);f(this.layer,e,g)},setOffset:function(e,g){var k=e;if(g!==h)k={left:e,top:g};d.offset([this.iframe,this.layer],k)}});c.Mask=j});
KISSY.add("overlay",function(c,h){function j(a,b){b=b||{};if(c.isPlainObject(a))b=a;else b.container=a;this.container=c.get(b.container);this.trigger=c.get(b.trigger);b.align=c.merge(c.clone(n.align),b.align);this.config=c.merge(n,b);this._init()}var l=document,f=c.DOM,d=c.Event,i={TL:"tl",TC:"tc",TR:"tr",LC:"cl",CC:"cc",RC:"cr",BL:"bl",BC:"bc",BR:"br"},n={container:null,containerCls:"ks-overlay",bdCls:"ks-overlay-bd",trigger:null,triggerType:"click",width:0,height:0,zIndex:9999,xy:null,align:{node:null,
points:[i.CC,i.CC],offset:[0,0]},mask:false,shim:c.UA.ie===6},o;c.augment(j,c.EventTarget,{_init:function(){this.trigger&&this._bindTrigger()},_bindTrigger:function(){this.config.triggerType==="mouse"?this._bindTriggerMouse():this._bindTriggerClick()},_bindTriggerMouse:function(){var a=this,b=a.trigger,e;d.on(b,"mouseenter",function(){a._clearHiddenTimer();e=c.later(function(){a.show();e=h},100)});d.on(b,"mouseleave",function(){if(e){e.cancel();e=h}a._setHiddenTimer()})},_bindContainerMouse:function(){var a=
this;d.on(a.container,"mouseleave",function(){a._setHiddenTimer()});d.on(a.container,"mouseenter",function(){a._clearHiddenTimer()})},_setHiddenTimer:function(){var a=this;a._hiddenTimer=c.later(function(){a.hide()},120)},_clearHiddenTimer:function(){if(this._hiddenTimer){this._hiddenTimer.cancel();this._hiddenTimer=h}},_bindTriggerClick:function(){var a=this;d.on(a.trigger,"click",function(b){b.halt();a.show()})},show:function(){this._firstShow()},_firstShow:function(){this._prepareMarkup();this._realShow();
this._firstShow=this._realShow},_realShow:function(){this._toggle(false);this._setPosition()},_toggle:function(a){a||f.css(this.container,"display","block");f.css(this.container,"visibility",a?"hidden":"");this.shim&&this.shim.toggle();if(this.config.mask)o[a?"hide":"show"]();this[a?"_unbindUI":"_bindUI"]();this.fire(a?"hide":"show")},hide:function(){this._toggle(true)},_prepareMarkup:function(){var a=this.config,b=this.container;if(a.mask&&!o)o=new c.Mask;if(a.shim)this.shim=new c.Mask({shim:true});
if(b){this.body=c.get("."+a.bdCls,b)||b;b.style.cssText+="visibility:hidden;position:absolute;"}else{b=this.container=f.create(c.substitute('<div class="{containerCls}" style="visibility:hidden;position:absolute;"><div class="{bdCls}">{content}</div></div>',a));this.body=f.children(b)[0];l.body.appendChild(b)}f.css(b,"zIndex",a.zIndex);this.setBody(a.content);this._setSize();a.triggerType==="mouse"&&this._bindContainerMouse()},_setSize:function(a,b){var e=this.config;a=a||e.width;b=b||e.height;a&&
f.width(this.container,a);b&&f.height(this.container,b);this.shim&&this.shim.setSize(a,b)},_setPosition:function(){var a=this.config.xy;a?this.move(a):this.align()},move:function(a,b){if(c.isArray(a)){b=a[1];a=a[0]}a={left:a,top:b};f.offset(this.container,a);this.shim&&this.shim.setOffset(a)},align:function(a,b,e){var g=this.config.align;a=a||g.node;a=a==="trigger"?this.trigger:c.get(a);b=b||g.points;e=e===h?g.offset:e;g=f.offset(this.container);a=this._getAlignOffset(a,b[0]);b=this._getAlignOffset(this.container,
b[1]);b=[b.left-a.left,b.top-a.top];this.move(g.left-b[0]+ +e[0],g.top-b[1]+ +e[1])},_getAlignOffset:function(a,b){var e=b.charAt(0);b=b.charAt(1);var g,k,m;if(a){g=f.offset(a);k=a.offsetWidth;a=a.offsetHeight}else{g={left:f.scrollLeft(),top:f.scrollTop()};k=f.viewportWidth();a=f.viewportHeight()}m=g.left;g=g.top;if(e==="c")g+=a/2;else if(e==="b")g+=a;if(b==="c")m+=k/2;else if(b==="r")m+=k;return{left:m,top:g}},center:function(){this.move((f.viewportWidth()-f.width(this.container))/2+f.scrollLeft(),
(f.viewportHeight()-f.height(this.container))/2+f.scrollTop())},_bindUI:function(){d.on(l,"keydown",this._esc,this)},_unbindUI:function(){d.remove(l,"keydown",this._esc,this)},_esc:function(a){a.keyCode===27&&this.hide()},setBody:function(a){this._setContent("body",a)},_setContent:function(a,b){c.isString(b)&&f.html(this[a],b)}});c.Overlay=j});
KISSY.add("popup",function(c){function h(l,f){if(!(this instanceof h))return new h(l,f);f=f||{};if(c.isPlainObject(l))f=l;else f.container=l;f.align=c.merge(c.clone(j.align),f.align);h.superclass.constructor.call(this,c.merge(j,f))}var j={triggerType:"mouse",align:{node:"trigger",points:["cr","ct"],offset:[10,0]}};c.extend(h,c.Overlay);c.Popup=h},{host:"overlay"});
KISSY.add("dialog",function(c){function h(d,i){if(!(this instanceof h))return new h(d,i);i=i||{};if(c.isPlainObject(d))i=d;else i.container=d;i.align=c.merge(c.clone(f.align),i.align);h.superclass.constructor.call(this,c.merge(f,i));this.manager=c.DialogManager;this.manager.register(this)}var j=c.DOM,l=c.Event,f={header:"",footer:"",containerCls:"ks-overlay ks-dialog",hdCls:"ks-dialog-hd",bdCls:"ks-dialog-bd",ftCls:"ks-dialog-ft",closeBtnCls:"ks-dialog-close",width:400,height:300,closable:true};c.extend(h,
c.Overlay);c.Dialog=h;c.augment(h,c.EventTarget,{_prepareMarkup:function(){var d=this.config;h.superclass._prepareMarkup.call(this);this.header=c.get("."+d.hdCls,this.container);if(!this.header){this.header=j.create("<div>",{"class":d.hdCls});j.insertBefore(this.header,this.body)}this.setHeader(d.header);if(d.footer){this.footer=c.get("."+d.ftCls,this.container);if(!this.footer){this.footer=j.create("<div>",{"class":d.ftCls});this.container.appendChild(this.footer)}this.setFooter(d.footer)}d.closable&&
this._initClose()},_initClose:function(){var d=this,i=j.create("<div>",{"class":d.config.closeBtnCls});j.html(i,"close");l.on(i,"click",function(n){n.halt();d.hide()});d.header.appendChild(i)},setHeader:function(d){this._setContent("header",d)},setFooter:function(d){this._setContent("footer",d)}});c.DialogManager={register:function(d){d instanceof h&&this._dialog.push(d)},_dialog:[],hideAll:function(){c.each(this._dialog,function(d){d&&d.hide()})}}},{host:"overlay"});
