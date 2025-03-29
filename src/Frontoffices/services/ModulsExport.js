const importedModules = import.meta.glob("/src/Frontoffices/pages/*/index.jsx", { eager: true });

export const modules = Object.entries(importedModules).map(([path, module]) => {
  if (!module.PageInfo) {
    console.warn(`⚠️ Advertencia: El módulo en ${path} no tiene PageInfo.`);
    return null; // Evitar que se rompa el código
  }

  return {
    name: `/${module.PageInfo.path || ""}`, // Evitar undefined
    title: module.PageInfo.title || "No property found",
    homeStats: module.PageInfo.homeStats || module.PageInfo.path || "",
    logo: module.PageInfo.logo || '/src/assets/logos/logoNotFound.png',
    count: module.PageInfo.count || 0
  };
}).filter(Boolean); // Elimina elementos null
