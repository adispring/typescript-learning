interface Sizeable {
  size: number;
}

function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}

trace({ size: 1 });
