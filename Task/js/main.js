function Task_1(){
    let admin
    let name = "Nikita";
    admin  = name;
    alert(admin)
}
// Task_1();

function Task_3(){
    let name = "Ilya";
    alert( `hello ${1}` ); // hello 1
    alert( `hello ${"name"}` ); // hello name
    alert( `hello ${name}` ); // hello Ilya
}
// Task_3()

function Task_4() {
    "" + 1 + 0 // "10"
    "" - 1 + 0 // -1
    true + false // 1
    6 / "3" //2
    "2" * "3" // 6
    4 + 5 + "px" //9px
    "$" + 4 + 5 // $45
    "4" - 2 // 2
    "4px" - 2 // Nan
    7 / 0 // Infinity
    " -9 " + 5 //-95
    " -9 " - 5 // -14
    null + 1 // 1
    undefined + 1 // NaN
}
// Task_4()

function Task_5() {
    let a = 1, b = 1;
    let c = ++a; // 2
    let d = b++; // 1
}
// Task_5()
function Task_6() {
    let a = 2;
    let x = 1 + (a *= 2);
    // a = 4 x = 5
}
// Task_6()

function Task_7() {
    5 > 4 // true
    "ананас" > "яблоко" // false
    "2" > "12" //true
    undefined == null // true
    undefined === null // false
    null == "\n0\n" // false
    null === +"\n0\n" // false
}
// Task_7()

function Task_8() {
let name = prompt("Enter Name")
    alert(`Your name ${name}`)
}
// Task_8()

function Task_9() {
    if ("0") {
        alert( 'Привет' ); // yes
    }
}
// Task_9()
function Task_10() {
let answer = prompt("Каково «официальное» название JavaScript?")
    if(answer == "ECMAScript"){
        alert("Верно!")
    }else {
        alert("Не знаете? ECMAScript!")
    }
}
//Task_10()

function Task_11() {
    let answer = +prompt("Введите число")
    if(answer > 0){
        alert(1)
    }else if (answer<0) {
        alert(-1)
    }else{
        alert(0)
    }
}
// Task_11()

function Task_12(a,b) {
    let result;
    result= a + b < 4 ? 'Мало':'Много';
    alert(result)
}
// Task_12(1,2)

function Task_13(login) {
    let message;
    message = (login == 'Сотрудник') ? 'Привет':
        (login == 'Директор') ? 'Здравствуйте':
            (login == '') ? 'Нет логина':
                ''
    alert(message)
}
// Task_13('Директор')

function Task_14() {
    alert( null || 2 || undefined );//2
}
// Task_14()

function Task_15() {
    alert( alert(1) || 2 || alert(3) );//1 2
}
// Task_15()

function Task_16() {
    alert( 1 && null && 2 );// nul
}
// Task_16()

function Task_17() {
    alert( alert(1) && alert(2) ); // 1 undefined
}
// Task_17()

function Task_18() {
    alert( null || 2 && 3 || 4 ); //3
}
// Task_18()

function Task_19(age) {
    if(age >=14 && age <= 90){
        alert("в диапазоне")
    }else{
        alert("не в диапазоне")
    }
}
// Task_19(15)


function Task_20(age) {
    if(!(age >= 14 && age <= 90)){
        alert("не в диапазоне")
    }
    if(age < 14 || age > 90){
        alert("не в диапазоне")
    }
}
// Task_20(91)

function Task_21() {
    if (-1 || 0) alert( 'first' );// это
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );//и это
}
// Task_21()

function Task_22() {
    let name = prompt("Введите имя")

    if(name == "Админ"){

         let password = prompt('введите пороль')

        if(password == "Я Главный"){
            alert('Здравствуйте!')
        }else if(password == null || password == ""){
            alert("Отменено")
        }else{
            alert("Неверный пароль")
        }
    }else if( name == null || name == ''){
        alert("Отменено")
    }else {
        alert("я вас не знаю")
    }
}
//Task_22()

function Task_23(browser) {
    if(browser == "Edge") {
        alert("You've got the Edge!")
    }else if(browser == 'Chrome'&& browser == 'Firefox' && browser == 'Safari' && browser == 'Opera') {
        alert( 'Okay we support these browsers too' );
    }else{
        alert( 'We hope that this page looks ok!' );
    }
}
// Task_23("Safari")

function Task_24() {
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert( 0 );
            break;
        case 1:
            alert( 1 );
            break;
        case 2:
        case 3:
            alert( "2,3" );
            break;
    }
}
 // Task_24()

function Task_25(number) {
    if (number > 0){
        ++number
    }
    alert(number)
}
// Task_25(25)

function Task_26(number) {
    if (number > 0){
        ++number
    }else{
        number -= 2
    }
    alert(number)
}
// Task_26(-26)

function Task_27(number) {
    if (number > 0){
        ++number
    }else if(number < 0){
        number -= 2
    }else if (number == 0){
        number = 10
    }
    alert(number)
}
 // Task_27(0)

function Task_28(a,b,c) {
    let counter = 0
    if(a > 0){
        counter++
    }if(b > 0){
        counter++
    }if(c > 0){
        counter++
    }
    alert(`количество положительных : ${counter}`)
}
//Task_28(1, 2, -2)

function Task_29(a,b,c) {
    let plus = 0;
    let minus = 0;
    if(a > 0){
        plus++
    }else{
        minus++
    }
    if(b > 0){
        plus++
    }else{
        minus++
    }if(c > 0){
        plus++
    }else{
        minus++
    }
    alert(`количество положительных : ${plus}`)
    alert(`количество положительных : ${minus}`)
}
// Task_29(1, 2, -2)

function Task_30(a,b) {
    (a > b) ? alert(a) : alert(b);
}
// Task_30(1, 2)

function Task_31(a,b) {
    (a > b) ? alert(`число номер 2 меньше`) : alert(`число номер 1 меньше`);
}
// Task_31(1, 2)

function Task_32(a,b) {
    (a > b) ? alert(`${a}  ${b}`) : alert(`${b}  ${a}`);
}
// Task_32(8, 2)

function Task_33(a,b) {
    let c
    if(a > b){
        c = a
        a = b
        b = c
    }
    alert(`${a} ${b}`);
}
// Task_33(8, 12)

function Task_34(a,b) {
    if(a !== b){
        a= a+b ;
        b = a;
    }else{
        a = 0;
        b = 0;
    }
    alert(`${a} ${b}`);
}
// Task_34(8, 2)

function Task_35(a,b) {
    if(a !== b){
        if (a > b){
            b = a;
        }else if (a < b){
            a = b;
        }
    }else{
        a = 0;
        b = 0;
    }
    alert(`${a} ${b}`);
}
// Task_35(8, 12)

function Task_36(a,b,c) {
if(a < b && a < c){
    alert(a)
}else if(b < c && b < a){
    alert(b)
}else{
    alert(c)
}
}
// Task_36(8, 12, 18)

function Task_37(a,b,c) {
    if(a > c && a > b){
        if(c > b){
            alert(c)
        }else{
            alert(b)
        }
    }else if(b > a && b > c){
        if(a > c){
            alert(a)
        }else{
            alert(c)
        }
    }else if(c > a && c > b){
        if(a > b){
            alert(a)
        }else{
            alert(b)
        }
    }
}
// Task_37(8, 12, 18)

function Task_38(a,b,c) {
    let min;
    let max;
        if(a > c && a > b){
           max = a ;
        }else if(b > c && b > a){
           max = b
        }else{
            max = c
        }
    if(a < b && a < c){
         min =a;
    }else if(b < c && b < a){
         min =b;
    }else{
         min =c;
    }
    alert(`${min} ${max}`);

}
// Task_38(8, 12, 18)

function Task_39(a,b,c) {
if(a < b && a < c){
    alert(b + c)
}else if(b < a && b < c) {
    alert(a + c)
}else if(c < a && c < b) {
    alert(a + b)
}
    }
// Task_39(8, 12, 18)

function Task_40(a,b,c) {
    if(b == c){
        alert('1')
    }else if(a == c){
        alert('2')
    }else if(a == b){
        alert('3')
    }
}
// Task_40(8, 12, 18)















