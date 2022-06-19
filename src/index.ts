// import { identity } from './generic';

// const a = 'h';
// identity(a);

function fn1(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
  return true;
}

function verifyAge(age: number) {
  // Forgot 'return' statement
  if (age > 18) {
    verified: true;
  }
}

interface UserDefaults {
  colorThemeOverride?: 'dark' | 'light';
}
declare function getUserSettings(): UserDefaults;
// ---cut---
const settings = getUserSettings();
settings.colorThemeOverride = 'dark';
settings.colorThemeOverride = 'light';

// But not:
settings.colorThemeOverride = undefined;

const a: number = 6;

switch (a) {
  case 0:
  // console.log('even');
  case 1:
    console.log('odd');
    break;
}

function fn(s) {
  // No error?
  console.log(s.subtr(3));
}
fn(42);

class Album {
  download() {
    // Default behavior
  }
}

class SharedAlbum extends Album {
  // override download() {
  //   // Override to get info from many sources
  // }
}

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      return this.width * this.height;
    };
  }
}

const createKeyboard = (modelID: number) => {
  const defaultModelID = 23;
  return { type: 'keyboard', modelID };
};

try {
  // ...
} catch (err) {
  // We have to verify err is an
  // error before using it as one.
  // if (err instanceof Error) {
  console.log(err.message);
  // }
}
