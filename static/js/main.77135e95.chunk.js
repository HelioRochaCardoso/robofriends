(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{50:function(e,t,a){e.exports=a(66)},59:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),l=a.n(r),c=a(32),i=a(19),s=a(43),u=a(44),d=(a(59),a(27)),m=a(28),h=a(35),b=a(33),E=function(e){var t=e.name,a=e.email,n=e.id,r=e.toggle;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",onClick:r,id:n},o.a.createElement("img",{alt:"robot",src:"https://robohash.org//".concat(n,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,a)))},g=function(e){var t=e.robots,a=e.toggleModal;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(E,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email,toggle:a})})))},p=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t}))},f=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(m.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops, that is not good"):this.props.children}}]),a}(n.Component),O=a(46),y=a(92),C=a(97),R=a(96),w=a(94),S=a(98),j=a(95),N=a(45),_=o.a.forwardRef((function(e,t){return o.a.createElement(S.a,Object.assign({direction:"left",ref:t},e))})),D=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:e.spacing(0,2,0,2)},paper:{backgroundColor:"white",borderRadius:"5px",padding:e.spacing(2,4,2)}}}));function M(e){var t=e.onOpen,a=e.onClose,n=e.showRobot||{},r=D(),l=o.a.useState(t),c=Object(O.a)(l,2),i=(c[0],c[1]),s=n.id,u=n.name,d=n.username,m=void 0===d?"No username available":d,h=n.email,b=void 0===h?"No email available":h,E=n.website,g=void 0===E?"No website available":E,p=n.phone,f=void 0===p?"No phone available":p,v=n.address,y=(v=void 0===v?{city:"No city available",zipcode:"No zipcode available"}:v).city,S=v.zipcode,M=n.company,I=(M=void 0===M?{catchPhrase:"No motto available"}:M).catchPhrase,T=M.name,k=void 0===T?"No company name available":T,A=function(){i(a)};return Object(N.isEmpty)(n)?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{open:t,TransitionComponent:_,className:r.modal,keepMounted:!0,onClose:A,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(w.a,{className:r.paper},o.a.createElement("img",{alt:"robot",src:"https://robohash.org//".concat(s,"?200x200")}),o.a.createElement(j.a,{variant:"h4"},u),o.a.createElement("ul",{style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement("strong",null,"Username:")," ",o.a.createElement("i",null,m)),o.a.createElement("li",null,o.a.createElement("strong",null,"Email:")," ",o.a.createElement("i",null,b)),o.a.createElement("li",null,o.a.createElement("strong",null,"Phone:")," ",o.a.createElement("i",null,f)),o.a.createElement("li",null,o.a.createElement("strong",null,"Website:")," ",o.a.createElement("i",null,g)),o.a.createElement("li",null,o.a.createElement("strong",null,"City:")," ",o.a.createElement("i",null,y)),o.a.createElement("li",null,o.a.createElement("strong",null,"Company:")," ",o.a.createElement("i",null,k)),o.a.createElement("li",null,o.a.createElement("strong",null,"Motto:")," ",o.a.createElement("i",null,I)),o.a.createElement("li",null,o.a.createElement("strong",null,"Zip Code:")," ",o.a.createElement("i",null,S)))),o.a.createElement(C.a,{onClick:A,color:"primary"},"Close")))}a(61);var I=function(e){return{type:"CHANGE_ROBOT_ID",payload:parseInt(e)}},T=function(e){return{type:e?"SHOW_MODAL":"HIDE_MODAL",payload:e}},k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,a=e.onSearchChange,n=e.onChangeRobot,r=e.onHideModal,l=e.robots,c=e.isPending,i=e.robotID,s=e.showModal,u=l.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),d=l[i-1];return c?o.a.createElement("h1",{className:"tc"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(p,{searchChange:a}),o.a.createElement(f,null,o.a.createElement(v,null,o.a.createElement(M,{showRobot:d,onOpen:s,onClose:r}),o.a.createElement(g,{robots:u,toggleModal:n}))))}}]),a}(n.Component),A=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error,robotID:e.robotSelected.robotID,showModal:e.toggleModal.showModal}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))},onChangeRobot:function(t){e(T(!0)),e(I(t.currentTarget.id))},onHideModal:function(){e(T(!1)),e(I(-1))}}}))(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62),a(63),a(64),a(65);var H={searchField:""},L={isPending:!1,robots:[],error:""},P={robotID:-1},F={showModal:!1},B=Object(s.createLogger)(),U=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},robotSelected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_ROBOT_ID":return Object.assign({},e,{robotID:t.payload});default:return e}},toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SHOW_MODAL":return Object.assign({},e,{showModal:!0});case"HIDE_MODAL":return Object.assign({},e,{showModal:!1});default:return e}}}),x=Object(i.d)(U,Object(i.a)(u.a,B));l.a.render(o.a.createElement(c.a,{store:x},o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.77135e95.chunk.js.map