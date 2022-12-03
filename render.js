import { Timing } from "./time.js";
import { SaveData } from "./saveToLokal.js";
export class Render {
    constructor(HTMLTagName, attributeName, attributeContent, content) {
        this.HTMLTagName = HTMLTagName;
        this.attributeName = attributeName;
        this.attributeContent = attributeContent;
        this.content = content;
    }
    addElement() {
        let element = document.getElementById("nameProject");
        let lastDiv = element.lastElementChild;
        let newElement = document.createElement(this.HTMLTagName);
        newElement.setAttribute(this.attributeName, this.attributeContent);
        newElement.appendChild(document.createTextNode(this.content));
        if (this.HTMLTagName === 'div') {
            document.getElementById("nameProject").appendChild(newElement);
        }
        if (this.HTMLTagName === 'p') {
            lastDiv.appendChild(newElement);
        }
        if (this.HTMLTagName === 'button') {
            lastDiv.appendChild(newElement);
            this.addEventListenerToBtn(newElement);
        }
        if (this.HTMLTagName === 'input') {
            lastDiv.appendChild(newElement);
            newElement.classList.add('myCheck');
        }
    }
    addEventListenerToBtn(element) {
        element.addEventListener('click', () => {
            let parentElement = element.parentElement;
            if (element.className === "btnStart") {
                parentElement.querySelector('.btnStart').style.display = 'none';
                parentElement.querySelector('.btnStop').style.display = 'block';
                parentElement.querySelector('.myTime').style.display = 'block';
                parentElement.querySelector('.myTime').style.color = 'red';
                window.myTimeValue = parentElement.querySelector('.myTime');
                if (paused) {
                    paused = false;
                    window.startTime = Date.now() - window.elapsedTime
                    intervalId = setInterval(newRunTiming.startJobTime, 75);
                    this.#disableButtons();
                    this.#disableCheckbox();
                }
            }
            if (element.className === "btnStop") {
                parentElement.querySelector('.btnStop').style.display = 'none';
                parentElement.querySelector('.btnStart').style.display = 'block';
                parentElement.querySelector('.myTime').style.display = 'none';
                window.calcTime = parentElement.querySelector('.myTime').textContent;
                window.oldTime = parentElement.querySelector('.alltime').textContent;
                if (!paused) {
                    paused = true;
                    newRunTiming.calculatedTime();
                    parentElement.querySelector('.alltime').textContent = window.oappTime;
                    parentElement.querySelector('.myTime').textContent = "00:00:00";
                    window.startTime = 0;
                    window.elapsedTime = 0;
                    clearInterval(intervalId);
                    this.#unableButtons();
                    this.#unableCheckbox();
                    newSave.saveToLocal();
                }
            }
        });
        return element;
    }
    #disableButtons() {
        let btns = document.querySelectorAll(".btnStart");
        btns.forEach((element) => element.disabled = true);
        btnAdd.disabled = true;
        btnDel.disabled = true;
    }
    #unableButtons() {
        let btns = document.querySelectorAll(".btnStart");
        btns.forEach((element) => element.disabled = false);
        btnAdd.disabled = false;
        btnDel.disabled = false;
    }
    #disableCheckbox() {
        let chBox = document.querySelectorAll(".myCheck");
        chBox.forEach((element) => element.disabled = true);
    }
    #unableCheckbox() {
        let chBox = document.querySelectorAll(".myCheck");
        chBox.forEach((element) => element.disabled = false);
    }
    removeProj() {
        let doc = document.querySelectorAll('.worckBox');
        doc.forEach(x => {
            if (x.querySelector('input').checked) {
                x.remove()
            }
        })
    }
}

let btnAdd = document.getElementById('addProj');
let btnDel = document.getElementById('delProj');
let newRunTiming = new Timing();
let newSave = new SaveData();
window.startTime = 0;
window.elapsedTime = 0;
let paused = true;
let intervalId;



