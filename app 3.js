// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controlls');
// const sectBtn = documet.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

// function PageTransitions(){ 
//     //Button Click active class
//     for (let i =0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             // this.className += 'active-btn';
//             this.className +=' active-btn';   
//         })
//     }

// const { doc } = require("prettier");

// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controlls');
// const sectBtn = document.querySelectorAll('.control');
// const allsections = document.querySelector('.main-content')

// function PageTransitions(){
//     //Button clikc active class
//     for (let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', function() {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn';
//         })
//     }






//     //sections Active 
//     allSections.addEventListener('click', (e) =>{
//         const id = e.target.dataset.id;
//         if(id){
//             //resmove selected from the other btns
//             sectBtn.forEach((btn) =>{
//                 btn.classList.remove('active')
//             })
//             e.target.classList.add('active')

//             //hide other sections
//             sections.forEach((sections)=>{
//                 sections.classList.remove('active')
//             })
//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })

// }

// PageTransitions();

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content')

function PageTransitions(){
    //Button clikc active class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // section Active
    allsections.addEventListener('click', (e) =>{
        const id= e.target.dataset.id;
        if(id){
            //resmove sected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();