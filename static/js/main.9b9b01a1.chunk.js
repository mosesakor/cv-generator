(this["webpackJsonpcv-generator"]=this["webpackJsonpcv-generator"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,d,l,u,s,j,m,b,p,h,f,x,g,O,v,y,C,k,I,A,D,N,E,w,P,F,T,H,S,z=t(1),L=t.n(z),R=t(11),U=t.n(R),M=t(2),B=t(3),J=t(9),V=t(0),W=M.d.header(r||(r=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  padding: 2rem;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.light})),_=M.d.div(o||(o=Object(B.a)(["\n  display: flex;\n  margin-right: 1rem;\n  font-size: 4rem;\n"]))),q=function(){return Object(V.jsxs)(W,{children:[Object(V.jsx)(_,{children:Object(V.jsx)(J.a,{})}),Object(V.jsx)("h1",{children:"CV Creator"})]})},G=t(6),Q=t(5),X=t(4),Y=t(23),K=t(35),Z=t(19),$=M.d.input(c||(c=Object(B.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),ee=function(e){var n=e.type,t=e.name,r=e.placeholder,o=e.onChange,c=e.value;return Object(V.jsx)($,{onChange:o,type:n,name:t,placeholder:r,value:c})},ne=M.d.section(i||(i=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: ",";\n  margin-bottom: 2rem;\n"])),(function(e){return e.padding})),te=M.d.h3(a||(a=Object(B.a)(["\n  padding: ",";\n\n  ","\n"])),(function(e){return e.padding}),(function(e){return e.contrast&&Object(M.c)(d||(d=Object(B.a)(["\n      border-bottom: 1px solid ",";\n      color: ",";\n    "])),(function(e){return e.theme.colors.lightBorder}),(function(e){return e.theme.colors.blue}))})),re=M.d.div(l||(l=Object(B.a)(["\n  display: flex;\n  flex-direction: ",";\n  gap: 1rem;\n"])),(function(e){return"column"===e.direction&&"column"})),oe=function(e){var n=e.padding,t=e.title,r=e.children,o=e.titlePadding,c=e.contrastTitle,i=e.direction;return Object(V.jsxs)(ne,{padding:n,children:[Object(V.jsx)(te,{padding:o,contrast:c,children:t}),Object(V.jsx)(re,{direction:i,children:r})]})},ce=M.d.textarea(u||(u=Object(B.a)(["\n  height: 80px;\n  padding: 0.5rem;\n  padding-right: 2rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  resize: none;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),ie=function(e){var n=e.onChange,t=e.name,r=e.placeholder,o=e.value;return Object(V.jsx)(ce,{onChange:n,name:t,placeholder:r,value:o})},ae=M.d.input(s||(s=Object(B.a)(["\n  display: none;\n"]))),de=M.d.label(j||(j=Object(B.a)(["\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  background-color: #fff;\n\n  &:active {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.lightActive})),le=function(e){var n=e.label,t=e.name,r=e.onChange;return Object(V.jsxs)(de,{children:[Object(V.jsx)(ae,{type:"file",onChange:r,name:t}),n]})},ue=function(e){var n=e.personalInfo,t=e.onChange;return Object(V.jsxs)(oe,{title:"Personal Information",titlePadding:"0.5rem",direction:"column",children:[Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"firstName",placeholder:"First name",value:n.firstName}),Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"lastName",placeholder:"Last name",value:n.lastName}),Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"title",placeholder:"Title",value:n.title}),Object(V.jsx)(le,{onChange:function(e){return t(e)},name:"photo",label:"Photo",value:n.photo}),Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"address",placeholder:"Address",value:n.address}),Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"phoneNumber",placeholder:"Phone number",value:n.phoneNumber}),Object(V.jsx)(ee,{onChange:function(e){return t(e)},type:"text",name:"email",placeholder:"Email",value:n.email}),Object(V.jsx)(ie,{onChange:function(e){return t(e)},name:"description",placeholder:"Description",value:n.description})]})},se=M.d.button(m||(m=Object(B.a)(["\n  padding: 1rem;\n  border-radius: 5px;\n  font-weight: bold;\n\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  ","\n\n  ","\n  ","\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.darkHover}),(function(e){return e.theme.colors.darkActive}),(function(e){return e.primary&&Object(M.c)(b||(b=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.primaryHover}),(function(e){return e.theme.colors.primaryActive}))}),(function(e){return e.secondary&&Object(M.c)(p||(p=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.secondaryHover}),(function(e){return e.theme.colors.secondaryActive}))}),(function(e){return e.red&&Object(M.c)(h||(h=Object(B.a)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.redHover}),(function(e){return e.theme.colors.redActive}))})),je=function(e){var n=e.text,t=e.onClick,r=e.primary,o=e.secondary,c=e.red;return Object(V.jsx)(se,{onClick:t,primary:r,secondary:o,red:c,children:n})},me=function(e){var n=e.id,t=e.educationItem,r=e.onChange,o=e.onDelete;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"universityName",placeholder:"University name",value:t.universityName}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"degree",placeholder:"Degree",value:t.degree}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"subject",placeholder:"Subject",value:t.subject}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(V.jsx)(je,{text:"Delete",onClick:function(){return o(n)}})]})},be=function(e){var n=e.education,t=e.onChange,r=e.onAdd,o=e.onDelete,c=n.map((function(e){return Object(V.jsx)(me,{id:e.id,educationItem:e,onChange:t,onDelete:o},e.id)}));return Object(V.jsxs)(oe,{title:"Education",titlePadding:"0.5rem",direction:"column",children:[c,Object(V.jsx)(je,{text:"Add",onClick:r})]})},pe=function(e){var n=e.id,t=e.experienceItem,r=e.onChange,o=e.onDelete;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"position",placeholder:"Position",value:t.position}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"company",placeholder:"Company",value:t.company}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"city",placeholder:"City",value:t.city}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"from",placeholder:"From",value:t.from}),Object(V.jsx)(ee,{onChange:function(e){return r(e,n)},type:"text",name:"to",placeholder:"To",value:t.to}),Object(V.jsx)(je,{text:"Delete",onClick:function(){return o(n)}})]})},he=function(e){var n=e.experience,t=e.onChange,r=e.onAdd,o=e.onDelete,c=n.map((function(e){return Object(V.jsx)(pe,{id:e.id,experienceItem:e,onChange:t,onDelete:o},e.id)}));return Object(V.jsxs)(oe,{title:"Experience",titlePadding:"0.5rem",direction:"column",children:[c,Object(V.jsx)(je,{text:"Add",onClick:r})]})},fe=M.d.div(f||(f=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 210mm;\n  padding: 2rem;\n  border-radius: 5px;\n  background-color: ",";\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"])),(function(e){return e.theme.colors.light})),xe=function(e){var n=e.cv,t=e.onChangePersonal,r=e.onChangeExperience,o=e.onAddExperience,c=e.onDeleteExperience,i=e.onChangeEducation,a=e.onAddEducation,d=e.onDeleteEducation,l=e.onPrint,u=e.onLoadExample,s=e.onReset;return Object(V.jsxs)(fe,{children:[Object(V.jsx)(ue,{personalInfo:n.personalInfo,onChange:t}),Object(V.jsx)(he,{experience:n.experience,onChange:r,onAdd:o,onDelete:c}),Object(V.jsx)(be,{education:n.education,onChange:i,onAdd:a,onDelete:d}),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(je,{text:"Generate PDF",onClick:l,primary:!0}),Object(V.jsx)(je,{text:"Load Example",onClick:u,secondary:!0}),Object(V.jsx)(je,{text:"Reset",onClick:s,red:!0})]})]})},ge=t(20),Oe=t(21),ve=t(24),ye=t(22),Ce=M.d.header(x||(x=Object(B.a)(["\n  grid-column: span 2;\n  padding: 2rem;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.light})),ke=function(e){var n=e.personalInfo,t=n.firstName,r=n.lastName,o=n.title;return Object(V.jsxs)(Ce,{children:[Object(V.jsxs)("h1",{children:[t," ",r]}),Object(V.jsx)("p",{children:o})]})},Ie=M.d.section(g||(g=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: ",";\n"])),(function(e){return e.padding})),Ae=M.d.h4(O||(O=Object(B.a)(["\n  padding: ",";\n  line-height: 1.6;\n"])),(function(e){return e.padding})),De=function(e){var n=e.title,t=e.children,r=e.titlePadding;return Object(V.jsxs)(Ie,{padding:r,children:[Object(V.jsx)(Ae,{children:n}),t]})},Ne=M.d.div(v||(v=Object(B.a)(["\n  display: flex;\n"]))),Ee=M.d.div(y||(y=Object(B.a)(["\n  width: 25%;\n  font-weight: bold;\n  margin-right: 2rem;\n"]))),we=M.d.div(C||(C=Object(B.a)(["\n  width: 70%;\n"]))),Pe=function(e){var n=e.experienceItem;return Object(V.jsxs)(Ne,{children:[Object(V.jsxs)(Ee,{children:[n.from," - ",n.to]}),Object(V.jsx)(we,{children:Object(V.jsx)(De,{title:n.position,children:Object(V.jsxs)("div",{children:[n.company,", ",n.city]})})})]})},Fe=M.d.div(k||(k=Object(B.a)(["\n  display: flex;\n"]))),Te=M.d.div(I||(I=Object(B.a)(["\n  width: 25%;\n  font-weight: bold;\n  margin-right: 2rem;\n"]))),He=M.d.div(A||(A=Object(B.a)(["\n  width: 70%;\n"]))),Se=function(e){var n=e.educationItem;return Object(V.jsxs)(Fe,{children:[Object(V.jsxs)(Te,{children:[n.from," - ",n.to]}),Object(V.jsx)(He,{children:Object(V.jsxs)(De,{title:"".concat(n.universityName,", ").concat(n.city),children:[Object(V.jsxs)("p",{children:["Degree: ",n.degree]}),Object(V.jsxs)("p",{children:["Subject: ",n.subject]})]})})]})},ze=M.d.div(D||(D=Object(B.a)(["\n  padding: 2rem;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.light})),Le=M.d.div(N||(N=Object(B.a)(["\n  font-style: italic;\n"]))),Re=function(e){var n=e.personalInfo,t=e.experience,r=e.education,o=t.map((function(e){return Object(V.jsx)(Pe,{experienceItem:e},e.id)})),c=r.map((function(e){return Object(V.jsx)(Se,{educationItem:e},e.id)}));return Object(V.jsxs)(ze,{children:[Object(V.jsx)(oe,{title:"Description",contrastTitle:!0,children:Object(V.jsx)(Le,{children:n.description})}),Object(V.jsx)(oe,{title:"Experience",direction:"column",contrastTitle:!0,children:o}),Object(V.jsx)(oe,{title:"Education",direction:"column",contrastTitle:!0,children:c})]})},Ue=M.d.div(E||(E=Object(B.a)(["\n  padding: 2rem;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.lightSecondary})),Me=M.d.img(w||(w=Object(B.a)(["\n  margin-bottom: 2rem;\n"]))),Be=function(e){var n=e.personalInfo;return Object(V.jsxs)(Ue,{children:[Object(V.jsx)(Me,{src:n.photo}),Object(V.jsxs)(oe,{title:"Personal Details",contrastTitle:!0,direction:"column",children:[Object(V.jsx)(De,{title:"Address",children:n.address}),Object(V.jsx)(De,{title:"Phone Number",children:n.phoneNumber}),Object(V.jsx)(De,{title:"Email",children:n.email})]})]})},Je=function(e){Object(ve.a)(t,e);var n=Object(ye.a)(t);function t(){return Object(ge.a)(this,t),n.apply(this,arguments)}return Object(Oe.a)(t,[{key:"render",value:function(){var e=this.props.cv;return Object(V.jsxs)(Ve,{children:[Object(V.jsx)(ke,{personalInfo:e.personalInfo}),Object(V.jsx)(Re,{personalInfo:e.personalInfo,experience:e.experience,education:e.education}),Object(V.jsx)(Be,{personalInfo:e.personalInfo})]})}}]),t}(z.Component),Ve=M.d.div(P||(P=Object(B.a)(["\n  width: 210mm;\n  height: 297mm;\n  position: sticky;\n  top: 10px;\n  display: grid;\n  grid-template-columns: 150mm 60mm;\n  grid-template-rows: 35mm 262mm;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),We=Je,_e={personalInfo:{firstName:"John",lastName:"Doe",title:"Senior Web Developer",photo:t.p+"static/media/example_photo.7a684f97.jpg",address:"Example Street 10",phoneNumber:"123456789",email:"john.doe@gmail.com",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."},experience:[{id:Object(K.a)(),position:"Senior Web Developer",company:"Facebook Inc.",city:"Menlo Park",from:"2015",to:"Present"},{id:Object(K.a)(),position:"Junior Web Developer",company:"Tesla Inc.",city:"Palo Alto",from:"2012",to:"2015"},{id:Object(K.a)(),position:"UI / UX Designer",company:"Google LLC",city:"Mountain View",from:"2010",to:"2012"},{id:Object(K.a)(),position:"Position",company:"Company name",city:"City name",from:"From",to:"To"}],education:[{id:Object(K.a)(),universityName:"University of Technology",city:"Oklahoma",degree:"Master",subject:"Science",from:"2008",to:"2010"},{id:Object(K.a)(),universityName:"University of Design Art",city:"New York",degree:"Bachelor",subject:"Visual Art",from:"2005",to:"2008"},{id:Object(K.a)(),universityName:"University name",city:"City name",degree:"",subject:"",from:"From",to:"To"}]},qe={personalInfo:{firstName:"",lastName:"",title:"",photo:t.p+"static/media/empty_avatar.cedf234c.png",address:"",phoneNumber:"",email:"",description:""},experience:[{id:Object(K.a)(),position:"",company:"",city:"",from:"",to:""}],education:[{id:Object(K.a)(),universityName:"",city:"",degree:"",subject:"",from:"",to:""}]},Ge=function(){var e=Object(z.useState)(qe),n=Object(Y.a)(e,2),t=n[0],r=n[1],o=function(e){var n=e.target.name,t=e.target.files[0];if(t){var o=new FileReader;o.onload=function(){r((function(e){return Object(X.a)(Object(X.a)({},e),{},{personalInfo:Object(X.a)(Object(X.a)({},e.personalInfo),{},Object(Q.a)({},n,o.result))})}))},o.readAsDataURL(t)}},c=Object(z.useRef)(),i=Object(Z.useReactToPrint)({content:function(){return c.current}});return Object(V.jsxs)(Qe,{children:[Object(V.jsx)(xe,{cv:t,onChangePersonal:function(e){var n=e.target,t=n.name,c=n.value;"file"!==n.type?r((function(e){return Object(X.a)(Object(X.a)({},e),{},{personalInfo:Object(X.a)(Object(X.a)({},e.personalInfo),{},Object(Q.a)({},t,c))})})):o(e)},onChangeExperience:function(e,n){var t=e.target,o=t.name,c=t.value;r((function(e){var t=e.experience.map((function(e){return e.id===n?Object(X.a)(Object(X.a)({},e),{},Object(Q.a)({},o,c)):e}));return Object(X.a)(Object(X.a)({},e),{},{experience:Object(G.a)(t)})}))},onAddExperience:function(){r((function(e){return Object(X.a)(Object(X.a)({},e),{},{experience:[].concat(Object(G.a)(e.experience),[{id:Object(K.a)(),position:"",company:"",city:"",from:"",to:""}])})}))},onDeleteExperience:function(e){r((function(n){var t=n.experience.filter((function(n){return n.id!==e}));return Object(X.a)(Object(X.a)({},n),{},{experience:Object(G.a)(t)})}))},onChangeEducation:function(e,n){var t=e.target,o=t.name,c=t.value;r((function(e){var t=e.education.map((function(e){return e.id===n?Object(X.a)(Object(X.a)({},e),{},Object(Q.a)({},o,c)):e}));return Object(X.a)(Object(X.a)({},e),{},{education:Object(G.a)(t)})}))},onAddEducation:function(){r((function(e){return Object(X.a)(Object(X.a)({},e),{},{education:[].concat(Object(G.a)(e.education),[{id:Object(K.a)(),universityName:"",city:"",degree:"",subject:"",from:"",to:""}])})}))},onDeleteEducation:function(e){r((function(n){var t=n.education.filter((function(n){return n.id!==e}));return Object(X.a)(Object(X.a)({},n),{},{education:Object(G.a)(t)})}))},onPrint:i,onLoadExample:function(){r(_e)},onReset:function(){r(qe)}}),Object(V.jsx)(We,{cv:t,ref:c})]})},Qe=M.d.main(F||(F=Object(B.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 6rem;\n  padding: 5rem;\n  margin-bottom: 4rem;\n  @media (max-width: 1600px) {\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n  }\n"]))),Xe=M.d.footer(T||(T=Object(B.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.light})),Ye=M.d.a(H||(H=Object(B.a)(["\n  position: relative;\n  top: 0.2rem;\n  margin-left: 1rem;\n  color: ",";\n  font-size: 2rem;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.lightHover}),(function(e){return e.theme.colors.lightActive})),Ke=function(){return Object(V.jsxs)(Xe,{children:[Object(V.jsx)("p",{children:"Copyright \xa9 2021 michalosman"}),Object(V.jsx)(Ye,{href:"https://github.com/michalosman",target:"_blank",children:Object(V.jsx)(J.b,{})})]})},Ze=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q,{}),Object(V.jsx)(Ge,{}),Object(V.jsx)(Ke,{})]})},$e=Object(M.b)(S||(S=Object(B.a)(['\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    word-wrap: break-word;\n  }\n\n  html {\n    font-size: 62.5%;\n    line-height: 1.6;\n    /* Footer support */\n    position: relative;\n    min-height: 100%;\n  }\n\n  body {\n    font-family: "Nunito", sans-serif;\n    font-size: 1.6rem;\n    background-color: ',";\n    color: ",";\n  }\n\n  header {\n    font-size: 2.4rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    line-height: 1.2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n  }\n\n  button,\n  input, \n  textarea {\n    border: none;\n    outline: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.dark})),en={colors:{background:"#ccc",light:"#eee",lightHover:"#ccc",lightActive:"#aaa",lightSecondary:"#ddd",lightBorder:"#ccc",dark:"#333",darkHover:"#222",darkActive:"#111",blue:"#143E72",primary:"#1ba148",primaryHover:"#0a9037",primaryActive:"#098026",secondary:"#c25c0e",secondaryHover:"#b14b0d",secondaryActive:"#a03a0c",red:"#b3211e",redHover:"#a2100d",redActive:"#91000c"}};U.a.render(Object(V.jsx)(L.a.StrictMode,{children:Object(V.jsxs)(M.a,{theme:en,children:[Object(V.jsx)($e,{}),Object(V.jsx)(Ze,{})]})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9b9b01a1.chunk.js.map