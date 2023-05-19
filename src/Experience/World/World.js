import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Particules from "./Particules.js";

export default class World {
  constructor() {
    
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.interface = this.experience.interface;

    this.interface.on("startExperience", () => {
      this.particules = new Particules();
      this.environment = new Environment();
    });
  }

  stop() {
    this.particules.stop();
    this.environment.stop();
  }

  update() {
    if (this.particules) this.particules.update();
  }
}
