export class domCl{
    documento = {}

    add(ElementID){
        this.documento[ElementID] = document.getElementById(ElementID)
        console.log(this.documento)
    }

    addAction(typeEvent, id,  def){
        this.documento[id].addEventListener(typeEvent, def);
    }

    get(id){
        return this.documento[id];
    }

}

