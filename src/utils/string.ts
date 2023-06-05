export default class StringUtils {
  static separateCamelCase(camelCase: string) {
    return camelCase.replace(/([A-Z])/g, " $1").trim();
  }
}
