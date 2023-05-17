const express = require('express');

const port = 1245;
const app = express();
const routes = require('./routes/index');

// Using routes defined in full_server routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// export default app;
