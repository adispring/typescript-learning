// import { identity } from './generic';

const a = 'h';
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
