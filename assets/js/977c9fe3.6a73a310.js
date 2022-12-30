"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6330],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||c;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const c={},a=void 0,i={unversionedId:"\u624b\u5199API/\u9632\u6296",id:"\u624b\u5199API/\u9632\u6296",title:"\u9632\u6296",description:"\u9632\u6296\uff08debounce\uff09\uff1a\u5728\u4e00\u5b9a\u95f4\u9694\u65f6\u95f4\u5185\u4e8b\u4ef6\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u91cd\u590d\u89e6\u53d1\uff0c\u90a3\u4e48\u91cd\u65b0\u5f00\u59cb\u8ba1\u65f6",source:"@site/docs/10.\u624b\u5199API/1.\u9632\u6296.md",sourceDirName:"10.\u624b\u5199API",slug:"/\u624b\u5199API/\u9632\u6296",permalink:"/demo/docs/\u624b\u5199API/\u9632\u6296",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React \u7b80\u4ecb",permalink:"/demo/docs/React/React\u7b80\u4ecb"},next:{title:"\u8282\u6d41",permalink:"/demo/docs/\u624b\u5199API/\u8282\u6d41"}},l={},u=[{value:"\u9632\u6296\uff08debounce\uff09\uff1a\u5728\u4e00\u5b9a\u95f4\u9694\u65f6\u95f4\u5185\u4e8b\u4ef6\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u91cd\u590d\u89e6\u53d1\uff0c\u90a3\u4e48\u91cd\u65b0\u5f00\u59cb\u8ba1\u65f6",id:"\u9632\u6296debounce\u5728\u4e00\u5b9a\u95f4\u9694\u65f6\u95f4\u5185\u4e8b\u4ef6\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u5982\u679c\u91cd\u590d\u89e6\u53d1\u90a3\u4e48\u91cd\u65b0\u5f00\u59cb\u8ba1\u65f6",level:3}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u9632\u6296debounce\u5728\u4e00\u5b9a\u95f4\u9694\u65f6\u95f4\u5185\u4e8b\u4ef6\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u5982\u679c\u91cd\u590d\u89e6\u53d1\u90a3\u4e48\u91cd\u65b0\u5f00\u59cb\u8ba1\u65f6"},"\u9632\u6296\uff08debounce\uff09\uff1a\u5728\u4e00\u5b9a\u95f4\u9694\u65f6\u95f4\u5185\u4e8b\u4ef6\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u91cd\u590d\u89e6\u53d1\uff0c\u90a3\u4e48\u91cd\u65b0\u5f00\u59cb\u8ba1\u65f6"),(0,o.kt)("p",null,"\u539f\u7406\uff1a\u5f53\u6301\u7eed\u89e6\u53d1\u4e8b\u4ef6\u65f6\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u6ca1\u6709\u518d\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4e8b\u4ef6\u624d\u4f1a\u5904\u7406\u51fd\u6570\u4e00\u6b21\uff0c\u5982\u679c\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u6765\u4e4b\u524d\uff0c\u53c8\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u5219\u91cd\u65b0\u5f00\u542f\u5b9a\u65f6\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/* \u524d\u7f6e\u9632\u6296 \u4f1a\u5148\u6267\u884c\u4e00\u6b21\u5728\u518d\u8fdb\u884c\u9632\u6296*/\n// fn\uff1a\u9700\u8981\u6267\u884c\u7684\u4e8b\u4ef6\u51fd\u6570\uff0cdelay\u9632\u6296\u7684\u65f6\u95f4\nfunction debounce(fn, delay) {\n  var timer;\n  return (e) => {\n    if (!timer) {\n      fn.call(this, e);\n    }\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      timer = null;\n    }, delay);\n  };\n}\n\nvar btn = document.querySelect("button");\nbtn.onclick = debounce(function (e) {\n  /* \u6267\u884c\u7684\u4ee3\u7801 */\n}, 2000);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/* \u540e\u7f6e\u9632\u6296 \u9632\u6296\u540e\u624d\u4f1a\u6267\u884c*/\n// \u540e\u7f6e\u9632\u6296\nfunction debounce(fn, delay) {\n  var timer;\n  return function (e) {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn.call(this, e);\n    }, delay);\n  };\n}\n\nvar btn = document.querySelect("button");\nbtn.onclick = debounce(function (e) {\n  /* \u6267\u884c\u7684\u4ee3\u7801 */\n}, 2000);\n')))}s.isMDXComponent=!0}}]);