//  Assessment: JS Katas: "Here we SHOW again!" Collection //

// Group 1:

// Greg Harris
// Chuefeng Vue
// Will Washington
// Court Sherrod

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const parentElement = document.querySelector('.katas-list')

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")
const div7 = document.createElement("div")
const div8 = document.createElement("div")
const div9 = document.createElement("div")
const div10 = document.createElement("div")
const div11 = document.createElement("div")
const div12 = document.createElement("div")
const div13 = document.createElement("div")
const div14 = document.createElement("div")
const div15 = document.createElement("div")
const div16 = document.createElement("div")
const div17 = document.createElement("div")
const div18 = document.createElement("div")

// Kata 1
div1.append("KATA 1: ")
parentElement.append(div1)

for (let i = 1; i <= 20; i += 1) {
    parentElement.append(i + " ")

}

// Kata 2
div2.append("KATA 2: ")
parentElement.append(div2)

for (let i = 2; i <= 20; i += 2) {
    parentElement.append(i + " ")
}

// Kata 3
div3.append("KATA 3: ")
parentElement.append(div3)

for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
    parentElement.append(counter3 + " ")
}

// Kata 4
div4.append("KATA 4: ")
parentElement.append(div4)

for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    parentElement.append(counter4 + " ")
}

// Kata 5
div5.append("KATA 5: ")
parentElement.append(div5)

for (let i = 1; i <= 10; i += 1) {
    parentElement.append(i * i + " ")
}
// Kata 6
div6.append("KATA 6: ")
parentElement.append(div6)

for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    parentElement.append(counter6 + " ")
}
// Kata 7
div7.append("KATA 7: ")
parentElement.append(div7)

for (let counter7 = 20; counter7 >= 1; counter7 -= 2) {
    parentElement.append(counter7 + " ")
}

// Kata 8
div8.append("KATA 8: ")
parentElement.append(div8)

for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
    parentElement.append(counter8 + " ")
}

// Kata 9
div9.append("KATA 9: ")
parentElement.append(div9)

for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    parentElement.append(counter9 + " ")
}

// Kata 10
div10.append("KATA 10: ")
parentElement.append(div10)

for (let counter10 = 10; counter10 >= 1; counter10 -= 1) {
    parentElement.append(counter10 * counter10 + " ")

}

// Kata 11
div11.append("KATA 11: ")
parentElement.append(div11)

for (let i = 0; i < sampleArray.length; i += 1) {
    parentElement.append(sampleArray[i] + " ")
}

// Kata 12
div12.append("KATA 12: ")
parentElement.append(div12)

for (let i = 0; i < sampleArray.length; i += 1) {
    if (sampleArray[i] % 2 === 0) {
        parentElement.append(sampleArray[i] + " ")

    }
}

// Kata 13
div13.append("KATA 13: ")
parentElement.append(div13)

for (let i = 0; i < sampleArray.length; i += 1) {
    if (sampleArray[i] % 2 === 1) {
        parentElement.append(sampleArray[i] + " ")

    }
}

// Kata 14
div14.append("KATA 14: ")
parentElement.append(div14)

for (let i = 0; i < sampleArray.length; i += 1) {

    parentElement.append(sampleArray[i] * sampleArray[i] + " ")

}

// Kata 15
div15.append("KATA 15: ")
parentElement.append(div15)

let total15 = 0
for (let i = 1; i <= 20; i += 1) {
    total15 += i;
    if (i === 20) {
        parentElement.append(total15)
    }
}

//Kata 16
div16.append("KATA 16: ")
parentElement.append(div16)

let total16 = 0
for (let i = 0; i < sampleArray.length; i += 1) {
    total16 += sampleArray[i];

    parentElement.append(total16)
}

//Kata 17
div17.append("KATA 17: ")
parentElement.append(div17)

let smallest = sampleArray[0]
for (let i = 0; i < sampleArray.length; i += 1) {
    if (smallest > sampleArray[i]) {
        smallest = sampleArray[i]
    }
}
parentElement.append(smallest)

//Kata 18
div18.append("KATA 18: ")
parentElement.append(div18)

let largest = sampleArray[0]
for (let i = 0; i < sampleArray.length; i += 1) {
    if (largest < sampleArray[i]) {
        largest = sampleArray[i]
    }
}
parentElement.append(largest)





































