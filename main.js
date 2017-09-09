// надо найти lightbox где display:none отсутствует и сделать эвенты для кнопок
document.body.addEventListener("keydown", function(event){
    function nextClick(e, next)
    {
        e.preventDefault();
        if(e.keyCode == 37)
        {
            next.click();
        }
    }
    function prevClick(e, prev)
    {
        e.preventDefault();
        if(e.keyCode == 39)
        {
            prev.click();
        }
    }
    var lightboxes = document.querySelectorAll("table[id^=lightbox]:not([style*='display: none'])");
    lightboxes.forEach(function(item, i, lightboxes)
    {
        var prev = item.querySelector("input[id*=lightboxprev]");
        var next = item.querySelector("input[id*=lightboxnext]");
        if(prev)
        {
            prev.addEventListener("keydown", nextClick(event, prev));
            prev.removeEventListener("keydown", nextClick(event, prev));
        }
        if(next){
            next.addEventListener("keydown", prevClick(event, next));
            prev.removeEventListener("keydown", prevClick(event, next));
        }
    });

});

