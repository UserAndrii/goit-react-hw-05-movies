import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Container, LinkLogo, Header, Nav, Link } from './Layout.styled';
import Loader from '../Loader';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <LinkLogo to="/">Filmoteka</LinkLogo>
          <div>
            <Link to="/" style={{ marginRight: 10 }}>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </div>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
    </Container>
  );
};

export default Layout;
