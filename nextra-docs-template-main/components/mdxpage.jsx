import { readFile } from 'fs/promises';
import { renderToString } from 'react-dom/server';
import { compile } from 'xdm';

async function MDXPage({ source }) {
  const mdx = await compile(source);
  const { code } = await mdx.serialize();

  const components = {
    // Gerekirse MDX bileşenlerini burada tanımlayabilirsiniz
  };

  const { default: Content } = await eval(code);

  const html = renderToString(
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const source = await readFile('pages/static-page.mdx', 'utf8');
  return {
    props: {
      source,
    },
  };
}

export default MDXPage;