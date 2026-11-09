
import { useEffect, useRef } from "react";

// Original butterfly designs
const BUTTERFLIES = [
  {
    style: "watercolor",
    color: "#eab4c6",
    accent: "#c77d9c",
    size: 0.95,
    speed: 0.055,
    flap: 0.46,
  },
  {
    style: "watercolor",
    color: "#efc49e",
    accent: "#cb9269",
    size: 0.83,
    speed: 0.045,
    flap: 0.4,
  },
  {
    style: "realistic",
    color: "#9dc8e5",
    accent: "#4b83b2",
    size: 1.05,
    speed: 0.05,
    flap: 0.52,
  },
  {
    style: "realistic",
    color: "#c2b4e4",
    accent: "#8572b5",
    size: 0.9,
    speed: 0.04,
    flap: 0.43,
  },
  {
    style: "fairy",
    color: "#a7d8c2",
    accent: "#71ac98",
    size: 0.88,
    speed: 0.047,
    flap: 0.56,
  },
];

// Number of butterflies on each page
const PAGE_COUNTS = {
  home: { follow: 5, free: 5 },
  buecher: { follow: 0, free: 5 },
  projekte: { follow: 0, free: 4 },
  forschung: { follow: 0, free: 2 },
  about: { follow: 0, free: 2 },
  other: { follow: 0, free: 0 },
};

// Butterfly wing illustration
function ButterflyArt({ butterfly, id }) {
  const { style, color, accent } = butterfly;
  const gradientId = `butterfly-gradient-${id}`;

  return (
    <svg
      viewBox="0 0 120 100"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor="#fffdf7" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={accent} />
        </radialGradient>
      </defs>

      {[-1, 1].map((side) => (
        <g
          key={side}
          className={
            side === -1
              ? "clara-wing-left"
              : "clara-wing-right"
          }
        >
          <g
            transform={
              side === 1
                ? "translate(120 0) scale(-1 1)"
                : undefined
            }
          >
            <path
              d="M59 48 C40 8 10 4 8 27 C5 44 31 55 59 48Z"
              fill={`url(#${gradientId})`}
              stroke={accent}
              strokeWidth={style === "realistic" ? 1.8 : 0.9}
            />

            <path
              d="M59 50 C35 43 13 53 19 72 C27 91 49 72 59 50Z"
              fill={`url(#${gradientId})`}
              stroke={accent}
              strokeWidth={style === "realistic" ? 1.8 : 0.9}
            />

            <path
              d="M58 48 L17 23 M58 48 L12 36
                 M58 48 L29 47 M58 51 L29 70"
              fill="none"
              stroke={
                style === "realistic"
                  ? accent
                  : "#fffaf2"
              }
              strokeWidth={
                style === "realistic" ? 1.4 : 1.8
              }
              opacity="0.7"
            />

            {style === "realistic" && (
              <>
                <circle
                  cx="24"
                  cy="29"
                  r="7"
                  fill={accent}
                  opacity="0.55"
                />
                <circle
                  cx="24"
                  cy="29"
                  r="3.5"
                  fill="#fdf8e8"
                />
                <circle
                  cx="32"
                  cy="67"
                  r="4"
                  fill={accent}
                  opacity="0.6"
                />
                <path
                  d="M15 39 Q28 16 46 40"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.3"
                />
              </>
            )}

            {style === "watercolor" && (
              <>
                <ellipse
                  cx="28"
                  cy="30"
                  rx="15"
                  ry="12"
                  fill="#ffffff"
                  opacity="0.2"
                />
                <ellipse
                  cx="36"
                  cy="59"
                  rx="11"
                  ry="10"
                  fill="#fff6eb"
                  opacity="0.25"
                />
                <circle
                  cx="21"
                  cy="36"
                  r="3"
                  fill="#ffffff"
                  opacity="0.65"
                />
              </>
            )}

            {style === "fairy" && (
              <>
                <path
                  d="M56 44 Q26 -2 12 21"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  opacity="0.65"
                />
                <circle
                  cx="21"
                  cy="25"
                  r="4"
                  fill="#ffffff"
                  opacity="0.8"
                />
                <circle
                  cx="35"
                  cy="66"
                  r="3"
                  fill="#ffffff"
                  opacity="0.7"
                />
              </>
            )}
          </g>
        </g>
      ))}

      {/* Antennae */}
      <path
        d="M59 37 Q48 14 43 12 M61 37 Q72 14 77 12"
        fill="none"
        stroke="#65584e"
        strokeWidth="1.3"
      />

      <circle cx="43" cy="12" r="1.8" fill="#65584e" />
      <circle cx="77" cy="12" r="1.8" fill="#65584e" />

      {/* Body */}
      <ellipse
        cx="60"
        cy="51"
        rx="3.5"
        ry="21"
        fill="#65584e"
      />
      <ellipse
        cx="60"
        cy="36"
        rx="4.5"
        ry="6"
        fill="#75665d"
      />

      {/* Fairy sparkles */}
      {style === "fairy" && (
        <g className="clara-fairy-glitter">
          <circle cx="9" cy="12" r="2" fill="#ffffff" />
          <circle cx="110" cy="17" r="2" fill="#ffffff" />
          <path
            d="M15 80 v8 M11 84 h8
               M106 79 v8 M102 83 h8"
            stroke="#ffffff"
            strokeWidth="1.4"
          />
        </g>
      )}
    </svg>
  );
}

export default function Butterflies({ page = "home" }) {
  const refs = useRef([]);

  const counts = PAGE_COUNTS[page] || PAGE_COUNTS.other;

  // Five butterflies follow the mouse on the homepage.
  const followers = Array.from(
    { length: counts.follow },
    (_, i) => ({
      id: `follow-${i}`,
      mode: "follow",
      index: i,
      butterfly: BUTTERFLIES[i % BUTTERFLIES.length],
    })
  );

  // Smaller butterflies fly independently.
  const freeFlyers = Array.from(
    { length: counts.free },
    (_, i) => ({
      id: `free-${i}`,
      mode: "free",
      index: i,
      butterfly: BUTTERFLIES[(i + 2) % BUTTERFLIES.length],
    })
  );

  const items = [...followers, ...freeFlyers];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const finePointer = window.matchMedia("(pointer: fine)");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let mouseActive = false;
    let frame;

    const positions = items.map((item) => ({
      x:
        item.mode === "follow"
          ? mouseX
          : -100,
      y:
        item.mode === "follow"
          ? mouseY
          : window.innerHeight / 2,
    }));

    function onMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      mouseActive = true;
    }

    function onLeave() {
      mouseActive = false;
    }

    function animate(time) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      refs.current.forEach((element, i) => {
        if (!element) return;

        const item = items[i];
        const n = item.index;
        const b = item.butterfly;
        const position = positions[i];

        if (item.mode === "follow") {
          // Floating motion around the mouse
          const angle = time * 0.0005 + n * 1.2566;
          const radius = 45 + n * 18;

          const targetX =
            mouseX +
            Math.cos(angle) * radius +
            Math.sin(time * 0.0018 + n * 2) * 18;

          const targetY =
            mouseY +
            Math.sin(angle * 1.25) * (35 + n * 10) +
            Math.cos(time * 0.0016 + n) * 16;

          position.x +=
            (targetX - position.x) * b.speed;

          position.y +=
            (targetY - position.y) * b.speed;

          element.style.opacity =
            finePointer.matches && mouseActive
              ? "0.6"
              : "0";
        } else {
          // Independent slow flight across the screen
          const duration = 35000 + n * 8500;
          const progress =
            ((time + n * 9500) % duration) / duration;

          const reverse = n % 2 === 1;

          position.x = reverse
            ? width + 80 - progress * (width + 160)
            : -80 + progress * (width + 160);

          const baseY =
            height * (0.18 + n * 0.16);

          position.y =
            baseY +
            Math.sin(time * 0.00065 + n * 2.1) * 55 +
            Math.cos(time * 0.00031 + n) * 22;

          // Smooth fade in/out at screen edges
          const fade = Math.min(
            1,
            Math.max(0, position.x / 90),
            Math.max(0, (width - position.x) / 90)
          );

          element.style.opacity = String(0.3 * fade);
        }

        const rotation =
          Math.sin(time * 0.0012 + i * 1.9) * 17;

        const scale =
          item.mode === "follow"
            ? b.size
            : b.size * (0.55 + n * 0.06);

        element.style.transform = `
          translate3d(
            ${position.x}px,
            ${position.y}px,
            0
          )
          translate(-50%, -50%)
          rotate(${rotation}deg)
          scale(${scale})
        `;
      });

      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [page]);

  if (items.length === 0) return null;

  return (
    <>
      <div
        className="clara-butterfly-layer"
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`clara-butterfly clara-${item.mode}`}
            ref={(element) => {
              refs.current[i] = element;
            }}
            style={{
              width: 72,
              height: 60,
              "--flap": `${item.butterfly.flap}s`,
            }}
          >
            <ButterflyArt
              butterfly={item.butterfly}
              id={`${page}-${item.id}`}
            />
          </div>
        ))}
      </div>

      <style>{`
        .clara-butterfly-layer {
          position: fixed;
          inset: 0;
          z-index: 9999;
          overflow: hidden;
          pointer-events: none;
        }

        .clara-butterfly {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          pointer-events: none;
          will-change: transform, opacity;
          transition: opacity 0.5s ease;
        }

        .clara-butterfly svg {
          overflow: visible;
          filter: drop-shadow(
            0 2px 3px rgba(80, 70, 90, 0.12)
          );
        }

        .clara-wing-left,
        .clara-wing-right {
          transform-box: view-box;
          transform-origin: 50% 48%;
        }

        .clara-wing-left {
          animation: claraFlapLeft var(--flap)
            ease-in-out infinite alternate;
        }

        .clara-wing-right {
          animation: claraFlapRight var(--flap)
            ease-in-out infinite alternate;
        }

        @keyframes claraFlapLeft {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(65deg);
          }
        }

        @keyframes claraFlapRight {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(-65deg);
          }
        }

        .clara-fairy-glitter {
          animation: claraSparkle 2s
            ease-in-out infinite alternate;
        }

        @keyframes claraSparkle {
          from { opacity: 0.25; }
          to { opacity: 0.9; }
        }

        @media (prefers-reduced-motion: reduce) {
          .clara-butterfly-layer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
