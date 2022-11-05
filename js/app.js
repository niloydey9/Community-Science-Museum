/************************* Navbar Script *************************/
let nav_toggle = document.querySelector("#main-nav span.humberg");let nav = document.querySelector("#main-nav nav");
if(nav_toggle && nav){
    nav_toggle.addEventListener("click", ()=>{nav_toggle.classList.toggle("active");
        if(nav_toggle.classList.contains("active")) {nav.style.left = 0;}else{nav.style.left = '';}
    });
}
let nav_items = document.querySelectorAll('ul.nav-container li>a .drop-down');
if(nav_items){ nav_items = Array.from(nav_items);nav_items.forEach(nav_item=>{nav_item.addEventListener('click', (e)=>{
            e.preventDefault();
            let Dropdown = nav_item.closest('li').querySelector('.dropdown');
            if(Dropdown){if(Dropdown.offsetHeight){Dropdown.style.height = '0px'; nav_item.classList.remove('active');
                }else{Hide_all_drop();Dropdown.style.height = Dropdown.scrollHeight+'px'; nav_item.classList.add('active');}}});});
	function Hide_all_drop(){
		let dropdowns = document.querySelectorAll("#main-nav > div > nav > ul > li .dropdown");
		if(dropdowns){dropdowns = Array.from(dropdowns); dropdowns.forEach(dropdown=>{ dropdown.previousElementSibling.lastElementChild.classList.toggle('active');
			if(dropdown.offsetHeight) dropdown.style.height = '0px';});
		}
	}
}
addEventListener('click', (e)=>{
    if(!e.target.closest("#main-nav")){let nav = document.querySelector("#main-nav nav"); let nav_toggle = document.querySelector("#main-nav span.humberg"); if(nav) nav.style.left = '';
        if(nav_toggle) nav_toggle.classList.toggle('active');
    }
});
/************************* On Scroll Navbar Background Change Script *************************/
window.onscroll = function() {scrollFunctionNavbar()};
function scrollFunctionNavbar() {
	if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {var element = document.getElementById("main-nav");element.classList.add("nav-fix");
	} else {var element = document.getElementById("main-nav");element.classList.remove("nav-fix");}
}