(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{8635:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wiki",function(){return c(7852)}])},7790:function(a){"use strict";a.exports=function(a){return a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})}},1551:function(d,c,a){"use strict";function e(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||g(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(a,c){if(a){if("string"==typeof a)return e(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return e(a,c)}}c.default=void 0;var b,h=(b=a(7294))&&b.__esModule?b:{default:b},i=a(1003),j=a(880),k=a(9246),l={};function m(a,c,d,b){if(a&&i.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;l[c+"%"+d+(e?"%"+e:"")]=!0}}c.default=function(b){var c,r=!1!==b.prefetch,a=j.useRouter(),o=h.default.useMemo(function(){var c=f(i.resolveHref(a,b.href,!0),2),d=c[0],e=c[1];return{href:d,as:b.as?i.resolveHref(a,b.as):e||d}},[a,b.href,b.as]),s=o.href,e=o.as,d=b.children,y=b.replace,z=b.shallow,A=b.scroll,g=b.locale;"string"==typeof d&&(d=h.default.createElement("a",null,d));var t=(c=h.default.Children.only(d))&&"object"==typeof c&&c.ref,p=f(k.useIntersection({rootMargin:"200px"}),2),u=p[0],v=p[1],w=h.default.useCallback(function(a){u(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,u]);h.default.useEffect(function(){var c=v&&r&&i.isLocalURL(s),b=void 0!==g?g:a&&a.locale,d=l[s+"%"+e+(b?"%"+b:"")];c&&!d&&m(a,s,e,{locale:b})},[e,s,v,g,r,a]);var n={ref:w,onClick:function(f){var d,j,h,k,l,m,n,o,b,p;c.props&&"function"==typeof c.props.onClick&&c.props.onClick(f),f.defaultPrevented||(d=f,j=a,h=s,k=e,l=y,m=z,n=A,o=g,"A"===d.currentTarget.nodeName.toUpperCase()&&((p=(b=d).currentTarget.target)&&"_self"!==p||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||b.nativeEvent&&2===b.nativeEvent.which||!i.isLocalURL(h))||(d.preventDefault(),j[l?"replace":"push"](h,k,{shallow:m,locale:o,scroll:n})))}};if(n.onMouseEnter=function(b){c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(b),i.isLocalURL(s)&&m(a,s,e,{priority:!0})},b.passHref||"a"===c.type&&!("href"in c.props)){var q=void 0!==g?g:a&&a.locale,x=a&&a.isLocaleDomain&&i.getDomainLocale(e,q,a&&a.locales,a&&a.domainLocales);n.href=x||i.addBasePath(i.addLocale(e,q,a&&a.defaultLocale))}return h.default.cloneElement(c,n)}},9246:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||f(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var b=a.rootRef,k=a.rootMargin,l=a.disabled||!i,o=g.useRef(),d=e(g.useState(!1),2),c=d[0],p=d[1],f=e(g.useState(b?b.current:null),2),m=f[0],q=f[1],n=g.useCallback(function(a){o.current&&(o.current(),o.current=void 0),!l&&!c&&a&&a.tagName&&(o.current=j(a,function(a){return a&&p(a)},{root:m,rootMargin:k}))},[l,m,k,c]);return g.useEffect(function(){if(!i&&!c){var a=h.requestIdleCallback(function(){return p(!0)});return function(){return h.cancelIdleCallback(a)}}},[c]),g.useEffect(function(){b&&q(b.current)},[b]),[n,c]};var g=b(7294),h=b(4686),i="undefined"!=typeof IntersectionObserver;function j(b,c,d){var a=m(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),k.delete(g);var a=l.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&l.splice(a,1)}}}var k=new Map,l=[];function m(c){var a,b={root:c.root||null,margin:c.rootMargin||""},d=l.find(function(a){return a.root===b.root&&a.margin===b.margin});if(d?a=k.get(d):(a=k.get(b),l.push(b)),a)return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},c);return k.set(b,a={id:b,observer:f,elements:e}),a}},7852:function(e,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return m}});var f=a(5893),g=a(7039),h=a(1664),c=a(9467),i=a.n(c),d=a(7790),j=a.n(d),k=a(9008);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function m(){var b,c,a=(0,g.$G)().t;return(b=(0,g.cQ)(),c=1,function(a){if(Array.isArray(a))return a}(b)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(b,c)||function(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{children:[(0,f.jsxs)(k.default,{children:[(0,f.jsxs)("title",{children:["openPronouns ",j()(a("global.wiki"))]}),(0,f.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,f.jsx)("link",{rel:"icon",href:"/oPronouns-logo.svg",type:"image/svg"})]}),(0,f.jsxs)("nav",{children:[(0,f.jsx)("img",{src:"/oPronouns-logo.svg",alt:a("global.logo"),className:"nav-img"}),(0,f.jsx)(h.default,{href:"/",passHref:!0,children:"openPronouns"}),(0,f.jsx)("ul",{className:"nav-list",children:(0,f.jsx)("li",{className:["nav-list"],children:(0,f.jsx)(h.default,{href:"/wiki",children:(0,f.jsx)("a",{className:"active",children:j()(a("global.wiki"))})})})}),(0,f.jsxs)("ul",{className:i().sNavList,children:[(0,f.jsx)("li",{children:(0,f.jsx)(h.default,{passHref:!0,href:"/wiki",className:[i().sNavList],children:(0,f.jsxs)("a",{className:"active",children:[j()(a("global.wiki"))," ",j()(a("global.home"))]})})}),(0,f.jsx)("li",{children:(0,f.jsx)(h.default,{passHref:!0,href:"/wiki/ipfs/",className:i().sNavList,children:"IPFS"})})]})]}),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)("h1",{className:i().h1,children:[j()(a("global.wiki"))," ",j()(a("global.home"))]}),(0,f.jsx)("p",{className:i().p,children:a("wiki.index.p.0")}),(0,f.jsx)("div",{className:"edited",children:(0,f.jsxs)("p",{children:[a("wiki.edited.text")," ",a("wiki.index.edited.date")," ",a("wiki.edited.by")," ",a("wiki.index.edited.name")]})})]})]})})}},9467:function(a){a.exports={sNavList:"Wiki_sNavList__3grzb",p:"Wiki_p___Dvjb",h1:"Wiki_h1__JXui8",h2:"Wiki_h2__l60xg"}},9008:function(a,c,b){a.exports=b(3121)},1664:function(a,c,b){a.exports=b(1551)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=8635)}),_N_E=a.O()}])