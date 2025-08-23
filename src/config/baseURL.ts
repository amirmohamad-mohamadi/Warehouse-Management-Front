import { devBaseUrl } from "./devBaseUrl";
import { isDevEnv } from "./env";

const defaultBase =
  process.env.BASE_URL ||
  document.getElementsByTagName("base")[0]?.getAttribute("href") ||
  "/";
const devBase = devBaseUrl ?? defaultBase;

export const baseURL = isDevEnv ? devBase : defaultBase;
