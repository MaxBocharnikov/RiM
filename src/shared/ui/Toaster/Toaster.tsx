import { Toaster as HotToaster } from 'react-hot-toast';

export const Toaster = () => (
  <HotToaster
    position='bottom-right'
    toastOptions={{ error: { duration: 5000 } }}
  />
);
