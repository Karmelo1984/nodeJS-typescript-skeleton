import express from 'express';
export const app = express();

import cors from 'cors';

// Crea una instancia de la aplicación 'express'
export const app = express();

// Habilita el uso de 'CORS' en la aplicación
app.use(cors());

// Habilita el uso de JSON en la aplicación para procesar datos en formato JSON en las solicitudes y respuestas.
app.use(express.json());

// Importa las rutas del servidor
import { router as root } from './routes/routes.root';
import { router as apiRoot } from './routes/api/routes.api';

// Asigna las rutas a la aplicación
app.use('/', root);
app.use('/api', apiRoot);