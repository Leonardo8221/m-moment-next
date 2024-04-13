// pages/404.tsx

import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <main style={{ padding: "1rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}

export default Custom404;
