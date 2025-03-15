const importedModules = import.meta.glob("/src/Frontoffices/pages/*.jsx", { eager: true });

export const modules = Object.entries(importedModules).map(([path, module]) => ({
  name: `/${module.PageInfo.path}`,
  title: module.PageInfo.title || "No property found",
  homeStats: module.PageInfo.homeStats || module.PageInfo.path,
  logo: module.PageInfo.logo || '/src/assets/logos/logoNotFound.png',
  count: module.PageInfo.count
}));