import { SnowEffect } from "./SnowEffect";

export const ChristmasEffect = () => (
  <div className="effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden">
    <div className="christmas-aurora christmas-aurora-a" />
    <div className="christmas-aurora christmas-aurora-b" />
    <div className="christmas-moon" />
    <div className="christmas-lights">
      {Array.from({ length: 18 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}
    </div>
    <div className="christmas-horizon" />
    <SnowEffect />
    <div className="effect-label left-5 top-24">WINTER SIGNAL / AURORA</div>
  </div>
);
