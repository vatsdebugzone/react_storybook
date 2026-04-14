import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{K as i,R as a,U as o,W as s,Z as c,h as l,q as u,r as d,s as f,t as p,x as m}from"./index.es-Bz5MGhRI.js";var h,g,_,v=t((()=>{h=e(n(),1),p(),g=r(),_=({label:e,options:t=[],value:n,onChange:r,multiple:i=!1,searchable:s=!1,placeholder:c=`Select an option...`,error:l,disabled:u=!1,className:f=``,radius:p=`default`,toggleIcon:_,maxSelection:v})=>{let[y,b]=(0,h.useState)(!1),[x,S]=(0,h.useState)(``),C=(0,h.useRef)(null),[w,T]=(0,h.useState)(n===void 0?i?[]:``:n),E=n!==void 0;(0,h.useEffect)(()=>{n!==void 0&&T(n)},[n]),(0,h.useEffect)(()=>{let e=e=>{C.current&&!C.current.contains(e.target)&&(b(!1),S(``))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let D=(0,h.useMemo)(()=>x?t.filter(e=>e.label.toLowerCase().includes(x.toLowerCase())):t,[x,t]),O=(0,h.useMemo)(()=>{let e=n===void 0?w:n;return i?Array.isArray(e)?e:[]:e!==void 0&&e!==``?[e]:[]},[n,w,i]),k=e=>{if(!(e.disabled||u))if(i){let t=O.includes(e.value);if(!t&&v&&O.length>=v)return;let n=t?O.filter(t=>t!==e.value):[...O,e.value];E||T(n),r&&r(n)}else E||T(e.value),r&&r(e.value),b(!1),S(``)},A=e=>{e.stopPropagation();let n=t.filter(e=>!e.disabled).map(e=>e.value);v&&(n=n.slice(0,v)),E||T(n),r&&r(n)},j=e=>{e.stopPropagation();let t=i?[]:``;E||T(t),r&&r(t)},M=(e,t)=>{if(e.stopPropagation(),u)return;let n=O.filter(e=>e!==t);E||T(n),r&&r(n)};return(0,g.jsxs)(`div`,{className:`storybook-complex-dropdown-wrapper ${f}`,ref:C,children:[e&&(0,g.jsx)(`label`,{className:`storybook-complex-dropdown-label`,children:e}),(0,g.jsxs)(`div`,{className:[`storybook-complex-dropdown-trigger`,`storybook-complex-dropdown-trigger--radius-${p}`,u?`storybook-complex-dropdown-trigger--disabled`:``,l?`storybook-complex-dropdown-trigger--error`:``,y?`storybook-complex-dropdown-trigger--open`:``].filter(Boolean).join(` `),onClick:()=>!u&&b(!y),children:[(0,g.jsx)(`div`,{className:`storybook-complex-dropdown-trigger-content`,children:(()=>{if(O.length===0)return(0,g.jsx)(`span`,{className:`storybook-complex-dropdown-trigger-content--placeholder`,children:c});if(i){let e=O.slice(0,2),n=O.length-2;return(0,g.jsxs)(g.Fragment,{children:[e.map(e=>{let n=t.find(t=>t.value===e);return n?(0,g.jsxs)(`span`,{className:`storybook-complex-dropdown-chip anim-in`,children:[n.image&&(0,g.jsx)(`img`,{src:n.image,alt:``,className:`storybook-complex-dropdown-img--chip`}),n.icon&&!n.image&&(0,g.jsx)(`span`,{className:`opacity-70 flex items-center`,children:n.icon}),(0,g.jsx)(`span`,{className:`truncate max-w-[120px]`,children:n.label}),(0,g.jsx)(`button`,{type:`button`,className:`storybook-complex-dropdown-chip-btn`,onClick:t=>M(t,e),disabled:n.disabled||u,children:(0,g.jsx)(d,{weight:`bold`,size:12})})]},String(e)):null}),n>0&&(0,g.jsxs)(`span`,{className:`storybook-complex-dropdown-chip storybook-complex-dropdown-chip--counter anim-in`,children:[`+`,n]})]})}if(O.length===1){let e=t.find(e=>e.value===O[0]);if(e)return(0,g.jsxs)(g.Fragment,{children:[e.image&&(0,g.jsx)(`img`,{src:e.image,alt:``,className:`storybook-complex-dropdown-img--trigger`}),e.icon&&!e.image&&(0,g.jsx)(`span`,{className:`storybook-complex-dropdown-trigger-icon`,children:e.icon}),(0,g.jsx)(`span`,{className:`truncate py-1`,children:e.label})]})}return(0,g.jsxs)(`span`,{className:`truncate py-1`,children:[O.length,` items selected`]})})()}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[O.length>0&&(0,g.jsx)(d,{weight:`bold`,className:`text-gray-400 hover:text-gray-600 transition-colors`,onClick:j}),(0,g.jsx)(`div`,{className:`storybook-complex-dropdown-trigger-icon-wrapper transition-transform duration-300 ${y?`rotate-180`:``}`,children:_||(0,g.jsx)(o,{weight:`bold`,className:`text-gray-500`})})]})]}),l&&!y&&(0,g.jsx)(`span`,{className:`storybook-complex-dropdown-error-msg`,children:l}),y&&!u&&(0,g.jsxs)(`div`,{className:`storybook-complex-dropdown-popover radius-${p} anim-popover`,children:[s&&(0,g.jsxs)(`div`,{className:`storybook-complex-dropdown-popover-search-wrapper`,children:[(0,g.jsx)(m,{className:`storybook-complex-dropdown-popover-search-icon`}),(0,g.jsx)(`input`,{type:`text`,className:`storybook-complex-dropdown-popover-search`,placeholder:`Search...`,value:x,onChange:e=>S(e.target.value),onClick:e=>e.stopPropagation(),autoFocus:!0}),x&&(0,g.jsx)(`button`,{type:`button`,className:`storybook-complex-dropdown-popover-search-clear`,onClick:e=>{e.stopPropagation(),S(``)},children:(0,g.jsx)(d,{weight:`bold`,size:14})})]}),i&&(0,g.jsxs)(`div`,{className:`storybook-complex-dropdown-popover-actions`,children:[(0,g.jsx)(`button`,{type:`button`,className:`storybook-complex-dropdown-popover-actions-btn`,onClick:A,children:`Select All`}),(0,g.jsx)(`button`,{type:`button`,className:`storybook-complex-dropdown-popover-actions-btn`,onClick:j,children:`Clear All`})]}),(0,g.jsx)(`ul`,{className:`storybook-complex-dropdown-popover-list`,children:D.length===0?(0,g.jsx)(`li`,{className:`storybook-complex-dropdown-popover-empty`,children:`No options found.`}):D.map(e=>{let t=O.includes(e.value),n=!!(i&&v&&O.length>=v&&!t),r=!!(e.disabled||n);return(0,g.jsxs)(`li`,{className:[`storybook-complex-dropdown-popover-item group`,t?`storybook-complex-dropdown-popover-item--selected`:``,r?`storybook-complex-dropdown-popover-item--disabled`:``].filter(Boolean).join(` `),onClick:()=>!r&&k(e),children:[i&&(0,g.jsx)(`input`,{type:`checkbox`,checked:t,disabled:r,readOnly:!0,className:`storybook-complex-dropdown-popover-item-checkbox`}),e.image&&(0,g.jsx)(`img`,{src:e.image,alt:``,className:`storybook-complex-dropdown-img--list`}),e.icon&&!e.image&&(0,g.jsx)(`span`,{className:`storybook-complex-dropdown-popover-item-icon`,children:e.icon}),(0,g.jsx)(`span`,{className:`flex-1 truncate`,children:e.label}),!i&&t&&(0,g.jsx)(a,{weight:`fill`,size:18,className:`text-green-500 ml-auto anim-selection`}),!i&&!t&&!e.disabled&&(0,g.jsx)(a,{weight:`regular`,size:18,className:`text-gray-300 ml-auto transition-all duration-300 transform scale-75 opacity-0 group-hover:opacity-50`})]},e.value)})})]})]})};try{_.displayName=`Dropdown`,_.__docgenInfo={description:``,displayName:`Dropdown`,props:{label:{defaultValue:null,description:`Optional label displayed above the dropdown`,name:`label`,required:!1,type:{name:`string`}},options:{defaultValue:{value:`[]`},description:`Array of options to render in the dropdown`,name:`options`,required:!1,type:{name:`DropdownOption[]`}},value:{defaultValue:null,description:`Current selected value (array if multiple)`,name:`value`,required:!1,type:{name:`string | number | (string | number)[]`}},onChange:{defaultValue:null,description:`Callback when selection changes`,name:`onChange`,required:!1,type:{name:`(value: any) => void`}},multiple:{defaultValue:{value:`false`},description:`Enable multiple selection`,name:`multiple`,required:!1,type:{name:`boolean`}},searchable:{defaultValue:{value:`false`},description:`Enable search filtering`,name:`searchable`,required:!1,type:{name:`boolean`}},placeholder:{defaultValue:{value:`Select an option...`},description:`Placeholder text when no option is selected`,name:`placeholder`,required:!1,type:{name:`string`}},error:{defaultValue:null,description:`Error message to display below the dropdown`,name:`error`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Disable the entire dropdown`,name:`disabled`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional wrapper class names`,name:`className`,required:!1,type:{name:`string`}},radius:{defaultValue:{value:`default`},description:`Border radius of the dropdown trigger ('flat' | 'rounded' | 'circle' | 'default')`,name:`radius`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"flat"`},{value:`"rounded"`},{value:`"circle"`}]}},toggleIcon:{defaultValue:null,description:`Custom toggle icon to replace the default CaretDown`,name:`toggleIcon`,required:!1,type:{name:`React.ReactNode`}},maxSelection:{defaultValue:null,description:`Maximum number of items that can be selected in multiple mode`,name:`maxSelection`,required:!1,type:{name:`number`}}}}}catch{}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;t((()=>{p(),v(),y=e(n(),1),b=r(),x={title:`WD/Dropdown`,component:_,parameters:{layout:`centered`},tags:[`autodocs`]},S=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`,disabled:!0},{value:`elderberry`,label:`Elderberry`}],C=[{value:`flight`,label:`Flight`,icon:(0,b.jsx)(c,{})},{value:`car`,label:`Car`,icon:(0,b.jsx)(s,{})},{value:`bike`,label:`Bicycle`,icon:(0,b.jsx)(u,{})},{value:`train`,label:`Train`,icon:(0,b.jsx)(f,{}),disabled:!0},{value:`boat`,label:`Boat`,icon:(0,b.jsx)(i,{})}],w={args:{label:`Favorite Fruit`,options:S,placeholder:`Select a fruit...`}},T={args:{label:`Select Fruits (Multiple)`,options:S,multiple:!0,placeholder:`Choose multiple fruits...`}},E={args:{label:`Searchable Options`,options:S,searchable:!0,placeholder:`Search and select...`}},D={args:{label:`Multi-select with Search & Check All`,options:S,multiple:!0,searchable:!0,placeholder:`Find and select fruits...`}},O={args:{label:`Transport Mode`,options:C,placeholder:`Select transport...`}},k={args:{label:`Disabled Dropdown`,options:S,disabled:!0,placeholder:`Cannot open this dropdown`}},A={args:{label:`Required Selection`,options:S,error:`Please select an option before submitting.`}},j=()=>{let[e,t]=(0,y.useState)([`apple`]);return(0,b.jsx)(_,{label:`Stateful Multi-Select Example`,options:S,multiple:!0,searchable:!0,value:e,onChange:e=>t(e)})},M={args:{label:`Flat Radius Dropdown`,options:S,radius:`flat`}},N={args:{label:`Circle Radius Dropdown`,options:S,radius:`circle`}},P={args:{label:`Custom Toggle Icon`,options:S,toggleIcon:(0,b.jsx)(l,{size:20,weight:`bold`})}},F={args:{label:`Select Max 3 Items`,options:C,multiple:!0,maxSelection:3,placeholder:`Pick up to 3 transport modes...`}},I=[{value:`user1`,label:`John Doe`,image:`https://i.pravatar.cc/150?u=1`},{value:`user2`,label:`Jane Smith`,image:`https://i.pravatar.cc/150?u=2`},{value:`user3`,label:`Bob Johnson`,image:`https://i.pravatar.cc/150?u=3`},{value:`user4`,label:`Alice Williams`,image:`https://i.pravatar.cc/150?u=4`}],L={args:{label:`Select User`,options:I,multiple:!0,searchable:!0,placeholder:`Find and select users...`}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: standardOptions,
    placeholder: 'Select a fruit...'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Fruits (Multiple)',
    options: standardOptions,
    multiple: true,
    placeholder: 'Choose multiple fruits...'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Searchable Options',
    options: standardOptions,
    searchable: true,
    placeholder: 'Search and select...'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multi-select with Search & Check All',
    options: standardOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Find and select fruits...'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Transport Mode',
    options: iconOptions,
    placeholder: 'Select transport...'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Dropdown',
    options: standardOptions,
    disabled: true,
    placeholder: 'Cannot open this dropdown'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Selection',
    options: standardOptions,
    error: 'Please select an option before submitting.'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<(string | number)[]>(['apple']);
  return <Dropdown label="Stateful Multi-Select Example" options={standardOptions} multiple searchable value={val} onChange={v => setVal(v as (string | number)[])} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Flat Radius Dropdown',
    options: standardOptions,
    radius: 'flat'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Circle Radius Dropdown',
    options: standardOptions,
    radius: 'circle'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Toggle Icon',
    options: standardOptions,
    toggleIcon: <Plus size={20} weight="bold" />
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Max 3 Items',
    options: iconOptions,
    multiple: true,
    maxSelection: 3,
    placeholder: 'Pick up to 3 transport modes...'
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    options: imageOptions,
    multiple: true,
    searchable: true,
    placeholder: 'Find and select users...'
  }
}`,...L.parameters?.docs?.source}}},R=[`SingleSelect`,`MultiSelect`,`Searchable`,`MultiSelectSearchable`,`WithIcons`,`Disabled`,`WithError`,`InteractiveInteractiveMultiSelect`,`RadiusFlat`,`RadiusCircle`,`CustomToggleIcon`,`MaxSelection3`,`WithImages`]}))();export{P as CustomToggleIcon,k as Disabled,j as InteractiveInteractiveMultiSelect,F as MaxSelection3,T as MultiSelect,D as MultiSelectSearchable,N as RadiusCircle,M as RadiusFlat,E as Searchable,w as SingleSelect,A as WithError,O as WithIcons,L as WithImages,R as __namedExportsOrder,x as default};