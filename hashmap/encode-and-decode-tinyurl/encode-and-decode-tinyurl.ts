//@ts-nocheck

const crypto = require('crypto');

const urls: Record<string, string> = {};
let counter = 0;

function encode(longUrl: string): string {
  const hash: string = crypto
    .createHash('md5')
    .update(longUrl + counter++)
    .digest('hex');

  const shortUrl: string = Buffer.from(hash).toString('base64').substring(0, 8);
  urls[shortUrl] = longUrl;
  return shortUrl;
}

function decode(shortUrl: string): string {
  return urls[shortUrl];
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
