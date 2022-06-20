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
  download() {
    // Override to get info from many sources
  }
}

function lookupHeadphonesManufacturer(color: 'blue' | 'black'): string {
  // Function lacks ending return statement and return type does not include 'undefined'.
  if (color === 'blue') {
    return 'beats';
  } else {
    ('bose');
  }
}

interface GameSettings {
  // Known up-front properties
  speed: 'fast' | 'medium' | 'slow';
  quality: 'high' | 'low';

  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}

declare function getSettings(): GameSettings;

const settingsV2 = getSettings();
settingsV2.speed;

// (property) GameSettings.speed: "fast" | "medium" | "slow"
settingsV2.quality;

// (property) GameSettings.quality: "high" | "low"

// Unknown key accessors are allowed on
// this object, and are `string`
settingsV2.username;

interface EnvironmentVars {
  NAME: string;
  OS: string;

  // Unknown properties are covered by this index signature.
  [propName: string]: string;
}

declare const env: EnvironmentVars;

// Declared as existing
const sysName = env.NAME;
const os = env.OS;

// const os: string;

// Not declared, but because of the index
// signature, then it is considered a string
const nodeEnv = env['NODE_ENV'];

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

const createDefaultKeyboard = (modelID: number) => {
  // 'modelID' is declared but its value is never read.
  const defaultModelID = 23;
  return { type: 'keyboard', modelID: defaultModelID };
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
