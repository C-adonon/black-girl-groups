import EventEmitter from "./Utils/EventEmitter.js";
import Experience from "./Experience.js";

export default class Interface extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.$playbtn = document.querySelector("#play-btn");
    // console.log(this.$playbtn);
    this.displayPlayBtn = false;

  }

  onClickBtn() {
    if (this.experience.resources.toLoad === this.experience.resources.loaded) {
      this.trigger("startExperience");
      console.log("startExperience in interface");
    } else {
      this.experience.resources.on("ready", () => {
        this.trigger("startExperience");
        console.log("startExperience in interface");
      });
    }
  }


}
