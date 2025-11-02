import type { RouteObject } from 'react-router-dom';
import App from './App';
import Index from './pages/Index';
import Captacao from './pages/Captacao';
import Autoridade from './pages/Autoridade';
import GoogleTop1 from './pages/GoogleTop1';
import Agendamento from './pages/Agendamento';
import CRM from './pages/CRM';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: 'captacao', element: <Captacao /> },
      { path: 'autoridade', element: <Autoridade /> },
      { path: 'google-top-1', element: <GoogleTop1 /> },
      { path: 'agendamento', element: <Agendamento /> },
      { path: 'crm', element: <CRM /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'contato', element: <Contato /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];
