import{d as h,c}from"./chunks/constants.9324bc3e.js";import{o as r,c as n,F as p,r as _,u as o,a as e,b as d,t as s}from"./app.ec82de5d.js";const m=e("h1",{id:"latest-articles",tabindex:"-1"},[d("Latest articles "),e("a",{class:"header-anchor",href:"#latest-articles","aria-hidden":"true"},"#")],-1),f=["href"],g={style:{"text-align":"right"}},x=["href"],S=JSON.parse('{"title":"Latest articles","description":"","frontmatter":{},"headers":[],"relativePath":"sections/articles/index.md","lastUpdated":1665378724000}'),D={name:"sections/articles/index.md"},U=Object.assign(D,{setup(b){const i=h.articles.sort((a,l)=>new Date(l.updated)-new Date(a.updated)),u=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(a,l)=>(r(),n("div",null,[m,(r(!0),n(p,null,_(o(i),t=>(r(),n("div",null,[e("h2",null,[e("a",{href:`${o(c).baseUrl}${t.path}`},s(t.title),9,f)]),e("p",null,s(t.excerpt),1),e("p",g,[e("a",{href:`${o(c).baseUrl}${t.path}`},"Read more",8,x)]),e("p",null,[e("strong",null,"~ "+s(t.author),1),d(" ("+s(u(t.updated))+")",1)])]))),256))]))}});export{S as __pageData,U as default};
