var x = 10
var y = x
console.log(`gia tri y = ${y}`)
x = 11
console.log(`y = ${y}`)
var person1 = {
    name: 'Hoang',
    age: 18
}
//var person2 = person1
//clone an object 
var person2 = {...person1}
person1.age = 19
console.log(`person1 = ${JSON.stringify(person1)}`)
console.log(`person2 = ${JSON.stringify(person2)}`)
person1 = person2
console.log('after kill p1')
console.log(`person1 = ${JSON.stringify(person1)}`)
console.log(`person2 = ${JSON.stringify(person2)}`)

console.log(`Gia tri cua x la : ${x}`)
function sum(x, y) {
    return x + y
}
var songs = []
songs.push({
    name: 'Hoa hai duong',
    author: 'Jack',
    year: 2020
})
songs.push({
    name: 'Chay ngay di',
    author: 'M-TP',    
    year: 2018
})
songs.push({
    name: 'Chay di',
    author: 'M-TP',
    year: 2018
})
console.log(`cac bai hat la: ${JSON.stringify(songs)}`)
//JSON = Javascript Object Notation
/*
alert(`sum 2 and 3 is : ${sum(2,3)}`)
alert("sum 2 and 3 is : "+sum(2,3))
*/
function pressCalculate() {
    let inputX = document.getElementById("x")
    let inputY = document.getElementById("y")
    if(inputX.value == "" 
        || inputY.value == ""
        || isNaN(inputX.value) == true
        || isNaN(inputY.value) == true
        ) {
        alert("Please input x and y")
        return
    }    
    document.getElementById("result").innerText = `${parseInt(inputX.value) + parseInt(inputY.value)}`
    //alert(`tong = ${parseInt(inputX.value) + parseInt(inputY.value)}`)    
}
function changeText() {    
    var inputX = document.getElementById("x")
    var inputY = document.getElementById("y")        
    //debugger
    var x = isNaN(parseInt(inputX.value)) ? 0 : parseInt(inputX.value)
    var y = isNaN(parseInt(inputY.value)) ? 0 : parseInt(inputY.value)    
    document.getElementById("result").innerText = `${x + y}`        
}

function fillDataTable() {

    var HeaderRowCount = 1
    var table = document.getElementById('tableSong')
    var rowCount = table.rows.length
    for (var i = HeaderRowCount; i < rowCount; i++) {
        table.deleteRow(HeaderRowCount)
    }
        var row, tdata, data
        
        for (var i = 0; i < songs.length; i++) {
            
           
            row = document.createElement("TR");
            row.setAttribute("id", `myTr${i}`);
            document.getElementById("tableSong").appendChild(row);
        
            tdata = document.createElement("TD");
            data = document.createTextNode(`${JSON.stringify(songs[i].name)}`);
            tdata.appendChild(data);
            document.getElementById(`myTr${i}`).appendChild(tdata); 

            tdata = document.createElement("TD");
            data = document.createTextNode(`${JSON.stringify(songs[i].author)}`);
            tdata.appendChild(data);
            document.getElementById(`myTr${i}`).appendChild(tdata);
 
            tdata = document.createElement("TD");
            data = document.createTextNode(`${JSON.stringify(songs[i].year)}`);
            tdata.appendChild(data);
            document.getElementById(`myTr${i}`).appendChild(tdata);
        }   
    
}