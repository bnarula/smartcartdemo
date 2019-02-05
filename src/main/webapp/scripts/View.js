class View {
    constructor(templateSourceId){
        this.templateSourceId = templateSourceId;
    }
    create(itemJson){
        var source   = document.getElementById(this.templateSourceId).innerHTML;
        var template = Handlebars.compile(source);
        return template(itemJson);
    }
}