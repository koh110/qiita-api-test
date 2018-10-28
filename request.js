// @ts-nocheck
const axios = require('axios')

/**
 * @typedef {object} Response
 * @property {object} data
 * @property {number} status
 */

/**
 * @param url {string} - url
 * @param options {object} - options
 * @returns {Promise<Response>} data
 */
exports.get = async (url, options = {}) => {
  return await axios.get(url, { timeout: 1000, ...options })
}

/**
 * @param url {string} - url
 * @param data {object} - post data
 * @param options {object} - options
 * @returns {Promise<{data: object, status: string}>} data
 */
exports.post = async (url, data={}, options = {}) => {
  return await axios.post(url, data, { timeout: 1000, ...options })
}
