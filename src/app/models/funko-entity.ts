import { FunkoImgCompEntity } from "./funko-img-comp-entity";
import { FunkoImgSoloEntity } from "./funko-img-solo-entity";

export class FunkoEntity {
    id_funko: number;
    marca: string;
    personaje: string;
    precio: number;
    descripcion: string;
    id_funko_img_solo: number;
    id_funko_img_comp: number;
    id_peli_marca_custom: number;
    funkoImgSoloEntity: FunkoImgSoloEntity;
    funkoImgCompEntity: FunkoImgCompEntity;

    constructor(id_funko: number, marca: string, personaje: string, precio: number,
        descripcion: string, id_funko_img_solo: number, id_funko_img_comp: number,
        id_peli_marca_custom: number){
            this.id_funko = id_funko;
            this.marca = marca;
            this.personaje = personaje;
            this.precio = precio;
            this.descripcion = descripcion;
            this.id_funko_img_solo = id_funko_img_solo;
            this.id_funko_img_comp = id_funko_img_comp;
            this.id_peli_marca_custom = id_peli_marca_custom;
    }
}
