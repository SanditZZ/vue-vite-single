// import { loadFull } from "tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

export const particlesInit = async (engine: any) => {
  await loadFireflyPreset(engine);
};

export const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};


export const particlesConfig = {
  particles: {
    number: {
      limit: 10,
    },
    move: {
      speed: .4,
    },
    opacity: {
      value: 0.1, // Opacity of the default emitted particles
      random: true, // Whether to randomize the opacity
      animation: {
        enable: true,
        speed: 2, // Opacity animation speed in seconds
        minimumValue: 0.4, // Minimum opacity value during animation
        sync: false,
      },
    },
    life: {
      count: 1, // Number of instances that live together
      duration: 2000, // Time in milliseconds
    },
    emitters: {
      life: 1, // Time in seconds that the emitter will keep emitting particles
      rate: {
        delay: 1000, // Delay in seconds before emitting particles after mouse move
        quantity: 1, // Number of particles emitted per frame
      },
    },
    size: {
      value: 8, // Size of the emitted particles
      random: true, // Whether to randomize the size
    },
    spread: 100, // Spread of the emitted particles in degrees
    overlapping: {
      enable: true,
      mode: 'blur',
      opacity: 0.3,
    },
  },

  background: {
    color: {
      value: 'transparent'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
        size: {
          value: 200, // Size of the larger emitted particles on click
          random: true, // Whether to randomize the size
        },
      },
    }
  },
  detectRetina: true,
  preset: "firefly",
}