import { BoardPoint } from './BoardPoint';

export class Settlement {
    location: BoardPoint;
    isCity: boolean;
    owner: string; // Will be a player type eventually, maybe color?

    constructor(row, column, owner) {
        this.location = new BoardPoint(row, column);
        this.isCity = false;
        this.owner = owner;
    }

    getLocation() {
        return this.location.getLocation();
    }
}