<div>
    <div style="width: 100%; padding: 6rem 0 2rem; display: flex; justify-content: center;">
        <img src="assets/logo.png" />
    </div>
    <div>
        <h2 style="padding: 2rem 0 1rem; text-align: center">✨ Javascript "if / else" expressions ✨</h2>
        <p style="font-size: 16px; text-align: center">Extremely small and type safe.</p>
    </div>
</div>

## Installation

**NPM**

```sh
$ npm add @pennah/iffy
```

**Yarn**

```sh
$ yarn add @pennah/iffy
```

## Usage

**Simple expressions**

```ts
import { If } from "@pennah/iffy";

let powerLevel = 9001;

let message = If(powerLevel > 9000, {
  then: `It's over 9000!!!111`,
  else: `You are no match for me`,
});

console.log(message); // It's over 9000!!!111
```

**Nested expressions**

```ts
import { If } from "@pennah/iffy";

...

const action = If(userInput === "0", {
  then: () => console.log("Hello"!),
  else: If(userInput === "1" {
    then: () => console.log('Howdy!'),
    else: () => console.log(`It's fine 🐶 🔥`)
  })
});

```

## Contributing

Feel free to open issues or pull requests.

## License

Iffy uses an MIT license.
