import { listen } from './app.js';

const PORT = 3000;
listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
