let sections = document.querySelectorAll("section")
let links = document.querySelectorAll('header ul li a')

console.log(sections)

window.onscroll = () =>{
    sections.forEach(screen =>{

        let top = window.scrollY;
        let offset = screen.offset;
        let height = screen.offsetHeight;
        let id = screen.getAttribute("id");

        if(top >= offset && top < offset+height){
            console.log(id)
            links.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']').classList.add("active")
            })
        }
    })
}