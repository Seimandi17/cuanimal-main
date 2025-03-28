var importedModules = {};
var backoffice = "/backoffice";
const user = JSON.parse(localStorage.getItem("user"));


if(user && user?.role_id === 1){
  importedModules = {
    ...import.meta.glob("/src/Backoffices/pages/admin/*/index.jsx", { eager: true }),
  }
  backoffice+= "/admin";
}else if(user && user?.role_id === 2){
  importedModules = {
    ...import.meta.glob("/src/Backoffices/pages/provider/*/index.jsx", { eager: true }),
  }
  backoffice+= "/proveedor";
}

export const modules = Object.entries(importedModules).map(([path, module]) => ({
  name: `${backoffice}/${module.PageInfo.path}`,
  title: module.PageInfo.title || "No property found",
  homeStats: module.PageInfo.homeStats || module.PageInfo.path,
  logo: module.PageInfo.logo || "/icons-backoffice/dashboard.svg",
  count: module.PageInfo.count || 0,
}));
