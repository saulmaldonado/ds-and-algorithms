import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.HashMap;

public class Codec {

  private HashMap<String, String> urls;

  public Codec() {
    this.urls = new HashMap<>();
  }

  // Encodes a URL to a shortened URL.
  public String encode(String longUrl) {
    String hash = longUrl.hashCode() + "";
    if (hash.length() > 8) {
      hash = hash.substring(0, 8);
    }
    urls.put(hash, longUrl);
    return hash;
  }

  // Decodes a shortened URL to its original URL.
  public String decode(String shortUrl) {
    return urls.get(shortUrl);
  }

}

public class Codec2 {
  HashMap<String, String> urls;

  int counter;

  public Codec2() {
    urls = new HashMap<>();
    counter = 0;
  }

  public String encode(String longUrl) throws NoSuchAlgorithmException {
    MessageDigest md5 = MessageDigest.getInstance("MD5");
    byte[] byteArr = md5.digest((longUrl + counter++).getBytes());

    String shortUrl = Base64.getEncoder().encodeToString(byteArr);
    shortUrl = shortUrl.substring(0, 8);
    urls.put(shortUrl, longUrl);
    return shortUrl;
  }

  public String decode(String shortUrl) {
    return urls.get(shortUrl);
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
