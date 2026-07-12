import { Outlet } from 'react-router';

import { Container, Footer, Header, Page } from './_shared';

function App() {
  return (
    <Container>
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </Container>
  );
}

export default App;
