import{a as o}from"./vendor-Dr0KmOfh.js";const t="52398944-8832a4a5cb581cf5dc4de5156",s="https://pixabay.com/api/";async function n(e){const r={key:t,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};try{return(await o.get(s,{params:r})).data}catch(a){throw console.error("Error fetching images:",a),a}}export{n as g};
//# sourceMappingURL=pixabay-api-Dmvbxiz0.js.map
