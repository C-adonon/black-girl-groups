import * as THREE from "three";
import Experience from "../Experience.js";

export default class Particles {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.audio = this.experience.audio;

    this.setParticles();

    // Ajoutez la propriété rotation
    this.rotation = {
      speed: {
        x: 0.001,
        y: 0.001,
        z: 0.001,
      },
    };
  }

  setParticles() {
    const count = 2000;
    const positionsDisk = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const radius = 4;
    const innerRadius = 1;

    function getRandomPointOnDisk(minRadius, maxRadius) {
      const radiusDiff = maxRadius - minRadius;
      const numCircles = Math.floor(Math.random() * 10) + 40;
      const radiusStep = radiusDiff / numCircles;
      const numPointsPerCircle = Math.floor(Math.random() * 10) + 5;
      const angleStep = (Math.PI * 2) / numPointsPerCircle;

      const angle = Math.random() * Math.PI * 2;
      const radius = minRadius + Math.random() * radiusDiff;

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return new THREE.Vector3(x, y, 0);
    }

    for (let i = 0; i < positionsDisk.length; i += 3) {
      const position = getRandomPointOnDisk(innerRadius, radius);
      positionsDisk[i] = position.x;
      positionsDisk[i + 1] = position.y;

      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    // Geometry
    const particulesGeometry = new THREE.BufferGeometry();
    

    particulesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionsDisk, 3)
    );

    particulesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Material
    const particulesMaterial = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      //   sizeAttenuation: true,
      //   color: "white",
    });

    // Utiliser texture loader pour loader 3.png
    // const textureLoader = new THREE.TextureLoader();
    // const particulesTexture = textureLoader.load("/favicon-1.png");
    // particulesMaterial.map = particulesTexture;
    // particulesMaterial.transparent = true;
    // particulesMaterial.blending = THREE.AdditiveBlending;
    // particulesMaterial.depthWrite = false;

    this.particules = new THREE.Points(particulesGeometry, particulesMaterial);

    // group the particles
    this.particulesGroup = new THREE.Group();
    this.particulesGroup.add(this.particules);

    // Position the group
    this.particulesGroup.translateX(-0.555);
    this.particulesGroup.translateY(-0.15);

    // Add the group to the scene
    this.scene.add(this.particulesGroup);
  }

  // Ajoutez la méthode update
  update() {
    // Rotation constante autour de l'axe x
    this.particulesGroup.rotation.z += 0.003;

    // scale en fonction de l'audio
    this.particulesGroup.scale.set(
      // this.audio.averageHighFrequencies,
      // this.audio.averageMidFrequencies,
      this.audio.averageLowFrequencies,
      this.audio.averageLowFrequencies,
      this.audio.averageLowFrequencies,
    );
  }
}
