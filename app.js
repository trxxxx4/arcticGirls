
const album = document.querySelector('.album__image');
const songName = document.querySelector('.song__name')
const WhenTheSunGoesDown = document.querySelector('#WhenTheSunGoesDown');
const audio = document.querySelector('.audio');
const TeddyPicker = document.querySelector('#TeddyPicker');
const FluorescentAdolescent = document.querySelector('#FluorescentAdolescent');
const ThisHouseisaCircus = document.querySelector('#ThisHouseisaCircus');
const DoIWannaKnow = document.querySelector('#DoIWannaKnow');
const BlackTreacle = document.querySelector('#BlackTreacle');







WhenTheSunGoesDown.addEventListener('click', function(){
    if (songName.innerText != 'When The Sun Goes Down'){
        console.log('zxc');
        audio.id = 'removing';
        songName.id = 'removing';
        album.id = 'removing';
        songName.innerHTML = '';
        
        setTimeout(()=>{
            
            songName.removeAttribute('id');
            songName.removeAttribute('class');
            songName.innerHTML = 'When The Sun Goes Down';
            songName.classList.add('song__name');
            audio.removeAttribute('src');
            album.removeAttribute('id');
            album.id = 'album1';
            audio.removeAttribute('id');
            audio.src = './Arctic_Monkeys_-_When_The_Sun_Goes_Down_59891400.mp3'
            audio.classList.add('audio')
        }, 300)
    
             
    }
    
})



TeddyPicker.addEventListener('click', function(){
    if (songName.innerText != 'Teddy Picker'){

    
    console.log('qwe');
    audio.id = 'removing';
    songName.id = 'removing';
    album.id = 'removing';
    songName.innerHTML = '';
    
    setTimeout(()=>{
        songName.removeAttribute('id');
        songName.removeAttribute('class');
        audio.removeAttribute('src');
        songName.classList.add('song__name');
        songName.innerHTML = 'Teddy Picker';
        album.removeAttribute('id');
        album.id = 'album2';
        audio.removeAttribute('id');
        audio.src = './Arctic_Monkeys_-_Teddy_Picker_59891374.mp3'
        audio.classList.add('audio')
    }, 300)

}
})

FluorescentAdolescent.addEventListener('click', function(){
    if (songName.innerText != 'Fluorescent Adolescent'){
    console.log('qwe');
    audio.id = 'removing';
    songName.id = 'removing';
    album.id = 'removing';
    songName.innerHTML = '';
    
    
    setTimeout(()=>{
        songName.removeAttribute('id');
        songName.removeAttribute('class');
        songName.classList.add('song__name');
        audio.removeAttribute('src');
        songName.innerHTML = 'Fluorescent Adolescent';
        album.removeAttribute('id');
        album.id = 'album2';
        audio.removeAttribute('id');
        audio.src = './Arctic_Monkeys_-_Fluorescent_Adolescent_59891378.mp3'
        audio.classList.add('audio')
    }, 300)

}
})

ThisHouseisaCircus.addEventListener('click', function(){
    if (songName.innerText != 'This House is a Circus'){
    console.log('qwe');
    audio.id = 'removing';
    songName.id = 'removing';
    album.id = 'removing';
    songName.innerHTML = '';
    
    
    setTimeout(()=>{
        songName.removeAttribute('id');
        songName.removeAttribute('class');
        songName.classList.add('song__name');
        audio.removeAttribute('src');
        songName.innerHTML = 'This House is a Circus';
        album.removeAttribute('id');
        album.id = 'album2';
        audio.removeAttribute('id');
        audio.src = './Arctic_Monkeys_-_This_House_is_a_Circus_59891383.mp3'
        audio.classList.add('audio')
    }, 300)

}
})




DoIWannaKnow.addEventListener('click', function(){
    if (songName.innerText != 'Do I Wanna Know?'){
        console.log('zxc');
        audio.id = 'removing';
        songName.id = 'removing';
        album.id = 'removing';
        songName.innerHTML = '';
        
        setTimeout(()=>{
            
            songName.removeAttribute('id');
            songName.removeAttribute('class');
            songName.innerHTML = 'Do I Wanna Know?';
            songName.classList.add('song__name');
            audio.removeAttribute('src');
            album.removeAttribute('id');
            album.id = 'album5';
            audio.removeAttribute('id');
            audio.src = './Arctic_Monkeys_-_Do_I_Wanna_Know_47842902.mp3'
            audio.classList.add('audio')
        }, 300)
    
             
    }
    
})




BlackTreacle.addEventListener('click', function(){
    if (songName.innerText != 'Black Treacle'){
        console.log('zxc');
        audio.id = 'removing';
        songName.id = 'removing';
        album.id = 'removing';
        songName.innerHTML = '';
        
        setTimeout(()=>{
            
            songName.removeAttribute('id');
            songName.removeAttribute('class');
            songName.innerHTML = 'Black Treacle';
            songName.classList.add('song__name');
            audio.removeAttribute('src');
            album.removeAttribute('id');
            album.id = 'album4';
            audio.removeAttribute('id');
            audio.src = './Arctic_Monkeys_-_Black_Treacle_59891406.mp3'
            audio.classList.add('audio')
        }, 300)
    
             
    }
    
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: 'html',
    content: '.body',
    smooth: 1.5,
    effects: true,
})