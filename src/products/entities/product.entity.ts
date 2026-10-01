interface updateWithOptions{
    name?: string, 
    description?: string,
    price?:number
}

export class Product { //es una astracción de la base de datos 
    constructor(public id: string, 
        public name: string,
        public price:number, 
        public description?:string,
    
    
    ){}

updateWith({name,description,price}:updateWithOptions){
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
}
}
