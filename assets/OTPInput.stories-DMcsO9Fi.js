import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=({length:e=6,onComplete:t,onChange:n,mask:r=!1,variant:i=`default`,loading:s=!1,error:c=!1,className:l=``,label:u=`OTP Verification Code`})=>{let[d,f]=(0,a.useState)(Array(e).fill(``)),p=(0,a.useRef)([]);(0,a.useEffect)(()=>{f(t=>{let n=Array(e).fill(``);return t.slice(0,e).forEach((e,t)=>{n[t]=e}),n}),p.current=p.current.slice(0,e)},[e]);let m=(r,i)=>{let a=r.replace(/[^0-9]/g,``);if(!a){let e=[...d];e[i]=``,f(e),n?.(e.join(``));return}let o=a.slice(-1),s=[...d];s[i]=o,f(s),n?.(s.join(``)),o&&i<e-1&&p.current[i+1]?.focus();let c=s.join(``);c.length===e&&t?.(c)},h=(t,n)=>{t.key===`Backspace`?!d[n]&&n>0&&p.current[n-1]?.focus():t.key===`ArrowLeft`&&n>0?p.current[n-1]?.focus():t.key===`ArrowRight`&&n<e-1&&p.current[n+1]?.focus()},g=r=>{r.preventDefault();let i=r.clipboardData.getData(`text`).slice(0,e).replace(/[^0-9]/g,``);if(i){let r=[...d];i.split(``).forEach((t,n)=>{n<e&&(r[n]=t)}),f(r),n?.(r.join(``));let a=Math.min(i.length,e-1);p.current[a]?.focus(),r.join(``).length===e&&t?.(r.join(``))}};return(0,o.jsx)(`div`,{className:[`storybook-otp-container`,`storybook-otp-container--${i}`,s?`storybook-otp-container--loading`:``,c?`storybook-otp-container--error`:``,l].filter(Boolean).join(` `),"aria-label":u,children:d.map((t,n)=>(0,o.jsxs)(`div`,{className:`storybook-otp-cell-wrapper`,children:[(0,o.jsx)(`input`,{ref:e=>{p.current[n]=e},type:r?`password`:`text`,inputMode:`numeric`,maxLength:1,value:t,onChange:e=>m(e.target.value,n),onKeyDown:e=>h(e,n),onPaste:g,className:`storybook-otp-cell ${t?`filled`:``}`,autoComplete:`one-time-code`,disabled:s}),n===Math.floor(e/2)-1&&e>4&&(0,o.jsx)(`div`,{className:`storybook-otp-separator`})]},n))})};try{s.displayName=`OTPInput`,s.__docgenInfo={description:``,displayName:`OTPInput`,props:{length:{defaultValue:{value:`6`},description:`Number of digits (default: 6)`,name:`length`,required:!1,type:{name:`number`}},onComplete:{defaultValue:null,description:`Callback when the full code is entered`,name:`onComplete`,required:!1,type:{name:`(otp: string) => void`}},onChange:{defaultValue:null,description:`Callback when any digit changes`,name:`onChange`,required:!1,type:{name:`(otp: string) => void`}},mask:{defaultValue:{value:`false`},description:`Mask the input characters (e.g., for PINs)`,name:`mask`,required:!1,type:{name:`boolean`}},variant:{defaultValue:{value:`default`},description:`Visual variant`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"glass"`},{value:`"bordered"`}]}},loading:{defaultValue:{value:`false`},description:`Loading state`,name:`loading`,required:!1,type:{name:`boolean`}},error:{defaultValue:{value:`false`},description:`Error state`,name:`error`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional wrapper class names`,name:`className`,required:!1,type:{name:`string`}},label:{defaultValue:{value:`OTP Verification Code`},description:`Accessibility label`,name:`label`,required:!1,type:{name:`string`}}}}}catch{}})),l,u,d,f,p,m,h,g;t((()=>{c(),l={title:`Forms/OTPInput`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{length:{control:{type:`select`},options:[4,6,8]},variant:{control:{type:`radio`},options:[`default`,`bordered`,`glass`]}}},u={args:{length:4,variant:`default`,onChange:e=>console.log(`OTP Changed:`,e),onComplete:e=>alert(`Verification Successful: ${e}`)}},d={args:{length:6,variant:`bordered`,onComplete:e=>console.log(`Final OTP:`,e)}},f={args:{length:6,mask:!0,variant:`default`}},p={parameters:{backgrounds:{default:`dark`}},args:{length:6,variant:`glass`}},m={args:{length:6,loading:!0}},h={args:{length:6,error:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    variant: 'default',
    onChange: otp => console.log('OTP Changed:', otp),
    onComplete: otp => alert(\`Verification Successful: \${otp}\`)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    variant: 'bordered',
    onComplete: otp => console.log('Final OTP:', otp)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    mask: true,
    variant: 'default'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    length: 6,
    variant: 'glass'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true
  }
}`,...h.parameters?.docs?.source}}},g=[`FourDigit`,`SixDigit`,`Masked`,`GlassVariant`,`Loading`,`Error`]}))();export{h as Error,u as FourDigit,p as GlassVariant,m as Loading,f as Masked,d as SixDigit,g as __namedExportsOrder,l as default};