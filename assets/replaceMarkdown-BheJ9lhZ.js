const n=(e,r,p,s=!1)=>{const a=new RegExp(`(?<=^|[\\s\\p{P}_\\-\`])${r}(?=[\\s\\p{P}_\\-\`]|$)`,`g${s?"":"i"}u`);return e.replace(a,p)};export{n as r};
