document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('pass');
    var menuItems = document.querySelectorAll('#pass ul li a');

   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            pass.style.backgroundColor = 'green'; 
        } else {
            pass.style.backgroundColor = 'red'; 
        }
    });
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = 'yellow'; 
            item.style.color = 'black'; 
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = ''; 
            item.style.color = ''; 
        });
    });
});
