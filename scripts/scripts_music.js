//Music player
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    ListFolded: true,
    audio: [{
        name: 'Have Mercy',
        artist: 'Chloe',
        url: '/music/HaveMercy.mp3',
        cover: '/images/lemon.jpg'
    },
    {
        name: 'We All Need Jesus',
        artist: 'Danny Gokey feat. Koryn Hawthrone',
        url: '/music/WeAllNeedJesus.mp3',
        cover: '/images/lemon.jpg'
    },
    {
        name: 'Jalebi Baby',
        artist: 'Tesher x Jason Derulo',
        url: '/music/JalebiBaby.mp3',
        cover: '/images/lemon.jpg'
    },
    {
        name: 'Jireh',
        artist: 'Elevation Worship & Maverick City',
        url: '/music/Jireh.mp3',
        cover: '/images/lemon.jpg'
    },
    {
        name: 'Talking To Jesus',
        artist: 'Elevation Worship & Maverick City',
        url: '/music/TalkingToJesus.mp3',
        cover: '/images/lemon.jpg'
    }
]
    
});

//Play when the icon is clicked
$(".album-postrr").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    //toggle icons
    $(this).find('i').toggleClass('fa-play-circle fa-pause-circle');

    //switch function
    ap.list.switch(dataSwitchId);

    //aplayer play and pause function
    ap.toggle();

    // $("#aplayer").addClass('showPlayer');
});

$(".mood").on('click', function(e){
    ap.play();
    $("#aplayer").addClass('showPlayer');
})