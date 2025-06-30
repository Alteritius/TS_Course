function add(a: number, b: number) {
  return a + b;
}

// just derive returned value type

type AddFn = typeof add;

type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;

type AddFnReturnValueType2 = ReturnType<AddFn>;
