module.exports = {
  getNextHeadingLevel(currentLevel) {
    return parseInt(currentLevel, 10) + 1;
  },
  getReadingTime(text) {
    const wordsPerMinute = 200;

    let noSVGMarkup = text.replace(/<svg.*svg>/mg, "removed");
    const numberOfWords = noSVGMarkup.split(/\s/g).length;

    return Math.ceil(numberOfWords / wordsPerMinute)
  },
  isUpcoming(date) {
    const now = new Date();
    const eventDate = new Date(date);
    if (eventDate >= now) {
      // return 'true';

      return `${eventDate} eventdate`;
    }
  }
};
