import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./Card-CvL_ltDw.js";var o,s,c,l,u,d,f,p;t((()=>{i(),o=e(n(),1),s=r(),c={title:`Components/Card/IdentityCards`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>{let[t,n]=o.useState(0);return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,s.jsx)(`div`,{children:(0,s.jsx)(e,{})},t),(0,s.jsx)(`button`,{onClick:()=>n(e=>e+1),className:`px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg`,children:`Re-animate Card`})]})}]},l={args:{cardType:`credit`,size:`md`,identityData:{number:`4532 1234 5678 9012`,name:`ALEX J. MURPHY`,expiry:`08/29`,issuer:`ULTIMATE PLATINUM`},hoverable:!0}},u={args:{cardType:`pan`,size:`lg`,identityData:{number:`ABCDE1234F`,name:`ANISH KUMAR SINGH`,photo:`https://i.pravatar.cc/150?u=anish`},hoverable:!0}},d={args:{cardType:`aadhar`,size:`lg`,identityData:{number:`1234 5678 9012`,name:`Rohan Sharma`,dob:`15/05/1992`,gender:`Male`,photo:`https://i.pravatar.cc/150?u=rohan`},hoverable:!0}},f={args:{cardType:`id`,size:`sm`,identityData:{number:`EMP-9942`,name:`SARAH CONNOR`,role:`Lead System Architect`,issuer:`TECHNO CORE`,photo:`https://i.pravatar.cc/150?u=sarah`},hoverable:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cardType: 'credit',
    size: "md",
    identityData: {
      number: '4532 1234 5678 9012',
      name: 'ALEX J. MURPHY',
      expiry: '08/29',
      issuer: 'ULTIMATE PLATINUM'
    },
    hoverable: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cardType: 'pan',
    size: 'lg',
    identityData: {
      number: 'ABCDE1234F',
      name: 'ANISH KUMAR SINGH',
      photo: 'https://i.pravatar.cc/150?u=anish'
    },
    hoverable: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cardType: 'aadhar',
    size: 'lg',
    identityData: {
      number: '1234 5678 9012',
      name: 'Rohan Sharma',
      dob: '15/05/1992',
      gender: 'Male',
      photo: 'https://i.pravatar.cc/150?u=rohan'
    },
    hoverable: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    cardType: 'id',
    size: 'sm',
    identityData: {
      number: 'EMP-9942',
      name: 'SARAH CONNOR',
      role: 'Lead System Architect',
      issuer: 'TECHNO CORE',
      photo: 'https://i.pravatar.cc/150?u=sarah'
    },
    hoverable: true
  }
}`,...f.parameters?.docs?.source}}},p=[`CreditCard`,`PanCard`,`AadharCard`,`CorporateID`]}))();export{d as AadharCard,f as CorporateID,l as CreditCard,u as PanCard,p as __namedExportsOrder,c as default};