import app from './app';

import 'dotenv/config';
import logger from './config/configLogger';

const PORT = process.env.PORT_SERVER || 3001;

app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta: ${PORT}`);
});
