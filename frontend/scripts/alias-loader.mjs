import { register } from "node:module";
import { dirname, resolve as pathResolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = pathResolve(dirname(fileURLToPath(import.meta.url)), "..");

register(
  `data:text/javascript,${encodeURIComponent(`
    import { existsSync, statSync } from "node:fs";
    import { dirname, extname, resolve as pathResolve } from "node:path";
    import { fileURLToPath, pathToFileURL } from "node:url";
    const root = ${JSON.stringify(root)};
    function fileIfExists(path) {
      try {
        return existsSync(path) && statSync(path).isFile() ? path : null;
      } catch {
        return null;
      }
    }
    function resolveFile(basePath) {
      if (extname(basePath)) return fileIfExists(basePath);
      return (
        fileIfExists(basePath) ||
        fileIfExists(basePath + ".ts") ||
        fileIfExists(basePath + ".tsx") ||
        fileIfExists(basePath + ".js") ||
        fileIfExists(basePath + ".mjs") ||
        fileIfExists(pathResolve(basePath, "index.ts"))
      );
    }
    export async function resolve(specifier, context, nextResolve) {
      let mapped = null;
      if (specifier.startsWith("@/")) {
        mapped = pathResolve(root, specifier.slice(2));
      } else if (
        (specifier.startsWith("./") || specifier.startsWith("../")) &&
        context.parentURL
      ) {
        mapped = pathResolve(dirname(fileURLToPath(context.parentURL)), specifier);
      } else {
        return nextResolve(specifier, context);
      }
      const file = resolveFile(mapped);
      if (!file) return nextResolve(specifier, context);
      return nextResolve(pathToFileURL(file).href, context);
    }
  `)}`,
  pathToFileURL("./")
);
