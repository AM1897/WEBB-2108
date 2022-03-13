import AliveController from "../controller/AliveController.js";

const routes = (app) => {
    app.get('/', AliveController.alive)
}
export default {
    routes
}