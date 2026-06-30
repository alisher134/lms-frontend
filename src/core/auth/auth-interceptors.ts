import { httpClient } from '@/shared/api/http-client';

export const setupAuthInterceptors = ({
  getToken,
}: {
  getToken: () => string | undefined;
}) => {
  httpClient.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};
