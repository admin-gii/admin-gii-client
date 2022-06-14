export type Fn = (...args: any[]) => any;
export type PayloadWithCallback<T> = {
  data: T,
  callback?: Fn;
}

export type Called<F extends (...args: any[]) => any> =
  ReturnType<F> extends PromiseLike<infer U> ? U : ReturnType<F>;