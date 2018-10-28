// @ts-check

const request = require('./request')

/**
 * @param user {string} - user id
 * @param headers {object} - headers
 * @param [headers.Authorization] {string} - bearer token (optional)
 * @returns {Promise<import('./qiita').User>} data
 */
exports.getUser = async (user, headers = {}) => {
  const res = await request.get(`https://qiita.com/api/v2/users/${user}`, {
    headers: { Authorization: `Bearer ${process.env.TOKEN}`, ...headers }
  })

  return res.data
}
