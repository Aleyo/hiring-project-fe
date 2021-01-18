import { ConfigTemplate } from './ConfigTemplate';

export const config: ConfigTemplate = process.env.NODE_ENV === 'production'
  ? require('./config.prod')
  : require('./config.dev');
