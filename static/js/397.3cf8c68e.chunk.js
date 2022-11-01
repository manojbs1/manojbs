"use strict";(self.webpackChunkreact_material_admin=self.webpackChunkreact_material_admin||[]).push([[397],{87397:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var o=r(39846),i=r(14872),t=r(89426),a=r(70885),s=r(4942),l=r(63366),c=r(87462),d=r(72791),u=r(28182),m=r(80163),g=r(43234),h=r(67538),p=r(58333),x=r(81504),Z=r(30890),v=r(55477),f=r(34923);function b(e){return(0,f.Z)("MuiLink",e)}var j=(0,r(50782).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=r(80184),y=(0,h.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.styleProps;return(0,c.Z)({},n.root,n["underline".concat((0,g.Z)(r.underline))],"button"===r.component&&n.button)}})((function(e){var n=e.styleProps;return(0,c.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline"},"button"===n.component&&(0,s.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(j.focusVisible),{outline:"auto"}))})),k=d.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiLink"}),o=r.className,i=r.color,t=void 0===i?"primary":i,s=r.component,h=void 0===s?"a":s,v=r.onBlur,f=r.onFocus,j=r.TypographyClasses,k=r.underline,C=void 0===k?"hover":k,T=r.variant,W=void 0===T?"inherit":T,B=(0,l.Z)(r,["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),D=(0,x.Z)(),R=D.isFocusVisibleRef,S=D.onBlur,V=D.onFocus,L=D.ref,q=d.useState(!1),A=(0,a.Z)(q,2),F=A[0],M=A[1],P=(0,Z.Z)(n,L),_=(0,c.Z)({},r,{color:t,component:h,focusVisible:F,underline:C,variant:W}),z=function(e){var n=e.classes,r=e.component,o=e.focusVisible,i=e.underline,t={root:["root","underline".concat((0,g.Z)(i)),"button"===r&&"button",o&&"focusVisible"]};return(0,m.Z)(t,b,n)}(_);return(0,w.jsx)(y,(0,c.Z)({className:(0,u.Z)(z.root,o),classes:j,color:t,component:h,onBlur:function(e){S(e),!1===R.current&&M(!1),v&&v(e)},onFocus:function(e){V(e),!0===R.current&&M(!0),f&&f(e)},ref:P,styleProps:_,variant:W},B))})),C=r(93383),T=r(35924),W=r(22263),B=r(55705),D=r(22020),R=r(16871),S=r(43504),V=r(53135),L=r(93669),q=r(61028),A=r(76687),F=function(){var e=(0,A.aC)(),n=e.isLoggingIn,r=e.login,a=(0,R.s0)(),s=(0,q.Ds)(),l=(0,D.$)().t,c=(0,B.TA)({initialValues:{email:"demo@example.com",password:"guWEK<'r/-47-XG3"},validationSchema:V.Ry({email:V.Z_().email(l("common.validations.email")).required(l("common.validations.required")),password:V.Z_().min(8,l("common.validations.min",{size:8})).required(l("common.validations.required"))}),onSubmit:function(e){return n=e.email,o=e.password,void r(n,o).then((function(){return a("/".concat("","/admin"),{replace:!0})})).catch((function(){return s.error(l("common.errors.unexpected.subTitle"))}));var n,o}});return(0,w.jsxs)(t.Z,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,w.jsx)(t.Z,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(./img/startup.svg)",backgroundRepeat:"no-repeat",bgcolor:"background.default",backgroundSize:"cover",backgroundPosition:"center"}}),(0,w.jsx)(t.Z,{item:!0,xs:12,sm:8,md:5,component:C.Z,square:!0,children:(0,w.jsxs)(L.Z,{children:[(0,w.jsx)(v.Z,{component:"h1",variant:"h5",children:l("auth.login.title")}),(0,w.jsxs)(o.Z,{component:"form",marginTop:3,noValidate:!0,onSubmit:c.handleSubmit,children:[(0,w.jsx)(T.Z,{margin:"normal",variant:"filled",required:!0,fullWidth:!0,id:"email",label:l("auth.login.form.email.label"),name:"email",autoComplete:"email",autoFocus:!0,disabled:n,value:c.values.email,onChange:c.handleChange,error:c.touched.email&&Boolean(c.errors.email),helperText:c.touched.email&&c.errors.email}),(0,w.jsx)(T.Z,{margin:"normal",variant:"filled",required:!0,fullWidth:!0,name:"password",label:l("auth.login.form.password.label"),type:"password",id:"password",autoComplete:"current-password",disabled:n,value:c.values.password,onChange:c.handleChange,error:c.touched.password&&Boolean(c.errors.password),helperText:c.touched.password&&c.errors.password}),(0,w.jsx)(o.Z,{sx:{textAlign:"right"},children:(0,w.jsx)(k,{component:S.rU,to:"/".concat("","/forgot-password"),variant:"body2",children:l("auth.login.forgotPasswordLink")})}),(0,w.jsx)(W.Z,{type:"submit",fullWidth:!0,loading:n,variant:"contained",sx:{mt:3},children:l("auth.login.submit")}),(0,w.jsx)(i.Z,{component:S.rU,to:"/".concat("","/register"),color:"primary",fullWidth:!0,sx:{mt:2},children:l("auth.login.newAccountLink")})]})]})})]})}},93669:function(e,n,r){var o=r(70885),i=r(72336),t=r(39846),a=r(99300),s=r(13814),l=r(71217),c=r(44807),d=r(42413),u=r(43115),m=r(72791),g=r(10607),h=r(98799),p=r(80184);n.Z=function(e){var n=e.children,r=(0,c.Z)(),x=(0,m.useState)(!1),Z=(0,o.Z)(x,2),v=Z[0],f=Z[1],b=function(){f(!v)};return(0,p.jsxs)(m.Fragment,{children:[(0,p.jsx)(s.Z,{styles:{body:{backgroundColor:r.palette.background.paper}}}),(0,p.jsx)(i.Z,{color:"transparent",position:"relative",children:(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(t.Z,{sx:{flexGrow:1}}),(0,p.jsx)(l.Z,{"aria-label":"settings",component:"span",onClick:b,children:(0,p.jsx)(u.Z,{})})]})}),(0,p.jsx)(a.Z,{component:"main",maxWidth:"xs",sx:{mt:6},children:(0,p.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(g.Z,{sx:{mb:2}}),n,(0,p.jsx)(t.Z,{children:(0,p.jsx)(h.Z,{onDrawerToggle:b,open:v})})]})})]})}},98799:function(e,n,r){var o=r(39846),i=r(61266),t=r(5068),a=r(31517),s=r(71217),l=r(61249),c=r(1573),d=r(18860),u=r(36030),m=r(55477),g=r(30014),h=r(22020),p=r(40580),x=r(15033),Z=r(80184);n.Z=function(e){var n=e.onDrawerToggle,r=e.open,v=(0,x.rV)(),f=v.changeCollapsed,b=v.changeDirection,j=v.changeMode,w=v.collapsed,y=v.direction,k=v.mode,C=(0,h.$)(),T=C.i18n,W=C.t;return(0,Z.jsxs)(i.ZP,{anchor:"left",open:r,onClose:n,sx:{"& .MuiDrawer-paper":{width:p.R}},variant:"temporary",children:[(0,Z.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[(0,Z.jsx)(m.Z,{variant:"h5",children:W("settings.drawer.title")}),(0,Z.jsx)(s.Z,{color:"inherit",onClick:n,edge:"end",children:(0,Z.jsx)(g.Z,{})})]}),(0,Z.jsxs)(o.Z,{sx:{pl:2,pr:2},children:[(0,Z.jsx)(m.Z,{gutterBottom:!0,id:"settings-language",marginTop:3,variant:"h6",children:W("settings.drawer.language.label")}),(0,Z.jsx)(t.Z,{children:(0,Z.jsx)(c.Z,{"aria-label":"language",name:"language-radio-group",onChange:function(e){T.changeLanguage(e.target.value)},value:T.language,children:(0,Z.jsx)(a.Z,{value:"en",control:(0,Z.jsx)(l.Z,{}),label:W("settings.drawer.language.options.en")})})}),(0,Z.jsx)(m.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:W("settings.drawer.mode.label")}),(0,Z.jsxs)(u.Z,{color:"primary",value:k,exclusive:!0,fullWidth:!0,onChange:function(e,n){j(n)},children:[(0,Z.jsx)(d.Z,{value:"light",children:W("settings.drawer.mode.options.light")}),(0,Z.jsx)(d.Z,{value:"dark",children:W("settings.drawer.mode.options.dark")})]}),(0,Z.jsx)(m.Z,{gutterBottom:!0,id:"settings-mode",marginTop:3,variant:"h6",children:W("settings.drawer.direction.label")}),(0,Z.jsxs)(u.Z,{color:"primary",value:y,exclusive:!0,fullWidth:!0,onChange:function(e,n){b(n)},children:[(0,Z.jsx)(d.Z,{value:"ltr",children:W("settings.drawer.direction.options.ltr")}),(0,Z.jsx)(d.Z,{value:"rtl",children:W("settings.drawer.direction.options.rtl")})]}),(0,Z.jsx)(m.Z,{gutterBottom:!0,id:"settings-sidebar",marginTop:3,variant:"h6",children:W("settings.drawer.sidebar.label")}),(0,Z.jsxs)(u.Z,{color:"primary",value:w,exclusive:!0,fullWidth:!0,onChange:function(e,n){f(n)},children:[(0,Z.jsx)(d.Z,{value:!0,children:W("settings.drawer.sidebar.options.collapsed")}),(0,Z.jsx)(d.Z,{value:!1,children:W("settings.drawer.sidebar.options.full")})]})]})]})}},40580:function(e,n,r){r.d(n,{E:function(){return o},R:function(){return i}});var o=104,i=280}}]);
//# sourceMappingURL=397.3cf8c68e.chunk.js.map