import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{C as i,R as a,a as o,c as s,n as c,t as l}from"./index.es-Bz5MGhRI.js";import{n as u,t as d}from"./Chips-CA3DEzl3.js";var f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{u(),l(),f=e(n(),1),p=r(),m={title:`Components/Chips`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`primary`,`success`,`warning`,`error`,`info`,`neutral`]},variant:{control:`select`,options:[`filled`,`outlined`,`flat`,`ghost`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},rounded:{control:`select`,options:[`full`,`lg`,`none`]}}},h={args:{label:`Standard Chip`,color:`primary`,variant:`filled`}},g={args:{label:`New Feature`,icon:(0,p.jsx)(s,{weight:`fill`}),color:`info`,variant:`flat`}},_={args:{label:`Disposable Item`,closable:!0,onClose:()=>console.log(`Chip removed`),color:`neutral`,variant:`outlined`}},v={args:{label:`Select Me`,selectable:!0,color:`success`,variant:`flat`}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,p.jsx)(d,{label:`Success`,color:`success`,icon:(0,p.jsx)(a,{weight:`fill`})}),(0,p.jsx)(d,{label:`Warning`,color:`warning`,icon:(0,p.jsx)(o,{weight:`fill`})}),(0,p.jsx)(d,{label:`Error`,color:`error`,icon:(0,p.jsx)(c,{weight:`fill`})}),(0,p.jsx)(d,{label:`Info`,color:`info`,icon:(0,p.jsx)(i,{weight:`fill`})})]})},b={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Filled`}),(0,p.jsx)(d,{label:`Primary`,variant:`filled`,color:`primary`}),(0,p.jsx)(d,{label:`Success`,variant:`filled`,color:`success`}),(0,p.jsx)(d,{label:`Error`,variant:`filled`,color:`error`})]}),(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Outlined`}),(0,p.jsx)(d,{label:`Primary`,variant:`outlined`,color:`primary`}),(0,p.jsx)(d,{label:`Success`,variant:`outlined`,color:`success`}),(0,p.jsx)(d,{label:`Error`,variant:`outlined`,color:`error`})]}),(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Flat`}),(0,p.jsx)(d,{label:`Primary`,variant:`flat`,color:`primary`}),(0,p.jsx)(d,{label:`Success`,variant:`flat`,color:`success`}),(0,p.jsx)(d,{label:`Error`,variant:`flat`,color:`error`})]}),(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Ghost`}),(0,p.jsx)(d,{label:`Primary`,variant:`ghost`,color:`primary`}),(0,p.jsx)(d,{label:`Success`,variant:`ghost`,color:`success`}),(0,p.jsx)(d,{label:`Error`,variant:`ghost`,color:`error`})]})]})},x={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Sizes`}),(0,p.jsx)(d,{label:`Small`,size:`sm`,color:`info`}),(0,p.jsx)(d,{label:`Medium`,size:`md`,color:`info`}),(0,p.jsx)(d,{label:`Large`,size:`lg`,color:`info`})]}),(0,p.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,p.jsx)(`span`,{className:`w-20 text-xs font-bold text-gray-400`,children:`Shapes`}),(0,p.jsx)(d,{label:`Full Rounded`,rounded:`full`,variant:`flat`}),(0,p.jsx)(d,{label:`Large Rounded`,rounded:`lg`,variant:`flat`}),(0,p.jsx)(d,{label:`Flat Corner`,rounded:`none`,variant:`flat`})]})]})},S={render:()=>{let[e,t]=f.useState([`React`]),n=[`React`,`Vue`,`Svelte`,`Angular`,`Next.js`,`Vite`],r=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(`p`,{className:`text-sm font-medium text-gray-500`,children:`Select your favorite frameworks:`}),(0,p.jsx)(`div`,{className:`flex flex-wrap gap-2 max-w-sm`,children:n.map(t=>(0,p.jsx)(d,{label:t,selectable:!0,selected:e.includes(t),onSelectChange:()=>r(t),variant:`outlined`,color:e.includes(t)?`primary`:`neutral`},t))})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Standard Chip',
    color: 'primary',
    variant: 'filled'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New Feature',
    icon: <Tag weight="fill" />,
    color: 'info',
    variant: 'flat'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disposable Item',
    closable: true,
    onClose: () => console.log('Chip removed'),
    color: 'neutral',
    variant: 'outlined'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Me',
    selectable: true,
    color: 'success',
    variant: 'flat'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Chip label="Success" color="success" icon={<CheckCircle weight="fill" />} />\r
      <Chip label="Warning" color="warning" icon={<Warning weight="fill" />} />\r
      <Chip label="Error" color="error" icon={<XCircle weight="fill" />} />\r
      <Chip label="Info" color="info" icon={<Info weight="fill" />} />\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Filled</span>\r
        <Chip label="Primary" variant="filled" color="primary" />\r
        <Chip label="Success" variant="filled" color="success" />\r
        <Chip label="Error" variant="filled" color="error" />\r
      </div>\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Outlined</span>\r
        <Chip label="Primary" variant="outlined" color="primary" />\r
        <Chip label="Success" variant="outlined" color="success" />\r
        <Chip label="Error" variant="outlined" color="error" />\r
      </div>\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Flat</span>\r
        <Chip label="Primary" variant="flat" color="primary" />\r
        <Chip label="Success" variant="flat" color="success" />\r
        <Chip label="Error" variant="flat" color="error" />\r
      </div>\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Ghost</span>\r
        <Chip label="Primary" variant="ghost" color="primary" />\r
        <Chip label="Success" variant="ghost" color="success" />\r
        <Chip label="Error" variant="ghost" color="error" />\r
      </div>\r
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Sizes</span>\r
        <Chip label="Small" size="sm" color="info" />\r
        <Chip label="Medium" size="md" color="info" />\r
        <Chip label="Large" size="lg" color="info" />\r
      </div>\r
      <div className="flex gap-4 items-center">\r
        <span className="w-20 text-xs font-bold text-gray-400">Shapes</span>\r
        <Chip label="Full Rounded" rounded="full" variant="flat" />\r
        <Chip label="Large Rounded" rounded="lg" variant="flat" />\r
        <Chip label="Flat Corner" rounded="none" variant="flat" />\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>(['React']);
    const items = ['React', 'Vue', 'Svelte', 'Angular', 'Next.js', 'Vite'];
    const toggle = (item: string) => {
      setSelectedItems(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };
    return <div className="space-y-4">\r
        <p className="text-sm font-medium text-gray-500">Select your favorite frameworks:</p>\r
        <div className="flex flex-wrap gap-2 max-w-sm">\r
          {items.map(item => <Chip key={item} label={item} selectable selected={selectedItems.includes(item)} onSelectChange={() => toggle(item)} variant="outlined" color={selectedItems.includes(item) ? 'primary' : 'neutral'} />)}\r
        </div>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`WithIcon`,`Removable`,`Selectable`,`SemanticColors`,`AllVariants`,`SizesAndShapes`,`DynamicGroup`]}))();export{b as AllVariants,h as Basic,S as DynamicGroup,_ as Removable,v as Selectable,y as SemanticColors,x as SizesAndShapes,g as WithIcon,C as __namedExportsOrder,m as default};