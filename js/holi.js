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

  document.getElementById('introBtn').addEventListener('mouseenter', () => {

    const auntyEl = document.querySelector('#aunty');
    const boyEl = document.querySelector('#boy');
    const couple1El = document.querySelector('#couple1');
    const coupleJumpingEl = document.querySelector('#couple-jumping');
    const couple2El = document.querySelector('#couple2');
    const familyEl = document.querySelector('#family');
    const guy1El = document.querySelector('#guy1');
    const girl1El = document.querySelector('#girl1');
    const excitedEl = document.querySelector('#excited');
    const endBtn = document.querySelector('#endBtn');


    const explosion = document.querySelector('#explosion');
    
    auntyEl.addEventListener('mouseenter', () => {
      setFogColor('#22B2E7');
    });
    
    boyEl.addEventListener('mouseenter', () => {
      setFogColor('#F51367');    
    });
    
    couple1El.addEventListener('mouseenter', () => {
      setFogColor('#BD4BD7');    
    });
    
    coupleJumpingEl.addEventListener('mouseenter', () => {
      setFogColor('#9FE23B');    
    });
    
    couple2El.addEventListener('mouseenter', () => {
      setFogColor('#26D1AA');    
    });
    
    familyEl.addEventListener('mouseenter', () => {
      setFogColor('#F96825');    
    });
    
    guy1El.addEventListener('mouseenter', () => {
      setFogColor('#FCB32C');    
    });
    
    girl1El.addEventListener('mouseenter', () => {
      setFogColor('#B4EFFB');    
    });

    endBtn.addEventListener('mouseenter', () => {
      console.log("exit scene");
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
          explosion.setAttribute('scale', {x: scales.scaleX, y: scales.scaleY, z: scales.scaleZ});
        }
      });   
    });
    
  });

});
