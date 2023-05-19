import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cube
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.audio = this.experience.audio
        this.time = this.experience.time

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        this.rotation = {
            speed: {
                z: 0.005,
                x: 0,
                y: 0
            }
        }

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('cube')
            this.debugFolder
                .add(this.rotation.speed, 'x')
                .name('speedX')
                .min(0)
                .max(0.035)
                .step(0.001)
            this.debugFolder
                .add(this.rotation.speed, 'y')
                .name('speedY')
                .min(0)
                .max(0.035)
                .step(0.001)
            this.debugFolder
                .add(this.rotation.speed, 'z')
                .name('speedZ')
                .min(0)
                .max(0.035)
                .step(0.001)
        }
    }

    setGeometry()
    {
        this.geometry = new THREE.BoxGeometry(2, 2, 2)
    }

    setMaterial()
    {
        this.material = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            wireframe: true
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }

    update() {
        this.mesh.rotation.x += this.rotation.speed.x
        this.mesh.rotation.y += this.rotation.speed.y
        this.mesh.rotation.z += this.rotation.speed.z

        this.mesh.scale.set(this.audio.averageMidFrequencies, this.audio.averageMidFrequencies, this.audio.averageMidFrequencies)
    }
}