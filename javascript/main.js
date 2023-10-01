//======================THIS IS FOR OUR HAMBURGER MUNU=============
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let myMenu = document.querySelector('.my-menu');

menuBtn.addEventListener('click', function() {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        myMenu.style.display = "flex";
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        myMenu.style.display = "none";
    }
})

//=================================================================

document.querySelector('.logo img').addEventListener('click', function(){
    window.location.reload();
})

//=================================================================


$(document).ready(function () {

   

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

//=================MUSIC================================================
    
    var songs = ["./music/Naruto Uzumaki1.mp3","./music/Naruto Uzumaki2.mp3","./music/Naruto Uzumaki3.mp3", "./music/Naruto Uzumaki4.mp3", "./music/Naruto Uzumaki5.mp3", "./music/Naruto Uzumaki6.mp3"];
    var poster = ["./images/10-poster1.jpg","./images/11-poster2.jpg","./images/12-poster3.jpg",
    "./images/13-poster4.jpg", "./images/14-poster5.jpg", "./images/15-poster6.jpg"];
    
    var songTitle = document.getElementById("songTitle");
    
    var song = new Audio();
    var currentSong = 0;    // it point to the current song
    
    //window.onload = playSong;   // it will call the function playSong when window is load
    
    function playSong(){
        
        song.src = songs[currentSong];  //set the source of 0th song 
        
        songTitle.textContent = songs[currentSong]; // set the title of song
        
        song.play();    // play the song
    }
    
    function playOrPauseSong(){
        
        if(song.paused){
            song.play();
            $("#play img").attr("src","./images/6-pause.png");
        }
        else{
            song.pause();
            $("#play img").attr("src","./images/9-play.png");
        }
    }
 

    function next(){
        
        currentSong++;
        if(currentSong > 5){
            currentSong = 0;
        }
        playSong();
        $(".imgBx img").attr("src",poster[currentSong]);
    }

    function pre(){
        
        currentSong--;
        if(currentSong < 0){
            currentSong = 5;
        }
        playSong();
        $(".imgBx img").attr("src",poster[currentSong]);

    }


//==========xxx======MUSIC===================xx=============================

//==================SWIPER===============================================
var swiper = new Swiper('.swiper-container', 
{
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop:true,
  autoplay: {
     delay: 1500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
});
//==========xxx======SWIPER===================xx=============================

//======video toggle
function toggleB(){
    var trailer = document.querySelector('.trailer');
    var video = document.querySelector('video');
    trailer.classList.toggle('active');
    video.pause();
    video.currentTime = 0;
}
//=================