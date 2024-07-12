//show hide links

const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')


navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height; 
    const linksHeigth = links.getBoundingClientRect().height;

    if (containerHeight == 0) {
        linksContainer.style.height = `${linksHeigth}px`
    } else {
        linksContainer.style.height = 0
    }
})





// fixednav 

const navbar = document.querySelector('nav')
const topbtn = document.querySelector('.top-btn')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav') 
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 1000) {
        topbtn.classList.add('show-top-btn')
    } else {
        topbtn.classList.remove('show-top-btn')
    }
})
















const question = document.querySelector('.question'); 
const Ans = document.querySelector('.ans') 
const btns = document.querySelectorAll('.btn')


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('show-ans')

        if (btn.childNodes[0].classList.contains('fa-angle-up')) {
            btn.childNodes[0].classList.remove('fa-angle-up')
            btn.childNodes[0].classList.add('fa-angle-down')
        } else {
            btn.childNodes[0].classList.remove('fa-angle-down')
            btn.childNodes[0].classList.add('fa-angle-up')
        }
    })
})


















// .reviews 

const arr = [
    {
        id: 1, 
        img : './images/person1.jpg', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, modi consequatur. Eaque, nihil. Repellendus amet ipsam minus assumenda option.', 
        author: 'Ann Jane', 
        job: 'Client'
    }, 
    {
        id: 2, 
        img : './images/person2.jpg', 
        text: 'Lorem ipsum dolor sit amet consectetur, ahil. Repellendus amet ipsam minus assumenda option.', 
        author: 'Jane Brown', 
        job: 'Manager'
    }, 
    {
        id: 3, 
        img : './images/person3.jpg', 
        text: 'met consectetur, adipisicing elit. Eaque, modi consequatur. Eaque, nihil. Repellendus amet ipsam minus assumenda option.', 
        author: 'Ben Stifler', 
        job: 'Designer'
    }
]



const img = document.querySelector('#img');
const text = document.querySelector('#text');
const author = document.querySelector('#author');
const job = document.querySelector('#job'); 


const nextBtn = document.querySelector(".nextButton")
const prevBtn = document.querySelector(".prevButton")



let index = 0 


const person = () => {
    let item = arr[index]
    img.src = item.img;
    author.innerHTML = item.author
    text.innerHTML = item.text
    job.innerHTML = item.job
}

const nextPerson = () => {
    index++; 
    if (index > arr.length - 1) {
        index = 0
    }
    person()
}

const prevPerson = () => {
    index--
    if (index < 0) {
        index = arr.length - 1
    }
    person()

}


nextBtn.addEventListener('click', nextPerson)
prevBtn.addEventListener('click', prevPerson)