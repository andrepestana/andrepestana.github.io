import{d as p,c as u}from"./chunks/constants.cff5580d.js";import{o as n,c as o,F as h,r as _,u as d,a as t,b as l,t as s}from"./app.624ce7f5.js";const m=t("h1",{id:"latest-posts",tabindex:"-1"},[l("Latest posts "),t("a",{class:"header-anchor",href:"#latest-posts","aria-hidden":"true"},"#")],-1),f=["href"],L=JSON.parse('{"title":"Latest posts","description":"","frontmatter":{},"headers":[],"relativePath":"sections/blog/index.md","lastUpdated":1665374082000}'),g={name:"sections/blog/index.md"},S=Object.assign(g,{setup(b){const c=p.blog.sort((a,r)=>new Date(r.updated)-new Date(a.updated)),i=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(a,r)=>(n(),o("div",null,[m,(n(!0),o(h,null,_(d(c),e=>(n(),o("div",null,[t("h2",null,[t("a",{href:`${d(u).baseUrl}${e.path}`},s(e.title),9,f)]),t("p",null,s(e.excerpt),1),t("p",null,[t("strong",null,"~ "+s(e.author),1),l(" ("+s(i(e.updated))+")",1)])]))),256))]))}});export{L as __pageData,S as default};
