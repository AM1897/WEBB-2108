import StatusCode from "../utils/StatusCode";
import {Request, Response} from "express";

const aliveController = (request: Request, response: Response) => {
    response.status(StatusCode.OK).send('Ansluten till TypeScript API')
}
export default {
    alive: aliveController
}