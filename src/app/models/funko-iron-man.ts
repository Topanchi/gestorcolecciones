export class FunkoIronMan {
    $key: string;
    name: string;
    description: string;
    personaje: string;
    collectionNumber: number;
    imageComplete: any;
    imageSolo: any;

    constructor($key: string,name: string, description: string, personaje: string, collectionNumber: number, imageComplete: any, imageSolo: any) {
        this.$key = $key;
        this.name = name;
        this.description = description;
        this.personaje = personaje;
        this.collectionNumber = collectionNumber;
        this.imageComplete = imageComplete;
        this.imageSolo = imageSolo;
    }
}
