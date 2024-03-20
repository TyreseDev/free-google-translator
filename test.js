const translateText = require("./translator_api");

// Usage example
const sourceText = "Hello, world!";
const sourceLangEN = "en"; // 'en' for English
const sourceLangAUTO = "auto"; // 'en' for Auto Detect
const targetLangES = "es"; // 'es' for Spanish
const targetLangCN = "zh"; // 'zh' for Chinese

// Example 1
translateText(sourceText, sourceLangEN, targetLangES)
  .then((translatedText) => {
    console.log(`Translated text (${targetLangES}):`, translatedText);
  })
  .catch((error) => {
    console.error("Translation failed:", error);
  });

// Example 2
translateText(sourceText, sourceLangAUTO, targetLangCN)
  .then((translatedText) => {
    console.log(`Translated text (${targetLangCN}):`, translatedText);
  })
  .catch((error) => {
    console.error("Translation failed:", error);
  });
