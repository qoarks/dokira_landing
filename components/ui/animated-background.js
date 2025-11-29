"use client";

import { memo, useEffect, useRef, useState, useCallback } from "react";
import styles from "./animated-background.module.css";

const MESH_CONFIG = {
  GRID_SIZE: 40,
  LINE_COLOR: "var(--gray-3)",
  LINE_WIDTH: 1,
  DOT_MIN_RADIUS: 0.1,
  DOT_MAX_RADIUS: 6,
  DOT_COLOR: "var(--violet-5)",
  DOT_OPACITY: 1,
  INFLUENCE_DISTANCE: 200,
  GROW_DURATION: "0.15s",
  SHRINK_DURATION: "2.6s",
  GROW_EASING: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  SHRINK_EASING: "cubic-bezier(0.4, 0, 0.2, 1)",
};

const AnimatedBackground = memo(({ variant = "lines" }) => {
  const containerRef = useRef(null);
  const dotsRef = useRef(new Map());
  const rafRef = useRef();
  const [gridPoints, setGridPoints] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (variant !== "mesh") return;

    const updateGridPoints = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      setDimensions({ width, height });

      const points = [];
      for (let x = 0; x <= width; x += MESH_CONFIG.GRID_SIZE) {
        for (let y = 0; y <= height; y += MESH_CONFIG.GRID_SIZE) {
          points.push({ x, y, id: `${x}-${y}` });
        }
      }
      setGridPoints(points);
    };

    updateGridPoints();

    const handleResize = () => {
      updateGridPoints();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [variant]);

  const updateDots = useCallback((mouseX, mouseY) => {
    dotsRef.current.forEach((rect, id) => {
      const [x, y] = id.split("-").map(Number);
      const distance = Math.sqrt(
        Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)
      );

      let radius;
      let transition;
      let opacity;

      if (distance > MESH_CONFIG.INFLUENCE_DISTANCE) {
        radius = MESH_CONFIG.DOT_MIN_RADIUS;
        transition = `width ${MESH_CONFIG.SHRINK_DURATION} ${MESH_CONFIG.SHRINK_EASING}, height ${MESH_CONFIG.SHRINK_DURATION} ${MESH_CONFIG.SHRINK_EASING}, x ${MESH_CONFIG.SHRINK_DURATION} ${MESH_CONFIG.SHRINK_EASING}, y ${MESH_CONFIG.SHRINK_DURATION} ${MESH_CONFIG.SHRINK_EASING}`;
        opacity = MESH_CONFIG.DOT_OPACITY;
      } else {
        const ratio = 1 - distance / MESH_CONFIG.INFLUENCE_DISTANCE;
        const eased = ratio * ratio * (3 - 2 * ratio);
        radius =
          MESH_CONFIG.DOT_MIN_RADIUS +
          eased * (MESH_CONFIG.DOT_MAX_RADIUS - MESH_CONFIG.DOT_MIN_RADIUS);
        opacity =
          MESH_CONFIG.DOT_OPACITY + eased * (1 - MESH_CONFIG.DOT_OPACITY);
        transition = `width ${MESH_CONFIG.GROW_DURATION} ${MESH_CONFIG.GROW_EASING}, height ${MESH_CONFIG.GROW_DURATION} ${MESH_CONFIG.GROW_EASING}, x ${MESH_CONFIG.GROW_DURATION} ${MESH_CONFIG.GROW_EASING}, y ${MESH_CONFIG.GROW_DURATION} ${MESH_CONFIG.GROW_EASING}`;
      }

      const size = radius * 2;
      rect.setAttribute("width", size.toString());
      rect.setAttribute("height", size.toString());
      rect.setAttribute("x", (x - radius).toString());
      rect.setAttribute("y", (y - radius).toString());
      rect.style.transition = transition;
      rect.style.opacity = opacity.toString();
    });
  }, []);

  useEffect(() => {
    if (variant !== "mesh") return;

    const handleMouseMove = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        updateDots(e.clientX, e.clientY);
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        updateDots(-1000, -1000);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [variant, updateDots]);

  const meshDots = gridPoints.map(({ x, y, id }) => {
    const size = MESH_CONFIG.DOT_MIN_RADIUS * 2;
    return (
      <rect
        key={id}
        ref={(el) => {
          if (el) {
            dotsRef.current.set(id, el);
          } else {
            dotsRef.current.delete(id);
          }
        }}
        x={x - MESH_CONFIG.DOT_MIN_RADIUS}
        y={y - MESH_CONFIG.DOT_MIN_RADIUS}
        width={size}
        height={size}
        fill={MESH_CONFIG.DOT_COLOR}
        opacity={MESH_CONFIG.DOT_OPACITY}
      />
    );
  });

  return (
    <div ref={containerRef} className={styles.container}>
      {variant === "lines" && (
        <>
          <div
            className={styles.line}
            style={{ top: "20%", animationDelay: "0s" }}
          />
          <div
            className={styles.line}
            style={{ top: "40%", animationDelay: "2s" }}
          />
          <div
            className={styles.line}
            style={{ top: "60%", animationDelay: "4s" }}
          />
          <div
            className={styles.line}
            style={{ top: "80%", animationDelay: "1s" }}
          />
        </>
      )}

      {variant === "dots" && (
        <div className={styles.dotsPattern}>
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={styles.dot}
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {variant === "gradient" && (
        <div className={styles.gradientOrbs}>
          <div
            className={styles.orb}
            style={{
              left: "10%",
              top: "20%",
              animationDelay: "0s",
            }}
          />
          <div
            className={styles.orb}
            style={{
              right: "10%",
              bottom: "20%",
              animationDelay: "2s",
            }}
          />
        </div>
      )}

      {variant === "mesh" && (
        <div className={styles.meshPattern}>
          <svg
            className={styles.meshSvg}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <pattern
                id="meshLines"
                x="0"
                y="0"
                width={MESH_CONFIG.GRID_SIZE}
                height={MESH_CONFIG.GRID_SIZE}
                patternUnits="userSpaceOnUse"
              >
                <path
                  d={`M ${MESH_CONFIG.GRID_SIZE} 0 L 0 0 0 ${MESH_CONFIG.GRID_SIZE}`}
                  fill="none"
                  stroke={MESH_CONFIG.LINE_COLOR}
                  strokeWidth={MESH_CONFIG.LINE_WIDTH}
                />
              </pattern>
            </defs>
            <rect
              width={dimensions.width}
              height={dimensions.height}
              fill="url(#meshLines)"
            />
            {meshDots}
          </svg>
          <div className={styles.meshOverlay} />
        </div>
      )}
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
