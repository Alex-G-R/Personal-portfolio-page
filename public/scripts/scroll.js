const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem)=>observer.observe(elem)); // observe all hidden elements


