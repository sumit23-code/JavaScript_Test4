// Print a Pyramid Pattern with Spaces:
// Input: 3

let n = 3;
for (let i = 1; i <= n; i++) {
    let space = '';
    let star = '';

    for (let j = 0; j < n - i; j++) {
        space += ' ';

    }
    for (let k = 0; k < 2 * i - 1; k++) {
        star += '*';
    }

    console.log(space + star + space);
}











// 3. Count Binary Zeros and Ones:
// Input: "101010110"
// Output: { ones: 5, zeros: 4 }




function BinaryDigits(i) {
    let count = { ones: 0, zeros: 0 };

    for (let char of i) {
        if (char === '1') {
            count.ones++;
        } else if (char === '0') {
            count.zeros++;
        }
    }

    return count;
}

let input = "101010110";
let output = BinaryDigits(input);
console.log(output);








// 5. Filter Only Unique Binary Strings from Array:
// Input: ["101", "101", "000", "111", "000"]
// Output: ["101", "000", "111"]


let i = ["101", "101", "000", "111", "000"];
let uniqueBinary = [...new Set(i)];

console.log(uniqueBinary);







// 4. Group Users by Role (Objects inside Array):
// Input: [
// { name: "A", role: "admin" },
// { name: "B", role: "user" },
// { name: "C", role: "admin" },
// ]
// Output:
// {
// admin: ["A", "C"],
// user: ["B"]
// }






let arr = [{ name: "A", role: "admin" },
{ name: "B", role: "user" },
{ name: "C", role: "admin" },];


let admin = [];
let user = [];
let obj = {};
for (i = 0; i < arr.length; i++) {
    if (arr[i].role == "admin") {
        admin.push(arr[i].name);
    } else {
        user.push(arr[i].name);
    }

}
obj.admin = admin;
obj.user = user;

console.log(obj)