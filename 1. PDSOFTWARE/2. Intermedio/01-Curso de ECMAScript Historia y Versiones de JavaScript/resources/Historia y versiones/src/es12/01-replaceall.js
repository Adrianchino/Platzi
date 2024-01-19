const string = "JavaScript es maravilloso con JavaScript puedo crear el futuro de la web.";

const replacedString = string.replace('JavaScript', 'TypeScript');


console.log(replacedString);

//otro ejemplo
const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))