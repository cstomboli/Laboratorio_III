namespace general
{
    export class Camioneta extends Vehiculo
    {
        private cuatroXcuatro:string;

        constructor( id:number, marca:string, modelo:string, precio:number, cuatroXcuatro:string)
        {
            super(id, marca, modelo, precio);
            this.cuatroXcuatro=cuatroXcuatro;
        }

        public getCuatroXcuatro():string
        {
            return this.cuatroXcuatro;
        }

        public setCuatroXcuatro(cuatroXcuatro:string):void
        {
            this.cuatroXcuatro=cuatroXcuatro;
        }
    }
}