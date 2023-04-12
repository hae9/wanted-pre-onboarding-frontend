import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import { RouterProvider } from 'react-router';
import router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
