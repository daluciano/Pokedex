(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{115:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(14),r=t.n(c),o=t(49),i=t.n(o),s=t(8),m=t(60),u=t(59),d=t(58),E=t(0),b=(t(76),t(30)),h=t(50),p=t(51),f=t(66),v=t(52),g=t(16),y=t(67),w=t(120),k=t(121),O=t(122),j=t(31),N=t.n(j),C=t(19),x=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).state={showModal:!1,Email:null,Password:null,redirect:!1},t.handleChangeMail=t.handleChangeMail.bind(Object(g.a)(t)),t.handleChangePassword=t.handleChangePassword.bind(Object(g.a)(t)),t.handleRedirect=t.handleRedirect.bind(Object(g.a)(t)),t}return Object(y.a)(a,e),Object(p.a)(a,[{key:"handleRedirect",value:function(e){"daluciano@hotmail.com"===this.state.Email&&"123123"===this.state.Password&&e.push("/LoginSucces")}},{key:"handleChangeMail",value:function(e){this.setState({Email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({Password:e.target.value})}},{key:"componentDidUpdate",value:function(e,a){a.showModal!==e.showModal&&this.setState({showModal:e.showModal})}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,{show:this.state.showModal},l.a.createElement(w.a.Header,{className:N.a.close2,closeButton:!0,onClick:function(){e.setState({showModal:!1})}},l.a.createElement(w.a.Title,null,"Inicia sesi\xf3n a pokedex")),l.a.createElement(w.a.Body,null,l.a.createElement(k.a,null,l.a.createElement(k.a.Group,{controlId:"formBasicEmail"},l.a.createElement(k.a.Label,null,"Email address"),l.a.createElement(k.a.Control,{value:this.state.value,type:"email",placeholder:"Enter email",onChange:this.handleChangeMail}),l.a.createElement(k.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(k.a.Group,{controlId:"formBasicPassword"},l.a.createElement(k.a.Label,null,"Password"),l.a.createElement(k.a.Control,{type:"password",placeholder:"Password",value:this.state.value,onChange:this.handleChangePassword})),l.a.createElement(k.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(k.a.Check,{type:"checkbox",label:"Remember me"})),l.a.createElement(C.a,{render:function(a){var t,n=a.history;return l.a.createElement(O.a,(t={type:"button",className:N.a.close2},Object(b.a)(t,"type","submit"),Object(b.a)(t,"onClick",(function(){e.handleRedirect(n)})),t),"Log in")}}))))}}]),a}(l.a.Component),P=t(20);t(57);function _(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1];return l.a.createElement("nav",{className:"navbar navbar-expand-md ",style:{fontFamily:"cursive"}},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(P.b,{id:"Pokedex",to:"/",className:"nav-item mainButton",style:{display:"flex"}},l.a.createElement(E.b.Provider,{value:{color:"white",size:"2rem",marginTop:"-6px",className:" mainButton"}},l.a.createElement(d.a,null)),"Pokedex"),l.a.createElement(P.b,{to:"/Page2",className:"nav-item mainButton",style:{display:"flex",marginLeft:"2rem"}},"Segunda Generaci\xf3n")),l.a.createElement("ul",{className:"navbar-nav ml-auto",style:{display:"inline-block"}},l.a.createElement("button",{type:"button",className:"btn btn-primary sigIn",style:{marginRight:"1rem"},onClick:function(){c(!t)}},l.a.createElement(u.a,null)," Log in"),l.a.createElement(x,{showModal:t}),l.a.createElement("button",{type:"button",className:"btn btn-primary sigIn",style:{display:"inline-block"}},l.a.createElement(m.a,null)," Sign up")))}function S(){return l.a.createElement("div",{className:i.a.header},l.a.createElement(_,null))}var F=t(17),M=t.n(F),T=t(23),D=t.n(T),I=t(61),L=t(63),B=(t(115),t(62)),R=t.n(B);function z(){var e=Object(I.a)(["\n  width: 6em !important;\n  height: 6em !important;\n"]);return z=function(){return e},e}L.a.img(z());var G={fire:"#FDDFDF",grass:"#DEFDE0",electric:"#FCF7DE",water:"#DEF3FD",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#98d7a5",bug:"#f8d5a3",dragon:"#97b3e6",psychic:"#eaeda1",flying:"#F5F5F5",fighting:"#E6E0D4",normal:"#F5F5F5"};Object.keys(G);function J(e){var a=Object(n.useState)(),t=Object(s.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(),E=Object(s.a)(d,2),b=E[0],h=E[1],p=Object(n.useState)(),f=Object(s.a)(p,2),v=f[0],g=f[1],y=Object(n.useState)([]),w=Object(s.a)(y,2),k=w[0],O=w[1],j=Object(n.useState)(!1),N=Object(s.a)(j,2),C=N[0],x=N[1],P=Object(n.useState)(!0),_=Object(s.a)(P,2),S=_[0],F=_[1];return Object(n.useEffect)((function(){var a;return F(!0),D.a.get(e.url,{cancelToken:new D.a.CancelToken((function(e){return a=e}))}).then((function(e){F(!1),r(e.data.name),u("https://pokeres.bastionbot.org/images/pokemon/".concat(e.data.id,".png")),h(e.data.id),g(e.data.types[0].type.name),O(e.data.stats)})),function(){return a()}}),[e]),S?"Loading...":l.a.createElement(R.a,{isFlipped:C,flipDirection:"horizontal"},l.a.createElement("div",{class:"pokemon",style:{backgroundColor:G["".concat(v)],cursor:"pointer"},onClick:function(){return x(!C)}},l.a.createElement("div",{class:"img-container"},l.a.createElement("img",{src:m,alt:"${props.name}"})),l.a.createElement("div",{class:"info"},l.a.createElement("span",{class:"number"},"#",b),l.a.createElement("div",{class:"name"},c))),l.a.createElement("div",{class:"pokemon",style:{backgroundColor:G["".concat(v)],cursor:"pointer"},onClick:function(){return x(!C)}},l.a.createElement("div",{class:"info2"},k.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",null,e.stat.name," "),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(e.base_stat,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},e.base_stat)))})))))}function A(e){var a=e.gotoPrevPage,t=e.gotoNextPage;return l.a.createElement("div",{style:{textAlign:"center"}},a&&l.a.createElement("button",{type:"button",className:"btn btn-primary sigIn",style:{display:"inline-block"},onClick:a},"Previous"),t&&l.a.createElement("button",{type:"button",className:"btn btn-primary sigIn",style:{display:"inline-block"},onClick:t},"Next"))}function H(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?limit=5&offset=".concat(e.offset)),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(),E=Object(s.a)(d,2),b=E[0],h=E[1],p=Object(n.useState)(),f=Object(s.a)(p,2),v=f[0],g=f[1],y=Object(n.useState)(!0),w=Object(s.a)(y,2),k=w[0],O=w[1];return Object(n.useEffect)((function(){var e;return O(!0),D.a.get(m,{cancelToken:new D.a.CancelToken((function(a){return e=a}))}).then((function(e){O(!1),h(e.data.next),g(e.data.previous),r(e.data.results.map((function(e){return e})))})),function(){return e()}}),[m]),k?"Loading...":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},c.map((function(e,a){return l.a.createElement(J,{name:e.name,url:e.url,index:a})}))),l.a.createElement(A,{gotoNextPage:b?function(){u(b)}:null,gotoPrevPage:v?function(){u(v)}:null}))}function Q(){return l.a.createElement("div",{className:M.a.section},l.a.createElement("div",null,l.a.createElement("div",{className:"col container",style:{width:"50%"}},l.a.createElement("h1",{className:M.a.Title}," segunda generaci\xf3n "),l.a.createElement(H,{offset:151}))))}function U(){return l.a.createElement("div",{className:M.a.section},l.a.createElement("div",null,l.a.createElement("div",{className:"col container",style:{width:"50%"}},l.a.createElement("h1",{className:M.a.Title}," Primera generaci\xf3n "),l.a.createElement(H,{offset:0}))))}var V=function(e){return l.a.createElement("div",{className:M.a.section},l.a.createElement("div",null,l.a.createElement("div",{className:"col container",style:{width:"50%"}},l.a.createElement("h1",{className:M.a.Title}," Iniciaste sesi\xf3n correctamente!"))))},W=function(){return l.a.createElement("main",null,l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:"/",component:U}),l.a.createElement(C.a,{path:"/Page2",component:Q}),l.a.createElement(C.a,{path:"/LoginSucces",component:V})))},Y=t(24),$=t.n(Y),q=t(28);function K(){return l.a.createElement("div",{className:$.a.footer},l.a.createElement("div",{className:$.a.content},l.a.createElement(E.b.Provider,{value:{size:"2rem",className:$.a.pointer}},l.a.createElement("div",{onClick:function(){window.location.href="https://www.linkedin.com/in/luciano-damico/"}},l.a.createElement(q.b,null),l.a.createElement("a",{style:{color:"white",display:"block",cursor:"pointer"}},"My linkedin")))),l.a.createElement("div",{className:$.a.content},l.a.createElement(E.b.Provider,{value:{color:"white",size:"2rem"}},l.a.createElement("div",null,l.a.createElement(q.c,null),l.a.createElement("a",{style:{color:"white",display:"block"}},"2216398793")))),l.a.createElement("div",{className:$.a.content},l.a.createElement(E.b.Provider,{value:{color:"white",size:"2rem"}},l.a.createElement("div",null,l.a.createElement(q.a,null),l.a.createElement("a",{style:{color:"white",display:"block"}},"daluciano@hotmail.com")))))}t(116);var X=function(){return l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(W,null),l.a.createElement(K,null))};r.a.render(l.a.createElement(P.a,null,l.a.createElement(X,null)),document.getElementById("root"))},17:function(e,a,t){e.exports={section:"section_section__3g0cm",Title:"section_Title__19YQ6"}},24:function(e,a,t){e.exports={footer:"footer_footer__3-SRb",content:"footer_content__2nibL",copyright:"footer_copyright__2D1yz",pointer:"footer_pointer__Sw05i"}},31:function(e,a,t){e.exports={close2:"modal_close2__OTbV9"}},49:function(e,a,t){e.exports={header:"header_header__ucSgR"}},71:function(e,a,t){e.exports=t(117)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.bf7d03c4.chunk.js.map