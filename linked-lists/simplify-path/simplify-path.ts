function simplifyPath(path: string): string {
  const list: string[] = [];

  const dirs = path.split('/');

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === '..') {
      if (list.length > 0) {
        list.pop();
      }
    } else if (dirs[i] !== '' && dirs[i] !== '.') {
      list.push(dirs[i]);
    }
  }

  if (list.length === 0) {
    return '/';
  }

  return '/' + list.join('/');
}
