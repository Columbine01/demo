"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6451],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),b=o,d=f["".concat(l,".").concat(b)]||f[b]||s[b]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,c={unversionedId:"\u624b\u5199API/bind\u7684\u5b9e\u73b0",id:"\u624b\u5199API/bind\u7684\u5b9e\u73b0",title:"bind\u7684\u5b9e\u73b0",description:"\u51fd\u6570\u7684\u5f62\u5f0f",source:"@site/docs/10.\u624b\u5199API/5.bind\u7684\u5b9e\u73b0.md",sourceDirName:"10.\u624b\u5199API",slug:"/\u624b\u5199API/bind\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/bind\u7684\u5b9e\u73b0",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apply\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/apply\u7684\u5b9e\u73b0"},next:{title:"new\u8fd0\u7b97\u7b26\u7684\u5b9e\u73b0",permalink:"/demo/docs/\u624b\u5199API/new\u8fd0\u7b97\u7b26\u7684\u5b9e\u73b0"}},l={},u=[{value:"\u51fd\u6570\u7684\u5f62\u5f0f",id:"\u51fd\u6570\u7684\u5f62\u5f0f",level:3},{value:"\u65b9\u6cd5\u7684\u5f62\u5f0f",id:"\u65b9\u6cd5\u7684\u5f62\u5f0f",level:3}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u51fd\u6570\u7684\u5f62\u5f0f"},"\u51fd\u6570\u7684\u5f62\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function myBind(obj, fn) {\n  var newObj = obj || window;\n  newObj = Object(newObj);\n  newObj.fn = fn;\n  return function (...arg) {\n    var res = newObj.fn(...arg);\n    delete newObj.fn;\n    return res;\n  };\n}\n\nvar obj = { name: "\u5c0f\u660e" };\nfunction fn(a, b, c) {\n  console.log(this, a, b, c);\n}\nmyBind(obj, fn)(1, 2, 3);\n')),(0,o.kt)("h3",{id:"\u65b9\u6cd5\u7684\u5f62\u5f0f"},"\u65b9\u6cd5\u7684\u5f62\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Function.prototype.myBind = function () {\n  var newObj = obj || window;\n  newObj = Object(newObj);\n  newObj.fn = this;\n  return function (...arg) {\n    var res = newObj.fn(...arg);\n    delete newObj.fn;\n    return res;\n  };\n};\n\nvar obj = { name: "\u5c0f\u660e" };\nfunction fn(a, b, c) {\n  console.log(this, a, b, c);\n}\nfn.myBind(obj)(1, 2, 3);\n')))}s.isMDXComponent=!0}}]);