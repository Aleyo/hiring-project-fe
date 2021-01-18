export const loggingMiddleware = () => (next : (a: any) => void) => (action: any) => {
  console.info(`%c${'🔵 DISPATCH'}`, 'color: green;', action);

  return next(action);
};
