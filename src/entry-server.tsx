import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppServer from './App.server';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <AppServer />
    </StaticRouter>
  );
  
  return html;
}
