
document.addEventListener("DOMContentLoaded", () => {

  const sceneEl = document.querySelector('a-scene');
  const auntyEl = document.querySelector('#aunty');
  const boyEl = document.querySelector('#boy');
  const couple1El = document.querySelector('#couple1');
  const coupleJumpingEl = document.querySelector('#couple-jumping');
  const couple2El = document.querySelector('#couple2');
  const familyEl = document.querySelector('#family');
  const guy1El = document.querySelector('#guy1');
  const girl1El = document.querySelector('#girl1');
  const excitedEl = document.querySelector('#excited');

  auntyEl.addEventListener('mouseenter', () => {
    setFogColor('#22B2E7');
  });

  boyEl.addEventListener('mouseenter', () => {
    setFogColor('#F51367');    
  });

  couple1El.addEventListener('mouseenter', () => {
    setFogColor('#FCB32C');    
  });

  coupleJumpingEl.addEventListener('mouseenter', () => {
    setFogColor('#F96825');    
  });

  couple2El.addEventListener('mouseenter', () => {
    setFogColor('#9FE23B');    
  });

  familyEl.addEventListener('mouseenter', () => {
    setFogColor('#26D1AA');    
  });

  guy1El.addEventListener('mouseenter', () => {
    setFogColor('#BD4BD7');    
  });

  girl1El.addEventListener('mouseenter', () => {
    setFogColor('#A61265');    
  });

  excitedEl.addEventListener('mouseenter', () => {
    setFogColor('#B4EFFB');    
  });

  const setFogColor = (color) => {
    sceneEl.setAttribute('fog', {
      type: 'linear',
      color,
      far: 6,
      near: 0
    });
    sceneEl.emit('showFog');
  }
});
