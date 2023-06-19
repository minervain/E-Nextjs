import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { MDXPage } from '../components/mdxpage.jsx'; // Bu bileşeni oluşturacağız

const components = {
  // Gerekirse MDX bileşenlerini burada tanımlayabilirsiniz
};

const HomePage = () => {
  return (
    <MDXProvider components={components}>
      <div>
        <h1>Ana Sayfa</h1>
        <ul>
          <li>
            <Link href="/dynamic-color?color=red">
              <a>Dinamik Renk Değiştirme Sayfası - Kırmızı</a>
            </Link>
          </li>
          <li>
            <Link href="/dynamic-color?color=blue">
              <a>Dinamik Renk Değiştirme Sayfası - Mavi</a>
            </Link>
          </li>
          <li>
            <Link href="/static-page">
              <a>Statik Sayfa</a>
            </Link>
          </li>
        </ul>
      </div>
    </MDXProvider>
  );
};

export default HomePage;