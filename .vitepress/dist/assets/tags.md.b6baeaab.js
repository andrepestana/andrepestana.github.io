import{g as d,o as n,c as i,a as t,t as p,F as w,r as y,h as k,b as u,n as _}from"./app.80563ccd.js";const v=[{link:"/sections/articles/posts/languages.html",title:"Learning Spanish Language"}],j=[{link:"/sections/articles/posts/testing-connectiy-between-hosts.html",title:"Testing connectivity between hosts"}],f=[{link:"/sections/articles/posts/testing-connectiy-between-hosts.html",title:"Testing connectivity between hosts"}],P=[{link:"/sections/articles/posts/testing-connectiy-between-hosts.html",title:"Testing connectivity between hosts"}],C=[{link:"/sections/articles/posts/testing-connectiy-between-hosts.html",title:"Testing connectivity between hosts"}],N=[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"}],T=[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"},{link:"/sections/projects/posts/my-own-website.html",title:"My own website"},{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],S=[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"}],L=[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"},{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],x=[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"}],J=[{link:"/sections/projects/posts/my-own-website.html",title:"My own website"}],F=[{link:"/sections/projects/posts/my-own-website.html",title:"My own website"}],M=[{link:"/sections/projects/posts/my-own-website.html",title:"My own website"}],B=[{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],O=[{link:"/sections/projects/posts/pestana-world-game.html",title:"Pestana World game"}],c={"language learning":[{link:"/sections/articles/posts/languages.html",title:"Learning Spanish Language"}],spanish:v,networking:j,docker:f,devops:P,testing:C,mobile:N,"vue.js":[{link:"/sections/projects/posts/chuck-norris-jokes.html",title:"Chuck Norris Jokes"},{link:"/sections/projects/posts/my-own-website.html",title:"My own website"}],javascript:T,quasarframework:S,fun:L,android:x,web:J,blog:F,vitepress:M,game:B,phaser:O};const W=t("h1",{id:"tags",tabindex:"-1"},[u("Tags "),t("a",{class:"header-anchor",href:"#tags","aria-hidden":"true"},"#")],-1),q=t("hr",null,null,-1),V={key:0},z=t("hr",null,null,-1),D=["href"],E=["onClick"],Q={key:2,style:{"text-align":"right"}},H=JSON.parse('{"title":"Tags","description":"","frontmatter":{},"headers":[],"relativePath":"tags.md","lastUpdated":1684906750000}'),U={name:"tags.md"},I=Object.assign(U,{setup($){const b=window.location.search,r=new URLSearchParams(b).get("tag");console.log("tagFromQueryParams",r);const e=d([]),a=d(""),h=l=>{if(a.value=l,e.value=[],console.log("selectedTag",a.value),a.value)for(const o of c[a.value])e.value.push(o);console.log(e.value)},m=[];return Object.keys(c).forEach(l=>{const o=100*c[l].length/Object.keys(c).length+4;m.push({label:l,weight:o})}),r&&(h(r),history.pushState(null,"",location.href.split("?")[0])),(l,o)=>(n(),i("div",null,[W,q,e.value.length?(n(),i("div",V,[t("h2",null,'Pages tagged as "'+p(a.value)+'"',1),z,(n(!0),i(w,null,y(e.value,(s,g)=>(n(),i("div",{key:g},[t("a",{href:s.link},p(s.title),9,D)]))),128))])):k("",!0),e.value.length?k("",!0):(n(),i(w,{key:1},y(m,(s,g)=>t("span",{key:g},[t("span",{style:_({fontSize:s.weight+"px"})},[t("a",{onClick:A=>h(s.label)},p(s.label),9,E)],4),u("\xA0 ")])),64)),e.value.length?(n(),i("p",Q,[t("a",{onClick:o[0]||(o[0]=s=>h(""))},"\u2B05\uFE0F Back to Tags")])):k("",!0),u("\xA0 ")]))}});export{H as __pageData,I as default};
