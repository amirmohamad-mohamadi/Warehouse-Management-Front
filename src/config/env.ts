const currentEnv = process.env.CUSTOM_NODE_ENV;
export const isDevEnv = !currentEnv || currentEnv === "development";
export const isTestEnv = currentEnv === "test";
export const isProductEnv = currentEnv === "production";

export const isLocalhost = isDevEnv;
