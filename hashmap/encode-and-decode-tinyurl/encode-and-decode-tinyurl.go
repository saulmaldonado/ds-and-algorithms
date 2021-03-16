package encodeanddecodetinyurl

import (
	"crypto/md5"
	"fmt"
)

type Codec struct {
	urls    map[string]string
	counter int
}

func Constructor() Codec {
	return Codec{urls: make(map[string]string), counter: 0}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	hash := md5.Sum([]byte(longUrl + fmt.Sprint(this.counter)))
	this.counter++
	shortUrl := fmt.Sprintf("%x", hash)[:8]
	this.urls[shortUrl] = longUrl
	return shortUrl
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
	return this.urls[shortUrl]
}

/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * url := obj.encode(longUrl);
 * ans := obj.decode(url);
 */
