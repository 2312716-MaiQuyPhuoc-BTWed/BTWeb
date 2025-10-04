const message = "Chao bac Teo!";
alert(message);

const myVariable = "a";
const myvariable = "b";
const MyVariable = "c";

alert("Chao bac Teo"); // day la cau chao

/* đây là câu chào
nó sẽ xuất hiện trong một cửa sổ
trên trình duyệt */

alert("Chao bac Teo");

typeof "hi bac Teo";
// <'string'
typeof 123;
// <'number'
typeof true;
// <'boolean'
typeof true;
// <'boolean'
typeof { ten: "van teo" };
// <'object'
typeof [1, 2, 3];
// <'object'

var tuoi = 20;
typeof tuoi;
// <'number'
tuoi = "hai muoi";
typeof tuoi;
// <'string'

const namSinh = 2000;
namSinh = 2001;
// Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:2:9
