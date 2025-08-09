import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import tailwindPostcss from "@tailwindcss/postcss";

export default defineConfig({
  source: {
    tsconfigPath: "./tsconfig.json",
    entry: {
      index: "./src/main.tsx", // یا هر فایل ورودی واقعی پروژه‌ات
    },

    define: {
      __APP_VERSION__: JSON.stringify("0.0.0"),
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
        process.env.NODE_ENV === "development"
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
