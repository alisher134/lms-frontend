import type { ApiResponse, RequestConfig } from '@/shared/api/types';
import type { AuthRepository } from './auth-repository';
import type { SignInPayload, SignUpPayload } from './auth-payload';
import { httpClient } from '@/shared/api/http-client';
import type { AuthDTO } from '@/shared/dto/auth-dto';

export class AuthApi implements AuthRepository {
  async signIn(requestConfig?: RequestConfig<SignInPayload>): ApiResponse<AuthDTO> {
    return httpClient.post('/auth/sign-in', requestConfig?.params, requestConfig?.config);
  }

  async signUp(requestConfig?: RequestConfig<SignUpPayload>): ApiResponse<AuthDTO> {
    return httpClient.post('/auth/sign-up', requestConfig?.params, requestConfig?.config);
  }

  async refresh(requestConfig?: RequestConfig): ApiResponse<string> {
    return httpClient.post<string>('/auth/refresh', undefined, requestConfig?.config);
  }
}

export const authApi = new AuthApi();
