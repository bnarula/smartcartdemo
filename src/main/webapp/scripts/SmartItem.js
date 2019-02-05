class SmartItem {
    constructor(json){
        this.id = json.id;
        this.price = json.price;
        this.name = json.name;
        this.imgSrc = imagesDir + json.imgSrc

    }
    add(){
        var cartItem = new View(SmartItem.templateSourceId);
        $(SmartItem.container).append(cartItem.create(this))
    }
}
SmartItem.templateSourceId = "smart-cart-template";
SmartItem.container = ".smart-cart-container";