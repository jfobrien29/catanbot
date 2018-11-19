import { config } from '../config';
import CatanController from './CatanController';

export = (app) => {
    const endpoint = config.API_BASE;

    app.get(endpoint, CatanController.getHelloMessage);
};