(this["webpackJsonptom-leb-portfolio"]=this["webpackJsonptom-leb-portfolio"]||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),c=s.n(n),o=s(11),a=s.n(o),l=s(2),i=function(){return Object(r.jsxs)("section",{className:"hero main-layout",children:[Object(r.jsx)("strong",{children:"Fullstack Developer"}),Object(r.jsx)("p",{children:"Designing and coding fully-fledged applications. Driven by passion"}),Object(r.jsx)("img",{className:"avatar",src:"https://res.cloudinary.com/tomleb3/image/upload/v1614186369/portfolio/me_nlxevb.png",alt:""}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/hero_gutctx.svg",alt:""})]})},j=function(){return Object(r.jsx)("section",{className:"introduction",children:Object(r.jsxs)("div",{className:"content main-layout",children:[Object(r.jsx)("h3",{children:"Hi, I\u2019m Tom. Nice to meet you."}),Object(r.jsxs)("p",{children:["Since beginning my journey to become a Full-Stack Developer,",Object(r.jsx)("br",{}),"I've worked countless hours to perfect my code, my designs, and everything related.",Object(r.jsx)("br",{}),"I enjoy coding, whilst keeping the code as clean, simple and reusable as possible."]})]})})},b=function(){return Object(r.jsxs)("section",{className:"skills main-layout flex j-between",children:[Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/designer_uyufed.svg",alt:""}),Object(r.jsx)("strong",{children:"Frontend"}),Object(r.jsxs)("p",{children:["I value simple and refined code,",Object(r.jsx)("br",{}),"clean design patterns,",Object(r.jsx)("br",{}),"and good UI/UX"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"HTML5, CSS3 & SCSS, JavaScript ES6"})]}),Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/frontend_gjls0f.svg",alt:""}),Object(r.jsx)("strong",{children:"Backend"}),Object(r.jsxs)("p",{children:["I like to keep it clean and efficient,",Object(r.jsx)("br",{}),"with an emphasis on security"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"Node.js, Socket.IO, APIs & REST"})]}),Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/mentor_mugxwq.svg",alt:""}),Object(r.jsx)("strong",{children:"Databases"}),Object(r.jsxs)("p",{children:["Hands-on experience with",Object(r.jsx)("br",{}),"2 of the most used DBs"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"MongoDB, MySQL"})]})]})},h={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=s.charAt(Math.floor(Math.random()*s.length));return t},makeLorem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"],s="";for(;e>0;)e--,s+=t[Math.floor(Math.random()*t.length)]+" ";return s+="."}};var m=function(e){switch(e){case"react":return"https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/reactJS_cvqqdx.svg";case"angular":return"https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/angularJS_qxmjk9.svg";case"vue":return"https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/vueJS_hcujbj.svg";default:return"https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/JavaScript_qnyrge.svg"}},d=function(e){var t=e.work;return Object(r.jsxs)("section",{className:"work-preview",children:[Object(r.jsxs)("a",{className:"img-container",href:t.linkUrl,target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("img",{src:t.imgUrl,alt:""}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614444043/portfolio/eye_dsatza.svg",alt:""})]}),Object(r.jsxs)("div",{className:"work-info",children:[Object(r.jsxs)("div",{className:"flex j-between",children:[Object(r.jsxs)("div",{className:"info-container flex col",children:[Object(r.jsx)("strong",{children:t.title}),Object(r.jsx)("p",{children:t.desc}),Object(r.jsxs)("span",{className:"muted",children:["Hosted on - ",Object(r.jsx)("a",{href:t.hostedOn.hostUrl,target:"_blank",rel:"noopener noreferrer",children:t.hostedOn.hostName})]})]}),Object(r.jsx)("img",{src:m(t.framework),alt:""})]}),Object(r.jsxs)("div",{className:"flex j-between",children:[Object(r.jsx)("div",{children:t.tags.map((function(e){return Object(r.jsxs)("a",{href:"//google.com/search?q=".concat(e),target:"_blank",rel:"noopener noreferrer",children:["#",e]},h.makeId())}))}),Object(r.jsx)("button",{className:"btn-visit d-none right",children:Object(r.jsx)("a",{href:t.linkUrl,children:"Visit"})})]})]})]})},u=function(e){var t=e.works;return t.length?Object(r.jsx)("section",{className:"work-list grid",children:t.map((function(e){return Object(r.jsx)(d,{work:e},e._id)}))}):Object(r.jsx)("div",{children:"Loading..."})},g=function(e){var t=e.works;return t=t.filter((function(e){return"recent"===e.category})),Object(r.jsxs)("section",{className:"recent-work main-layout",children:[Object(r.jsx)("strong",{children:"My Recent Works"}),Object(r.jsx)("p",{children:"Here are a few projects I've worked on recently"}),Object(r.jsx)(u,{works:t})]})},p=s(7),O=function(){return Object(r.jsxs)("section",{className:"contact-cta main-layout flex j-around a-center",children:[Object(r.jsx)("strong",{children:"Got any questions for me?"}),Object(r.jsx)("p",{children:"Feel free to send me a message regarding anything and everything"}),Object(r.jsx)(p.b,{to:"/contact",children:Object(r.jsx)("button",{children:"Contact Me"})})]})},x=function(e){var t=e.works;return t=t.filter((function(e){return"early"===e.category})),Object(r.jsxs)("section",{className:"early-work main-layout",children:[Object(r.jsx)("strong",{children:"My earlier Works"}),Object(r.jsx)("p",{children:"Also, a few projects from my beginnings"}),Object(r.jsx)(u,{works:t})]})},f={query:function(){var e="https://res.cloudinary.com/tomleb3/image/upload/v1615912724/portfolio/projects";return[{_id:"w101",title:"Arter",imgUrl:"".concat(e,"/arter_iwutra.jpg"),desc:"A marketplace for artists",category:"recent",linkUrl:"https://arter-app.herokuapp.com/#/",framework:"react",tags:["react","redux","mongoDB","node.js","socket.io","cloudinary","PWA","scss"],hostedOn:{hostName:"Heroku",hostUrl:"https://www.heroku.com/"}},{_id:"w102",title:"Bookie",imgUrl:"".concat(e,"/bookie_wkeude.jpg"),desc:"An online book shop",category:"recent",linkUrl:"https://tomleb3.github.io/bookie/#/",framework:"vue",tags:["vue","vuex","scss"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}},{_id:"w103",title:"BTC Wallet",imgUrl:"".concat(e,"/btc-wallet_pgkc3y.jpg"),desc:"A personal Bitcoin wallet",category:"recent",linkUrl:"https://tomleb3.github.io/BTC-Wallet/#/",framework:"angular",tags:["angular","axios","API","scss"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}},{_id:"w104",title:"Minesweeper",imgUrl:"".concat(e,"/minesweeper_avy8ob.jpg"),desc:"A minesweeper game",category:"early",linkUrl:"https://tomleb3.github.io/Minesweeper/",tags:["html5","vanilla-js","es6","css3"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}},{_id:"w105",title:"iMeme",imgUrl:"".concat(e,"/iMeme_l8hwia.jpg"),desc:"A meme generator",category:"early",linkUrl:"https://tomleb3.github.io/iMeme/",tags:["html5","vanilla-js","es6","css3"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}},{_id:"w106",title:"Numberwang!",imgUrl:"".concat(e,"/numberwang_la17pi.jpg"),desc:"A number's game",category:"early",linkUrl:"https://tomleb3.github.io/numberwang/",tags:["html5","vanilla-js","es6","css3"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}},{_id:"w107",title:"Keep",imgUrl:"".concat(e,"/keep_i83yl6.jpg"),desc:"A personal notes app",category:"early",framework:"react",linkUrl:"https://tomleb3.github.io/keep/",tags:["html5","react","es6","css3"],hostedOn:{hostName:"Github",hostUrl:"https://github.com/"}}]}};var v=function(){var e=f.query();return Object(r.jsxs)("main",{className:"home",children:[Object(r.jsx)(i,{}),Object(r.jsx)(j,{}),Object(r.jsx)(b,{}),Object(r.jsx)(g,{works:e}),Object(r.jsx)(x,{works:e}),Object(r.jsx)(O,{})]})},k=function(){return Object(r.jsx)("header",{className:"app-header",children:Object(r.jsxs)("section",{className:"main-layout flex j-between a-center",children:[Object(r.jsx)(p.c,{to:"/",children:Object(r.jsx)("img",{className:"logo",src:"https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png",alt:""})}),Object(r.jsx)("nav",{children:Object(r.jsx)(p.c,{to:"/contact",activeClassName:"active-link",children:"Contact Me"})})]})})},w=s(12),y=function(){return Object(r.jsx)("footer",{className:"app-footer",children:Object(r.jsxs)("div",{className:"content main-layout flex col j-center a-center",children:[Object(r.jsxs)("div",{className:"social-container",children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/tomleb/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(w.c,{className:"social-link"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/tomleb3/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(w.a,{className:"social-link"})}),Object(r.jsx)("a",{href:"https://github.com/tomleb3",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(w.b,{className:"social-link"})})]}),Object(r.jsx)("strong",{className:"muted",children:"\xa9 2021 | Tom Lebeodkin"}),Object(r.jsx)("small",{children:"Powered by React"})]})})},N=s(18),_=s.n(N),U=s(21),S=s(10),M=s(22),C=s.n(M),I=s(13),T=(s(36),function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),s=t[0],c=t[1],o=Object(n.useState)(""),a=Object(S.a)(o,2),l=a[0],i=a[1],j=Object(n.useState)(""),b=Object(S.a)(j,2),h=b[0],m=b[1],d=Object(n.useState)(!1),u=Object(S.a)(d,2),g=u[0],p=u[1];Object(n.useEffect)((function(){window.scrollTo({top:0})}),[]);var O=function(e){switch(e.target.name){case"senderName":c(e.target.value);break;case"senderEmail":i(e.target.value);break;case"message":m(e.target.value);break;default:return}},x=function(){var e=Object(U.a)(_.a.mark((function e(t){var s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.prev=2,e.next=5,C.a.sendForm("service_36oiaod","template_8z49brl",t.target,"user_TLArzbShtpAkRqIRrZzCl");case 5:s=e.sent,console.log(s),c(""),i(""),m(""),I.b.success("Message sent",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,rtl:!1,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.text),I.b.error("Please try again",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,rtl:!1,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0});case 15:p(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"contact-me main-layout",method:"POST",onSubmit:x,children:[Object(r.jsx)("p",{children:"Thanks for taking the time to reach out. How can I help you today?"}),Object(r.jsxs)("div",{className:"flex wrap j-between",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"senderName",children:"Name"}),Object(r.jsx)("input",{type:"text",name:"senderName",value:s,onChange:O})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"senderEmail",children:"Email"}),Object(r.jsx)("input",{type:"email",name:"senderEmail",value:l,onChange:O})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message"}),Object(r.jsx)("textarea",{name:"message",value:h,onChange:O})]}),Object(r.jsx)("button",{className:g?"btn-submit submitting":"btn-submit",type:"submit",children:"Submit"}),Object(r.jsx)(I.a,{})]})});function A(){return Object(r.jsxs)("main",{className:"App",children:[Object(r.jsx)(k,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/contact",component:T}),Object(r.jsx)(l.a,{path:"/",component:v})]}),Object(r.jsx)(y,{})]})}s(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),r(e),n(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p.a,{children:Object(r.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.a3eac0cd.chunk.js.map