import { SnowEffect } from "./SnowEffect";

export const ChristmasEffect = () => (
  <div className="effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden">
    <div className="nordic-stars">{Array.from({ length: 30 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="nordic-aurora nordic-aurora-a" /><div className="nordic-aurora nordic-aurora-b" /><div className="nordic-aurora nordic-aurora-c" />
    <div className="glass-bauble"><div className="glass-bauble-cap" /><span className="glass-bauble-star">✦</span><i /></div>
    <div className="nordic-pines nordic-pines-back">{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
    <div className="nordic-pines nordic-pines-front">{Array.from({ length: 7 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
    <div className="christmas-light-strand">{Array.from({ length: 20 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="winter-ground" />
    <SnowEffect />
    <div className="effect-label left-5 top-24">NORDIC NIGHT / WINTER SIGNAL</div>
  </div>
);
