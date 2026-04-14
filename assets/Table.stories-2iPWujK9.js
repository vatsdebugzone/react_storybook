import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-j87nNuiK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{B as i,G as a,H as o,L as s,N as c,P as l,U as u,V as d,X as f,c as p,d as m,i as h,o as g,t as _,x as v}from"./index.es-Bz5MGhRI.js";import{n as y,t as b}from"./Button-DTL6o_Jg.js";import{n as x,t as S}from"./Checkbox-BJ3Dp7oK.js";import{n as C,t as w}from"./Chips-CA3DEzl3.js";import{n as T,t as E}from"./Textbox-CLRvh3Jy.js";var D=t((()=>{}));function O({columns:e,data:t,rowKey:n=`id`,selectable:r=!1,pagination:a=!0,pageSize:s=5,pageSizeOptions:c,searchable:p=!0,searchPlaceholder:m=`Search records...`,loading:h=!1,title:g,actions:_,className:y=``,variant:x=`default`,onSelectionChange:C,stickyHeader:w=!1,condensed:T=!1,emptyState:D}){let[O,j]=(0,k.useState)(``),[M,N]=(0,k.useState)(s),[P,F]=(0,k.useState)(1),[I,L]=(0,k.useState)(null),[R,z]=(0,k.useState)(new Set);(0,k.useEffect)(()=>{N(s)},[s]),(0,k.useEffect)(()=>{F(1)},[O]);let B=(0,k.useMemo)(()=>{let e=[...t];return O&&(e=e.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(O.toLowerCase())))),e},[t,O]),V=(0,k.useMemo)(()=>{let e=[...B];return I&&e.sort((e,t)=>{let n=e[I.key],r=t[I.key];return n<r?I.direction===`asc`?-1:1:n>r?I.direction===`asc`?1:-1:0}),e},[B,I]),H=Math.ceil(V.length/M),U=(0,k.useMemo)(()=>{if(!a)return V;let e=(P-1)*M;return V.slice(e,e+M)},[V,a,P,M]),W=e=>{e?(z(new Set(U.map(e=>e[n]))),C?.(U)):(z(new Set),C?.([]))},G=(e,r)=>{let i=new Set(R);r?i.add(e):i.delete(e),z(i);let a=t.filter(e=>i.has(e[n]));C?.(a)},K=e=>{let t=`asc`;I&&I.key===e&&I.direction===`asc`&&(t=`desc`),L({key:e,direction:t})},q=U.length>0&&U.every(e=>R.has(e[n])),J=R.size>0&&!q,Y=(0,k.useCallback)((e,t)=>{let n=String(e);return!t||!n?n:(0,A.jsx)(A.Fragment,{children:n.split(RegExp(`(${t})`,`gi`)).map((e,n)=>e.toLowerCase()===t.toLowerCase()?(0,A.jsx)(`mark`,{className:`storybook-table-highlight`,children:e},n):e)})},[]),X=(e,t)=>{let n=t[e.key],r=e.render?e.render(n,t):Y(n,O);if(e.isImage&&n&&(r=(0,A.jsx)(`img`,{src:n,alt:e.label,className:`storybook-table-cell-image is-${e.imageShape||`circle`}`})),e.isRating){let t=Number(n)||0,r=e.maxRating??5;return(0,A.jsxs)(`div`,{className:`storybook-table-cell-rating`,children:[Array.from({length:r}).map((e,n)=>(0,A.jsx)(`span`,{className:`storybook-table-star ${n<t?`is-filled`:`is-empty`}`,"aria-hidden":`true`,children:`★`},n)),(0,A.jsxs)(`span`,{className:`storybook-table-rating-value`,children:[t,`/`,r]})]})}return e.link?(0,A.jsx)(`a`,{href:e.link(t),className:`storybook-table-cell-link`,onClick:e=>e.stopPropagation(),children:r}):r};return(0,A.jsxs)(`div`,{className:[`storybook-generic-table-container`,`storybook-generic-table-container--${x}`,w?`is-sticky`:``,T?`is-condensed`:``,h?`is-loading`:``,y].filter(Boolean).join(` `),children:[(g||p||R.size>0)&&(0,A.jsxs)(`div`,{className:`storybook-table-header`,children:[(0,A.jsxs)(`div`,{className:`storybook-table-header-left`,children:[g&&(0,A.jsx)(`h3`,{className:`storybook-table-title`,children:g}),R.size>0&&(0,A.jsxs)(`div`,{className:`storybook-table-selection-info animate-fade-in`,children:[(0,A.jsx)(`span`,{className:`count`,children:R.size}),(0,A.jsx)(`span`,{className:`text`,children:`selected`}),(0,A.jsx)(b,{size:`small`,variant:`ghost`,label:`Clear`,onClick:()=>W(!1),className:`text-blue-600 hover:text-blue-700 font-bold`})]})]}),(0,A.jsx)(`div`,{className:`storybook-table-header-right`,children:p&&(0,A.jsx)(E,{placeholder:m,value:O,onChange:j,icon:(0,A.jsx)(v,{size:18,weight:`bold`}),radius:`rounded`,className:`storybook-table-search`})})]}),(0,A.jsx)(`div`,{className:`storybook-table-wrapper`,children:(0,A.jsxs)(`table`,{className:`storybook-table`,children:[(0,A.jsx)(`thead`,{children:(0,A.jsxs)(`tr`,{children:[r&&(0,A.jsx)(`th`,{className:`storybook-table-th-checkbox`,children:(0,A.jsx)(S,{checked:q,indeterminate:J,onChange:W})}),e.map(e=>(0,A.jsx)(`th`,{style:{width:e.width,textAlign:e.align},className:e.sortable?`is-sortable`:``,onClick:()=>e.sortable&&K(e.key),children:(0,A.jsxs)(`div`,{className:`storybook-table-th-content align-${e.align||`left`}`,children:[(0,A.jsx)(`span`,{children:e.label}),e.sortable&&(0,A.jsx)(`span`,{className:`storybook-table-sort-icons`,children:I?.key===e.key?I.direction===`asc`?(0,A.jsx)(i,{weight:`bold`}):(0,A.jsx)(u,{weight:`bold`}):(0,A.jsx)(f,{size:14,weight:`bold`,className:`opacity-30`})})]})},e.key)),_&&(0,A.jsx)(`th`,{className:`storybook-table-th-actions`,children:`Operations`})]})}),(0,A.jsx)(`tbody`,{children:h?Array.from({length:s}).map((t,n)=>(0,A.jsxs)(`tr`,{className:`storybook-table-row-skeleton`,children:[r&&(0,A.jsx)(`td`,{children:(0,A.jsx)(`div`,{className:`skeleton-checkbox`})}),e.map((e,t)=>(0,A.jsx)(`td`,{children:(0,A.jsx)(`div`,{className:`skeleton-line`})},t)),_&&(0,A.jsx)(`td`,{children:(0,A.jsx)(`div`,{className:`skeleton-circle`})})]},n)):U.length>0?U.map((t,i)=>(0,A.jsxs)(`tr`,{className:`storybook-table-row ${R.has(t[n])?`is-selected`:``}`,style:{"--row-index":i},children:[r&&(0,A.jsx)(`td`,{children:(0,A.jsx)(S,{checked:R.has(t[n]),onChange:e=>G(t[n],e)})}),e.map(e=>(0,A.jsx)(`td`,{style:{textAlign:e.align},children:X(e,t)},e.key)),_&&(0,A.jsx)(`td`,{className:`storybook-table-td-actions`,children:(0,A.jsx)(b,{variant:`ghost`,size:`small`,iconOnly:!0,icon:(0,A.jsx)(l,{size:20,weight:`bold`}),dropdownOptions:_(t),dropdownAlign:`right`,className:`storybook-table-action-btn`})})]},t[n])):(0,A.jsx)(`tr`,{children:(0,A.jsx)(`td`,{colSpan:e.length+(r?1:0)+(_?1:0),className:`storybook-table-empty-td`,children:D||(0,A.jsxs)(`div`,{className:`storybook-table-empty-state`,children:[(0,A.jsx)(`div`,{className:`empty-icon-wrapper`,children:(0,A.jsx)(v,{size:48,weight:`duotone`})}),(0,A.jsx)(`h4`,{children:`No Records Found`}),(0,A.jsx)(`p`,{children:`Try adjusting your search or filters to find what you're looking for.`})]})})})})]})}),a&&H>0&&(0,A.jsxs)(`div`,{className:`storybook-table-footer`,children:[(0,A.jsxs)(`div`,{className:`storybook-table-footer-left`,children:[(0,A.jsxs)(`div`,{className:`storybook-table-pagination-info`,children:[`Showing `,(0,A.jsx)(`b`,{children:(P-1)*M+1}),` to `,(0,A.jsx)(`b`,{children:Math.min(P*M,B.length)}),` of `,(0,A.jsx)(`b`,{children:B.length}),` entries`]}),c&&(0,A.jsxs)(`div`,{className:`storybook-table-page-size-selector`,children:[(0,A.jsx)(`span`,{className:`text-xs text-gray-400`,children:`Show:`}),(0,A.jsx)(`select`,{value:M,onChange:e=>{N(Number(e.target.value)),F(1)},className:`storybook-table-page-select`,children:c.map(e=>(0,A.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,A.jsxs)(`div`,{className:`storybook-table-pagination-controls`,children:[(0,A.jsx)(b,{variant:`ghost`,size:`sm`,label:`Previous`,icon:(0,A.jsx)(o,{size:14,weight:`bold`}),onClick:()=>F(e=>Math.max(1,e-1)),disabled:P===1,className:`storybook-table-pagination-btn`}),(0,A.jsx)(`div`,{className:`storybook-table-pagination-pages`,children:Array.from({length:H}).map((e,t)=>(0,A.jsx)(`button`,{className:`pagination-page ${P===t+1?`active`:``}`,onClick:()=>F(t+1),children:t+1},t))}),(0,A.jsx)(b,{variant:`ghost`,size:`sm`,label:`Next`,icon:(0,A.jsx)(d,{size:14,weight:`bold`}),iconPosition:`right`,onClick:()=>F(e=>Math.min(H,e+1)),disabled:P===H,className:`storybook-table-pagination-btn`})]})]})]})}var k,A,j=t((()=>{k=e(n(),1),_(),x(),y(),T(),D(),A=r();try{O.displayName=`Table`,O.__docgenInfo={description:``,displayName:`Table`,props:{columns:{defaultValue:null,description:`Column definitions`,name:`columns`,required:!0,type:{name:`TableColumn<T>[]`}},data:{defaultValue:null,description:`Data array`,name:`data`,required:!0,type:{name:`T[]`}},rowKey:{defaultValue:{value:`'id' as keyof T`},description:`Unique key for each row (default: 'id')`,name:`rowKey`,required:!1,type:{name:`string | number | symbol`}},selectable:{defaultValue:{value:`false`},description:`Enable row selection`,name:`selectable`,required:!1,type:{name:`boolean`}},pagination:{defaultValue:{value:`true`},description:`Enable pagination`,name:`pagination`,required:!1,type:{name:`boolean`}},pageSize:{defaultValue:{value:`5`},description:`Number of items per page`,name:`pageSize`,required:!1,type:{name:`number`}},pageSizeOptions:{defaultValue:null,description:`Available options for results per page`,name:`pageSizeOptions`,required:!1,type:{name:`number[]`}},searchable:{defaultValue:{value:`true`},description:`Enable global search`,name:`searchable`,required:!1,type:{name:`boolean`}},searchPlaceholder:{defaultValue:{value:`Search records...`},description:`Placeholder for search input`,name:`searchPlaceholder`,required:!1,type:{name:`string`}},loading:{defaultValue:{value:`false`},description:`Loading state`,name:`loading`,required:!1,type:{name:`boolean`}},title:{defaultValue:null,description:`Optional title for the table`,name:`title`,required:!1,type:{name:`string`}},actions:{defaultValue:null,description:`Row action menu options`,name:`actions`,required:!1,type:{name:`(row: T) => { label: string; onClick: () => void; icon?: React.ReactNode; }[]`}},className:{defaultValue:{value:``},description:`Additional wrapper class names`,name:`className`,required:!1,type:{name:`string`}},variant:{defaultValue:{value:`default`},description:`Visual variant`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"glass"`},{value:`"bordered"`}]}},onSelectionChange:{defaultValue:null,description:`Callback when selection changes`,name:`onSelectionChange`,required:!1,type:{name:`(selectedRows: T[]) => void`}},stickyHeader:{defaultValue:{value:`false`},description:`Make table header sticky`,name:`stickyHeader`,required:!1,type:{name:`boolean`}},condensed:{defaultValue:{value:`false`},description:`Make table rows more compact`,name:`condensed`,required:!1,type:{name:`boolean`}},emptyState:{defaultValue:null,description:`Custom content to display when no records are found`,name:`emptyState`,required:!1,type:{name:`React.ReactNode`}}}}}catch{}})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{j(),C(),_(),M=r(),N={title:`Data/Table`,component:O,parameters:{layout:`padded`},tags:[`autodocs`]},P=[{key:`name`,label:`User`,sortable:!0,render:(e,t)=>(0,M.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,M.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs`,children:t.name.charAt(0)}),(0,M.jsxs)(`div`,{className:`flex flex-col`,children:[(0,M.jsx)(`span`,{className:`font-bold text-gray-900`,children:e}),(0,M.jsxs)(`span`,{className:`text-[10px] text-gray-400`,children:[`UID: #`,t.id]})]})]})},{key:`email`,label:`Email Address`,sortable:!0,render:e=>(0,M.jsxs)(`div`,{className:`flex items-center gap-2 text-gray-500`,children:[(0,M.jsx)(c,{size:14}),e]})},{key:`role`,label:`Role`,sortable:!0,render:e=>(0,M.jsx)(`span`,{className:`px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium uppercase tracking-wider`,children:e})},{key:`status`,label:`Status`,sortable:!0,render:e=>{switch(e){case`active`:return(0,M.jsx)(w,{label:`Active`,color:`success`,size:`sm`,variant:`filled`,icon:(0,M.jsx)(m,{})});case`pending`:return(0,M.jsx)(w,{label:`Pending`,color:`warning`,size:`sm`,variant:`filled`,icon:(0,M.jsx)(s,{})});case`blocked`:return(0,M.jsx)(w,{label:`Blocked`,color:`error`,size:`sm`,variant:`filled`,icon:(0,M.jsx)(h,{})});default:return(0,M.jsx)(w,{label:e,size:`sm`})}}},{key:`joined`,label:`Joined Date`,sortable:!0,render:e=>(0,M.jsxs)(`div`,{className:`flex items-center gap-2 text-gray-400`,children:[(0,M.jsx)(a,{size:14}),e]})}],F=[{id:101,name:`Alex Murphy`,email:`alex.m@omnicorp.com`,role:`Security`,status:`active`,joined:`2023-01-12`},{id:102,name:`Ellen Ripley`,email:`ripley@weyland.com`,role:`Officer`,status:`active`,joined:`2023-02-05`},{id:103,name:`Rick Deckard`,email:`deckard@lapd.gov`,role:`Blade Runner`,status:`blocked`,joined:`2022-11-20`},{id:104,name:`Sarah Connor`,email:`sarah.c@resistance.org`,role:`Commander`,status:`pending`,joined:`2023-05-15`},{id:105,name:`James Holden`,email:`holden@rocinante.space`,role:`Captain`,status:`active`,joined:`2023-03-30`},{id:106,name:`Amos Burton`,email:`amos@rocinante.space`,role:`Mechanic`,status:`active`,joined:`2023-03-30`},{id:107,name:`Chrisjen Avasarala`,email:`avasarala@un.gov`,role:`Executive`,status:`blocked`,joined:`2022-08-10`},{id:108,name:`Bobbie Draper`,email:`bobbie@mcrn.mars`,role:`Sergeant`,status:`pending`,joined:`2023-06-22`}],I={args:{title:`User Management`,columns:P,data:F,selectable:!0,pagination:!0,pageSize:5,searchable:!0}},L={args:{...I.args,variant:`bordered`}},R={parameters:{backgrounds:{default:`dark`}},args:{...I.args,variant:`glass`}},z={args:{...I.args,loading:!0}},B={args:{title:`Product Ratings`,columns:[{key:`name`,label:`Product`,sortable:!0,render:e=>(0,M.jsx)(`span`,{className:`font-semibold text-gray-800`,children:e})},{key:`category`,label:`Category`,sortable:!0},{key:`rating`,label:`Rating`,sortable:!0,isRating:!0,maxRating:5},{key:`reviews`,label:`Reviews`,sortable:!0,align:`right`},{key:`price`,label:`Price`,sortable:!0,align:`right`,render:e=>(0,M.jsxs)(`span`,{className:`font-bold text-green-600`,children:[`$`,e]})}],data:[{id:1,name:`Arc Flow Headset`,category:`Audio`,rating:5,reviews:1240,price:129},{id:2,name:`Luminary Desk Lamp`,category:`Lighting`,rating:4,reviews:876,price:59},{id:3,name:`NovaPen Stylus`,category:`Accessories`,rating:3,reviews:421,price:39},{id:4,name:`Quantum Keyboard`,category:`Peripherals`,rating:5,reviews:3105,price:189},{id:5,name:`Vibe Backpack`,category:`Bags`,rating:4,reviews:654,price:79},{id:6,name:`Pixel Webcam 4K`,category:`Cameras`,rating:2,reviews:198,price:99},{id:7,name:`NovaCool Pad`,category:`Accessories`,rating:3,reviews:310,price:29}],selectable:!0,pagination:!0,pageSize:5,searchable:!0,rowKey:`id`}},V={args:{...I.args,actions:e=>[{label:`Edit`,onClick:()=>alert(`Edit ${e.name}`),icon:(0,M.jsx)(g,{size:14})},{label:`Delete`,onClick:()=>alert(`Delete ${e.name}`),icon:(0,M.jsx)(p,{size:14})}]}},H={args:{title:`Advanced User Directory`,columns:[{key:`avatar`,label:``,width:`50px`,isImage:!0,imageShape:`circle`},{key:`name`,label:`Full Name`,sortable:!0,link:e=>`https://example.com/users/${e.id}`},{key:`email`,label:`Email`,sortable:!0,link:e=>`mailto:${e.email}`},{key:`website`,label:`Portfolio`,link:e=>`https://${e.website}`},{key:`status`,label:`Status`,sortable:!0,render:e=>{switch(e){case`active`:return(0,M.jsx)(w,{label:`Active`,color:`success`,size:`sm`,variant:`filled`});case`pending`:return(0,M.jsx)(w,{label:`Pending`,color:`warning`,size:`sm`,variant:`filled`});default:return(0,M.jsx)(w,{label:`Blocked`,color:`error`,size:`sm`,variant:`filled`})}}}],data:F.map(e=>({...e,avatar:`https://i.pravatar.cc/150?u=${e.id}`,website:`portfolio-${e.id}.me`})),selectable:!0,pagination:!0,pageSizeOptions:[5,10,20,50],pageSize:5,searchable:!0}},U={args:{...H.args,title:`Sticky Header Example`,stickyHeader:!0,data:Array.from({length:50}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,status:t%3==0?`active`:`pending`,avatar:`https://i.pravatar.cc/150?u=${t}`,website:`web-${t}.com`}))}},W={args:{...H.args,title:`Condensed High-Density View`,condensed:!0}},G={args:{...H.args,title:`Empty State Demo`,data:[]}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'User Management',
    columns: columns as any,
    data: sampleData as any,
    selectable: true,
    pagination: true,
    pageSize: 5,
    searchable: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'bordered'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    ...Basic.args,
    variant: 'glass'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    loading: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Product Ratings',
    columns: [{
      key: 'name',
      label: 'Product',
      sortable: true,
      render: (val: any) => <span className="font-semibold text-gray-800">{val}</span>
    }, {
      key: 'category',
      label: 'Category',
      sortable: true
    }, {
      key: 'rating',
      label: 'Rating',
      sortable: true,
      isRating: true,
      maxRating: 5
    }, {
      key: 'reviews',
      label: 'Reviews',
      sortable: true,
      align: 'right'
    }, {
      key: 'price',
      label: 'Price',
      sortable: true,
      align: 'right',
      render: (val: any) => <span className="font-bold text-green-600">\${val}</span>
    }] as any,
    data: [{
      id: 1,
      name: 'Arc Flow Headset',
      category: 'Audio',
      rating: 5,
      reviews: 1240,
      price: 129
    }, {
      id: 2,
      name: 'Luminary Desk Lamp',
      category: 'Lighting',
      rating: 4,
      reviews: 876,
      price: 59
    }, {
      id: 3,
      name: 'NovaPen Stylus',
      category: 'Accessories',
      rating: 3,
      reviews: 421,
      price: 39
    }, {
      id: 4,
      name: 'Quantum Keyboard',
      category: 'Peripherals',
      rating: 5,
      reviews: 3105,
      price: 189
    }, {
      id: 5,
      name: 'Vibe Backpack',
      category: 'Bags',
      rating: 4,
      reviews: 654,
      price: 79
    }, {
      id: 6,
      name: 'Pixel Webcam 4K',
      category: 'Cameras',
      rating: 2,
      reviews: 198,
      price: 99
    }, {
      id: 7,
      name: 'NovaCool Pad',
      category: 'Accessories',
      rating: 3,
      reviews: 310,
      price: 29
    }] as any,
    selectable: true,
    pagination: true,
    pageSize: 5,
    searchable: true,
    rowKey: 'id' as any
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    actions: (row: any) => [{
      label: 'Edit',
      onClick: () => alert(\`Edit \${row.name}\`),
      icon: <User size={14} />
    }, {
      label: 'Delete',
      onClick: () => alert(\`Delete \${row.name}\`),
      icon: <Tag size={14} />
    }]
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Advanced User Directory',
    columns: [{
      key: 'avatar',
      label: '',
      width: '50px',
      isImage: true,
      imageShape: 'circle'
    }, {
      key: 'name',
      label: 'Full Name',
      sortable: true,
      link: (row: any) => \`https://example.com/users/\${row.id}\`
    }, {
      key: 'email',
      label: 'Email',
      sortable: true,
      link: (row: any) => \`mailto:\${row.email}\`
    }, {
      key: 'website',
      label: 'Portfolio',
      link: (row: any) => \`https://\${row.website}\`
    }, {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (val: any) => {
        switch (val) {
          case 'active':
            return <Chip label="Active" color="success" size="sm" variant="filled" />;
          case 'pending':
            return <Chip label="Pending" color="warning" size="sm" variant="filled" />;
          default:
            return <Chip label="Blocked" color="error" size="sm" variant="filled" />;
        }
      }
    }] as any,
    data: sampleData.map(d => ({
      ...d,
      avatar: \`https://i.pravatar.cc/150?u=\${d.id}\`,
      website: \`portfolio-\${d.id}.me\`
    })) as any,
    selectable: true,
    pagination: true,
    pageSizeOptions: [5, 10, 20, 50],
    pageSize: 5,
    searchable: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Advanced.args,
    title: 'Sticky Header Example',
    stickyHeader: true,
    data: Array.from({
      length: 50
    }).map((_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      status: i % 3 === 0 ? 'active' : 'pending',
      avatar: \`https://i.pravatar.cc/150?u=\${i}\`,
      website: \`web-\${i}.com\`
    })) as any
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Advanced.args,
    title: 'Condensed High-Density View',
    condensed: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Advanced.args,
    title: 'Empty State Demo',
    data: []
  }
}`,...G.parameters?.docs?.source}}},K=[`Basic`,`Bordered`,`Glass`,`Loading`,`WithRating`,`WithActions`,`Advanced`,`StickyHeader`,`Condensed`,`Empty`]}))();export{H as Advanced,I as Basic,L as Bordered,W as Condensed,G as Empty,R as Glass,z as Loading,U as StickyHeader,V as WithActions,B as WithRating,K as __namedExportsOrder,N as default};