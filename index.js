const Application = require('@waline/vercel');

Application.init({
  el: '#waline',
  search: false,
  emoji: [
      '//npm.elemecdn.com/waline-magic@latest/TV',
      '//npm.elemecdn.com/waline-magic@latest/Heybox',
      '//npm.elemecdn.com/waline-magic@latest/2233',
      '//npm.elemecdn.com/waline-magic@latest/Menhera-chan',
    ],
});

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
  forbiddenWords: ['文开', '开文'],
});
