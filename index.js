class Formatter {
  //add static methods here 
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } 

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]/g, '');
  } 

  static titleize(str) {
    const words = str.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']; 
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}