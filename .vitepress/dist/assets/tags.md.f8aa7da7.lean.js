import{g as m,o as l,c as o,a as e,t as h,F as k,r as _,h as p,b as g,n as v}from"./app.ec82de5d.js";const b=[{link:"/sections/articles/posts/js-cheat-sheet.html",title:"JS Cheat Sheet"}],w=[{link:"/sections/articles/posts/js-cheat-sheet.html",title:"JS Cheat Sheet"},{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"},{link:"/sections/projects/posts/this-website.html",title:"This website"}],j=[{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],f=[{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],y=[{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],T=[{link:"/sections/projects/posts/this-website.html",title:"This website"}],S=[{link:"/sections/projects/posts/this-website.html",title:"This website"}],P=[{link:"/sections/projects/posts/this-website.html",title:"This website"}],c={cheatsheet:b,javascript:w,game:j,phaser:f,fun:y,web:T,blog:S,"vue.js":[{link:"/sections/projects/posts/this-website.html",title:"This website"}],vitepress:P},x=e("h1",{id:"tags",tabindex:"-1"},[g("Tags "),e("a",{class:"header-anchor",href:"#tags","aria-hidden":"true"},"#")],-1),C=e("hr",null,null,-1),B={key:0},N=e("hr",null,null,-1),O=["href"],W=["onClick"],F={key:2,style:{"text-align":"right"}},D=JSON.parse('{"title":"Tags","description":"","frontmatter":{},"headers":[],"relativePath":"tags.md","lastUpdated":1665511950000}'),J={name:"tags.md"},E=Object.assign(J,{setup(L){const t=m([]),n=m(""),d=i=>{if(n.value=i,t.value=[],console.log("selectedTag",n.value),n.value)for(const a of c[n.value])t.value.push(a);console.log(t.value)},u=[];return Object.keys(c).forEach(i=>{const a=100*c[i].length/Object.keys(c).length+4;u.push({label:i,weight:a})}),(i,a)=>(l(),o("div",null,[x,C,t.value.length?(l(),o("div",B,[e("h2",null,'Pages tagged as "'+h(n.value)+'"',1),N,(l(!0),o(k,null,_(t.value,(s,r)=>(l(),o("div",{key:r},[e("a",{href:s.link},h(s.title),9,O)]))),128))])):p("",!0),t.value.length?p("",!0):(l(),o(k,{key:1},_(u,(s,r)=>e("span",{key:r},[e("span",{style:v({fontSize:s.weight+"px"})},[e("a",{onClick:V=>d(s.label)},h(s.label),9,W)],4),g("\xA0 ")])),64)),t.value.length?(l(),o("p",F,[e("a",{onClick:a[0]||(a[0]=s=>d(""))},"\u2B05\uFE0F Back to Tags")])):p("",!0),g("\xA0 ")]))}});export{D as __pageData,E as default};
