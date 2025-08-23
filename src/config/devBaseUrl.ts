export const apiEnv = "web"; // فقط این خط رو تغییر بده

export const apiEndpoints = {
  web: "http://localhost:3000/api/v1/wms",
  test: "http://192.168.1.153:8088/",
  port8050: "http://192.168.1.54:8050/",
  singleAtlas: "http://192.168.1.153:8087/",
};

export const devBaseUrl = apiEndpoints[apiEnv as keyof typeof apiEndpoints];
