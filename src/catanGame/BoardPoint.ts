export class BoardPoint {
    row: string;
    column: string;
    pointString: string;

    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.pointString = this.row + this.column;

        if (this.pointIsInvalid()) {
            throw new Error('Invalid Point Location Choosen!');
        }
    }

    pointIsInvalid(): boolean {
        const invalidPoints = ['A0', 'B0', 'E0', 'F0', 'A1', 'F1', 'A9', 'F9', 'A10', 'B10', 'E10', 'F10'];
        return invalidPoints.some((point) =>  point === this.pointString);
    }

    getLocation() {
        return this.row + this.column;
    }
}
