# Timean.js

A lightweight (~1.2kB gzipped) library to format date strings based on time difference.

## Features

- 🕊️ Ligthweight
- 💨 Blazing fast
- 📦 Browser, Node.js and React Native compatible
- 🧹 Clean and intuitive API
- 📖 Good documentation and support


Timean.js allows you to format meaningful date strings like: 

```
just now
5 days ago
1 year ago
10 seconds ago
in 2 days
in 3 months
and more...
```


## Table of contents
- [Installation](#installation)
- [How to use?](#how-to-use)
  - [Customizing (Locale)](#customizing-locale)
- [API](#api)
- [Help me help you](#help-me-help-you)
- [License](#license)

## Installation

```
yarn add timean
```
or
```
npm install --save timean
```

## How to use?

To start to use this package you need to import it:

```js
import timean from "timean"; //ES6 import
```
or
```js
const timean = require("timean"); //CommonJS
```

Now you can call use the appropriated method:

```js
const date = new Date('2021-01-01');
const formattedString = timean.fromNow(date);
```

```js
const date1 = new Date('2021-01-01');
const date2 = new Date('2021-01-02');
const formattedString = timean.from(date1, date2);
```

### Customizing (Locale)
You can pass the an object ```config``` as parameter when call [```from()```](#api) or [```fromNow()```](#api), like this:

```js
//...
// See the config options below on this docs.
const customConfig = {
  current: 'agora',
  past: {
    day: { singular: '%d dia atrás', plural: '%d dias atrás' },
    minute: { singular: '%d minuto atrás', plural: '%d minutos atrás' },
    hour: { singular: '%d hora atrás', plural: '%d horas atrás' },
    month: { singular: '%d mês atrás', plural: '%d meses atrás' },
    second: "%d segundos atrás", //You can use a string directly.
    year: { singular: '%d ano atrás', plural: '%d anos atrás' }
  },
}
const formattedString = timean.from(date1, date2, customConfig);
```

If you want to define a default configuration and avoid to pass a ```config``` parameter on each call of [```from(...)```](#api) or [```fromNow(...)```](#api), you can create a instance of *Timean* using:

```js
//...
const timeFormatter = timean.create({ ...config });
const formattedString = timeFormatter.from(date1, date2);
```

*Note: all fields are optional, when you overwrite a field just it will be merged with default configuration.*

### Customizing (Replacer)
By default, Timean.js replaces ```"%d"``` by the calculated time difference result. You can edit the replacer combination passing a property ```replacer: any_string_or_regex_you_want``` in the ```config``` object.

## API

Timean has a clean and powerful API, it allows you to generate formatted time strings easily.

```ts
create(config?: LocaleConfig)
```

```ts
from(initialDate: Date, finalDate: Date, config?: LocaleConfig)
```
```ts
fromNow(date: Date, config?: LocaleConfig)
```
### Types
```ts
type StringWithPlural = { singular: string; plural: string; }
```
```ts
type LocaleConfig = {
  current: string,
  replacer: string,
  past: {
    day: string | StringWithPlural,
    hour: string | StringWithPlural,
    minute: string | StringWithPlural,
    month: string | StringWithPlural, 
    second: string | StringWithPlural,
    year: string | StringWithPlural,
  }, 
  future: {
    day: string | StringWithPlural,
    hour: string | StringWithPlural,
    minute: string | StringWithPlural,
    month: string | StringWithPlural, 
    second: string | StringWithPlural,
    year: string | StringWithPlural,
  }
}
```

## Help me help you

I will be very happy if you can support me to keep creating new open source packages.

Consider ⭐ starring this repository and 
📢 spread the word about this package!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/lublot)


## License
MIT