// prefer old unicode hacks for backward compatibility
// https://base64.guru/developers/javascript/examples/unicode-strings
export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

export function atou(base64: string): string {
  return decodeURIComponent(escape(atob(base64)));
}

export function customReplCodeGen(templateStringCode: string): string {
  const defaultImportMap = JSON.stringify({
    imports: {},
  });

  const customReplCode = {
    "App.vue": templateStringCode,
    "import-map.json": defaultImportMap,
  };
  return utoa(JSON.stringify(customReplCode));
}
