(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(15),r=c.n(n),l=(c(21),c(10)),o=(c(22),c(0));var i=function(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],r=0===a.length;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("label",{htmlFor:"text-field",className:"mb-3 h3",style:{color:"dark"===e.mode?"white":"#042743"},children:e.heading}),Object(o.jsx)("textarea",{className:"form-control",id:"text-field",rows:"5",value:a,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"}})]}),Object(o.jsxs)("div",{className:"mt-3",children:[Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){var t=a.toUpperCase();n(t),e.showAlert("Converted to uppercase","success")},children:"Uppercase All"}),Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){var t=a.toLowerCase();n(t),e.showAlert("Converted to lowercase!","success")},children:"Lowecase All"}),Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){var t=a.split(" "),c=[];t.forEach((function(e){c.push(e[0].toUpperCase()+e.slice(1,e.length))})),n(c.join(" ")),e.showAlert("Text Capatilized!!","success")},children:"Capitilize"}),Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){n(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{type:"button",disabled:r,className:"btn btn-primary mx-2",onClick:function(){var t=a.split(/[ ]+/);n(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"mt-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h3",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[a.split(/\s+/).filter((function(e){return 0!==e.length})).length," Character Count ",a.length," Word Count"]}),Object(o.jsxs)("p",{children:[.008*a.split(" ").filter((function(e){return 0!==e.length})).length," Minutes Read"]}),Object(o.jsx)("p",{children:"Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Nothing to preview!"})]})]})};var d=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{className:"alert alert-".concat(e.alert.type),role:"alert",children:e.alert.message})})};function b(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{class:"aboutus-area",children:Object(o.jsx)("div",{class:"container",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsxs)("div",{class:"col-xs-12",children:[Object(o.jsx)("div",{class:"col-md-4 col-sm-6 col-xs-12",children:Object(o.jsx)("div",{class:"aboutus-image float-left hidden-sm",children:Object(o.jsx)("img",{src:"https://devitems.com/preview/sopnovilla/sopnovilla/img/about/1.jpg",alt:""})})}),Object(o.jsx)("div",{class:"col-md-8 col-sm-6 col-xs-12",children:Object(o.jsxs)("div",{class:"aboutus-content ",children:[Object(o.jsxs)("h1",{children:["aboutus ",Object(o.jsx)("span",{children:"Sopno"})]}),Object(o.jsx)("h4",{children:"Property Details"}),Object(o.jsx)("p",{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has oots in a piece of classitin literature from 45 BC, making it over 2000 years old. Richard McClint professor at Hamden dney College irginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."}),Object(o.jsxs)("div",{class:"counter ",children:[Object(o.jsxs)("div",{class:"single-counter text-center",children:[Object(o.jsx)("h2",{class:"counter",children:"1500"}),Object(o.jsx)("p",{children:"Square Feet"})]}),Object(o.jsxs)("div",{class:"single-counter text-center",children:[Object(o.jsx)("h2",{class:"counter",children:"10"}),Object(o.jsx)("p",{children:"Bedrooms"})]}),Object(o.jsxs)("div",{class:"single-counter text-center",children:[Object(o.jsx)("h2",{class:"counter",children:"5"}),Object(o.jsx)("p",{children:"Bathrooms"})]}),Object(o.jsxs)("div",{class:"single-counter text-center",children:[Object(o.jsx)("h2",{class:"counter",children:"6"}),Object(o.jsx)("p",{children:"Car Parking"})]})]})]})})]})})})})})}var j=c(8);function h(e){return console.log(),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(j.b,{className:"navbar-brand",to:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onChange:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault",checked:"dark"===e.mode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})})}h.defaultProps={title:"My First React App",aboutText:"About"};var u=c(2);var m=function(){var e=Object(s.useState)("light"),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(l.a)(n,2),m=r[0],x=r[1],p=function(e,t){x({message:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(h,{title:"React Text Format",mode:c,toggleMode:function(){"light"===c&&(a("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success")),"dark"===c&&(a("light"),document.body.style.backgroundColor="#fff",p("Light mode has been enabled","success"))}},new Date),Object(o.jsxs)("div",{className:"container mb-3",children:[Object(o.jsx)(d,{alert:m}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/about",children:Object(o.jsx)(b,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(i,{showAlert:p,heading:"Enter Your Text Here",mode:c})})]})]})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.b2dc6bf5.chunk.js.map