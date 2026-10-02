const btn=document.querySelector('.toggle-btn');

const profileCard=document.querySelector('.profile-card');


btn.addEventListener('click',() =>{
    profileCard.classList.toggle('dark-mode');
    if(profileCard.classList.contains('dark-mode')){
        btn.textContent='Toggle Light Mode';
    }
    else{
        btn.textContent='Toggle Dark Mode';
    }
    });