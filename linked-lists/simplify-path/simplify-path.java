import java.util.Deque;
import java.util.LinkedList;

class Solution {
  public String simplifyPath(String path) {
    Deque<String> list = new LinkedList<>();

    for (String dir : path.split("/")) {
      if (dir.equals("..")) {
        list.poll();
      } else if (!dir.equals("") && !dir.equals(".")) {
        list.push(dir);
      }
    }

    if (list.size() == 0) {
      return "/";
    }

    StringBuilder builder = new StringBuilder();

    while (list.size() > 0) {
      builder.append("/").append(list.pollLast());
    }

    return builder.toString();

  }
}
