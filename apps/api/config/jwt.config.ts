import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  secret: 'amLcUq8P/voD4vrS6t9hmVzYjnJevED88b3BE/xt7aA=',
  signOptions: { expiresIn: '1d' },
};
