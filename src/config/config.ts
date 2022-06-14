const stage = process.env.NODE_ENV;

const configs = {
  development: {
    apiUrl: 'http://localhost:8088'
  },
  production: {
    apiUrl: 'http://localhost:8088'
  },
  test: {
    apiUrl: 'http://localhost:8088'
  }
};

export const config = configs[stage];
