# Encode and Decode TinyURL

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Hashcode To longUrl Mapping

The most simplest solution would involve converting the `longUrl` into a short unique hash a short unique hash and mapping the hash to the `longUrl` in a key value data structure (RDBMS or HashMap)

With Java we can use the builin `hashCode` method on the incoming `longUrl` and take the first 8 characters as the unique `shortUrl` store the `longUrl` in a data structure indexed with its `shortUrl`.

When a `longUrl` is requested we will get the `longUrl` from memory by acessing it by the given `shortUrl`

Since `hashCode` is subject to hash collisions we can create a new `MD5` hash out of the `longUrl` before converting encoding it into `Base64`. giving us a total of `64^8` (for an 8 character long shortUrl) available shortUrls. Since we don't want two requests of the same `longUrl` to give back the same `shortUrl`. We will append a incrementing `counter` that will be appended to the `longUrl` before being hashed by `MD5`.
After encoding the string to `Base64` we will take the first 8 characters as our 8-character `shortUrl` and map it to the `longUrl`

- [JavaScript](./encode-and-decode-tinyurl.js)
- [TypeScript](./encode-and-decode-tinyurl.ts)
- [Java](./encode-and-decode-tinyurl.java)
- [Go](./encode-and-decode-tinyurl.go)

</details>
