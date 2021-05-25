(this["webpackJsonptom-leb-portfolio"]=this["webpackJsonptom-leb-portfolio"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n.n(o),s=n(11),a=n.n(s),i=n(10),l=n(2),d=function(){return Object(r.jsxs)("section",{className:"hero main-layout flex col j-between",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Fullstack Developer"}),Object(r.jsx)("p",{children:"Designing and coding fully-fledged applications. Driven by passion"})]}),Object(r.jsx)("img",{className:"avatar",src:"https://res.cloudinary.com/tomleb3/image/upload/v1614186369/portfolio/me_nlxevb.png",alt:""}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/hero_gutctx.svg",alt:""})]})},j=function(){return Object(r.jsx)("section",{className:"introduction",children:Object(r.jsxs)("div",{className:"content main-layout",children:[Object(r.jsx)("h3",{children:"Hi, I\u2019m Tom. Nice to meet you."}),Object(r.jsxs)("p",{children:["Since beginning my journey to become a Full-Stack Developer,",Object(r.jsx)("br",{}),"I've worked countless hours to perfect my code, my designs, and everything related.",Object(r.jsx)("br",{}),"I enjoy coding, whilst keeping the code as clean, simple and reusable as possible."]})]})})},m=function(){return Object(r.jsxs)("section",{className:"skills main-layout flex j-between",children:[Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/designer_uyufed.svg",alt:""}),Object(r.jsx)("strong",{children:"Frontend"}),Object(r.jsxs)("p",{children:["I value simple and refined code,",Object(r.jsx)("br",{}),"clean design patterns,",Object(r.jsx)("br",{}),"and good UI/UX"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"HTML5, CSS3 & SCSS, JavaScript ES6"})]}),Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/frontend_gjls0f.svg",alt:""}),Object(r.jsx)("strong",{children:"Backend"}),Object(r.jsxs)("p",{children:["I like to keep it clean and efficient,",Object(r.jsx)("br",{}),"with an emphasis on security"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"Node.js, Socket.IO, APIs & REST"})]}),Object(r.jsxs)("div",{className:"flex col",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/mentor_mugxwq.svg",alt:""}),Object(r.jsx)("strong",{children:"Databases"}),Object(r.jsxs)("p",{children:["Hands-on experience with",Object(r.jsx)("br",{}),"2 of the most used DBs"]}),Object(r.jsx)("label",{children:"Relevant Technologies:"}),Object(r.jsx)("span",{children:"MongoDB, MySQL"})]})]})},b={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},makeLorem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"],n="";for(;e>0;)e--,n+=t[Math.floor(Math.random()*t.length)]+" ";return n+="."}};var h=function(e){var t="https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio";switch(e){case"react":return"".concat(t,"/reactJS_cvqqdx.svg");case"angular":return"".concat(t,"/angularJS_qxmjk9.svg");case"vue":return"".concat(t,"/vueJS_hcujbj.svg");default:return"".concat(t,"/JavaScript_qnyrge.svg")}},u=function(e){var t=e.work;return Object(r.jsxs)("section",{className:"work-preview flex col",children:[Object(r.jsxs)("a",{className:"img-container",href:t.linkUrl,target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("img",{src:t.imgUrl,alt:""}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/tomleb3/image/upload/v1614444043/portfolio/eye_dsatza.svg",alt:""}),t.inDevelopment&&Object(r.jsx)("div",{children:"In development"})]}),Object(r.jsxs)("div",{className:"work-info flex col grow j-between",children:[Object(r.jsxs)("div",{className:"flex j-between",children:[Object(r.jsxs)("div",{className:"info-container flex col",children:[Object(r.jsx)("a",{href:t.linkUrl,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("strong",{children:t.title})}),Object(r.jsx)("p",{children:t.desc}),Object(r.jsx)("a",{href:t.repoUrl,target:"_blank",rel:"noopener noreferrer",children:"Repository"})]}),Object(r.jsx)("img",{src:h(t.framework),alt:""})]}),Object(r.jsxs)("footer",{className:"flex j-between a-end",children:[Object(r.jsx)("div",{children:t.tags.map((function(e){return Object(r.jsxs)("a",{href:"//google.com/search?q=".concat(e),target:"_blank",rel:"noopener noreferrer",children:["#",e]},b.makeId())}))}),Object(r.jsx)("button",{className:"btn-visit d-none right",children:Object(r.jsx)("a",{href:t.linkUrl,children:"Visit"})})]})]})]})},p=function(e){var t=e.works;return t.length?Object(r.jsx)("section",{className:"work-list grid",children:t.map((function(e){return Object(r.jsx)(u,{work:e},e._id)}))}):Object(r.jsx)("div",{children:"Loading..."})},g=function(e){var t=e.works;return t=t.filter((function(e){return"recent"===e.category})),Object(r.jsxs)("section",{className:"recent-work main-layout",children:[Object(r.jsx)("strong",{children:"My Recent Works"}),Object(r.jsx)("p",{children:"Here are a few projects I've worked on recently"}),Object(r.jsx)(p,{works:t})]})},x=n(7),f=function(){return Object(r.jsxs)("section",{className:"contact-cta main-layout flex j-around a-center",children:[Object(r.jsx)("strong",{children:"Got any questions for me?"}),Object(r.jsx)("p",{children:"Feel free to send me a message regarding anything and everything"}),Object(r.jsx)(x.b,{to:"/contact",children:Object(r.jsx)("button",{children:"Contact Me"})})]})},O=function(e){var t=e.works;return t=t.filter((function(e){return"early"===e.category})),Object(r.jsxs)("section",{className:"early-work main-layout",children:[Object(r.jsx)("strong",{children:"My earlier Works"}),Object(r.jsx)("p",{children:"Also, a few projects from my beginnings"}),Object(r.jsx)(p,{works:t})]})},v={query:function(){var e="https://res.cloudinary.com/tomleb3/image/upload/v1615912724/portfolio/projects";return[{_id:b.makeId(),title:"Arter",imgUrl:"".concat(e,"/arter_iwutra.jpg"),desc:"A marketplace for artists",category:"recent",linkUrl:"https://arter-app.herokuapp.com/",framework:"react",inDevelopment:!1,tags:["react","redux","mongoDB","node.js","socket.io","material-ui","cloudinary","PWA","SPA","scss","MERN"],repoUrl:"https://github.com/tomleb3/Arter"},{_id:b.makeId(),title:"Instapound",imgUrl:"".concat(e,"/instapound_yxz5ox.jpg"),desc:"An Instagram clone",category:"recent",linkUrl:"https://instapound-app.herokuapp.com/",framework:"react",inDevelopment:!0,tags:["react","redux","mongoDB","node.js","socket.io","cloudinary","PWA","SPA","scss","MERN"],repoUrl:"https://github.com/tomleb3/instapound"},{_id:b.makeId(),title:"Bookie",imgUrl:"".concat(e,"/bookie_wkeude.jpg"),desc:"An online book shop",category:"recent",linkUrl:"https://tomleb3.github.io/bookie/",framework:"vue",inDevelopment:!1,tags:["vue","vuex","scss"],repoUrl:"https://github.com/tomleb3/bookie"},{_id:b.makeId(),title:"BTC Wallet",imgUrl:"".concat(e,"/btc-wallet_pgkc3y.jpg"),desc:"A personal Bitcoin wallet",category:"recent",linkUrl:"https://tomleb3.github.io/BTC-Wallet/",framework:"angular",inDevelopment:!1,tags:["angular","axios","API","scss"],repoUrl:"https://github.com/tomleb3/BTC-Wallet"},{_id:b.makeId(),title:"Louder",imgUrl:"".concat(e,"/Louder_akv6l7.png"),desc:"A music player",category:"recent",linkUrl:"https://tomleb3.github.io/louder/",framework:"react",inDevelopment:!1,tags:["react","scss","hooks","soundcloud","API","PWA"],repoUrl:"https://github.com/tomleb3/louder"},{_id:b.makeId(),title:"BEAT IT",imgUrl:"".concat(e,"/beatit_gx7pwx.jpg"),desc:"A pad looper",category:"recent",linkUrl:"https://tomleb3.github.io/beatit/",framework:"react",inDevelopment:!1,tags:["react","scss","hooks","PWA"],repoUrl:"https://github.com/tomleb3/beatit"},{_id:b.makeId(),title:"Keep",imgUrl:"".concat(e,"/keep_i83yl6.jpg"),desc:"A personal notes app",category:"early",linkUrl:"https://tomleb3.github.io/keep/",framework:"react",inDevelopment:!1,tags:["html5","react","es6","css3"],repoUrl:"https://github.com/tomleb3/keep"},{_id:b.makeId(),title:"Minesweeper",imgUrl:"".concat(e,"/minesweeper_avy8ob.jpg"),desc:"A minesweeper game",category:"early",linkUrl:"https://tomleb3.github.io/Minesweeper/",inDevelopment:!1,tags:["html5","vanilla-js","es6","css3"],repoUrl:"https://github.com/tomleb3/Minesweeper"},{_id:b.makeId(),title:"iMeme",imgUrl:"".concat(e,"/iMeme_l8hwia.jpg"),desc:"A meme generator",category:"early",inDevelopment:!1,linkUrl:"https://tomleb3.github.io/iMeme/",tags:["html5","vanilla-js","es6","css3","canvas"],repoUrl:"https://github.com/tomleb3/iMeme"},{_id:b.makeId(),title:"Numberwang!",imgUrl:"".concat(e,"/numberwang_la17pi.jpg"),desc:"A number's game",category:"early",inDevelopment:!1,linkUrl:"https://tomleb3.github.io/numberwang/",tags:["html5","vanilla-js","es6","css3"],repoUrl:"https://github.com/tomleb3/numberwang"}]}};var k=function(){var e=v.query();return document.title="Tom Leb \u2022 Portfolio",Object(r.jsxs)("main",{className:"home",children:[Object(r.jsx)(d,{}),Object(r.jsx)(j,{}),Object(r.jsx)(m,{}),Object(r.jsx)(g,{works:e}),Object(r.jsx)(O,{works:e}),Object(r.jsx)(f,{})]})},w=function(){var e=Object(o.useContext)(D);return Object(r.jsx)("header",{className:"app-header ".concat(e?"is-shown":""),children:Object(r.jsxs)("section",{className:"main-layout flex j-between a-center",children:[Object(r.jsx)(x.c,{to:"/",children:Object(r.jsx)("img",{className:"logo",src:"https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png",alt:""})}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("a",{href:"https://drive.google.com/file/d/1mXnY4GmRLUajSwwLrCB2FCL3Kcd0g12z/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"Resume"}),Object(r.jsx)(x.c,{to:"/contact",activeClassName:"active-link",children:"Contact"})]})]})})},y=n(13),_=function(){return Object(r.jsx)("footer",{className:"app-footer",children:Object(r.jsxs)("div",{className:"content main-layout flex col j-center a-center",children:[Object(r.jsxs)("div",{className:"social-container",children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/tomleb/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(y.c,{className:"social-link"})}),Object(r.jsx)("a",{href:"https://www.facebook.com/tomleb3/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(y.a,{className:"social-link"})}),Object(r.jsx)("a",{href:"https://www.github.com/tomleb3",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(y.b,{className:"social-link"})})]}),Object(r.jsx)("strong",{className:"muted",children:"\xa9 2021 | Tom Lebeodkin"}),Object(r.jsx)("small",{children:"Powered by React"})]})})},A=n(19),S=n.n(A),N=n(23),I=n(12),E=n(20),U=n(24),T=n.n(U),P=n(14),C=(n(38),function(){var e=Object(o.useState)({senderName:"",senderEmail:"",message:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(!1),a=Object(i.a)(s,2),l=a[0],d=a[1],j=n.senderName,m=n.senderEmail,b=n.message;Object(o.useEffect)((function(){window.scrollTo({top:0}),document.title="Tom Leb \u2022 Contact"}),[]);var h=function(e){c(Object(E.a)(Object(E.a)({},n),{},Object(I.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(N.a)(S.a.mark((function e(t){var n,r,o,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_PROJS_BASE_URL:"https://res.cloudinary.com/tomleb3/image/upload/v1615912724/portfolio/projects",REACT_APP_EMAILJS_SERVICEID:"service_36oiaod",REACT_APP_EMAILJS_TEMPLATEID:"template_8z49brl",REACT_APP_EMAILJS_USERID:"user_TLArzbShtpAkRqIRrZzCl"}),r=n.REACT_APP_EMAILJS_SERVICEID,o=n.REACT_APP_EMAILJS_TEMPLATEID,s=n.REACT_APP_EMAILJS_USERID,t.preventDefault(),d(!0),e.prev=3,e.next=6,T.a.sendForm(r,o,t.target,s);case 6:c({senderName:"",senderEmail:"",message:""}),P.b.success("Message sent",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,rtl:!1,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.text),P.b.error("Please try again",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,rtl:!1,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0});case 14:d(!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"contact-page main-layout",method:"POST",onSubmit:u,children:[Object(r.jsx)("p",{children:"Thanks for taking the time to reach out."}),Object(r.jsxs)("div",{className:"flex wrap j-between",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"senderName",children:"Name"}),Object(r.jsx)("input",{type:"text",name:"senderName",value:j,onChange:h})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"senderEmail",children:"Email"}),Object(r.jsx)("input",{type:"email",name:"senderEmail",value:m,onChange:h})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message"}),Object(r.jsx)("textarea",{name:"message",value:b,onChange:h})]}),Object(r.jsx)("button",{className:l?"btn-submit submitting":"btn-submit",type:"submit",children:"Submit"}),Object(r.jsx)(P.a,{})]})}),D=Object(o.createContext)(null);function R(){var e=Object(o.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsx)("main",{className:"App",onWheel:function(e){e.nativeEvent.wheelDelta>0?!n&&c(!0):n&&c(!1)},children:Object(r.jsxs)(D.Provider,{value:n,children:[Object(r.jsx)(w,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/contact",component:C}),Object(r.jsx)(l.a,{path:"/",component:k})]}),Object(r.jsx)(_,{})]})})}n(39);var L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x.a,{children:Object(r.jsx)(R,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(t,e)}))}}(),W()}},[[40,1,2]]]);
//# sourceMappingURL=main.2c9ec378.chunk.js.map