"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import styles from "./SkyCanvas.module.css";

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

/*
 * Open sky above a sea of clouds. Brand gradient (#3A92EF → #3AB3EF →
 * #B6E6F1), a warm sun bloom, high wisps, and a cumulus floor whose
 * horizon rises with uScroll until the frame dissolves into mist (#F1F8FE),
 * the colour of the section below.
 */
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;
uniform float uCompact;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 r = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = r * p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

const vec3 MIST = vec3(0.945, 0.973, 0.996);

// Top edge of one row of cumulus: abs(sin) gives rounded crowns with
// tight seams between puffs; fbm keeps the rhythm irregular.
float rowTop(float x, float base, float freq, float amp, float seed) {
  float n = fbm(vec2(x * 0.7 + seed, seed));
  float big = abs(sin(x * freq + n * 3.2 + seed));
  float small = abs(sin(x * freq * 2.3 + n * 5.0 + seed * 1.7));
  return base + amp * (0.68 * big + 0.32 * small) + (n - 0.5) * amp * 0.9;
}

// Composite one row over col. Returns coverage in .a for the caller.
vec4 cloudRow(vec2 p, float y, float base, float freq, float amp, float seed,
              float drift, vec3 sky, float haze, float sunX) {
  float x = p.x + drift;
  float top = rowTop(x, base, freq, amp, seed);
  float edgeN = (fbm(vec2(x * 14.0, y * 14.0) + seed) - 0.5) * 0.018;
  float cover = smoothstep(top + 0.004, top - 0.006, y + edgeN);
  float depth = max(top - y, 0.0);
  // Crowns catch the light; the belly of each row falls into blue shade.
  float shade = smoothstep(0.0, amp * 1.6 + 0.05, depth);
  vec3 lit = vec3(1.0);
  vec3 shadow = vec3(0.63, 0.78, 0.94);
  vec3 c = mix(lit, shadow, shade * 0.85);
  // Seams between puffs read darker; sun side brighter.
  float slope = rowTop(x + 0.004, base, freq, amp, seed) - top;
  c += vec3(0.07, 0.05, 0.0) * clamp(slope * 90.0 * sign(sunX - p.x), -1.0, 1.0) * (1.0 - shade);
  c = mix(c, MIST, smoothstep(amp * 2.4, amp * 5.0, depth));
  c = mix(c, sky, haze);
  return vec4(c, cover);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * asp, uv.y);
  float t = uTime;
  float s = uScroll;

  // Sky: deep at the zenith so large white type keeps its contrast.
  vec3 zenith = vec3(0.157, 0.475, 0.878);
  vec3 sky500 = vec3(0.227, 0.573, 0.937);
  vec3 sky400 = vec3(0.227, 0.702, 0.937);
  vec3 cloud300 = vec3(0.714, 0.902, 0.945);
  float y = uv.y;
  vec3 sky = mix(cloud300, sky400, smoothstep(0.02, 0.42, y));
  sky = mix(sky, sky500, smoothstep(0.38, 0.72, y));
  sky = mix(sky, zenith, smoothstep(0.7, 1.05, y));

  // Sun bloom, top right (top centre on narrow screens).
  vec2 sunP = vec2(mix(0.84, 0.62, uCompact) * asp, 1.02);
  float sd = length(p - sunP);
  vec3 sunCol = vec3(1.0, 0.96, 0.78);
  sky += sunCol * (0.42 * exp(-sd * 9.0) + 0.16 * exp(-sd * 2.6));
  sky = mix(sky, sky + vec3(0.06, 0.04, -0.02), exp(-sd * 1.6) * 0.5);

  // High wisps.
  vec2 q = p * vec2(1.1, 3.6) + vec2(t * 0.005, 0.0);
  float w = fbm(q + fbm(q * 0.5 + 3.1) * 0.9);
  float wisp = smoothstep(0.56, 0.86, w) * smoothstep(0.38, 0.85, y) * (1.0 - s);
  sky = mix(sky, vec3(1.0), wisp * 0.32);

  // Cumulus sea: three rows, back to front. Each rises at its own rate as
  // the visitor scrolls, so the camera seems to sink into the clouds.
  float lift = mix(0.0, 0.06, uCompact);
  vec3 col = sky;
  vec4 r;
  r = cloudRow(p, y, 0.235 + lift + s * 0.55, 7.0, 0.050, 1.3, t * 0.006, sky, 0.38, sunP.x);
  col = mix(col, r.rgb, r.a);
  r = cloudRow(p, y, 0.155 + lift + s * 0.85, 4.6, 0.070, 7.9, t * 0.010 + 0.3, sky, 0.12, sunP.x);
  col = mix(col, r.rgb, r.a);
  r = cloudRow(p, y, 0.045 + lift + s * 1.25, 3.1, 0.085, 4.2, t * 0.016 + 0.7, sky, 0.0, sunP.x);
  col = mix(col, r.rgb, r.a);

  // Bottom edge and the end of the climb both resolve into mist.
  col = mix(col, MIST, smoothstep(0.10, 0.0, y));
  col = mix(col, MIST, smoothstep(0.72, 1.0, s));

  // Gentle grain to keep the gradient from banding.
  col += (hash(gl_FragCoord.xy + t) - 0.5) / 255.0 * 2.0;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn("[sky] shader:", gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

/**
 * `progress` (0–1) lets a parent timeline drive the climb, e.g. a pinned
 * hero. Without it the canvas tracks its own section scrolling past.
 */
export function SkyCanvas({ progress }: { progress?: { current: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl || gl.isContextLost()) return; // CSS gradient fallback stays visible.

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uScroll = gl.getUniformLocation(prog, "uScroll");
    const uCompact = gl.getUniformLocation(prog, "uCompact");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scroll = 0;
    let visible = true;
    let raf = 0;
    let start = performance.now();
    // Clouds are soft: render below native resolution and let CSS upscale.
    const scale = () => Math.min(window.devicePixelRatio || 1, 1.5) * 0.6;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const k = scale();
      canvas.width = Math.max(1, Math.round(r.width * k));
      canvas.height = Math.max(1, Math.round(r.height * k));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uCompact, r.width < 760 ? 1 : 0);
      draw(performance.now());
    };

    // A fixed, pleasant moment in the drift for the static frame.
    const T0 = 140;
    const draw = (now: number) => {
      const t = reduce.matches ? T0 : T0 + (now - start) / 1000;
      gl.uniform1f(uTime, t);
      const s = progress ? progress.current : scroll;
      gl.uniform1f(uScroll, reduce.matches ? 0 : s);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (raf || reduce.matches || !visible || document.hidden) return;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const host = canvas.closest("section") ?? canvas.parentElement!;
    const st = progress
      ? null
      : ScrollTrigger.create({
          trigger: host,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            scroll = self.progress;
            if (!raf) draw(performance.now());
          },
        });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);

    const onVis = () => (document.hidden ? pause() : play());
    const onMotion = () => {
      pause();
      start = performance.now();
      draw(start);
      play();
    };
    document.addEventListener("visibilitychange", onVis);
    reduce.addEventListener("change", onMotion);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    resize();
    canvas.dataset.ready = "1";
    play();

    return () => {
      pause();
      st?.kill();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      reduce.removeEventListener("change", onMotion);
      // Free GPU objects but keep the context: the same canvas is reused
      // when React remounts the effect.
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
