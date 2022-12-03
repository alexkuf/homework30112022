import { Render } from "./render.js";
import { SaveData } from "./saveToLokal.js";
let btnAdd = document.getElementById('addProj');
btnAdd.addEventListener('click', () => {
    let namePrj = document.querySelector('#in1');
    let emplName = document.querySelector('#in2');
    let message = document.querySelector('#message');
    if (namePrj.value == "" || emplName.value == "") {
        alert('Data is incomplete');
    } else {
        let newObject = new Render('div', 'class', 'worckBox', "").addElement();
        newObject = new Render('input', "type", "checkbox", "").addElement();
        newObject = new Render('p', 'class', 'nameProj', in1.value).addElement();
        newObject = new Render('p', 'class', 'myP', `Employee name :` + `  ` + in2.value).addElement();
        newObject = new Render('p', 'class', 'myP', `Description :` + `  ` + message.value).addElement();
        newObject = new Render('p', 'class', 'myP', `Working hours :` + `  `).addElement();
        newObject = new Render('p', 'class', 'alltime', "00:00:00").addElement();
        newObject = new Render('button', 'class', 'btnStart', "Start").addElement();
        newObject = new Render('button', 'class', 'btnStop', "Stop").addElement();
        newObject = new Render('p', 'class', 'myTime', "00:00:00").addElement();
        newSave.saveToLocal();
    }
    namePrj.value = "";
    emplName.value = "";
    message.value = "";
});

let btnDel = document.getElementById('delProj');
btnDel.addEventListener('click', () => {
    let newObject = new Render();
    newObject.removeProj();
    newSave.saveToLocal();
});
let newSave = new SaveData();
newSave.loadFromLocal();