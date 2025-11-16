"use client";

import { useMemo, useState } from "react";

const PALETTE = [
  "#6C5CE7",
  "#FD79A8",
  "#00B894",
  "#00CEC9",
  "#FDCB6E"
];

export default function Home() {
  const [accent, setAccent] = useState(PALETTE[0]);

  const accentName = useMemo(() => {
    switch (accent) {
      case "#FD79A8":
        return "bubblegum blaze";
      case "#00B894":
        return "mint vibes";
      case "#00CEC9":
        return "aqua flex";
      case "#FDCB6E":
        return "golden hour";
      default:
        return "neon dusk";
    }
  }, [accent]);

  return (
    <main
      className="page"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="glow-bubble glow-bubble--left" />
      <div className="glow-bubble glow-bubble--right" />
      <section className="hero">
        <header className="hero__copy">
          <span className="hero__eyebrow">NYC drip</span>
          <h1>
            Gen Z Statue of <span className="highlight">Liberty</span>
          </h1>
          <p>
            Lady Liberty got the remix: pastel chrome crown, holographic shades,
            and a torch that vibes harder than a rooftop party at golden hour.
          </p>
          <div className="accent-picker">
            {PALETTE.map((color) => (
              <button
                key={color}
                className={`accent-picker__swatch${
                  color === accent ? " accent-picker__swatch--active" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setAccent(color)}
                aria-label={`Switch accent to ${color}`}
              />
            ))}
            <span className="accent-picker__label">{accentName}</span>
          </div>
        </header>
        <figure className="statue-scene" aria-label="Gen Z Statue illustration">
          <div className="statue">
            <div className="statue__crown">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className="statue__crown-spike"
                  style={{
                    transform: `rotate(${index * 10 - 40}deg) translateY(-5%)`
                  }}
                />
              ))}
              <div className="statue__crown-band" />
            </div>
            <div className="statue__halo" />
            <div className="statue__head">
              <div className="statue__hair" />
              <div className="statue__face">
                <div className="statue__brow" />
                <div className="statue__eyes">
                  <span />
                  <span />
                </div>
                <div className="statue__sunglasses">
                  <div className="statue__sunglasses-lens" />
                  <div className="statue__sunglasses-bridge" />
                  <div className="statue__sunglasses-lens" />
                </div>
                <div className="statue__nose" />
                <div className="statue__lips" />
              </div>
            </div>
            <div className="statue__shoulders">
              <div className="statue__robe" />
              <div className="statue__robe-line" />
            </div>
            <div className="statue__tablet">
              <span>NYC 2.0</span>
            </div>
            <div className="statue__torch">
              <div className="statue__torch-stick" />
              <div className="statue__torch-light">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <figcaption>
            Crown mood: iridescent spikes with neon soft-glow, handcrafted for
            the scroll generation.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
