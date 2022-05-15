let d = document;
const li = d.querySelectorAll('li')
p = d.querySelectorAll('p')

// 1
const arrowA = d.querySelectorAll('#arrow');
arrowA[0].addEventListener('click', clickArrow1)
arrowA[1].addEventListener('click', clickArrow2)
arrowA[2].addEventListener('click', clickArrow3)
arrowA[3].addEventListener('click', clickArrow4)
arrowA[4].addEventListener('click', clickArrow5)


function clickArrow1() {

    pA.classList.toggle('active')

    arrowA[0].classList.toggle('active')

    li[0].classList.toggle('active')


}
function clickArrow2() {

    pB.classList.toggle('active')

    arrowA[1].classList.toggle('active')

    li[1].classList.toggle('active')


}function clickArrow3() {

    pC.classList.toggle('active')

    arrowA[2].classList.toggle('active')

    li[2].classList.toggle('active')


}
function clickArrow4() {

    pD.classList.toggle('active')

    arrowA[3].classList.toggle('active')

    li[3].classList.toggle('active')

}
function clickArrow5() {

    pE.classList.toggle('active')

    arrowA[4].classList.toggle('active')

    li[4].classList.toggle('active')


}

