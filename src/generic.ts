interface Sizeable {
  size: number;
}

export function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}

export function identity<T>(arg: T): T {
  return arg;
}

trace({ size: 1 });
