export class FunkoIronMan {
    name: string;
    description: string;
    collectionNumber: number
    imageComplete: any;
    imageSolo: any;

    constructor(name: string, description: string, collectionNumber: number, imageComplete: any, imageSolo: any) {
        this.name = name;
        this.description = description;
        this.collectionNumber = collectionNumber;
        this.imageComplete = imageComplete;
        this.imageSolo = imageSolo;
    }
}
