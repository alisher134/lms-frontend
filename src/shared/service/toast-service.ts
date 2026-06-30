import { toast } from '@heroui/react';
import type { Toaster } from './toast-types';

export class HeroToaster implements Toaster {
  showSuccess(message: string) {
    toast.success(message);
  }

  showError(message: string) {
    toast.danger(message);
  }

  showWarning(message: string) {
    toast.warning(message);
  }

  showInfo(message: string) {
    toast.info(message);
  }
}

export const toastService = new HeroToaster();
