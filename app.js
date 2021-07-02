let enterName;
const boxName = [];

while (true) {
    enterName = prompt('Enter your name(s)?');
    
    if (enterName === "") {
        //alert(boxName);
        break;
    } else {
    boxName.push(enterName);
    }
}

alert(boxName)
