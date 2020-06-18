/*eslint-disable*/
import axios from "axios";
import Member from "./member";
import Errors from "./errors";

/**
 * Creates an API handler for the current instance with the provided options.
 * @param options
 * @returns {get: get, getAll: getAll, post: post, put: put, patch: patch, delete: del, create: create}
 */
export default function createApiHandler(options) {
  const instance = createInstance();
  let requestInterceptorInstance = null;
  let responseInterceptorInstance = null;

  /**
   * Create an Axios instance.
   */
  function createInstance() {
    return axios.create(getInstanceOptions());
  }

  /**
   * Get the current Axios instance for this API handler.
   * @returns {Object} axios instance
   */
  function getInstance() {
    return instance;
  }

  /**
   * Generate the minimum configuration options for the current Axios instance.
   * @returns {Object}
   */
  function getInstanceOptions() {
    return {
      baseURL: getBaseURL(),
      timeout: options.requestTimeout,
      headers: getRequestHeaders()
    };
  }

  /**
   * Get the base URL for API calls for the current environment selection (live/sandbox) including the version.
   * @returns {string}
   */
  function getBaseURL() {
    const url = options.apiEndpoints;
    return `${url}`;
  }

  /**
   * Generate the request headers at instantiation with the `token` if present.
   * @returns {Object}
   */
  function getRequestHeaders() {
    if (options.token) {
      return {
        token: options.token
      };
    }
    return {};
  }

  /**
   * Define the default timeout delay in milliseconds for the current API instance.
   * @param timeout number timeout delay in milliseconds
   */
  function setTimeout(timeout) {
    options.requestTimeout = Number(timeout);
    instance.defaults.timeout = options.requestTimeout;
  }

  function setPostContentTypeFormUrl() {
    instance.defaults.headers["Content-Type"] =
      "application/x-www-form-urlencoded";
  }

  function setPostContentTypeJSON() {
    instance.defaults.headers["Content-Type"] =
      "application/json;charset=UTF-8";
  }

  function setPostContentTypeFormData() {
    instance.defaults.headers["Content-Type"] = "multipart/form-data";
  }

  function setSessionToken(token) {
    instance.defaults.headers.Authorization = `${token}`;
  }

  function setPrincipal(userName) {
    instance.defaults.headers.Principal = `${userName}`;
  }

  function setUnionid(unionid) {
    instance.defaults.headers["Wechat-Unionid"] = `${unionid}`;
  }

  /**
   * Wraps an Axios request to handle both the response and errors and return wrapped objects.
   * @param request {Promise}
   * @param isCollection {boolean} defines whether the request is done to a collection or a member of the API
   * @returns {Promise.<*>}
   */
  async function wrapRequest(request) {
    try {
      const response = await request;
      return processResponse(response);
    } catch (error) {
      return processError(error);
    }
  }

  /**
   * Creates a Member or Collection from the response based on the type flag `isCollection`.
   * @param response {Object} raw API response
   * @param isCollection {boolean}
   * @returns {Member|Collection}
   */
  function processResponse(response) {
    return new Member(response);
  }

  /**
   * Throws an instance of Error from the base Axios error.
   * @param error {Object}
   */
  function processError(error) {
    if (error.response) {
      switch (Number(error.response.status)) {
        case 401: // unauthorized
          throw new Errors.ForbiddenError(error);
        case 404: // not found
          throw new Errors.NotFoundError(error);
        default:
          // for anything else we will use the default error
          throw new Errors.RequestError(error);
      }
    } else if (error.code === "ECONNABORTED") {
      throw new Errors.TimeoutError(error);
    } else {
      throw new Errors.RequestError(error);
    }
  }

  /**
   * Remove null or empty string parameters from the provided configuration parameters and return only defined values.
   * @param configuration {object}
   * @returns {Object}
   */
  function cleanUpParameters(configuration) {
    if (configuration.params !== undefined) {
      configuration.params = Object.keys(configuration.params)
        .filter(
          key =>
            configuration.params[key] !== null &&
            configuration.params[key] !== ""
        )
        .reduce((cleaned, key) => {
          cleaned[key] = configuration.params[key];
          return cleaned;
        }, {});
    }
    return configuration;
  }

  /**
   * Trigger a GET request on the target URL and return the member received in the response.
   * @param url {string}
   * @param params {Object}
   * @param config {Object}
   * @returns {Member} member
   */
  function get(url, params = {}, flags = {}) {
    let config = {};
    if (!flags.authenticate) {
      config = { headers: { ...instance.defaults.headers } };
    }
    return wrapRequest(instance.get(url, cleanUpParameters(params), config));
  }

  /**
   * Trigger a POST request on the target URL with the provided data payload, and return the member received in the response.
   * @param url {string}
   * @param data {Object}
   * @param flags {Object}
   * @returns {Member} member
   */
  function post(url, data, flags = {}) {
    let config = {};
    if (!flags.authenticate) {
      config = { headers: { ...instance.defaults.headers } };
    }
    return wrapRequest(instance.post(url, data, config));
  }

  /**
   * Trigger a PUT request on the target URL with the provided data payload, and return the member received in the response.
   * @param url {string}
   * @param data {Object}
   * @returns {Member} member
   */
  function put(url, data) {
    return wrapRequest(instance.put(url, data));
  }

  /**
   * Trigger a PATCH request on the target URL with the provided data payload, and return the member received in the response.
   * @param url {string}
   * @param data {Object}
   * @returns {Member} member
   */
  function patch(url, data) {
    return wrapRequest(instance.patch(url, data));
  }

  /**
   * Trigger a DELETE request on the target URL.
   * @param url {string}
   * @returns {null|*}
   */
  function del(url) {
    return wrapRequest(instance.delete(url));
  }

  /**
   * Create a new member for the current resource using the data payload if no ID is provided, otherwise verify if the ID already exists and create the member with the specified ID. Throws InvalidOperationError if the ID already exists.
   * @param url {string}
   * @param id {string}
   * @param data {Object}
   * @throws Errors.InvalidOperationError
   * @returns {Member} member
   */
  async function create(url, id, data) {
    if (id === "") {
      return wrapRequest(instance.post(url, data));
    }

    try {
      const item = await wrapRequest(instance.get(url));
      if (item.response.status === 200) {
        throw new Errors.InvalidOperationError({
          message: "Member already exists. Please use a different ID."
        });
      }
    } catch (error) {
      if (error.name === "NotFoundError") {
        return wrapRequest(instance.put(url, data));
      }
      return error;
    }
  }

  /**
   * Trigger a get call to the specified URL without converting the response into a Member. Use the config object to specify headers and desired response type.
   * @link https://github.com/mzabriskie/axios#request-config
   * @param url {string}
   * @param config {Object}
   * @returns {Promise.<*>}
   */
  async function download(url, config) {
    try {
      const response = await instance.get(url, cleanUpParameters(config));
      return {
        response: {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        },
        data: response.data
      };
    } catch (error) {
      return processError(error);
    }
  }

  function requestInterceptor() {
    requestInterceptorInstance = instance.interceptors.request.use(config => {
      console.log(config);
      // return Promise.resolve(config)
    });
  }

  function responseInterceptor() {
    responseInterceptorInstance = instance.interceptors.response.use(
      response => {
        console.log(response);
        return response;
      }
    );
  }

  function ejectInterceptor() {
    instance.interceptors.request.eject(requestInterceptorInstance);
    instance.interceptors.response.eject(responseInterceptorInstance);
  }

  return {
    getInstance,
    setTimeout,
    setPostContentTypeFormUrl,
    setPostContentTypeFormData,
    setPostContentTypeJSON,
    setUnionid,
    get,
    setSessionToken,
    setPrincipal,
    post,
    put,
    patch,
    delete: del,
    create,
    download,
    requestInterceptor,
    responseInterceptor,
    ejectInterceptor
  };
}
