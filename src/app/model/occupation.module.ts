export class Occupation {
    occupation: string;
    other: string;
    setOccupation(occup: Occupation) {
        this.occupation = occup.occupation;
        this.other = occup.other;
    }
}