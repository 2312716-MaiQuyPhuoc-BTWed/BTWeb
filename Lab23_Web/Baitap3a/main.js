// const a = 5;

// {
//   console.log(a); // 5
// }

// console.log(a); // 5

//

// {
//   const a = 5;

//   console.log(a); // 5
// }

// console.log(a); // error

//

const a = 6;

{
  const a = 5;

  console.log(a); // 5
}

console.log(a); // 6

//

c = 7;

{
  console.log(c); // 7

  d = 8;
}

console.log(d); // 8

//Kiểu dữ liệu string

// const str1 = "Chao bac Teo";

// console.log(str1);

// const str2 = "Chao cu Ti";

// console.log(str2);

//

// const str1 = "Chao bac's Teo";

//     console.log(str1);

//     const str2 = 'Chao "cu" Ti';

//     console.log(str2);

//     const str3 = 'chao bac's Teo'; // lỗi

//

const str1 = "Chao bac's Teo";

//

const str4 = new String("Chao bac Teo");

// String {'Chao bac Teo'}

//

// const str = "hello";

// console.log(str.length); // 5

//

// console.log(str["length"]);

//

// const str = "hello";

// console.log(str["length"]); // 5

// str.length = 7; // thay đổi giá trị của thuộc tính

// console.log(str.length); // 5

//

// console.log(str.toUpperCase()); // HELLO

//

// const str = "Hello";

// console.log(str.toLowerCase()); // hello

//

// console.log(str.charAt(1)); // e

//

// console.log(str.indexOf("o")); // 4

// console.log(str.indexOf("z")); // -1

//

// const str = "Hello every one";

// console.log(str.lastIndexOf("e")); // 14

//

// const str = "hello";

// console.log(str.includes("e")); // true

// console.log(str.includes("z")); // false

//

// const str = "hello";

// console.log(str.startsWith("h")); // true

// console.log(str.startsWith("H")); // false

//

// const str = "hello";

// console.log(str.endsWith("o")); // true

// console.log(str.endsWith("H")); // false

//

// const str = "hello";

// console.log(str.concat(" bac Teo")); // hello bac Teo

// // đơn giản hơn

// console.log(str + " bac Teo");

//

// const str = "   nguyen van teo   ";

// console.log(str); // '   nguyen van teo   '

// console.log(str.trim()); // 'nguyen van teo'

//

// const str = "hi";

// console.log(str.repeat(3)); // hihihi

//

// const str = "Nguyen Thi Van Teo";

// console.log(str.slice(0, 6)); // Nguyen

//

const str = "teonv@gmail.com";

const result = str.split("@");

console.log(result[0]); // teovn

console.log(result[1]); // gmail.com

//

// const ho = "Nguyen",
//   ten = "Teo";

// console.log("Ho ten la: " + ho + " " + ten);

//

// const ho = "Nguyen",
//   ten = "Teo";

// console.log(`Ho ten la: ${ho} ${ten}`);

//

const ten = "Teo";

const qty = 4;

const email = `

          Xin chao ban ${ten},

 

          Chung toi rat vui khi nhan duoc ${qty} don hang tu ban.

          

          Cam on ban.`;

console.log(email);

//

const article = {
  title: "Xuat template",

  body: "Su dung template de xuat truc tiep len trang web",
};

document.body.innerHTML = `

          <section>

               <header>

                    <h1>Hoc React</h1>

               </header>

               <article>

                    <h2>${article.title}</h2>

                    ${article.body}

               </article>

               <footer>

                    <p>copyright ${new Date().getFullYear()} | Hoc React</p>

               </footer>

          </section>

          `;

//

//
