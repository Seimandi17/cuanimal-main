const importedModules = {
  ...import.meta.glob("/src/Backoffices/moduls/*.jsx", { eager: true }),
  ...import.meta.glob("/src/Backoffices/pages/**/*.jsx", { eager: true }),
};

export const modules = Object.entries(importedModules).map(([path, module]) => ({
  name: `/backoffice/${module.PageInfo.path}`,
  title: module.PageInfo.title || "No property found",
  homeStats: module.PageInfo.homeStats || module.PageInfo.path,
  logo: module.PageInfo.logo || "/icons-backoffice/dashboard.svg",
  count: module.PageInfo.count || 0,
}));
