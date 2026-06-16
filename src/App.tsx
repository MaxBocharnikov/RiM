import { Outlet } from 'react-router';
import { Container, Header, Page, Footer } from './_shared';

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
