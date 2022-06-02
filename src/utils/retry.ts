type RetryCallback = () => Promise<void>;
type RetryConfig = {
  retriesLeft: number;
  interval: number;
  cb: () => void;
};

export function retry(
  fn: RetryCallback,
  {
    retriesLeft = 15,
    interval = 1000,
    cb = () => console.log('maximum retries exceeded')
  }: RetryConfig
) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(err => {
        console.error(err);
        setTimeout(() => {
          if (retriesLeft === 1) {
            resolve(cb());
            return;
          }

          retry(fn, { retriesLeft: retriesLeft - 1, interval, cb }).then(
            resolve,
            reject
          );
        }, interval);
      });
  });
}
