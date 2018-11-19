import { logger } from '../config/logger';
import { config } from '../config';
const request = require('request-promise-native');
const msCacheSession = 10000;

export class CatanService {
    /**************************************************************
     * Query Services
     *************************************************************/

    async buildHelloMessage() {
        return `Hello! I'm Catan Bot!`;
    }
}

export default new CatanService();
