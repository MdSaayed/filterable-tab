//selecting dom
var fiterBtn = document.querySelectorAll('ul li a');
var allCard = document.querySelectorAll('.card');

const showCard = (e)=>{
    //remove active class
    document.querySelector('.active').classList.remove('active');
    //add active class
    e.target.classList.add('active');

    allCard.forEach(card=>{
        //hide card
        card.classList.add('hide');

        //filter card
        if(card.getAttribute('data_name') === e.target.getAttribute('data_name') || e.target.getAttribute('data_name') === 'all'){
            card.classList.remove('hide');
        }
    })
}

//add event listener
fiterBtn.forEach(btn=>btn.addEventListener('click',showCard));




























// var filterableBtn = document.querySelectorAll('ul li');
// var filterableCard = document.querySelectorAll('.filterable-cards .card');

// const showCard = (e)=>{
//     document.querySelector('.active').classList.remove('active');
//     e.target.classList.add('active');

//     filterableCard.forEach(card=>{
//         card.classList.add('hide');
//         if(card.getAttribute('data_name') == e.target.getAttribute('data_name') || e.target.getAttribute('data_name') == 'all'){
//             card.classList.remove('hide');
//         }

//     })
// }

// filterableBtn.forEach(btn=>btn.addEventListener('click',showCard));

