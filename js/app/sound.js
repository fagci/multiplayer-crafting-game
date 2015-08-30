define(['jquery','Howler'], function($, Howler){
    var SFX = ['click.wav'],
        i, sound, sounds = {};

    console.info('Loading sfx...');
    for(i in SFX){
        if(!SFX.hasOwnProperty(i)) continue;
        sound = new Howl({
            urls: ['resources/sfx/' + SFX[i]],
            buffer: true,
            onload: function(){
                console.info('Loaded sfx',this._src);
            },
            onerror: function(){
                console.error('Load sfx err',this._src);
            }
        });

        sounds[SFX[i].split('.')[0]] = sound;
    }

    return sounds;
});