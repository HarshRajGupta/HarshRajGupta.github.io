import { memo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main) => {
  await loadFull(main);
};
const particlesLoaded = () => {
  console.log("Welcome");
};

function Background() {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          opacity: 0,
        },
        backgroundMask: {
          enable: false,
        },
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: ["attract"],
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              pauseOnStop: true,
              distance: 256,
              duration: 0.1,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 23,
              speed: 1.2,
            },
            bounce: {
              distance: 200,
            },
            repulse: {
              distance: 256,
              duration: 0.4,
              factor: 1,
              speed: 1,
              maxSpeed: 69,
              easing: "ease-out-quad",
              divs: {
                distance: 206,
                duration: 0.4,
                factor: 1,
                speed: 1,
                maxSpeed: 69,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: true,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            // value: "#ff0000",
            value: '#000',
            // value: `#5cb6f9`,
          },
          destroy: {
            mode: "none",
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
            },
          },
          gradient: [],
          groups: {},
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          links: {
            // blink: true,
            color: {
            //   value: "random",
              // value: '#5cb6f9',
              value: '#000'
            },
            consent: false,
            distance: 100,
            enable: true,
            frequency: 1,
            opacity: 1,
            shadow: {
              blur: 8,
              color: {
                value: "#5ae2f9",
              },
              enable: true,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            center: {
              x: 50,
              y: 50,
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            value: 69,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.3,
            },
            value: {
              min: 0.3,
              max: 0.8,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 0.5,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 0.3,
            },
          },
          orbit: {
            enable: false,
            width: 1,
          },
          reduceDuplicates: false,
          repulse: {
            enabled: false,
          },
          roll: {
            enable: false,
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shadow: {
            blur: 8,
            color: {
              value: "#fff",
            },
            enable: true,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 3,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 1,
            },
          },
          stroke: {
            width: 0,
            color: {
              value: "#5ae2f9"
            },
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: 50,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        style: {},
        themes: [],
        zLayers: 100,
        emitters: [],
      }}
    />
  );
}

export default memo(Background);
