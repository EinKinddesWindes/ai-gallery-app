
import { useEffect, useRef } from "react";

export default function Butterflies() {
  const butterflies = useRef([]);

  useEffect(() => {
    // 마우스가 없는 기기와 애니메이션 감소 설정에서는 비활성화
    const pointer = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointer.matches || reduced.matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let active = false;
    let frame;

    const positions = [
      { x: mouseX, y: mouseY },
      { x: mouseX, y: mouseY },
    ];

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      active = true;
    }

    function onLeave() {
      active = false;
    }

    function animate(time) {
      butterflies.current.forEach((butterfly, i) => {
        if (!butterfly) return;

        const offsetX =
          Math.cos(time * 0.0018 + i * 2.8) * (22 + i * 13);

        const offsetY =
          Math.sin(time * 0.0023 + i * 3.1) * (18 + i * 9);

        const targetX = mouseX + offsetX + (i === 0 ? 22 : -28);
        const targetY = mouseY + offsetY - 25;

        const speed = i === 0 ? 0.075 : 0.045;

        positions[i].x +=
          (targetX - positions[i].x) * speed;

        positions[i].y +=
          (targetY - positions[i].y) * speed;

        const rotation =
          Math.sin(time * 0.0015 + i) * 16;

        butterfly.style.opacity = active ? "1" : "0";

        butterfly.style.transform = `
          translate3d(
            ${positions[i].x}px,
            ${positions[i].y}px,
            0
          )
          rotate(${rotation}deg)
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
      <div className="clara-butterfly-layer" aria-hidden="true">
        {[0, 1].map((i) => (
          <div
            key={i}
            ref={(el) => {
              butterflies.current[i] = el;
            }}
            className={`clara-butterfly butterfly-${i}`}
          >
            <div className="butterfly-wings">
              <span className="wing left-wing" />
              <span className="butterfly-body" />
              <span className="wing right-wing" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .clara-butterfly-layer {
          position: fixed;
          inset: 0;
          z-index: 999;
          pointer-events: none;
          overflow: hidden;
        }

        .clara-butterfly {
          position: absolute;
          top: 0;
          left: 0;
          width: 38px;
          height: 34px;
          opacity: 0;
          pointer-events: none;
          will-change: transform;
          transition: opacity 0.4s ease;
        }

        .butterfly-1 {
          width: 29px;
          height: 27px;
        }

        .butterfly-wings {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 180px;
        }

        .wing {
          width: 45%;
          height: 75%;
          background: linear-gradient(
            135deg,
            #f6d59a 0%,
            #e9a96d 50%,
            #c87f60 100%
          );
          border: 1px solid rgba(100, 75, 55, 0.35);
          border-radius: 80% 25% 75% 35%;
          box-shadow: inset 2px 2px 4px rgba(255,255,255,0.45);
        }

        .left-wing {
          transform-origin: right center;
          animation: flapLeft 0.34s ease-in-out infinite alternate;
        }

        .right-wing {
          transform-origin: left center;
          animation: flapRight 0.34s ease-in-out infinite alternate;
          border-radius: 25% 80% 35% 75%;
        }

        .butterfly-body {
          position: absolute;
          width: 3px;
          height: 17px;
          background: #5e5548;
          border-radius: 50%;
          z-index: 2;
        }

        .butterfly-1 .wing {
          background: linear-gradient(
            135deg,
            #c5d9c7,
            #8fb8a3,
            #6d9a91
          );
        }

        .butterfly-1 .left-wing,
        .butterfly-1 .right-wing {
          animation-duration: 0.27s;
        }

        @keyframes flapLeft {
          from { transform: rotateY(10deg) rotate(-12deg); }
          to { transform: rotateY(75deg) rotate(-25deg); }
        }

        @keyframes flapRight {
          from { transform: rotateY(-10deg) rotate(12deg); }
          to { transform: rotateY(-75deg) rotate(25deg); }
        }

        @media (pointer: coarse),
               (prefers-reduced-motion: reduce) {
          .clara-butterfly-layer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
