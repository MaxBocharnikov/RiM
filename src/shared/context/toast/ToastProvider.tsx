import type { ReactNode } from 'react';

import toast from 'react-hot-toast';

import { Toaster } from '../../ui/Toaster';
import { ToastContext, type IToastApi } from './ToastContext';

const toastApi: IToastApi = {
  notify: (message) => toast(message),
  notifySuccess: (message) => toast.success(message),
  notifyError: (message) => toast.error(message)
};

type Props = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: Props) => (
  <ToastContext.Provider value={toastApi}>
    {children}
    <Toaster />
  </ToastContext.Provider>
);
