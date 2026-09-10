import { createContext } from 'react';

export interface IToastApi {
  notify: (message: string) => void;
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
}

export const ToastContext = createContext<IToastApi | null>(null);
