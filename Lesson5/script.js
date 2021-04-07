'use strict';
//Задание 1

document.write('<table style = "border-style : solid">');
for (var col = 1; col <= 8; col++) {
    document.write('<tr>');
    document.write('<td style = "width : 40px; height : 40px; background-color : white"></td>');
    if (col % 2 == 0) {
        for (var row = 1; row <= 8; row++) {
            if (row % 2 == 0) {
                document.write('<td style = "width : 40px; height : 40px; background-color : white"></td>');
            }
            else {
                document.write('<td style = "width : 40px; height : 40px; background-color : black"></td>');
            };
        };
    }
    else {
        for (var i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                document.write('<td style = "width : 40px; height : 40px; background-color : black"></td>');
            }
            else {
                document.write('<td style = "width : 40px; height : 40px; background-color : white"></td>');
            };
        };
    }
    document.write('</tr>');
};
document.write('</table>');

// Задание 3





// const settings = {

//     playerCellColor: '#aa3333',
//     emptyCellColor: '#eeeeee',
// };



// const game = {
//     settings,
//     containerElement: null,
//     cellElements: [],

//     run() {
//         this.init();

//     },

//     init() {
//         this.containerElement = document.getElementById('game');
//         this.initCells();
//         this.initEventHandlers();
//     },

//     initCells() {
//         this.containerElement.innerHTML = '';
//         this.cellElements = [];

//         for (let row = 0; row <= 8; row++) {
//             const trElem = document.createElement('tr');
//             this.containerElement.appendChild(trElem);

//             for (let col = 0; col <= 8; col++) {
//                 const cell = document.createElement('td');
//                 trElem.appendChild(cell);

//                 this.cellElements.push(cell);
//             }
//         }
//     }
// }