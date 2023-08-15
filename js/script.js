const articles = document.querySelectorAll(".js-article");

const appearOptions = {
     rootMargin: "0px 0px -50px 0px",
     threshold: 0.5,
}; 

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
       if (!entry.isIntersecting) {
        return;
       }
       else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
       }
    }); 

}, appearOptions);

articles.forEach (article => {
    appearOnScroll.observe(article);
})

