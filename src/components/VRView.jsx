import { onMount } from 'solid-js';
import * as THREE from 'three';

export default function VRView() {
  let canvasRef;

  onMount(() => {
    // Initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // Initialize camera
    const aspect = canvasRef.clientWidth / canvasRef.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 5;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
    canvasRef.appendChild(renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      const newAspect = canvasRef.clientWidth / canvasRef.clientHeight;
      camera.aspect = newAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
    });
  });

  return (
    <canvas ref={el => canvasRef = el} class="w-full h-full"></canvas>
  );
}