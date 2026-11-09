
import { useEffect, useRef } from "react";

const butterflies = [
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

function ButterflyArt({ butterfly, index }) {
  const { style, color, accent } = butterfly;
  const gradientId = `butterfly-gradient-${index}`;

  return (
    <svg viewBox="0 0 120 100" width="100%" height="100%">
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
          className={side === -1 ? "wing-left" : "wing-right"}
        >
          <g transform={side === 1 ? "translate(120 0) scale(-1 1)" : ""}>
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
              d="M58 48 L17 23 M58 48 L12 36 M58 48 L29 47 M58 51 L29 70"
              fill="none"
              stroke={style === "realistic" ? accent : "#fffaf2"}
              strokeWidth={style === "realistic" ? 1.4 : 1.8}
              opacity="0.7"
            />

            {style === "realistic" && (
              <>
                <circle cx="24" cy="29" r="7" fill={accent} opacity="0.55" />
                <circle cx="24" cy="29" r="3.5" fill="#fdf8e8" />
                <circle cx="32" cy="67" r="4" fill={accent} opacity="0.6" />
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
                <ellipse cx="28" cy="30" rx="15" ry="12"
                  fill="#ffffff" opacity="0.2" />
                <ellipse cx="36" cy="59" rx="11" ry="10"
                  fill="#fff6eb" opacity="0.25" />
                <circle cx="21" cy="36" r="3" fill="#ffffff" opacity="0.65" />
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
                <circle cx="21" cy="25" r="4" fill="#ffffff" opacity="0.8" />
                <circle cx="35" cy="66" r="3" fill="#ffffff" opacity="0.7" />
              </>
            )}
          </g>
        </g>
      ))}

      <path
        d="M59 37 Q48 14 43 12 M61 37 Q72 14 77 12"
        fill="none"
        stroke="#65584e"
        strokeWidth="1.3"
      />
      <circle cx="43" cy="12" r="1.8" fill="#65584e" />
      <circle cx="77" cy="12" r="1.8" fill="#65584e" />
      <ellipse cx="60" cy="51" rx="3.5" ry="21" fill="#65584e" />
      <ellipse cx="60" cy="36" rx="4.5" ry="6" fill="#75665d" />

      {style === "fairy" && (
        <g className="fairy-glitter">
          <circle cx="9" cy="12" r="2" fill="#ffffff" />
          <circle cx="110" cy="17" r="2" fill="#ffffff" />
          <path d="M15 80 v8 M11 84 h8 M106 79 v8 M102 83 h8"
            stroke="#ffffff" strokeWidth="1.4" />
        </g>
      )}
    </svg>
  );
}

export default function Butterflies() {
  const refs = useRef([]);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let active = false;
    let frame;

    const positions = butterflies.map(() => ({
      x: mouseX,
      y: mouseY,
    }));

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      active = true;
    };

    const onLeave = () => {
      active = false;
    };

    function animate(time) {
      refs.current.forEach((element, i) => {
        if (!element) return;

        const b = butterflies[i];
        const angle = time * 0.0005 + i * 1.2566;
        const radius = 45 + i * 18;

        const targetX =
          mouseX +
          Math.cos(angle) * radius +
          Math.sin(time * 0.0018 + i * 2) * 18;

        const targetY =
          mouseY +
          Math.sin(angle * 1.25) * (35 + i * 10) +
          Math.cos(time * 0.0016 + i) * 16;

        positions[i].x += (targetX - positions[i].x) * b.speed;
        positions[i].y += (targetY - positions[i].y) * b.speed;

        const rotation = Math.sin(time * 0.0013 + i * 2) * 18;

        element.style.opacity = active ? "0.6" : "0";
        element.style.transform = `
          translate3d(${positions[i].x}px, ${positions[i].y}px, 0)
          translate(-50%, -50%)
          rotate(${rotation}deg)
          scale(${b.size})
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
  }, []);

  return (
    <>
      <div className="butterfly-layer" aria-hidden="true">
        {butterflies.map((b, i) => (
          <div
            key={i}
            className={`butterfly butterfly-${b.style}`}
            ref={(element) => {
              refs.current[i] = element;
            }}
            style={{
              width: 72,
              height: 60,
              "--flap": `${b.flap}s`,
            }}
          >
            <ButterflyArt butterfly={b} index={i} />
          </div>
        ))}
      </div>

      <style>{`
        .butterfly-layer {
          position: fixed;
          inset: 0;
          z-index: 9999;
          overflow: hidden;
          pointer-events: none;
        }

        .butterfly {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          pointer-events: none;
          will-change: transform;
          transition: opacity 0.5s ease;
        }

        .butterfly svg {
          overflow: visible;
          filter: drop-shadow(0 2px 3px rgba(80, 70, 90, 0.12));
        }

        .wing-left,
        .wing-right {
          transform-box: view-box;
          transform-origin: 50% 48%;
        }

        .wing-left {
          animation: butterflyFlapLeft var(--flap)
            ease-in-out infinite alternate;
        }

        .wing-right {
          animation: butterflyFlapRight var(--flap)
            ease-in-out infinite alternate;
        }

        @keyframes butterflyFlapLeft {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(65deg); }
        }

        @keyframes butterflyFlapRight {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-65deg); }
        }

        .butterfly-fairy {
          filter: drop-shadow(0 0 7px rgba(180, 240, 210, 0.55));
        }

        .fairy-glitter {
          animation: fairySparkle 2s ease-in-out infinite alternate;
        }

        @keyframes fairySparkle {
          from { opacity: 0.25; }
          to { opacity: 0.9; }
        }

        @media (pointer: coarse),
               (prefers-reduced-motion: reduce) {
          .butterfly-layer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
