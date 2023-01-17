export class Llavero {
    $key: string;
    nombre: string; 
    material: string;
    numero: number;
    comentarios: string;
    pais: string;
    img: any;

    constructor( $key: string, nombre: string, material: string, numero: number,
        comentarios: string, pais: string, img: any){
            this.$key = $key;
            this.nombre = nombre;
            this.material = material;
            this.numero = numero;
            this.comentarios = comentarios;
            this.pais = pais;
            this.img = img;
    }
}
