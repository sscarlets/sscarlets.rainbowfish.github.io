function goToScene(sceneNumber) {
  const scenes = document.querySelectorAll('.scene');
  scenes.forEach(scene => scene.classList.add('hidden'));

  const nextScene = document.getElementById(`scene${sceneNumber}`);
  nextScene.classList.remove('hidden');
}