interface updateWithOptions{ //definimos la plantilla con los campos que se pueden llagar a cambiar 
    titlebook?: string //les ponemos el signo ? por que pueden ser opcionales su modificación
    descriptionbook?: string
    pricebook?: number
    isAvailablebook?:boolean
}

export class Book { //es la estructura principal de un libro 
    constructor(public id:string, //para crear un libro requerimos todos estos datos
        public titlebook:string,
        public descriptionbook:string,
        public pricebook:number,
        public isAvailablebook:boolean,
    ){}

    //funcion que permite que modifiquemos la información de el libro
    updateWith({titlebook,descriptionbook,pricebook,isAvailablebook}:updateWithOptions){
        //si envian un dato nuevo lo actualiza 
        //si no envian nada los ?? conservan el valor que tenia o tiene 
        this.titlebook = titlebook ?? this.titlebook;
        this.descriptionbook = descriptionbook ?? this.descriptionbook;
        this.pricebook = pricebook ?? this.pricebook;
        this.isAvailablebook = isAvailablebook ?? this.isAvailablebook;

    }
}
