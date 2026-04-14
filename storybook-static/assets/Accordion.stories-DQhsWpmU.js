import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{C as i,J as a,b as o,f as s,h as c,o as l,t as u,v as d}from"./index.es-Bz5MGhRI.js";var f,p,m,h,g,_,v=t((()=>{f=e(n(),1),u(),p=r(),m=(0,f.createContext)(null),h=()=>{let e=(0,f.useContext)(m);if(!e)throw Error(`AccordionItem must be used within an Accordion`);return e},g=(0,f.forwardRef)(({children:e,allowMultiple:t=!1,variant:n=`default`,radius:r=`md`,className:i=``,size:a=`md`,color:o=`default`,defaultExpandedKeys:s=[],onChange:c},l)=>{let[u,d]=(0,f.useState)(new Set(s));return(0,f.useImperativeHandle)(l,()=>({expandAll:()=>{if(!t){console.warn(`Accordion: expandAll ignored because allowMultiple is false.`);return}let n=new Set;f.Children.forEach(e,e=>{if((0,f.isValidElement)(e)){let t=e.props;t.id&&!t.disabled&&n.add(t.id)}}),d(n),c&&c(Array.from(n))},collapseAll:()=>{d(new Set),c&&c([])}})),(0,p.jsx)(m.Provider,{value:{expandedKeys:u,toggleItem:(e,n)=>{d(r=>{let i=new Set(r);return n?(t||i.clear(),i.add(e)):i.delete(e),c&&c(Array.from(i)),i})},variant:n,radius:r,size:a,color:o},children:(0,p.jsx)(`div`,{className:`storybook-accordion storybook-accordion--${n} storybook-accordion--radius-${r} storybook-accordion--size-${a} storybook-accordion--color-${o} ${i}`,children:e})})}),g.displayName=`Accordion`,_=({id:e,title:t,subtitle:n,children:r,startContent:i,disabled:a=!1,className:s=``})=>{let{expandedKeys:l,toggleItem:u}=h(),d=l.has(e);return(0,p.jsxs)(`div`,{className:[`storybook-accordion-item`,d?`is-open`:``,a?`is-disabled`:``,s].filter(Boolean).join(` `),children:[(0,p.jsxs)(`button`,{type:`button`,className:`storybook-accordion-item__trigger`,onClick:()=>{a||u(e,!d)},disabled:a,"aria-expanded":d,children:[i&&(0,p.jsx)(`div`,{className:`storybook-accordion-item__start-content`,children:i}),(0,p.jsxs)(`div`,{className:`storybook-accordion-item__header-text`,children:[(0,p.jsx)(`span`,{className:`storybook-accordion-item__title`,children:t}),n&&(0,p.jsx)(`span`,{className:`storybook-accordion-item__subtitle`,children:n})]}),(0,p.jsxs)(`div`,{className:`storybook-accordion-item__indicator ${d?`is-open`:``}`,children:[(0,p.jsx)(`div`,{className:`indicator-icon icon-plus`,children:(0,p.jsx)(c,{size:20,weight:`bold`})}),(0,p.jsx)(`div`,{className:`indicator-icon icon-minus`,children:(0,p.jsx)(o,{size:20,weight:`bold`})})]})]}),(0,p.jsx)(`div`,{className:`storybook-accordion-item__content-wrapper ${d?`is-open`:``}`,children:(0,p.jsx)(`div`,{className:`storybook-accordion-item__content-inner`,children:(0,p.jsx)(`div`,{className:`storybook-accordion-item__content`,children:r})})})]})};try{g.displayName=`Accordion`,g.__docgenInfo={description:`Accordion Container`,displayName:`Accordion`,props:{allowMultiple:{defaultValue:{value:`false`},description:``,name:`allowMultiple`,required:!1,type:{name:`boolean`}},variant:{defaultValue:{value:`default`},description:``,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"bordered"`},{value:`"flat"`},{value:`"elevated"`}]}},radius:{defaultValue:{value:`md`},description:``,name:`radius`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"full"`},{value:`"none"`}]}},className:{defaultValue:{value:``},description:``,name:`className`,required:!1,type:{name:`string`}},size:{defaultValue:{value:`md`},description:``,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},color:{defaultValue:{value:`default`},description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"primary"`},{value:`"success"`},{value:`"warning"`},{value:`"info"`},{value:`"default"`},{value:`"danger"`}]}},defaultExpandedKeys:{defaultValue:{value:`[]`},description:``,name:`defaultExpandedKeys`,required:!1,type:{name:`string[]`}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`(expandedKeys: string[]) => void`}}}}}catch{}})),y=t((()=>{})),b,x,S,C,w,T,E,D,O,k,A;t((()=>{b=e(n(),1),v(),u(),y(),x=r(),S={title:`WD/Accordion`,component:g,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`bordered`,`elevated`,`flat`]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`danger`,`info`]}}},C={args:{allowMultiple:!1,variant:`default`,radius:`md`},render:e=>(0,x.jsx)(`div`,{className:`max-w-xl w-full`,children:(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(_,{id:`item-1`,title:`What is WD Storybook?`,children:`WD Storybook is a premium component library designed for high-performance React applications. It provides accessible, beautifully animated, and highly customizable UI elements out of the box.`}),(0,x.jsx)(_,{id:`item-2`,title:`How do I install the library?`,children:"Simply run `npm install @wd/components` in your local project directory. Make sure you have Tailwind CSS configured to import the core component styles."}),(0,x.jsx)(_,{id:`item-3`,title:`Are these components accessible?`,children:`Yes! All components are built with Web Content Accessibility Guidelines (WCAG) in mind, including ARIA tags, keyboard navigation support, and high-contrast color schemes.`})]})})},w={args:{allowMultiple:!0,variant:`bordered`,radius:`none`},render:e=>(0,x.jsx)(`div`,{className:`max-w-xl w-full`,children:(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(_,{id:`mult-1`,title:`Account Settings`,startContent:(0,x.jsx)(l,{size:20}),children:`Update your personal information, profile picture, and bio here. Changes will be reflected across all associated applications.`}),(0,x.jsx)(_,{id:`mult-2`,title:`Notifications`,startContent:(0,x.jsx)(a,{size:20}),children:`Customize how and when you receive alerts. You can mute specific categories or schedule daily digest emails to keep your inbox clean.`}),(0,x.jsx)(_,{id:`mult-3`,title:`Security & Privacy`,startContent:(0,x.jsx)(s,{size:20}),children:`Manage your two-factor authentication, trusted devices, and external integrations. We strongly recommend keeping 2FA enabled at all times.`})]})})},T={args:{variant:`elevated`,radius:`lg`},render:e=>(0,x.jsx)(`div`,{className:`max-w-xl w-full`,children:(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(_,{id:`theme`,title:`Theme Configuration`,subtitle:`Colors, Typography, and Shapes`,startContent:(0,x.jsx)(d,{size:20,className:`text-purple-500`}),children:`Define your brand guidelines including your primary and secondary color palettes. You can also upload custom font families here.`}),(0,x.jsx)(_,{id:`system`,title:`System Preferences`,subtitle:`Language, Timezone, and Region`,startContent:(0,x.jsx)(i,{size:20,className:`text-blue-500`}),children:`Ensure your system timestamps and localization settings are correctly matched with your physical location.`})]})})},E={args:{variant:`flat`},render:e=>(0,x.jsx)(`div`,{className:`max-w-2xl w-full`,children:(0,x.jsxs)(g,{...e,children:[(0,x.jsxs)(_,{id:`root-1`,title:`Developer Documentation`,children:[`Welcome to the API Documentation! Below you will find specific endpoint categories.`,(0,x.jsxs)(`div`,{className:`mt-4`,children:[(0,x.jsx)(`h4`,{className:`font-semibold text-gray-700 mb-2`,children:`API Endpoints`}),(0,x.jsxs)(g,{variant:`bordered`,radius:`sm`,children:[(0,x.jsx)(_,{id:`sub-1`,title:`GET /users`,children:"Fetches a paginated list of all authenticated users. Required scopes: `user_read`, `admin`"}),(0,x.jsx)(_,{id:`sub-2`,title:`POST /users/create`,children:`Creates a new user account and triggers a verification email sequence.`}),(0,x.jsx)(_,{id:`sub-3`,title:`DELETE /users/:id`,children:`Permanently deletes a user and purges all their associated telemetry data. This action cannot be undone.`})]})]})]}),(0,x.jsx)(_,{id:`root-2`,title:`Billing & Invoicing`,children:`Find all your historical receipts and active subscription tiers here.`})]})})},D={args:{variant:`default`},render:e=>(0,x.jsx)(`div`,{className:`max-w-xl w-full`,children:(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(_,{id:`d-1`,title:`Available Feature`,children:`This feature is accessible on your current plan.`}),(0,x.jsx)(_,{id:`d-2`,title:`Premium Feature (Locked)`,disabled:!0,children:`Upgrade your plan to access advanced analytics and custom export tools.`}),(0,x.jsx)(_,{id:`d-3`,title:`Legacy Tooling`,disabled:!0,children:`This capability has been deprecated and is no longer accessible.`})]})})},O={args:{allowMultiple:!0,variant:`bordered`},render:e=>{let t=b.useRef(null);return(0,x.jsxs)(`div`,{className:`max-w-xl w-full flex flex-col gap-4`,children:[(0,x.jsxs)(`div`,{className:`flex gap-2 mb-2`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>t.current?.expandAll(),className:`px-4 py-2 bg-blue-50 text-blue-600 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors`,children:`Expand All`}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>t.current?.collapseAll(),className:`px-4 py-2 bg-gray-50 text-gray-600 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors`,children:`Collapse All`})]}),(0,x.jsxs)(g,{ref:t,...e,children:[(0,x.jsx)(_,{id:`ctrl-1`,title:`Initial Setup`,children:`Configure your development environment and install necessary dependencies before beginning.`}),(0,x.jsx)(_,{id:`ctrl-2`,title:`Integration Phase`,children:`Connect the APIs and begin synchronizing your telemetry payloads into the main pipeline.`}),(0,x.jsx)(_,{id:`ctrl-3`,title:`Testing & QA`,children:`Run complete end-to-end testing strings to verify module behavior in production-like situations.`}),(0,x.jsx)(_,{id:`ctrl-4`,title:`Not Applicable (Disabled)`,disabled:!0,children:`This section cannot be expanded via 'Expand All' because it is explicitly disabled.`})]})]})}},k={args:{variant:`elevated`,radius:`lg`,size:`md`,color:`primary`},render:e=>(0,x.jsxs)(`div`,{className:`max-w-xl w-full flex flex-col gap-8`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`font-semibold text-gray-700 mb-2`,children:`Large Size / Primary Color`}),(0,x.jsxs)(g,{...e,children:[(0,x.jsx)(_,{id:`sc-1`,title:`Primary Settings`,children:`This accordion uses the 'lg' size variant and the 'primary' color theme.`}),(0,x.jsx)(_,{id:`sc-2`,title:`Advanced Options`,children:`Notice the larger padding and font sizes compared to the default 'md' size.`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`font-semibold text-gray-700 mb-2`,children:`Small Size / Success Color / Flat Variant`}),(0,x.jsxs)(g,{variant:`flat`,size:`sm`,color:`success`,children:[(0,x.jsx)(_,{id:`sc-3`,title:`System Stable`,children:`This is a 'sm' sized accordion utilizing the 'success' color tint.`}),(0,x.jsx)(_,{id:`sc-4`,title:`Diagnostics`,children:`All telemetry is reporting green.`})]})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{className:`font-semibold text-gray-700 mb-2`,children:`Danger Color / Bordered Variant`}),(0,x.jsxs)(g,{variant:`bordered`,color:`danger`,children:[(0,x.jsx)(_,{id:`sc-5`,title:`Danger Zone`,children:`These actions are destructive. Proceed with caution.`}),(0,x.jsx)(_,{id:`sc-6`,title:`Delete Account`,children:`This will permanently remove all your data from our servers.`})]})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    allowMultiple: false,
    variant: 'default',
    radius: 'md'
  },
  render: args => <div className="max-w-xl w-full">\r
      <Accordion {...args}>\r
        <AccordionItem id="item-1" title="What is WD Storybook?">\r
          WD Storybook is a premium component library designed for high-performance React applications.\r
          It provides accessible, beautifully animated, and highly customizable UI elements out of the box.\r
        </AccordionItem>\r
        <AccordionItem id="item-2" title="How do I install the library?">\r
          Simply run \`npm install @wd/components\` in your local project directory. Make sure you have Tailwind CSS\r
          configured to import the core component styles.\r
        </AccordionItem>\r
        <AccordionItem id="item-3" title="Are these components accessible?">\r
          Yes! All components are built with Web Content Accessibility Guidelines (WCAG) in mind,\r
          including ARIA tags, keyboard navigation support, and high-contrast color schemes.\r
        </AccordionItem>\r
      </Accordion>\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    variant: 'bordered',
    radius: 'none'
  },
  render: args => <div className="max-w-xl w-full">\r
      <Accordion {...args}>\r
        <AccordionItem id="mult-1" title="Account Settings" startContent={<User size={20} />}>\r
          Update your personal information, profile picture, and bio here. Changes will be reflected\r
          across all associated applications.\r
        </AccordionItem>\r
        <AccordionItem id="mult-2" title="Notifications" startContent={<Bell size={20} />}>\r
          Customize how and when you receive alerts. You can mute specific categories or schedule\r
          daily digest emails to keep your inbox clean.\r
        </AccordionItem>\r
        <AccordionItem id="mult-3" title="Security & Privacy" startContent={<Shield size={20} />}>\r
          Manage your two-factor authentication, trusted devices, and external integrations.\r
          We strongly recommend keeping 2FA enabled at all times.\r
        </AccordionItem>\r
      </Accordion>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    radius: 'lg'
  },
  render: args => <div className="max-w-xl w-full">\r
      <Accordion {...args}>\r
        <AccordionItem id="theme" title="Theme Configuration" subtitle="Colors, Typography, and Shapes" startContent={<Palette size={20} className="text-purple-500" />}>\r
          Define your brand guidelines including your primary and secondary color palettes.\r
          You can also upload custom font families here.\r
        </AccordionItem>\r
        <AccordionItem id="system" title="System Preferences" subtitle="Language, Timezone, and Region" startContent={<Info size={20} className="text-blue-500" />}>\r
          Ensure your system timestamps and localization settings are correctly matched\r
          with your physical location.\r
        </AccordionItem>\r
      </Accordion>\r
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  },
  render: args => <div className="max-w-2xl w-full">\r
      <Accordion {...args}>\r
        <AccordionItem id="root-1" title="Developer Documentation">\r
          Welcome to the API Documentation! Below you will find specific endpoint categories.\r
\r
          {/* Sub Accordion */}\r
          <div className="mt-4">\r
            <h4 className="font-semibold text-gray-700 mb-2">API Endpoints</h4>\r
            <Accordion variant="bordered" radius="sm">\r
              <AccordionItem id="sub-1" title="GET /users">\r
                Fetches a paginated list of all authenticated users.\r
                Required scopes: \`user_read\`, \`admin\`\r
              </AccordionItem>\r
              <AccordionItem id="sub-2" title="POST /users/create">\r
                Creates a new user account and triggers a verification email sequence.\r
              </AccordionItem>\r
              <AccordionItem id="sub-3" title="DELETE /users/:id">\r
                Permanently deletes a user and purges all their associated telemetry data.\r
                This action cannot be undone.\r
              </AccordionItem>\r
            </Accordion>\r
          </div>\r
        </AccordionItem>\r
        \r
        <AccordionItem id="root-2" title="Billing & Invoicing">\r
          Find all your historical receipts and active subscription tiers here.\r
        </AccordionItem>\r
      </Accordion>\r
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => <div className="max-w-xl w-full">\r
      <Accordion {...args}>\r
        <AccordionItem id="d-1" title="Available Feature">\r
          This feature is accessible on your current plan.\r
        </AccordionItem>\r
        <AccordionItem id="d-2" title="Premium Feature (Locked)" disabled>\r
          Upgrade your plan to access advanced analytics and custom export tools.\r
        </AccordionItem>\r
        <AccordionItem id="d-3" title="Legacy Tooling" disabled>\r
          This capability has been deprecated and is no longer accessible.\r
        </AccordionItem>\r
      </Accordion>\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    variant: 'bordered'
  },
  render: args => {
    // We use a React ref to access the imperative handles exposed by Accordion
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const accordionRef = React.useRef<any>(null);
    return <div className="max-w-xl w-full flex flex-col gap-4">\r
        <div className="flex gap-2 mb-2">\r
          <button type="button" onClick={() => accordionRef.current?.expandAll()} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors">\r
            Expand All\r
          </button>\r
          <button type="button" onClick={() => accordionRef.current?.collapseAll()} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">\r
            Collapse All\r
          </button>\r
        </div>\r
\r
        <Accordion ref={accordionRef} {...args}>\r
          <AccordionItem id="ctrl-1" title="Initial Setup">\r
            Configure your development environment and install necessary dependencies before beginning.\r
          </AccordionItem>\r
          <AccordionItem id="ctrl-2" title="Integration Phase">\r
            Connect the APIs and begin synchronizing your telemetry payloads into the main pipeline.\r
          </AccordionItem>\r
          <AccordionItem id="ctrl-3" title="Testing & QA">\r
            Run complete end-to-end testing strings to verify module behavior in production-like situations.\r
          </AccordionItem>\r
          <AccordionItem id="ctrl-4" title="Not Applicable (Disabled)" disabled>\r
            This section cannot be expanded via 'Expand All' because it is explicitly disabled.\r
          </AccordionItem>\r
        </Accordion>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    radius: 'lg',
    size: "md",
    color: 'primary'
  },
  render: args => <div className="max-w-xl w-full flex flex-col gap-8">\r
      <div>\r
        <h4 className="font-semibold text-gray-700 mb-2">Large Size / Primary Color</h4>\r
        <Accordion {...args}>\r
          <AccordionItem id="sc-1" title="Primary Settings">\r
            This accordion uses the 'lg' size variant and the 'primary' color theme.\r
          </AccordionItem>\r
          <AccordionItem id="sc-2" title="Advanced Options">\r
            Notice the larger padding and font sizes compared to the default 'md' size.\r
          </AccordionItem>\r
        </Accordion>\r
      </div>\r
\r
      <div>\r
        <h4 className="font-semibold text-gray-700 mb-2">Small Size / Success Color / Flat Variant</h4>\r
        <Accordion variant="flat" size="sm" color="success">\r
          <AccordionItem id="sc-3" title="System Stable">\r
            This is a 'sm' sized accordion utilizing the 'success' color tint.\r
          </AccordionItem>\r
          <AccordionItem id="sc-4" title="Diagnostics">\r
            All telemetry is reporting green.\r
          </AccordionItem>\r
        </Accordion>\r
      </div>\r
      \r
      <div>\r
        <h4 className="font-semibold text-gray-700 mb-2">Danger Color / Bordered Variant</h4>\r
        <Accordion variant="bordered" color="danger">\r
          <AccordionItem id="sc-5" title="Danger Zone">\r
            These actions are destructive. Proceed with caution.\r
          </AccordionItem>\r
          <AccordionItem id="sc-6" title="Delete Account">\r
            This will permanently remove all your data from our servers.\r
          </AccordionItem>\r
        </Accordion>\r
      </div>\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`AllowMultiple`,`ElevatedWithSubtitles`,`NestedSubAccordions`,`DisabledItems`,`ExpandCollapseControls`,`SizesAndColors`]}))();export{w as AllowMultiple,C as Default,D as DisabledItems,T as ElevatedWithSubtitles,O as ExpandCollapseControls,E as NestedSubAccordions,k as SizesAndColors,A as __namedExportsOrder,S as default};