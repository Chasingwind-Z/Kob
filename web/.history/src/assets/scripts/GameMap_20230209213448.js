import { AcGameObject } from "./AcGameObjest";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        
    },
}