let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

let sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLink = document.getElementById("showMoreLink");

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-Activity")){
        showMoreLink.innerHTML="Show less <b>-</b>";
    }
    else{
        moreLink.innerHTML="Show more <b>+<b>";
    }
}