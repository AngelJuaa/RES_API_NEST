interface updateWithOptions{
    name?: string, 
    description?: string,
    price?:number,
    stock?:number,
    categoria?:string
}

export class Product { //es una astracción de la base de datos 
    constructor(public id: string, 
        public name: string,
        public price:number, 
        public description?:string,
        public stock?:number,
        public categoria?:string


    
    
    ){}

updateWith({name,description,price,categoria,stock}:updateWithOptions){
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.categoria = categoria ?? this.categoria;
    this.price = price ?? this.price;
    this.stock = stock ?? this.stock;
}
}
