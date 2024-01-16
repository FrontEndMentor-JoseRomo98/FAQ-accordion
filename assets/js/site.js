//Get all Faq Entries
const faqEntries = document.querySelectorAll('.faq__entry');

//Set all Faq Answer hidden
const answers = document.querySelectorAll('.faq__answer');
answers.forEach((ans) => {
    ans.classList.add('hidden');
})

//Add on Click Event
faqEntries.forEach(function (entry) {
    entry.onclick = function () {
        const answer = entry.querySelector('.faq__answer');
        answer.classList.toggle('hidden');
        
        const icon = entry.querySelector('img');

if(answer.classList.contains('hidden')){
    icon.src = '../assets/images/someImages.jpg';
}else{
    icon.src = '../assets/images/icon-minus.svg';
}
    };
});
