console.log("USER");

let User = {
    ID: "grimangel",
    Password: "179324865",
    Email: "grimangel@gmail.com",
    PhoneNumber: "0123456789"
};

// 02 thay doi du lieu User

// User.ID = "angelgrim";
// User.Password = "125678349";
// User.Email = "angelgrim@gmail.com";
// User.PhoneNumber = "9876543210";

// 01 xuat du lieu User

console.log("ID: " + User.ID); 
console.log("PassWord: " + User.Password); 
console.log( "Email: " + User.Email); 
console.log( "PhoneNumber: " + User.PhoneNumber); 

// 03 so nut dien thoai

let s1 = parseInt(User.PhoneNumber[0]);
let s2 = parseInt(User.PhoneNumber[1]);
let s3 = parseInt(User.PhoneNumber[2]);
let s4 = parseInt(User.PhoneNumber[3]);
let s5 = parseInt(User.PhoneNumber[4]);
let s6 = parseInt(User.PhoneNumber[5]);
let s7 = parseInt(User.PhoneNumber[6]);
let s8 = parseInt(User.PhoneNumber[7]);
let s9 = parseInt(User.PhoneNumber[8]);
let s10 = parseInt(User.PhoneNumber[9]);

let soNutDt = ( s1 + s2 + s3+ s4+ s5+ s6+ s7+ s8+ s9+ s10 ) % 10;
console.log("số nút của số đt là: " + soNutDt);

console.log("\nPLAYER");

let Player = {
    Name: "Frank Lampard",
    Number: 8,
    Skills: {
        Kick: 90,
        Pass: 95,
        Headbutt: 80
    }
}

// 02 thay doi du lieu Player

// Player.Name = "Eden Hazard";
// Player.Number = 10;
// Player.Kick = 95;
// Player.Pass = 85;
// Player.Headbutt = 75;

// 01 xuat du lieu

console.log("" + Player);
console.log("" + Player);
console.log("" + Player);
console.log("" + Player);
console.log("" + Player);
console.log("" + Player);

// 03 chi so trung binh

let chiSoTb = (Player.Skills.Kick + Player.Skills.Pass + Player.Skills.Headbutt) / 3;
console.log("Chỉ số kỹ năng trung bình là: " + Math.floor(chiSoTb));

hopLe = (Number.isInteger(Player.Number)) && 0 < Player.Number && Player.Number < 100 ? "Số áo hợp lệ" : "Số áo không hợp lệ"; // 04 so ao hop le lon hon 0 va nho hon 100 - && dung khi thoa ca 2 dieu kien
console.log("So ao: " + Player.Number + " la " + hopLe);
// (Number.isInteger(Player.Number)) xet so nguyen

console.log("\nLAPTOP");

let Laptop = {
    Model: "Acer",
    ManuDate: 2015,
    Spec: {
        RAM: 8,
        HDD: 500,
        Solution: {
            Hor: 1920,
            Ver: 1080
        }
    }
}

// 02 thay doi du lieu Laptop

// Laptop.Model = "Dell";
// Laptop.ManuDate = 2020;
// Laptop.Spec.RAM = 16;
// Laptop.Spec.HDD = 1000;
// Laptop.Spec.Solution.Hor = 1600;
// Laptop.Spec.Solution.Ver = 900;

console.log(Laptop); // 01 xuat du lieu

// 03 laptop da san xuat duoc

let soTuoiLaptop = 2022 - Laptop.ManuDate;
console.log("Số tuổi của Laptop là: " + soTuoiLaptop + " năm")

// 04 diem cua may tinh

let diemLaptop = ( ( Laptop.Spec.RAM * 3 ) + ( Laptop.Spec.HDD * 2 ) / 5 );
console.log("Điểm của Laptop là: " + diemLaptop);