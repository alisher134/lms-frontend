import type { ApiResponse, RequestConfig } from '@/shared/api/types';
import type { SignInPayload, SignUpPayload } from './auth-payload';
import type { AuthDTO } from '@/shared/dto/auth-dto';

export type AuthRepository = {
  signIn: (requestConfig?: RequestConfig<SignInPayload>) => ApiResponse<AuthDTO>;
  signUp: (requestConfig?: RequestConfig<SignUpPayload>) => ApiResponse<AuthDTO>;
  refresh: (requestConfig?: RequestConfig) => ApiResponse<string>;
};
