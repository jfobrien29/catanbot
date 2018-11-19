import { ResourceTypes } from './Resources';
import { Settlement } from './Settlement';

export class Board {
    settlementLocations: Map<string, Array<any>>;
    numberMap: Map<string, Array<any>>;
    tileMap: Map<string, Array<any>>;
    roadMap: Map<string, Array<any>>;

    constructor() {
        this.settlementLocations = this.createSettlementLocationsMap();

        const resources = Board.createShuffledResourceTiles();

        this.tileMap = new Map();
        this.roadMap = new Map();
    }

    private createSettlementLocationsMap() {
        const locations = new Map();
        const characters = 'ABCDEF';
        characters.split('').forEach(character => {
            locations.set(character, new Array(10));
        });
        return locations;
    }

    private static createShuffledResourceTiles(): Array<ResourceTypes> {
        // 4 sheep, wheat, wood, 3 brick, stone
        const sheep = new Array(4).fill(ResourceTypes.SHEEP);
        const wheat = new Array(4).fill(ResourceTypes.WHEAT);
        const wood = new Array(4).fill(ResourceTypes.WOOD);
        const stone = new Array(3).fill(ResourceTypes.STONE);
        const brick = new Array(3).fill(ResourceTypes.BRICK);
        const allResources = sheep.concat(...wheat, ...wood, ...stone, ...brick);
        allResources.push(ResourceTypes.DESERT);

        return Board.shuffleArray(allResources);
    }

    private static getNumberOrder() {
        // Numbers are in stacked order
        // 11, 12, 9 top row
        // 4, 6, 5, 10 second row, etc.
        return [11, 12, 9, 4, 6, 5, 10, 3, 11, 4, 8, 8, 10, 9, 3, 5, 2, 6];
    }

    private static shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    public printSettlementLocations() {
        console.log(this.settlementLocations);
    }
}

const b = new Board();
b.printSettlementLocations();