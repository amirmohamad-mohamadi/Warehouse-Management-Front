import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import tailwindPostcss from "@tailwindcss/postcss";
import dotenv from "dotenv";

const ENV_KEYS = [
  "CUSTOM_NODE_ENV",
  "API_ENV",
  "BASE_URL",
  "DEV_BASE_URL",
  "GOOGLE_SITEKEY",
] as const;

const injectEnv = (keys: readonly string[]) =>
  Object.fromEntries(
    keys.map((key) => {
      const value = process.env[key];
      if (value === undefined) {
        console.warn(`[ENV WARNING] ${key} is not defined in .env file`);
      }
      return [`process.env.${key}`, JSON.stringify(value ?? "")];
    })
  );

// TODO: Load env file based on NODE_ENV without path.resolve
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });

export default defineConfig({
  source: {
    tsconfigPath: "./tsconfig.json",
    entry: {
      index: "./src/main.tsx",
    },
    define: {
      __APP_VERSION__: JSON.stringify("0.0.0"),
      ...injectEnv(ENV_KEYS),
    },
  },

  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindPostcss()],
      },
    },
  },

  output: {
    distPath: {
      root: "dist",
    },
    sourceMap: {
      js:
        process.env.CUSTOM_NODE_ENV === "development"
          ? "cheap-module-source-map"
          : false,
      css: false,
    },
  },

  html: {
    title: "Warehouse Management",
    favicon: "./src/assets/react.svg",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  server: {
    port: 5173,
    open: true,
  },

  performance: {
    chunkSplit: {
      strategy: "custom",
      forceSplitting: {
        vendorReact: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        vendorAgGrid:
          /[\\/]node_modules[\\/](ag-grid-community|ag-grid-react)[\\/]/,
        vendorTanStack: /[\\/]node_modules[\\/](@tanstack)[\\/]/,
        vendorZustand: /[\\/]node_modules[\\/](zustand)[\\/]/,
        vendorRouter: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
      },
    },
  },

  plugins: [pluginReact(), pluginSvgr(), pluginTypeCheck()],
});
