const hi: string = 'Hello, Wrold!';

function toHex(this: Number) {
  return this.toString(16);
}

type A = typeof toHex;

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());

/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
 */
type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;

/**
 * Removes the 'this' parameter from a function type.
 */
type MyOmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (this: any, ...args: infer A) => infer R
  ? (...args: A) => R
  : T;

type MyThis = MyThisParameterType<typeof toHex>;

type MyOmitThis = MyOmitThisParameter<typeof toHex>;
