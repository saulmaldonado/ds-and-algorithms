const crypto = require('crypto');

const urls = {};
let counter = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const hash = crypto
    .createHash('md5')
    .update(longUrl + counter++)
    .digest('hex');

  const shortUrl = Buffer.from(hash).toString('base64').substring(0, 8);
  urls[shortUrl] = longUrl;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return urls[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
