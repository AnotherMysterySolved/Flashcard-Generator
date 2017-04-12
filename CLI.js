//---~~~Command Line Interface~~~---
var cardApp = require("./cardApp");
// Hold the value whether someone is createing a card or studying
//ex "create-basic" "create-cloze" "study"
var task = process.argv[2];
// If creating a basic or cloze card, they will need to provide a front and back or partial-text and cloze-deletion
var data1 = process.argv[3];
var data2 = process.argv[4];

switch (task) {
    case "study":
        cardApp.getCard();
        break;

    case "create-basic":
        cardApp.CreateBaic(data1, data2);
        break;

    case "create-cloze":
        cardApp.CreateCloze(data1, data2);
}
