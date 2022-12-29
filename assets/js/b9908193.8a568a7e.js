"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(o,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(d,p(p({ref:t},m),{},{components:r})):n.createElement(d,p({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},p="\u4e8c\u3001Vite",l={unversionedId:"\u6784\u5efa\u5de5\u5177/vite",id:"\u6784\u5efa\u5de5\u5177/vite",title:"\u4e8c\u3001Vite",description:"- Vite \u4e5f\u662f\u524d\u7aef\u7684\u6784\u5efa\u5de5\u5177",source:"@site/docs/6.\u6784\u5efa\u5de5\u5177/2.vite.md",sourceDirName:"6.\u6784\u5efa\u5de5\u5177",slug:"/\u6784\u5efa\u5de5\u5177/vite",permalink:"/demo/docs/\u6784\u5efa\u5de5\u5177/vite",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u3001Webpack",permalink:"/demo/docs/\u6784\u5efa\u5de5\u5177/webpack"},next:{title:"\u4e00\u3001Node \u7b80\u4ecb",permalink:"/demo/docs/Node/node\u7b80\u4ecb"}},o={},c=[],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8cvite"},"\u4e8c\u3001Vite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vite \u4e5f\u662f\u524d\u7aef\u7684\u6784\u5efa\u5de5\u5177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76f8\u8f83\u4e8e webpack\uff0cvite \u91c7\u7528\u4e86\u4e0d\u540c\u7684\u8fd0\u884c\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u65f6\uff0c\u5e76\u4e0d\u5bf9\u4ee3\u7801\u6253\u5305\uff0c\u800c\u662f\u76f4\u63a5\u91c7\u7528 ESM \u7684\u65b9\u5f0f\u6765\u8fd0\u884c\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u90e8\u7f72\u65f6\uff0c\u5728\u5bf9\u9879\u76ee\u8fdb\u884c\u6253\u5305"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9664\u4e86\u901f\u5ea6\u5916\uff0cvite \u4f7f\u7528\u8d77\u6765\u4e5f\u66f4\u52a0\u65b9\u4fbf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u57fa\u672c\u4f7f\u7528\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5f00\u53d1\u4f9d\u8d56 vite")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"vite \u7684\u6e90\u7801\u76ee\u5f55\u5c31\u662f\u9879\u76ee\u6839\u76ee\u5f55")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u53d1\u547d\u4ee4\uff1a"),(0,a.kt)("p",{parentName:"li"},"vite \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668"),(0,a.kt)("p",{parentName:"li"},"vite build \u6253\u5305\u4ee3\u7801"),(0,a.kt)("p",{parentName:"li"},"vite preview \u9884\u89c8\u6253\u5305\u540e\u4ee3\u7801")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u547d\u4ee4\u6784\u5efa"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\nyarn create vite\npnpm create vite\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u683c\u5f0f\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { defineConfig } from "vite";\nimport legacy from "@vitejs/plugin-legacy";\n\nexport default defineConfig({\n  plugins: [\n    legacy({\n      targets: ["defaults"],\n    }),\n  ],\n});\n')))))}u.isMDXComponent=!0}}]);