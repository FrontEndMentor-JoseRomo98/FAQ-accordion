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
        const iconPath = icon.src.substring(0, icon.src.lastIndexOf('/')) + '/';

        if(answer.classList.contains('hidden')){
            icon.src = iconPath + 'icon-plus.svg'
        }else{
            icon.src = iconPath + 'icon-minus.svg'
        }
    };
});