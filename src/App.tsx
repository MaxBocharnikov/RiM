import { Outlet } from 'react-router';

import { Container, Footer, Header, Page, ToastProvider } from '@/shared';

function App() {
  return (
    <ToastProvider>
      <Container>
        <Header />
        <Page>
          <Outlet />
        </Page>
        <Footer />
      </Container>
    </ToastProvider>
  );
}

export default App;
