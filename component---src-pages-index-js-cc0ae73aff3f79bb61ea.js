(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!a(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},5137:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var r=n(7294),o=function(e){var t=e.children;return r.createElement("h3",{className:"text-slate-600"},t)};var a,i,c,l,s=["src","alt"],u=/[/]+/g,f=function(e){var t=e.src,n=e.alt,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s),a=({}.IMG_PATH?""+{}.IMG_PATH+t:t).replace(u,"/");return r.createElement("img",{className:null==o?void 0:o.class,src:a,alt:n})},p=function(){return r.createElement("section",{id:"events"},r.createElement("header",{className:"prose"},r.createElement(o,null,"Events"),r.createElement("p",null,"Click or tap for our latest events.")),r.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/518183559656227/?ref=newsfeed",rel:"noreferrer"},r.createElement(f,{className:"shadow-md shadow-slate-400/50 mt-3",src:"/emerson.jpg",alt:"Emerson Skateboard contest Saturday April 9th 2022"})))},d=n(5697),m=n.n(d),h=n(4839),y=n.n(h),b=n(2993),g=n.n(b),v=n(6494),w=n.n(v),E="bodyAttributes",T="htmlAttributes",A="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(C).map((function(e){return C[e]})),"charset"),x="cssText",S="href",k="http-equiv",j="innerHTML",P="itemprop",N="name",I="property",L="rel",_="src",M="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F="defaultTitle",B="defer",z="encodeSpecialCharacters",H="onChangeClientState",D="titleTemplate",q=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),Y=[C.NOSCRIPT,C.SCRIPT,C.STYLE],U="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=re(e,C.TITLE),n=re(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=re(e,F);return t||r||void 0},Z=function(e){return re(e,H)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},ne=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==j&&c!==x&&c!==P||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=w()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},re=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},oe=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){oe(e)}),0)}),ae=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:n.g.requestAnimationFrame||oe,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ae:n.g.cancelAnimationFrame||ae,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;de(C.BODY,r),de(C.HTML,o),pe(f,p);var d={baseTag:me(C.BASE,n),linkTags:me(C.LINK,a),metaTags:me(C.META,i),noscriptTags:me(C.NOSCRIPT,c),scriptTags:me(C.SCRIPT,s),styleTags:me(C.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},fe=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=fe(e)),de(C.TITLE,t)},de=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},me=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},he=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},be=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[U]=!0,a=ye(n,o),[r.createElement(C.TITLE,a,e)];var e,n,o,a},toString:function(){return function(e,t,n,r){var o=he(n),a=fe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Q(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case T:return{toComponent:function(){return ye(t)},toString:function(){return he(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,a=((o={key:n})[U]=!0,o);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===j||n===x){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),r.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:be(C.BASE,t,r),bodyAttributes:be(E,n,r),htmlAttributes:be(T,o,r),link:be(C.LINK,a,r),meta:be(C.META,i,r),noscript:be(C.NOSCRIPT,c,r),script:be(C.SCRIPT,l,r),style:be(C.STYLE,s,r),title:be(C.TITLE,{title:f,titleAttributes:p},r)}},ve=y()((function(e){return{baseTag:te([S,M],e),bodyAttributes:ee(E,e),defer:re(e,B),encode:re(e,z),htmlAttributes:ee(T,e),linkTags:ne(C.LINK,[L,S],e),metaTags:ne(C.META,[N,O,k,I,P],e),noscriptTags:ne(C.NOSCRIPT,[j],e),onChangeClientState:Z(e),scriptTags:ne(C.SCRIPT,[_,j],e),styleTags:ne(C.STYLE,[x],e),title:X(e),titleAttributes:ee(A,e)}}),(function(e){se&&ce(se),e.defer?se=ie((function(){ue(e,(function(){se=null}))})):(ue(e),se=null)}),ge)((function(){return null})),we=(i=ve,l=c=function(e){function t(){return G(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case C.TITLE:return V({},o,((t={})[r.type]=i,t.titleAttributes=V({},a),t));case C.BODY:return V({},o,{bodyAttributes:V({},a)});case C.HTML:return V({},o,{htmlAttributes:V({},a)})}return V({},o,((n={})[r.type]=V({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,a=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(J(r,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),o=V({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(i,o)},W(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(r.Component),c.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=i.peek,c.rewind=function(){var e=i.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);we.renderStatic=we.rewind;var Ee=we,Te=function(e){var t=e.href,n=e.children;return r.createElement("a",{className:"text-blue-800",href:t},n)},Ae=function(){return r.createElement("nav",{className:"flex space-x-4 place-content-start align-center mt-2"},r.createElement("div",null,"Jump to:"),r.createElement("ul",{className:"flex justify-start space-x-4 flex-nowrap"},r.createElement("li",null,r.createElement(Te,{href:"#events"},"Events")),r.createElement("li",null,r.createElement(Te,{href:"#socials"},"Socials"))))},Ce=function(e){Object.assign({},e);return r.createElement("div",{className:"mb-8"},r.createElement("div",{className:"w-full h-[200px] relative"},r.createElement(f,{className:"w-full h-full object-contain mix-blend-multiply relative",src:"/skyline.png",alt:"Jacksonville skyline"})),r.createElement(Ae,null))},Oe=function(e){var t=e.children;return r.createElement("div",{className:"flex justify-center bg-gradient-to-t from-slate-500 to-white pb-4 pt-4"},r.createElement("div",{className:"max-w-sm min-w-[325px] m-4 sm:m-0 bg-slate-50 shadow-md shadow-slate-800"},r.createElement("header",{className:"bg-orange-400 h-2 w-full "}),r.createElement("div",{className:"px-4"},r.createElement(Ee,null,r.createElement("meta",{name:"keywords",content:""+["Florida skateboarding","skateboarding","skateboarding community","skateboarding lessons"].join(", ")})),r.createElement(Ce,null),r.createElement("main",null,t)),r.createElement("footer",{className:"bg-orange-400 h-2 w-full mt-6"})))},xe=n(1597);function Se(e){var t,n,o=e.description,a=e.lang,i=e.meta,c=e.title,l=(0,xe.K2)("63159454").site,s=o||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(we,{htmlAttributes:{lang:a},title:c,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i)})}Se.defaultProps={lang:"en",meta:[],description:""};var ke=Se,je=function(){return r.createElement("section",null,r.createElement("header",{className:"prose"},r.createElement("h1",{className:"text-center text-slate-900/80 drop-shadow-sm"},"Building skateboard",r.createElement("br",null)," community"),r.createElement("p",null,"We believe skateboarding builds character in youth of all backgrounds through competition and connection. Adirolf dedicates itself to producing youth skate events all over Florida.")))},Pe=function(){return r.createElement("section",{id:"socials"},r.createElement("header",{class:"prose"},r.createElement(o,null,"Socials"),r.createElement("p",{class:""},"Follow us on the socials.")),r.createElement("ul",{id:"socials",class:"flex flex-col xs:flex-row list-none not-prose flex-wrap justify-start content-start pl-0 space-y-4 xs:space-y-0 xs:space-x-4 mt-2"},r.createElement("li",{class:"flex-none"},r.createElement("a",{href:"https://www.youtube.com/channel/UCr2GXjjGmL7Kq9MkKkKUs5g",target:"_blank",rel:"noreferrer"},r.createElement(f,{alt:"YouTube logo",class:"h-5",src:"/YouTube_logo_2017.svg"}))),r.createElement("li",{class:"flex-none"},r.createElement("a",{href:"https://www.facebook.com/Adirolfskateboards",target:"_blank",rel:"noreferrer",class:"flex space-x-1"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5",version:"1.1",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},viewBox:"0 0 14222 14222"},r.createElement("defs",null,r.createElement("style",{type:"text/css"},".fil0 .fil1")),r.createElement("g",{id:"Layer_x0020_1"},r.createElement("metadata",{id:"CorelCorpID_0Corel-Layer"}),r.createElement("path",{style:{fill:"#1977F3",fillRule:"nonzero"},class:"fil0",d:"M14222 7111c0,-3927 -3184,-7111 -7111,-7111 -3927,0 -7111,3184 -7111,7111 0,3549 2600,6491 6000,7025l0 -4969 -1806 0 0 -2056 1806 0 0 -1567c0,-1782 1062,-2767 2686,-2767 778,0 1592,139 1592,139l0 1750 -897 0c-883,0 -1159,548 -1159,1111l0 1334 1972 0 -315 2056 -1657 0 0 4969c3400,-533 6000,-3475 6000,-7025z"}),r.createElement("path",{style:{fill:"#FEFEFE",fillRule:"nonzero"},d:"M9879 9167l315 -2056 -1972 0 0 -1334c0,-562 275,-1111 1159,-1111l897 0 0 -1750c0,0 -814,-139 -1592,-139 -1624,0 -2686,984 -2686,2767l0 1567 -1806 0 0 2056 1806 0 0 4969c362,57 733,86 1111,86 378,0 749,-30 1111,-86l0 -4969 1657 0z"}))),r.createElement(f,{alt:"Facebook logo",class:"h-5",src:"/Facebook_2019.svg"}))),r.createElement("li",{class:"flex-none"},r.createElement("a",{href:"https://www.instagram.com/adirolfskateboarding/",target:"_blank",rel:"noreferrer",class:"flex space-x-1"},r.createElement("svg",{viewBox:"0 0 448 512",class:"h-5",style:{color:"#c13584"}},r.createElement("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),r.createElement(f,{alt:"Instagram logo",class:"h-6 pt-1",src:"/Instagram_2016_wordmark.svg"})))))};function Ne(){return r.createElement(r.Fragment,null,r.createElement(ke,{title:"Building skateboard community"}),r.createElement(Oe,null,r.createElement("div",{class:"flex flex-col space-y-6"},r.createElement(je,null),r.createElement(p,null),r.createElement(Pe,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cc0ae73aff3f79bb61ea.js.map