// import { identity } from './generic';

// const a = 'h';
// identity(a);

function fn(n: number) {
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
