class CartItem {
    constructor(json){
        this.id = json.id;
        this.price = json.price;
        this.name = json.name;
        this.quantity = json.quantity;
        this.imgSrc = imagesDir + json.imgSrc


    }
    add(){
        var cartItem = new View(CartItem.templateSourceId);
        $(CartItem.container).append(cartItem.create(this))
    }
}
CartItem.templateSourceId = "cart-template";
CartItem.container = ".cart-container";