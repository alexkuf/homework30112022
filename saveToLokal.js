import { Render } from "./render.js";
export class SaveData {
    constructor(saveMyData, loadMyData) {
        this.saveMyData = saveMyData;
        this.loadMyData = loadMyData;
    }
    saveToLocal() {
        let div = document.querySelectorAll('.worckBox');
        if (div.length > 0) {
            let toStorage = [];
            let values = document.querySelectorAll('.nameProject');
            for (var i = 0; i < values.length; i++) {
                toStorage.push(values[i].innerHTML);
            }
            let req = new XMLHttpRequest();
            req.open("PUT", "https://api.jsonbin.io/v3/b/638a482b003d6444ce6122b7", false);
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", "$2b$10$GwPplFiGUDRi2WtUWgZU6.RYh6Y2SP7bSHvc/CaWRn2G6Voh8KTOq");
            req.send(JSON.stringify(toStorage));
        }
    }
    loadFromLocal() {
        fetch('https://api.jsonbin.io/v3/b/638a482b003d6444ce6122b7', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "X-Master-Key": '$2b$10$GwPplFiGUDRi2WtUWgZU6.RYh6Y2SP7bSHvc/CaWRn2G6Voh8KTOq'
            }
        }).then((response) => response.json())
            .then(document.getElementById("nameProject").innerText = "Please wait")
            .then((response) => document.getElementById("nameProject").innerHTML = response.record)
            .then((this.addEventToBtnFromServer));
    }
    addEventToBtnFromServer() {
        let btn = document.getElementsByClassName('btnStart');
        for (var i = 0; i < btn.length; i++) {
            let newObject = new Render();
            if (btn[i].className == "btnStart");
            newObject.addEventListenerToBtn(btn[i]);
        }
        let btnstop = document.getElementsByClassName('btnStop');
        for (var i = 0; i < btnstop.length; i++) {
            let newObject = new Render();
            if (btnstop[i].className == "btnStop");
            newObject.addEventListenerToBtn(btnstop[i]);
        }
    }
}
