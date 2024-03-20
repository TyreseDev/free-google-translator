# Free Google Translator

Free Google Translator is a lightweight Node.js package for easily translating text using the free Google Translate API. Designed with simplicity in mind, this tool seamlessly integrates into any project requiring text translation capabilities.

## Features

- **Simple and clean API**: Offering an easy-to-use asynchronous function for text translations.
- **Auto language detection**: Capable of automatically detecting the source language of the text.
- **Multiple languages support**: Allows translation between numerous languages supported by Google Translate.
- **No API key required**: Leverages the public Google Translate API, eliminating the need for an API key.

## Getting Started

### Installation

To use Free Google Translator in your project, you need to have Node.js installed. Once ready, install the package using npm:

```bash
npm install free-google-translator-api
```

### Usage

To translate text, first require the package in your Node.js script:

```javascript
const translateText = require('free-google-translator-api');
```

Then, call the `translateText` function with the text you want to translate, the source language code (use `'auto'` for automatic detection), and the target language code:

#### Example 1: English to Spanish Translation

```javascript
const sourceText = "Hello, world!";
const sourceLang = "en"; // English
const targetLang = "es"; // Spanish

translateText(sourceText, sourceLang, targetLang)
  .then(translatedText => {
    console.log(`Translated text (${targetLang}):`, translatedText);
  })
  .catch(error => {
    console.error("Translation failed:", error);
  });
```

#### Example 2: Automatic Source Language Detection to Chinese Translation

```javascript
const sourceText = "Hello, world!";
const sourceLang = "auto"; // Auto Detect
const targetLang = "zh"; // Chinese

translateText(sourceText, sourceLang, targetLang)
  .then(translatedText => {
    console.log(`Translated text (${targetLang}):`, translatedText);
  })
  .catch(error => {
    console.error("Translation failed:", error);
  });
```

### Supported Languages

This package supports all languages available in Google Translate. For a full list of supported language codes, refer to the [Google Translate language codes documentation](https://cloud.google.com/translate/docs/languages).

## Contributing

Feel free to fork the repository and submit pull requests. Whether it's fixing a bug, adding a feature, or improving documentation, all contributions are welcome!

## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/TyreseDev/free-google-translator-api/issues) on GitHub.

## License

This project is licensed under the ISC License. See the [LICENSE](https://github.com/TyreseDev/free-google-translator-api/blob/main/LICENSE) file for details.

## Author

Tyrese Jin (<tyresejin3915@gmail.com>)

---

For more details and updates, visit the [project homepage](https://github.com/TyreseDev/free-google-translator-api#readme).
