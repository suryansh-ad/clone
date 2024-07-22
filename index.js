
vid = document.getElementById('vid')
mutebtn = document.getElementById('mutebtn');

document.getElementById('mutebtn').addEventListener("click",function(){
    console.log('clicked')
    if(vid.muted == true)
         {
            vid.muted = false;
            mutebtn.style.fill = `blue`

         }
         else
            {
                vid.muted = true;
                mutebtn.style.fill =`white`;
            }
})
const watchlist = document.getElementById('watchlist')
x = 2;
watchlist.onclick = function(){
 
    if(x%2 === 0)
        {
            watchlist.innerHTML='<span class="popup">Done!</span><svg viewBox="0 0 24 24" class="watchlist information" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
            x++;
        }
        else{
            watchlist.innerHTML = ' <span class="popup">Watchlist</span><svg class="watchlist information" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
            x++;
        }
}
const letitscroll = document.getElementById('letitscroll');
const rightscroll = document.getElementById('svgright');

rightscroll.onclick = function() {
    letitscroll.scrollBy({ 
        left: letitscroll.clientWidth, 
        behavior: 'smooth' 
    });
};

const play = document.getElementById('play');
play.onclick = function()
{
    vid.requestFullscreen()
}

document.querySelectorAll('.hover-container').forEach(container => {
    const video = container.querySelector('.hover-video');
    const img = container.querySelector('img');

    container.addEventListener('mouseenter', () => {
        img.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });

    container.addEventListener('mouseleave', () => {
        video.style.display = 'none';
        img.style.display = 'block';
        video.pause();
        video.currentTime = 0; 
    });
});
document.querySelectorAll('.svgwatch').forEach((watchlist) => {
    let y = 2;
    watchlist.onclick = function () {
        if (y % 2 === 0) {
            watchlist.innerHTML = '<span class="popup">Done!</span><svg viewBox="0 0 24 24" class="watchlist information" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
            y++;
        } else {
            watchlist.innerHTML = ' <span class="popup">Watchlist</span><svg class="watchlist information" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
            y++;
        }
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('main_nav');
    const stickyPoint = window.innerHeight * 0.02; // 2% of viewport height

    if (window.scrollY > stickyPoint) {
        navbar.style.top = '2vh';
        navbar.style.position = 'sticky';
    } else {
        navbar.style.top = '0';
        navbar.style.position = 'relative';
    }
});

