// 1. Son musbat yoki manfiy ekanligini aniqlash
let son = prompt("Istalgan sonni kiriting:");
if (son > 0) {
    console.log("Musbat son");
} else if (son < 0) {
    console.log("Manfiy son");
} else {
    console.log("Nol");
}

// 2. Son juft yoki toqligini aniqlash
let juftToqSon = prompt("Juft yoki toq sonni kiriting:");
if (juftToqSon % 2 === 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}

// 3. Ikki sondan kattasini topish
let son1 = prompt("Birinchi sonni kiriting:");
let son2 = prompt("Ikkinchi sonni kiriting:");
if (son1 > son2) {
    console.log("Birinchi son katta");
} else if (son2 > son1) {
    console.log("Ikkinchi son katta");
} else {
    console.log("Ikkala son teng");
}

// 4. Son nolga tengligini aniqlash
let nolTekshir = prompt("Son kiriting:");
if (nolTekshir == 0) {
    console.log("Nol");
} else {
    console.log("Nol emas");
}

// 5. Ikki son tengligini aniqlash
let sonA = prompt("Birinchi sonni kiriting:");
let sonB = prompt("Ikkinchi sonni kiriting:");
if (sonA == sonB) {
    console.log("Teng");
} else {
    console.log("Teng emas");
}

// 6. Bahoni aniqlash
let baho = prompt("Bahoni kiriting (0-100):");
if (baho >= 90) {
    console.log("A");
} else if (baho >= 80) {
    console.log("B");
} else {
    console.log("Boshqa baho");
}

// 7. Kabisa yilini aniqlash
let yil = prompt("Yilni kiriting:");
if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
    console.log("Kabisa yili");
} else {
    console.log("Kabisa yili emas");
}

// 8. Yosh bo‘yicha status aniqlash
let yosh = prompt("Yoshingizni kiriting:");
if (yosh <= 12) {
    console.log("Bolakay");
} else if (yosh <= 19) {
    console.log("O‘smir");
} else {
    console.log("Katta yoshdagi odam");
}

// 9. Uchta sondan kattasini topish
let s1 = prompt("Birinchi sonni kiriting:");
let s2 = prompt("Ikkinchi sonni kiriting:");
let s3 = prompt("Uchinchi sonni kiriting:");
if (s1 >= s2 && s1 >= s3) {
    console.log("Eng katta son: " + s1);
} else if (s2 >= s1 && s2 >= s3) {
    console.log("Eng katta son: " + s2);
} else {
    console.log("Eng katta son: " + s3);
}

// 10. Haroratga qarab tavsiya berish
let harorat = prompt("Haroratni kiriting:");
if (harorat < 10) {
    console.log("Sovuq");
} else if (harorat > 30) {
    console.log("Issiq");
} else {
    console.log("Ideal harorat");
}

// 11. Son musbat yoki manfiy emasligini aniqlash
let num = prompt("Biror son kiriting:");
if (num === "" || isNaN(num)) {
    console.log("Son emas");
}

// 12. Sonning 5 ga bo'linishini aniqlash
if (num % 5 === 0) {
    console.log("Bo'linadi");
}

// 13. Harorat mezonini tekshirish
let temp = prompt("Haroratni kiriting:");
if (temp >= 15 && temp <= 25) {
    console.log("Ideal harorat");
}

// 14. Tug'ilgan yil bo'yicha tekshirish
let birthYear = prompt("Tug'ilgan yilingizni kiriting:");
if (birthYear < 2000) {
    console.log("Eski avlod");
}

// 15. Yosh bo'yicha tavsiyalar
let age = prompt("Yoshingizni kiriting:");
if (age < 18) {
    console.log("Yoshlarga tavsiya");
} else if (age >= 60) {
    console.log("Keksalarga tavsiya");
}

// 16. Ism uzunligini tekshirish
let name = prompt("Ismingizni kiriting:");
if (name.length < 5) {
    console.log("Qisqa ism");
}

// 17. Son manfiy emasligini tekshirish
if (num >= 0) {
    console.log("Yaroqli son");
}

// 18. Yozilgan raqam juftligini tekshirish
if (num % 2 === 0) {
    console.log("Teng juftlik");
}

// 19. Raqam oxiri 0 bilan tugashini aniqlash
if (num.endsWith("0")) {
    console.log("Nol bilan tugaydi");
}

// 20. Parolning maxfiy belgilar borligini tekshirish
let password = prompt("Parolingizni kiriting:");
if (/[!@#$%^&*]/.test(password)) {
    console.log("Maxfiy belgilar bor");
}

// 21. Bahor oyini aniqlash
// let son1 = 3;
// if (son1 === 3 || son1 === 4 || son1 === 5) {
//   console.log("Bahor");
// }

// 22. Sonning juftlik va toqligini aniqlash
// S

// 23. Sonning 10 dan kichikligini tekshirish
let son3 = 8;
if (son3 < 10) {
  console.log("Kichik son");
}

// 24. Matn oxiri `.com` bilan tugashini tekshirish
let matn1 = "example.com";
if (matn1.endsWith(".com")) {
  console.log("Web sayt");
}

// 25. Foydalanuvchi "Frontend" yoki "Backend" yozsa
let matn2 = "Frontend";
if (matn2 === "Frontend" || matn2 === "Backend") {
  console.log("Dasturchi");
}

// 26. Foydalanuvchi "Uzbek" deb yozsa
let millat = "Uzbek";
if (millat === "Uzbek") {
  console.log("Assalomu alaykum!");
}

// 27. Uchta son berilganida, yig'indisi juft bo'lsa
let a = 3, b = 4, c = 5;
let yigindi = a + b + c;
if (yigindi % 2 === 0) {
  console.log("Bo'lindi");
} else {
  console.log("Bo'linmadi");
}

// 28. Matnda probel bor-yo'qligini tekshirish
let matn3 = "Hello World";
if (matn3.includes(" ")) {
  console.log("Probel bor");
}

// 29. Soat 18-08 oralig'ida bo'lsa
let soat = 20;
if (soat >= 18 || soat < 8) {
  console.log("Kunduz");
} else {
  console.log("Tun");
}

// 30. Son musbat yoki nol ekanligini aniqlash
let son4 = -5;
if (son4 >= 0) {
  console.log("Yaroqli son");
}



//By @Safety_bro 
//Shakarboyev Asilbek
//18.04.2012