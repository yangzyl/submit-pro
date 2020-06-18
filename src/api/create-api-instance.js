import Resources from "./resources";

/**
 * Create an API instance using the provided API handler.
 * @param apiHandler {Object}
 * @returns {Object}
 */
export default function createApiInstance(apiHandler) {
  return {
    poverty: Resources.PovertyResource(apiHandler),
  };
}
