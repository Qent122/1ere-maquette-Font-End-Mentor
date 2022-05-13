let d = document;
const li = d.querySelectorAll('li')
p = d.querySelectorAll('p')

// 1
const arrowA = d.querySelector('#arrow1');
arrowA.addEventListener('click', clickArrow)

function clickArrow() {
    
    
    if (pA.style.visibility === 'hidden') {
        pA.style.visibility = 'visible';
      } else {
        pA.style.visibility = 'hidden';
    
//     p[0].style.removeProperty('hidden')
//   p[0].classList.toggle('hidden')
//     arrowA.style.transform='rotate(180deg)'
//     li[0].style.fontWeight = '700'
//     li[0].style.color = '#000'
}
}
// 2
const arrowB = d.querySelector('#arrow2');
arrowB.addEventListener('click', clickArrow1)

function clickArrow1() {
    arrowB.style.transform='rotate(180deg)'
    li[1].style.fontWeight = '700'
    li[1].style.color = '#000'
    p[1].style.display = 'flex'

}
// 3
const arrowC = d.querySelector('#arrow3');
arrowC.addEventListener('click', clickArrow2)

function clickArrow2() {
    p[2].classList.toggle('displayN')
    arrowC.style.transform='rotate(180deg)'
    li[2].style.fontWeight = '700'
    li[2].style.color = '#000'
    p[2].style.display = 'flex'

}
// 4
const arrowD = d.querySelector('#arrow4');
arrowD.addEventListener('click', clickArrow3)

function clickArrow3() {
    arrowD.style.transform='rotate(180deg)'
    li[3].style.fontWeight = '700'
    li[3].style.color = '#000'
    p[3].style.display = 'flex'

}
// 5
const arrowE = d.querySelector('#arrow5');
arrowE.addEventListener('click', clickArrow4)

function clickArrow4() {
    arrowE.style.transform='rotate(180deg)'
    li[4].style.fontWeight = '700'
    li[4].style.color = '#000'
    p[4].style.display = 'flex'

}