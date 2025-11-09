import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import AppServer from './App.server';

export function render(url: string) {
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppServer />
      </StaticRouter>
    </HelmetProvider>
  );
  
  return html;
}
