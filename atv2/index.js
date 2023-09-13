class domCl{
    documento = {}

    add(ElementID){
        this.documento[ElementID] = document.getElementById(ElementID)

    }

    addAction(typeEvent, id,  def){
        this.documento[id].addEventListener(typeEvent, def);
    }

    get(id){
        return this.documento[id];
    }

}



const dom = new domCl();
dom.add("formulario");
dom.add("senha");
dom.add("user");
dom.add("Error");

dom.addAction("submit", "formulario", function(e){
    e.preventDefault();
    try {
        isError()
    } catch (error) {
        dom.get("Error").innerHTML = error;
    }
    
})

function isError(){
    var user = dom.get("user").value
    var senha = dom.get("senha").value
    if(user == "" || senha == ""){throw "campos não preenchidos"}
}

