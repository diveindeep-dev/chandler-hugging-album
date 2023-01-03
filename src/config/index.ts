const SERVER_URL: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'PRODUCT_URL';

export { SERVER_URL };
