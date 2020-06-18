/*eslint-disable*/
export default class ccccitError extends Error {
  constructor({ error, name = null }) {
    const { config = null, response = null, request = null, message = null } = error
    let errorMessage = message || 'Request Error'
    if (response && response.data && response.data.error) {
      errorMessage = response.data.error
    }
    super(errorMessage)
    this.name = name || 'Error'
    this.response = response
    this.request = request
    this.config = config
    this.details = response
      ? response.data && response.data.details
        ? response.data.details
        : null
      : null
  }
}
