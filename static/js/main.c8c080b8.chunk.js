(this.webpackJsonpcompteurdemotivation=this.webpackJsonpcompteurdemotivation||[]).push([[0],{13:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),i=n.n(s),r=(n(13),n(4)),l=n(5),j=n(8),u=n(7),b=n(6),h=n.n(b),o=(n(22),n.p+"static/media/engine.1f782a3d.png"),p=n(0),d=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).check=function(e,t){return/^\+?\d+$/.test(e)?Number(e)>t?t+"":e:""},c.state={capacite:"",controle:"",valeur:"",securisant:"",encourageant:"",bienveillant:"",stimulant:""},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.capacite,c=t.controle,a=t.valeur,s=t.securisant,i=t.encourageant,r=t.bienveillant,l=t.stimulant,j=Math.floor(100*((Number(n)+Number(c))*Number(a)+Number(s)+Number(i)+Number(r)+Number(l))/200);return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("h1",{children:"Compteur de motivation"}),Object(p.jsx)("img",{src:o,className:"engine",alt:"Compteur de motivation"}),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"app__left",children:[Object(p.jsxs)("div",{className:"app__box",children:[Object(p.jsx)("h2",{children:"Comp\xe9tence /10"}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Capacit\xe9"})," ",Object(p.jsx)("input",{type:"text",value:n,onChange:function(t){return e.setState({capacite:e.check(t.target.value,5)})}}),Object(p.jsx)("span",{children:"/5"})]}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Contr\xf4le"}),Object(p.jsx)("input",{type:"text",value:c,onChange:function(t){return e.setState({controle:e.check(t.target.value,5)})}}),Object(p.jsx)("span",{children:"/5"})]})]}),Object(p.jsxs)("div",{className:"app__box",children:[Object(p.jsx)("h2",{children:"Valeur /10"}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Valeur"}),Object(p.jsx)("input",{type:"text",value:a,onChange:function(t){return e.setState({valeur:e.check(t.target.value,10)})}}),Object(p.jsx)("span",{children:"/10"})]})]}),Object(p.jsxs)("div",{className:"app__box",children:[Object(p.jsx)("h2",{children:"Environnement /100"}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"S\xe9curisant"}),Object(p.jsx)("input",{type:"text",value:s,onChange:function(t){return e.setState({securisant:e.check(t.target.value,25)})}}),Object(p.jsx)("span",{children:"/25"})]}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Encourageant"}),Object(p.jsx)("input",{type:"text",value:i,onChange:function(t){return e.setState({encourageant:e.check(t.target.value,25)})}}),Object(p.jsx)("span",{children:"/25"})]}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Bienveillant"}),Object(p.jsx)("input",{type:"text",value:r,onChange:function(t){return e.setState({bienveillant:e.check(t.target.value,25)})}}),Object(p.jsx)("span",{children:"/25"})]}),Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("span",{children:"Stimulant"}),Object(p.jsx)("input",{type:"text",value:l,onChange:function(t){return e.setState({stimulant:e.check(t.target.value,25)})}}),Object(p.jsx)("span",{children:"/25"})]})]})]}),Object(p.jsxs)("div",{className:"app__right",children:[Object(p.jsx)(h.a,{className:"gauge",id:"gauge-chart2",textColor:"#fff",nrOfLevels:10,percent:j/100,colors:["#FF0000","#00FF00"]}),Object(p.jsxs)("div",{className:"app__box last",children:[Object(p.jsx)("h2",{children:"Ma motivation"}),Object(p.jsxs)("h3",{children:["Comp\xe9tence: ",Number(n)+Number(c)]}),Object(p.jsxs)("h3",{children:["Valeur: ",a]}),Object(p.jsxs)("h3",{children:["Environnement: ",Number(s)+Number(i)+Number(r)+Number(l)]}),Object(p.jsxs)("h3",{children:["R\xe9sultat: ",j,"%"]})]})]})]})]})}}]),n}(a.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.c8c080b8.chunk.js.map