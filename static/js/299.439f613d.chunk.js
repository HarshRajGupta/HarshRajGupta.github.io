"use strict";
(self.webpackChunkHarshRajGupta = self.webpackChunkHarshRajGupta || []).push([
  [299],
  {
    7299: function (e, a, n) {
      n.r(a);
      var t = n(4165),
        o = n(5861),
        l = n(2791),
        i = n(7693),
        r = n(4e3),
        s = n(184),
        u = (function () {
          var e = (0, o.Z)(
            (0, t.Z)().mark(function e(a) {
              return (0, t.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), (0, r.R)(a);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })(),
        c = function (e) {
          console.log("Welcome");
        };
      function m() {
        return (0, s.jsx)(i.Z, {
          id: "tsparticles",
          init: u,
          loaded: c,
          options: {
            autoPlay: !0,
            background: {
              color: { value: "" },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: { color: { value: "#fff" }, opacity: 0.1 },
              enable: !1,
            },
            fullScreen: { enable: !0, zIndex: 0 },
            detectRetina: !0,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: { enable: !0, mode: "repulse" },
                onHover: {
                  enable: !0,
                  mode: ["attract"],
                  parallax: { enable: !1, force: 2, smooth: 10 },
                },
                resize: !0,
              },
              modes: {
                attract: {
                  pauseOnStop: !0,
                  distance: 256,
                  duration: 0.1,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 23,
                  speed: 1.2,
                },
                bounce: { distance: 200 },
                repulse: {
                  distance: 250,
                  duration: 0.4,
                  factor: 100,
                  speed: 5,
                  maxSpeed: 150,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: [],
                  },
                },
                trail: {
                  delay: 0.005,
                  pauseOnStop: !0,
                  quantity: 5,
                  particles: {
                    color: {
                      value: "#ff0000",
                      animation: { enable: !0, speed: 400, sync: !0 },
                    },
                    collisions: {
                      enable: !0,
                      bounce: {
                        horizontal: { random: {} },
                        vertical: { random: {} },
                      },
                      overlap: {},
                    },
                    links: { enable: !1, shadow: {}, triangles: {} },
                    move: {
                      outModes: { default: "destroy" },
                      speed: 1,
                      angle: {},
                      attract: { rotate: {} },
                      distance: {},
                      gravity: {},
                      path: { delay: { random: {} } },
                      trail: {},
                    },
                    size: {
                      value: 3,
                      animation: {
                        enable: !0,
                        speed: 5,
                        minimumValue: 1,
                        sync: !0,
                        startValue: "min",
                        destroy: "max",
                      },
                      random: {},
                    },
                    bounce: {
                      horizontal: { random: {} },
                      vertical: { random: {} },
                    },
                    destroy: {
                      split: { factor: { random: {} }, rate: { random: {} } },
                    },
                    life: { delay: { random: {} }, duration: { random: {} } },
                    number: { density: {} },
                    opacity: { animation: {}, random: {} },
                    roll: { darken: {}, enlighten: {} },
                    rotate: { animation: {} },
                    shadow: { offset: {} },
                    shape: {},
                    stroke: {
                      color: {
                        value: "",
                        animation: {
                          count: 0,
                          enable: !1,
                          offset: { max: 0, min: 0 },
                          speed: 0,
                          sync: !1,
                        },
                      },
                    },
                    tilt: { animation: {} },
                    twinkle: { lines: {}, particles: {} },
                    wobble: {},
                  },
                },
              },
            },
            manualParticles: [],
            motion: { disable: !1, reduce: { factor: 4, value: !0 } },
            particles: {
              bounce: {
                horizontal: {
                  random: { enable: !1, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: !1, minimumValue: 0.1 },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: { enable: !1, minimumValue: 0.1 },
                    value: 1,
                  },
                  vertical: {
                    random: { enable: !1, minimumValue: 0.1 },
                    value: 1,
                  },
                },
                enable: !0,
                mode: "bounce",
                overlap: { enable: !0, retries: 0 },
              },
              color: {
                value: "#5cb6f9",
                animation: {
                  h: { count: 0, enable: !0, offset: 0, speed: 50, sync: !1 },
                  s: { count: 0, enable: !0, offset: 0, speed: 1, sync: !0 },
                  l: { count: 0, enable: !0, offset: 0, speed: 1, sync: !0 },
                },
              },
              destroy: {
                mode: "none",
                split: {
                  count: 1,
                  factor: { random: { enable: !1, minimumValue: 0 }, value: 3 },
                  rate: {
                    random: { enable: !1, minimumValue: 0 },
                    value: { min: 4, max: 9 },
                  },
                  sizeOffset: !0,
                },
              },
              gradient: [],
              groups: {},
              life: {
                count: 0,
                delay: {
                  random: { enable: !1, minimumValue: 0 },
                  value: 0,
                  sync: !1,
                },
                duration: {
                  random: { enable: !1, minimumValue: 1e-4 },
                  value: 0,
                  sync: !1,
                },
              },
              links: {
                color: { value: "random" },
                consent: !1,
                distance: 100,
                enable: !0,
                frequency: 1,
                opacity: 1,
                shadow: { blur: 8, color: { value: "#fff" }, enable: !0 },
                triangles: { enable: !1, frequency: 1 },
                width: 1,
                warp: !1,
              },
              move: {
                angle: { offset: 0, value: 90 },
                attract: {
                  distance: 200,
                  enable: !1,
                  rotate: { x: 3e3, y: 3e3 },
                },
                center: { x: 50, y: 50, radius: 0 },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: !0,
                gravity: {
                  acceleration: 9.81,
                  enable: !1,
                  inverse: !1,
                  maxSpeed: 50,
                },
                path: {
                  clamp: !0,
                  delay: { random: { enable: !1, minimumValue: 0 }, value: 0 },
                  enable: !1,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: !1,
                size: !1,
                speed: 2,
                spin: { acceleration: 0, enable: !1 },
                straight: !1,
                trail: {
                  enable: !1,
                  length: 10,
                  fillColor: { value: "#000000" },
                },
                vibrate: !1,
                warp: !1,
              },
              number: {
                density: { enable: !0, area: 1536, factor: 512 },
                limit: 100,
              },
              opacity: {
                random: { enable: !0, minimumValue: 0.3 },
                value: { min: 0.3, max: 0.8 },
                animation: {
                  count: 0,
                  enable: !0,
                  speed: 0.5,
                  sync: !1,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.3,
                },
              },
              orbit: {
                animation: { count: 0, enable: !1, speed: 1, sync: !1 },
                enable: !1,
                opacity: 1,
                rotation: {
                  random: { enable: !1, minimumValue: 0 },
                  value: 45,
                },
                width: 1,
              },
              reduceDuplicates: !1,
              repulse: {
                random: { enable: !1, minimumValue: 0 },
                value: 0,
                enabled: !1,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
              roll: {
                darken: { enable: !1, value: 0 },
                enable: !1,
                enlighten: { enable: !1, value: 0 },
                mode: "vertical",
                speed: 25,
              },
              rotate: {
                random: { enable: !1, minimumValue: 0 },
                value: 0,
                animation: { enable: !1, speed: 0, sync: !1 },
                direction: "clockwise",
                path: !1,
              },
              shadow: {
                blur: 8,
                color: { value: "#fff" },
                enable: !0,
                offset: { x: 0, y: 0 },
              },
              shape: { options: {}, type: "circle" },
              size: {
                random: { enable: !0, minimumValue: 1 },
                value: { min: 1, max: 3 },
                animation: {
                  count: 0,
                  enable: !0,
                  speed: 3,
                  sync: !1,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 1,
                },
              },
              stroke: {
                width: 0,
                color: {
                  value: "",
                  animation: {
                    h: { count: 0, enable: !1, offset: 0, speed: 0, sync: !1 },
                    s: { count: 0, enable: !1, offset: 0, speed: 1, sync: !0 },
                    l: { count: 0, enable: !1, offset: 0, speed: 1, sync: !0 },
                  },
                },
              },
              tilt: {
                random: { enable: !1, minimumValue: 0 },
                value: 0,
                animation: { enable: !1, speed: 0, sync: !1 },
                direction: "clockwise",
                enable: !1,
              },
              twinkle: {
                lines: { enable: !1, frequency: 0.05, opacity: 1 },
                particles: { enable: !1, frequency: 0.05, opacity: 1 },
              },
              wobble: { distance: 5, enable: !1, speed: 50 },
              zIndex: {
                random: { enable: !1, minimumValue: 0 },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
            },
            pauseOnBlur: !0,
            pauseOnOutsideViewport: !0,
            responsive: [],
            style: {},
            themes: [],
            zLayers: 100,
            emitters: [],
          },
        });
      }
      a.default = (0, l.memo)(m);
    },
  },
]);
//# sourceMappingURL=299.439f613d.chunk.js.map
