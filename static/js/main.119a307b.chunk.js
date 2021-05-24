(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(16),i=n.n(r),a=(n(34),n(25)),l=n(26),o=n(29),u=n(27),j=(n(35),n(11)),d=n(4),b=n(0),m=Object(d.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return{setActiveUser:function(t){return e({type:"setActiveUser",activeUser:t})}}}))((function(e){var t=e.activeUser,n=e.setActiveUser;return Object(b.jsx)("header",{id:"div-header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{id:"p-logo",children:"Blog App"}),t?Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"img/user.png",alt:"profile"}),Object(b.jsx)("h3",{children:t.username}),Object(b.jsx)(j.b,{id:"btn-logout",to:"/",children:Object(b.jsx)("span",{className:"material-icons",onClick:function(){alert("Log out"),n(null)},children:"logout"})})]}):null]})})})),O=n(3),p=(n(24),Object(d.b)((function(e){return{users:e.users}}),(function(e){return{setActiveUser:function(t){return e({type:"setActiveUser",activeUser:t})}}}))((function(e){var t=e.displaySignUpFormClickHandler,n=e.users,s=e.setActiveUser,r=Object(c.useState)(""),i=Object(O.a)(r,2),a=i[0],l=i[1],o=Object(c.useState)(""),u=Object(O.a)(o,2),d=u[0],m=u[1],p=Object(c.useState)(!1),h=Object(O.a)(p,2),f=h[0],v=h[1],x=Object(c.useState)(!1),g=Object(O.a)(x,2),y=g[0],C=g[1];return Object(b.jsxs)("div",{className:"form",id:"div-login-form",children:[Object(b.jsx)("h2",{children:"Log In"}),Object(b.jsx)("input",{type:"text",placeholder:"Email/Phone Number",value:a,onChange:function(e){l(e.target.value),v(!1),C(!1)}}),Object(b.jsx)("input",{type:"password",placeholder:"Password",value:d,onChange:function(e){m(e.target.value),v(!1),C(!1)}}),f?Object(b.jsx)("p",{id:"p-error-empty",children:Object(b.jsx)("small",{children:"*All fields must be filled out."})}):null,y?Object(b.jsx)("p",{id:"p-error-invalid",children:Object(b.jsx)("small",{children:"*Invalid username/password."})}):null,Object(b.jsx)("button",{className:"button-link",onClick:function(){return t(!0)},children:Object(b.jsx)("small",{children:"Don't have an account yet?"})}),Object(b.jsx)("button",{className:"button-link",children:Object(b.jsx)("small",{children:"Forgot password?"})}),Object(b.jsx)(j.b,{id:"btn-login",to:"/user",onClick:function(e){var t;""===a||""===d?(v(!0),e.preventDefault()):(n.map((function(e){if(e.emailNumber===a&&e.password===d)return t=e})),t?(s(t),alert("Log in successful!")):(C(!0),e.preventDefault()))},children:"Log In"})]})}))),h=n(53),f=Object(d.b)((function(e){return{users:e.users}}),(function(e){return{addUser:function(t){return e({type:"addUser",user:t})}}}))((function(e){var t=e.displaySignUpFormClickHandler,n=e.users,s=e.addUser,r=Object(c.useState)(""),i=Object(O.a)(r,2),a=i[0],l=i[1],o=Object(c.useState)(""),u=Object(O.a)(o,2),j=u[0],d=u[1],m=Object(c.useState)(""),p=Object(O.a)(m,2),f=p[0],v=p[1],x=Object(c.useState)(""),g=Object(O.a)(x,2),y=g[0],C=g[1],U=Object(c.useState)(!1),w=Object(O.a)(U,2),N=w[0],S=w[1],k=Object(c.useState)(!1),P=Object(O.a)(k,2),A=P[0],F=P[1],I=Object(c.useState)(!1),L=Object(O.a)(I,2),E=L[0],H=L[1];return Object(b.jsxs)("div",{className:"form",id:"div-signup-form",children:[Object(b.jsx)("h2",{children:"Create account "}),Object(b.jsx)("input",{type:"text",placeholder:"Username",value:j,onChange:function(e){d(e.target.value),F(!1)}}),Object(b.jsx)("input",{type:"text",placeholder:"Email/Phone Number",value:a,onChange:function(e){l(e.target.value),F(!1),S(!1)}}),Object(b.jsx)("input",{type:"password",placeholder:"Password",value:f,onChange:function(e){v(e.target.value),F(!1),H(!1)}}),Object(b.jsx)("input",{type:"password",placeholder:"Confirm Password",value:y,onChange:function(e){C(e.target.value),F(!1),H(!1)}}),A?Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:"*All fields must be filled out."})}):null,E?Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:"*Password did not match."})}):null,N?Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:"*Email/Number already exist."})}):null,Object(b.jsx)("button",{className:"button-link",onClick:function(){return t(!1)},children:Object(b.jsx)("small",{children:"Back to login."})}),Object(b.jsx)("button",{onClick:function(){if(""===a||""===j||""===f||""===y)F(!0);else if(f!==y)H(!0);else{var e=!1;if(n.forEach((function(t){return t.emailNumber===a?e=!0:null})),1==e)S(!0);else{var c={id:Object(h.a)(),username:j,emailNumber:a,password:f};s(c),alert("You may now log in your new account."),t(!1)}}},children:"Sign Up"})]})})),v=(n(42),function(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],s=t[1],r=function(e){s(e)};return Object(b.jsxs)("div",{id:"div-login-page",children:[Object(b.jsx)("img",{src:"img/social.png",alt:"social"}),n?Object(b.jsx)(f,{displaySignUpFormClickHandler:r}):Object(b.jsx)(p,{displaySignUpFormClickHandler:r})]})}),x=(n(43),n(44),Object(d.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return{addPost:function(t){return e({type:"addPost",post:t})}}}))((function(e){var t=e.activeUser,n=e.addPost,s=Object(c.useState)(""),r=Object(O.a)(s,2),i=r[0],a=r[1],l=Object(c.useState)(""),o=Object(O.a)(l,2),u=o[0],j=o[1];return Object(b.jsxs)("div",{id:"div-post-form",children:[Object(b.jsx)("img",{src:"img/user.png",alt:"profile"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("textarea",{placeholder:"Hi, "+t.username+"! Want to share your thought with us? ",className:u,value:i,onChange:function(e){a(e.target.value),j("")}}),Object(b.jsx)("button",{onClick:function(){""===i?j("border-primary-color"):(n({id:Object(h.a)(),user:t.id,post:i.trim()}),a(""))},children:"Post"})]})]})}))),g=(n(45),Object(d.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return{addComment:function(t){return e({type:"addComment",comment:t})}}}))((function(e){var t=e.postId,n=e.activeUser,s=e.addComment,r=Object(c.useState)(""),i=Object(O.a)(r,2),a=i[0],l=i[1],o=Object(c.useState)(""),u=Object(O.a)(o,2),j=u[0],d=u[1];return Object(b.jsxs)("div",{id:"div-comment-form",children:[Object(b.jsx)("img",{src:"img/user.png",alt:"profile"}),Object(b.jsx)("textarea",{placeholder:"Write a comment here.",value:a,onChange:function(e){l(e.target.value),d("")},className:j}),Object(b.jsx)("button",{onClick:function(){""===a?d("border-primary-color"):(s({id:Object(h.a)(),post:t,user:n.id,comment:a.trim()}),l(""))},children:Object(b.jsx)("span",{class:"material-icons",children:"arrow_forward"})})]})}))),y=(n(46),n(47),Object(d.b)((function(e){return{users:e.users}}))((function(e){var t=e.replyComment,n=e.users;return Object(b.jsxs)("div",{className:"div-comment",children:[Object(b.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1620954866~hmac=7fef0438734cea2af5c6ed16095d82f8",alt:"profile"}),Object(b.jsxs)("div",{className:"div-comment-inner-container",children:[Object(b.jsxs)("h5",{children:[n.map((function(e){return e.id===t.user?e.username:null})),Object(b.jsx)("small",{children:"Just now"})]}),Object(b.jsx)("p",{children:t.replyComment})]})]})}))),C=(n(48),Object(d.b)((function(e){return{activeUser:e.activeUser}}),(function(e){return{addReplyComment:function(t){return e({type:"addReplyComment",replyComment:t})}}}))((function(e){var t=e.commentId,n=e.activeUser,s=e.addReplyComment,r=Object(c.useState)(""),i=Object(O.a)(r,2),a=i[0],l=i[1],o=Object(c.useState)(""),u=Object(O.a)(o,2),j=u[0],d=u[1];return Object(b.jsxs)("div",{id:"div-reply-comment-form",children:[Object(b.jsx)("img",{src:"img/user.png",alt:"profile"}),Object(b.jsx)("textarea",{placeholder:"Write a reply here.",value:a,onChange:function(e){l(e.target.value),d("")},className:j}),Object(b.jsx)("button",{onClick:function(){""===a?d("border-primary-color"):(s({id:Object(h.a)(),comment:t,user:n.id,replyComment:a}),l(""))},children:Object(b.jsx)("span",{class:"material-icons",children:"arrow_forward"})})]})}))),U=Object(d.b)((function(e){return{users:e.users,replyComments:e.replyComments}}))((function(e){var t=e.comment,n=e.users,s=e.replyComments,r=Object(c.useState)(!1),i=Object(O.a)(r,2),a=i[0],l=i[1];return Object(b.jsxs)("div",{className:"div-comment",children:[Object(b.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1620954866~hmac=7fef0438734cea2af5c6ed16095d82f8",alt:"profile"}),Object(b.jsxs)("div",{className:"div-comment-inner-container",children:[Object(b.jsxs)("h5",{children:[n.map((function(e){return e.id===t.user?e.username:null})),Object(b.jsx)("small",{children:"Just now"})]}),Object(b.jsxs)("p",{children:[t.comment,Object(b.jsx)("button",{onClick:function(){l(!0)},children:Object(b.jsx)("span",{class:"material-icons",children:"reply"})})]}),0!=s.filter((function(e){return e.comment===t.id})).length?Object(b.jsx)("p",{class:"p-title-replies",children:Object(b.jsx)("small",{children:"Replies"})}):null,s.map((function(e){return e.comment===t.id?Object(b.jsx)(y,{replyComment:e}):null})),a?Object(b.jsx)(C,{commentId:t.id}):null]})]})})),w=(n(49),Object(d.b)((function(e){return{users:e.users,comments:e.comments}}))((function(e){var t=e.post,n=e.users,c=e.comments;return Object(b.jsxs)("div",{className:"div-post",children:[Object(b.jsxs)("div",{className:"div-post-header",children:[Object(b.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1620954866~hmac=7fef0438734cea2af5c6ed16095d82f8",alt:"profile"}),Object(b.jsxs)("h4",{children:[n.map((function(e){return e.id===t.user?e.username:null})),Object(b.jsx)("br",{}),Object(b.jsx)("small",{children:"Just now"})]})]}),Object(b.jsx)("p",{className:"p-post",children:t.post}),Object(b.jsxs)("div",{className:"div-button-group",children:[Object(b.jsxs)("button",{children:["0",Object(b.jsx)("span",{class:"material-icons",children:"favorite_border"})]}),Object(b.jsxs)("button",{children:[c.filter((function(e){return e.post===t.id})).length,Object(b.jsx)("span",{class:"material-icons",children:"chat_bubble_outline"})]}),Object(b.jsxs)("button",{children:["0",Object(b.jsx)("span",{class:"material-icons",children:"share"})]})]}),Object(b.jsxs)("div",{className:"div-comments-container",children:[Object(b.jsxs)("div",{classsName:"div-comments-inner-container",children:[0!=c.filter((function(e){return e.post===t.id})).length?Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:"Comments"})}):null,c.map((function(e){return e.post===t.id?Object(b.jsx)(U,{comment:e}):null}))]}),Object(b.jsx)(g,{postId:t.id})]})]})}))),N=Object(d.b)((function(e){return{posts:e.posts,activeUser:e.activeUser}}))((function(e){var t=e.posts;e.activeUser;return Object(b.jsxs)("div",{id:"div-user-page",children:[Object(b.jsx)(x,{}),t.map((function(e){return Object(b.jsx)(w,{post:e})})).reverse()]})})),S=(n(50),n(5)),k=function(){return Object(b.jsxs)("div",{id:"div-body",class:"container",children:[Object(b.jsx)(S.a,{path:"/",exact:!0,children:Object(b.jsx)(v,{})}),Object(b.jsx)(S.a,{path:"/user",exact:!0,children:Object(b.jsx)(N,{})})]})},P=(n(51),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"div-app",children:[Object(b.jsx)(m,{}),Object(b.jsx)(k,{})]})}}]),n}(s.a.Component)),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))},F=n(28),I=n(10),L=n(15),E={users:[],activeUser:"",posts:[],comments:[],replyComments:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addUser":var n=Object(L.a)(e.users);return n.push(t.user),Object(I.a)(Object(I.a)({},e),{},{users:n});case"setActiveUser":return Object(I.a)(Object(I.a)({},e),{},{activeUser:t.activeUser});case"addPost":var c=Object(L.a)(e.posts);return c.push(t.post),Object(I.a)(Object(I.a)({},e),{},{posts:c});case"addComment":var s=Object(L.a)(e.comments);return s.push(t.comment),Object(I.a)(Object(I.a)({},e),{},{comments:s});case"addReplyComment":var r=Object(L.a)(e.replyComments);return r.push(t.replyComment),Object(I.a)(Object(I.a)({},e),{},{replyComments:r});default:return e}},J=Object(F.a)(H);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(d.a,{store:J,children:Object(b.jsx)(P,{})})})}),document.getElementById("root")),A()}},[[52,1,2]]]);
//# sourceMappingURL=main.119a307b.chunk.js.map