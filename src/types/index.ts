export type Fn = (...args: any[]) => any;
export type PayloadWithCallback<T> = {
  data: T,
  callback?: Fn;
}

export type ResponseTemplate<T> = {
  data: T,
  error: string | null,
  message: string | null,
}

export type Called<F extends (...args: any[]) => any> =
  ReturnType<F> extends PromiseLike<infer U> ? U : ReturnType<F>;