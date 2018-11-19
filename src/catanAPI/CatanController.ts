import CatanService from './CatanService';
import { config } from '../config';
import { logger } from '../config/logger';

// NOTE: This class is used for validation and response protocol for various endpoints
class CatanController {

    /********************************************
     * GET controllers
     ********************************************/

    public getHelloMessage = async (req, res) => {
        try {
            res.status(200).send(CatanService.buildHelloMessage());
        }
        catch (err) {
            logger.debug(err);
            res.status(500).send(err);
        }
    }

    /********************************************
     * POST controllers
     ********************************************/
}

export default new CatanController();
