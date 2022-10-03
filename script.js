let state = {
    isBlurred: false,
    isHovered: false,
    content: 3,
    isNumber: 9
}

/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
document.getElementById('element-one').onclick = function () {
    state["isBlurred"] = !state["isBlurred"];
    if (state["isBlurred"]) {
        document.getElementById('element-one').classList.add('blur');
    } else {
        document.getElementById('element-one').classList.remove('blur');
    }
};

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
function renderSecondBox() {
    if (state["isHovered"]) {
        document.getElementById('element-two').style.backgroundColor = 'red';
    } else {
        document.getElementById('element-two').style.backgroundColor = '';
    }
}

document.getElementById('element-two').onmouseover = function () {
    state["isHovered"] = true;
    renderSecondBox();
}
document.getElementById('element-two').onmouseout = function () {
    state["isHovered"] = false;
    renderSecondBox();
}

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát.
*/
function renderThirdBox() {
    document.getElementById('element-three').firstElementChild.innerHTML = state["content"];
}

document.getElementById('element-three').ondblclick = function () {
    state["content"] = Math.floor(Math.random() * 19) + 1
    renderThirdBox()
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

function renderFourBox() {
    document.getElementById('element-four').classList.remove('visible');
}

document.getElementById('element-four').onclick = function () {
    document.getElementById('element-four').classList.add('visible');
    setTimeout(renderFourBox, 1000);
}

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
document.getElementById('element-five').onclick = function (event) {
    let boxes = document.querySelectorAll('.shape');
    for (let box of boxes) {
        box.style.borderRadius = '50%';
    }
}

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/
document.getElementById('box-6').onsubmit = function (event) {
    event.preventDefault();
    document.getElementById('element-six').firstElementChild.innerHTML = event.target.elements.boxNumber.value;
}

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
document.getElementById('box7-input').onkeypress = function (event) {
    document.getElementById('element-seven').firstElementChild.innerHTML = event.key;
}


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját,
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
document.onmousemove = function (event) {
    document.getElementById('element-eight').firstElementChild.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
}


/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő,
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5

  Dobozba és state-be beírandó érték: 45
*/
document.getElementById('box-9').onsubmit = function (event) {
    event.preventDefault();
    switch (event.target.elements.operator.value) {
        case 'mult':
            state["isNumber"] *= Number(event.target.elements.operand.value);
            break;
        case 'div':
            state["isNumber"] /= Number(event.target.elements.operand.value);
            break;
        case 'add':
            state["isNumber"] += Number(event.target.elements.operand.value);
            break;
        case 'sub':
            state["isNumber"] -= Number(event.target.elements.operand.value);
            break;
    }
    document.getElementById('element-nine').firstElementChild.innerHTML = state["isNumber"];
}