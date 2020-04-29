document.addEventListener("DOMContentLoaded", () => {
  const sceneEl = document.querySelector('a-scene');

  const setFogColor = (color) => {
    sceneEl.setAttribute('fog', {
      type: 'linear',
      color,
      far: 6,
      near: 0
    });
    sceneEl.emit('showFog');
  };

  const bgSong = document.querySelector('#bgSong');
  const intro = document.querySelector('#intro');
  const main = document.querySelector('#main');
  const endBtn = document.querySelector('#endBtn');


  document.getElementById('introBtn').addEventListener('click', () => {

    const auntyEl = document.querySelector('#aunty');
    const boyEl = document.querySelector('#boy');
    const couple1El = document.querySelector('#couple1');
    const coupleJumpingEl = document.querySelector('#couple-jumping');
    const couple2El = document.querySelector('#couple2');
    const familyEl = document.querySelector('#family');
    const guy1El = document.querySelector('#guy1');
    const girl1El = document.querySelector('#girl1');
    const excitedEl = document.querySelector('#excited');
    // const SoundBtn = document.querySelector('#introBtn');

    const explosion1 = document.querySelector('#explosion-1');
    const explosion2 = document.querySelector('#explosion-2');
    const explosion3 = document.querySelector('#explosion-3');
    const explosion4 = document.querySelector('#explosion-4');
    const explosion5 = document.querySelector('#explosion-5');
    const explosion6 = document.querySelector('#explosion-6');
    const explosion7 = document.querySelector('#explosion-7');
    const explosion8 = document.querySelector('#explosion-8');
    const explosion9 = document.querySelector('#explosion-9');

    bgSong.play();
    intro.setAttribute('visible', false);
    main.setAttribute('visible', true);
    endBtn.setAttribute('visible', true);


    auntyEl.addEventListener('mouseenter', () => {
      setFogColor('#22B2E7');
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1.5,
        scaleY: 1.5,
        scaleX: 1.5,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion1.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });
    });
    
    boyEl.addEventListener('mouseenter', () => {
      setFogColor('#F51367');    
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1.2,
        scaleY: 1.2,
        scaleX: 1.2,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion2.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });
    });
    
    couple1El.addEventListener('mouseenter', () => {
      setFogColor('#BD4BD7'); 
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1.5,
        scaleY: 1.5,
        scaleX: 1.5,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion3.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });   
    });
    
    coupleJumpingEl.addEventListener('mouseenter', () => {
      setFogColor('#9FE23B');   
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1.2,
        scaleY: 1.2,
        scaleX: 1.2,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion4.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      }); 
    });
    
    couple2El.addEventListener('mouseenter', () => {
      setFogColor('#26D1AA');    
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1,
        scaleY: 1,
        scaleX: 1,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion5.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });
    });
    
    familyEl.addEventListener('mouseenter', () => {
      setFogColor('#F96825');  
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1,
        scaleY: 1,
        scaleX: 1,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion6.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });  
    });
    
    guy1El.addEventListener('mouseenter', () => {
      setFogColor('#FCB32C');   
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1,
        scaleY: 1,
        scaleX: 1,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion7.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      }); 
    });
    
    girl1El.addEventListener('mouseenter', () => {
      setFogColor('#B4EFFB');   
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1.5,
        scaleY: 1.5,
        scaleX: 1.5,
        loop: true,
        direction: 'alternate',
        update: () => {
          explosion8.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });  
    });

    endBtn.addEventListener('mouseenter', () => {
      console.log("exit scene");

      setTimeout(function () {
        endBtn.setAttribute('visible', false);
        bgSong.stopSound();
      }, 4000);


    });

    excitedEl.addEventListener('mouseenter', () => {
      setFogColor('#A61265'); 
      var scales = {
        'scaleX': 0,
        'scaleY': 0,
        'scaleX': 0
      }

      AFRAME.anime({
        targets: scales,
        scaleX: 1,
        scaleY: 1,
        scaleX: 1,
        loop: true,
        direction: 'alternate',
        update: function(){
          explosion9.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });   
    });
    
  });

});
