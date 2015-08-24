define(['Howler'], function(Howler){
    var SFX = ['click.wav'],
        i, sound, sounds = {};

    console.info('Loading sfx...',Howler);
    for(i in SFX){
        if(!SFX.hasOwnProperty(i)) continue;
        sound = new Howler.Howl({
            urls: ['assets/sfx/' + SFX[i]],
            buffer: true,
            onload: function(e){
                console.info('Loaded sfx',e);
            },
            onerror: function(e){
                console.info('Loaded sfx err',e);
            }
        });

        sounds[SFX[i].split('.')[0]] = sound;
    }

    return sounds;
});