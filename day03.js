function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    console.log("dien tich nha la: " + dienTich + "m2");
    return dienTich;
}

let dienTichNhaPho = tinhDienTich(10, 5);
let dienTichNhaMattien = tinhDienTich(20, 5);

let tongDienTich = dienTichNhaPho + dienTichNhaMattien;
console.log("tong dien tich nha: " + tongDienTich + "m2");

let student = {
    name: "Teo",
    age: 23,
    sothich: "football",
};

console.log(student);
console.log("toi ten: " + student.name + "\ntuoi cua toi: " + student.age + "\nso thich cua toi: " + student.sothich)

let toDoList = [
    "To",
    "Do",
    "List"
];
console.log(toDoList[0]);
console.log(toDoList[1]);
console.log(toDoList[2]);
console.log(toDoList.length);
console.log(toDoList[toDoList.length-1]);