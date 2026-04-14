import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{J as i,N as a,O as o,S as s,d as c,o as l,t as u}from"./index.es-Bz5MGhRI.js";import{n as d,t as f}from"./Checkbox-BJ3Dp7oK.js";var p,m,h,g=t((()=>{p=e(n(),1),d(),m=r(),h=({label:e,options:t,value:n,defaultValue:r,onChange:i,orientation:a=`vertical`,gap:o=`md`,size:s=`md`,color:c=`primary`,variant:l=`default`,iconPlacement:u=`start`,className:d=``})=>{let[h,g]=(0,p.useState)(r||[]),_=n===void 0?h:n,v=(e,t)=>{let r;r=t?[..._,e]:_.filter(t=>t!==e),n===void 0&&g(r),i&&i(r)};return(0,m.jsxs)(`div`,{className:[`storybook-checkbox-group`,`storybook-checkbox-group--${a}`,`storybook-checkbox-group--gap-${o}`,d].filter(Boolean).join(` `),children:[e&&(0,m.jsx)(`h4`,{className:`storybook-checkbox-group-label`,children:e}),(0,m.jsx)(`div`,{className:`storybook-checkbox-group-items`,children:t.map((e,t)=>(0,m.jsx)(f,{label:e.label,icon:e.icon,checked:_.includes(e.value),disabled:e.disabled,onChange:t=>v(e.value,t),size:s,color:c,variant:l,iconPlacement:u,style:{"--stagger":t}},e.value))})]})};try{h.displayName=`CheckboxGroup`,h.__docgenInfo={description:``,displayName:`CheckboxGroup`,props:{label:{defaultValue:null,description:`Optional group label/header`,name:`label`,required:!1,type:{name:`string`}},options:{defaultValue:null,description:`Array of checkbox options`,name:`options`,required:!0,type:{name:`CheckboxGroupOption[]`}},value:{defaultValue:null,description:`Controlled value (array of selected values)`,name:`value`,required:!1,type:{name:`string[]`}},defaultValue:{defaultValue:null,description:`Initial value (uncontrolled)`,name:`defaultValue`,required:!1,type:{name:`string[]`}},onChange:{defaultValue:null,description:`Callback when selection changes`,name:`onChange`,required:!1,type:{name:`(value: string[]) => void`}},orientation:{defaultValue:{value:`vertical`},description:`Layout orientation`,name:`orientation`,required:!1,type:{name:`enum`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},gap:{defaultValue:{value:`md`},description:`Spacing between checkboxes`,name:`gap`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},size:{defaultValue:{value:`md`},description:`Size variant for all checkboxes in the group`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},color:{defaultValue:{value:`primary`},description:`Semantic color theme for all checkboxes in the group`,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"primary"`},{value:`"success"`},{value:`"warning"`},{value:`"error"`},{value:`"info"`},{value:`"neutral"`}]}},variant:{defaultValue:{value:`default`},description:`Visual style variant for all checkboxes in the group`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"glass"`},{value:`"bordered"`}]}},iconPlacement:{defaultValue:{value:`start`},description:`Position of icons relative to labels for all items`,name:`iconPlacement`,required:!1,type:{name:`enum`,value:[{value:`"start"`},{value:`"end"`}]}},className:{defaultValue:{value:``},description:`Additional wrapper class names`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}})),_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{g(),_=e(n(),1),u(),v=r(),y={title:`Forms/CheckboxGroup`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},gap:{control:`select`,options:[`sm`,`md`,`lg`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},iconPlacement:{control:`select`,options:[`start`,`end`]}}},b=[{label:`Read Access`,value:`read`},{label:`Write Access`,value:`write`},{label:`Admin Access`,value:`admin`},{label:`Delete Access`,value:`delete`,disabled:!0}],x={args:{label:`Permissions (Vertical)`,options:b,orientation:`vertical`,defaultValue:[`read`]}},S={args:{label:`Permissions (Horizontal)`,options:b,orientation:`horizontal`,defaultValue:[`read`,`write`]}},C={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,v.jsx)(h,{label:`Gap Small`,options:b,orientation:`horizontal`,gap:`sm`}),(0,v.jsx)(h,{label:`Gap Medium`,options:b,orientation:`horizontal`,gap:`md`}),(0,v.jsx)(h,{label:`Gap Large`,options:b,orientation:`horizontal`,gap:`lg`})]})},w={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,v.jsx)(h,{label:`Small Group`,options:b,size:`sm`,orientation:`horizontal`}),(0,v.jsx)(h,{label:`Medium Group`,options:b,size:`md`,orientation:`horizontal`}),(0,v.jsx)(h,{label:`Large Group`,options:b,size:`lg`,orientation:`horizontal`})]})},T={render:()=>{let[e,t]=_.useState([`read`]);return(0,v.jsxs)(`div`,{className:`space-y-4 min-w-[300px]`,children:[(0,v.jsx)(h,{label:`Controlled Group`,options:b,value:e,onChange:t}),(0,v.jsxs)(`div`,{className:`p-4 bg-gray-50 rounded-lg border text-xs font-mono`,children:[`Selected: `,JSON.stringify(e)]})]})}},E={args:{label:`Account Features`,orientation:`vertical`,gap:`md`,options:[{label:`Push Notifications`,value:`notifications`,icon:(0,v.jsx)(i,{weight:`duotone`})},{label:`Email Updates`,value:`email`,icon:(0,v.jsx)(a,{weight:`duotone`})},{label:`Advanced Security`,value:`security`,icon:(0,v.jsx)(c,{weight:`duotone`})},{label:`Public Profile`,value:`profile`,icon:(0,v.jsx)(l,{weight:`duotone`})}],defaultValue:[`notifications`,`security`],color:`primary`,variant:`bordered`}},D={args:{label:`Account Features (Icon End)`,orientation:`vertical`,iconPlacement:`end`,options:[{label:`Push Notifications`,value:`notifications`,icon:(0,v.jsx)(i,{weight:`duotone`})},{label:`Email Updates`,value:`email`,icon:(0,v.jsx)(a,{weight:`duotone`})},{label:`Advanced Security`,value:`security`,icon:(0,v.jsx)(c,{weight:`duotone`})},{label:`Public Profile`,value:`profile`,icon:(0,v.jsx)(l,{weight:`duotone`})}],defaultValue:[`notifications`],variant:`bordered`}},O={render:()=>{let[e,t]=_.useState(0);return(0,v.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,v.jsx)(h,{label:`Staggered Animation`,options:[{label:`Step 1: Planning`,value:`p`,icon:(0,v.jsx)(o,{})},{label:`Step 2: Execution`,value:`e`,icon:(0,v.jsx)(s,{})},{label:`Step 3: Verification`,value:`v`,icon:(0,v.jsx)(c,{})},{label:`Step 4: Deployment`,value:`d`,icon:(0,v.jsx)(o,{})}],orientation:`vertical`},e),(0,v.jsx)(`button`,{onClick:()=>t(e=>e+1),className:`px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors`,children:`Re-animate`})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Permissions (Vertical)',
    options: PERMISSION_OPTIONS,
    orientation: 'vertical',
    defaultValue: ['read']
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Permissions (Horizontal)',
    options: PERMISSION_OPTIONS,
    orientation: 'horizontal',
    defaultValue: ['read', 'write']
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">\r
      <CheckboxGroup label="Gap Small" options={PERMISSION_OPTIONS} orientation="horizontal" gap="sm" />\r
      <CheckboxGroup label="Gap Medium" options={PERMISSION_OPTIONS} orientation="horizontal" gap="md" />\r
      <CheckboxGroup label="Gap Large" options={PERMISSION_OPTIONS} orientation="horizontal" gap="lg" />\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">\r
      <CheckboxGroup label="Small Group" options={PERMISSION_OPTIONS} size="sm" orientation="horizontal" />\r
      <CheckboxGroup label="Medium Group" options={PERMISSION_OPTIONS} size="md" orientation="horizontal" />\r
      <CheckboxGroup label="Large Group" options={PERMISSION_OPTIONS} size="lg" orientation="horizontal" />\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(['read']);
    return <div className="space-y-4 min-w-[300px]">\r
        <CheckboxGroup label="Controlled Group" options={PERMISSION_OPTIONS} value={value} onChange={setValue} />\r
        <div className="p-4 bg-gray-50 rounded-lg border text-xs font-mono">\r
          Selected: {JSON.stringify(value)}\r
        </div>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Features',
    orientation: 'vertical',
    gap: 'md',
    options: [{
      label: 'Push Notifications',
      value: 'notifications',
      icon: <Bell weight="duotone" />
    }, {
      label: 'Email Updates',
      value: 'email',
      icon: <Envelope weight="duotone" />
    }, {
      label: 'Advanced Security',
      value: 'security',
      icon: <ShieldCheck weight="duotone" />
    }, {
      label: 'Public Profile',
      value: 'profile',
      icon: <User weight="duotone" />
    }],
    defaultValue: ['notifications', 'security'],
    color: 'primary',
    variant: 'bordered'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Features (Icon End)',
    orientation: 'vertical',
    iconPlacement: 'end',
    options: [{
      label: 'Push Notifications',
      value: 'notifications',
      icon: <Bell weight="duotone" />
    }, {
      label: 'Email Updates',
      value: 'email',
      icon: <Envelope weight="duotone" />
    }, {
      label: 'Advanced Security',
      value: 'security',
      icon: <ShieldCheck weight="duotone" />
    }, {
      label: 'Public Profile',
      value: 'profile',
      icon: <User weight="duotone" />
    }],
    defaultValue: ['notifications'],
    variant: 'bordered'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [key, setKey] = React.useState(0);
    return <div className="flex flex-col items-center gap-6">\r
        <CheckboxGroup key={key} label="Staggered Animation" options={[{
        label: 'Step 1: Planning',
        value: 'p',
        icon: <Globe />
      }, {
        label: 'Step 2: Execution',
        value: 'e',
        icon: <Lock />
      }, {
        label: 'Step 3: Verification',
        value: 'v',
        icon: <ShieldCheck />
      }, {
        label: 'Step 4: Deployment',
        value: 'd',
        icon: <Globe />
      }]} orientation="vertical" />\r
        <button onClick={() => setKey(prev => prev + 1)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">\r
          Re-animate\r
        </button>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Vertical`,`Horizontal`,`Gaps`,`Sizes`,`Controlled`,`WithIcons`,`IconPlacementEnd`,`StaggeredEntry`]}))();export{T as Controlled,C as Gaps,S as Horizontal,D as IconPlacementEnd,w as Sizes,O as StaggeredEntry,x as Vertical,E as WithIcons,k as __namedExportsOrder,y as default};