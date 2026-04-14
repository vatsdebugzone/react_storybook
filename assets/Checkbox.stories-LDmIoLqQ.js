import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./Checkbox-BJ3Dp7oK.js";var o,s,c,l,u,d,f,p,m,h,g;t((()=>{i(),o=e(n(),1),s=r(),c={title:`Forms/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`primary`,`success`,`warning`,`error`,`info`,`neutral`]},variant:{control:`select`,options:[`default`,`glass`,`bordered`]},labelPlacement:{control:`select`,options:[`start`,`end`]}}},l={args:{label:`I agree to the terms and conditions`,color:`primary`,size:`md`}},u={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(a,{label:`Success State`,color:`success`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Warning State`,color:`warning`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Error State`,color:`error`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Info State`,color:`info`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Neutral State`,color:`neutral`,defaultChecked:!0})]})},d={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6 p-6 bg-gray-100 rounded-xl`,children:[(0,s.jsx)(a,{label:`Default Variant`,variant:`default`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Glassmorphism Variant (On Background)`,variant:`glass`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Bordered Variant`,variant:`bordered`,defaultChecked:!0})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(a,{label:`Small Checkbox`,size:`sm`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Medium Checkbox`,size:`md`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Large Checkbox`,size:`lg`,defaultChecked:!0})]})},p={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4 w-64`,children:[(0,s.jsx)(a,{label:`Label at End (Default)`,labelPlacement:`end`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Label at Start`,labelPlacement:`start`,defaultChecked:!0})]})},m={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(a,{label:`Checked State`,checked:!0}),(0,s.jsx)(a,{label:`Unchecked State`,checked:!1}),(0,s.jsx)(a,{label:`Indeterminate State`,indeterminate:!0}),(0,s.jsx)(a,{label:`Disabled Checked`,checked:!0,disabled:!0}),(0,s.jsx)(a,{label:`Disabled Unchecked`,checked:!1,disabled:!0})]})},h={render:()=>{let[e,t]=(0,o.useState)([!0,!1,!1]),n=e.every(Boolean),r=e.some(Boolean)&&!n,i=e=>{t([e,e,e])},c=(n,r)=>{let i=[...e];i[n]=r,t(i)};return(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 border p-6 rounded-xl bg-white shadow-sm min-w-[300px]`,children:[(0,s.jsx)(a,{label:`Select all permissions`,checked:n,indeterminate:r,onChange:i,color:`primary`,className:`pb-2 border-b mb-1`}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 ml-6`,children:[(0,s.jsx)(a,{label:`Read access`,checked:e[0],onChange:e=>c(0,e),size:`sm`}),(0,s.jsx)(a,{label:`Write access`,checked:e[1],onChange:e=>c(1,e),size:`sm`}),(0,s.jsx)(a,{label:`Admin access`,checked:e[2],onChange:e=>c(2,e),size:`sm`})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions',
    color: 'primary',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Checkbox label="Success State" color="success" defaultChecked />\r
      <Checkbox label="Warning State" color="warning" defaultChecked />\r
      <Checkbox label="Error State" color="error" defaultChecked />\r
      <Checkbox label="Info State" color="info" defaultChecked />\r
      <Checkbox label="Neutral State" color="neutral" defaultChecked />\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-6 bg-gray-100 rounded-xl">\r
      <Checkbox label="Default Variant" variant="default" defaultChecked />\r
      <Checkbox label="Glassmorphism Variant (On Background)" variant="glass" defaultChecked />\r
      <Checkbox label="Bordered Variant" variant="bordered" defaultChecked />\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Checkbox label="Small Checkbox" size="sm" defaultChecked />\r
      <Checkbox label="Medium Checkbox" size="md" defaultChecked />\r
      <Checkbox label="Large Checkbox" size="lg" defaultChecked />\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">\r
      <Checkbox label="Label at End (Default)" labelPlacement="end" defaultChecked />\r
      <Checkbox label="Label at Start" labelPlacement="start" defaultChecked />\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Checkbox label="Checked State" checked={true} />\r
      <Checkbox label="Unchecked State" checked={false} />\r
      <Checkbox label="Indeterminate State" indeterminate={true} />\r
      <Checkbox label="Disabled Checked" checked={true} disabled />\r
      <Checkbox label="Disabled Unchecked" checked={false} disabled />\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checkedItems, setCheckedItems] = useState([true, false, false]);
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
    const handleParentChange = (checked: boolean) => {
      setCheckedItems([checked, checked, checked]);
    };
    const handleChildChange = (index: number, checked: boolean) => {
      const nextItems = [...checkedItems];
      nextItems[index] = checked;
      setCheckedItems(nextItems);
    };
    return <div className="flex flex-col gap-2 border p-6 rounded-xl bg-white shadow-sm min-w-[300px]">\r
        <Checkbox label="Select all permissions" checked={allChecked} indeterminate={isIndeterminate} onChange={handleParentChange} color="primary" className="pb-2 border-b mb-1" />\r
        <div className="flex flex-col gap-2 ml-6">\r
          <Checkbox label="Read access" checked={checkedItems[0]} onChange={c => handleChildChange(0, c)} size="sm" />\r
          <Checkbox label="Write access" checked={checkedItems[1]} onChange={c => handleChildChange(1, c)} size="sm" />\r
          <Checkbox label="Admin access" checked={checkedItems[2]} onChange={c => handleChildChange(2, c)} size="sm" />\r
        </div>\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`SemanticColors`,`Variants`,`Sizes`,`Placement`,`States`,`InteractiveGroup`]}))();export{l as Basic,h as InteractiveGroup,p as Placement,u as SemanticColors,f as Sizes,m as States,d as Variants,g as __namedExportsOrder,c as default};