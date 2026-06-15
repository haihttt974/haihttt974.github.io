import { SnowEffect } from "./SnowEffect";

const bulbs = Array.from({ length: 18 }, (_, index) => {
  const progress = index / 17;
  const sag = Math.sin(progress * Math.PI) * 2.5;
  return {
    x: `${4 + progress * 92}%`,
    y: `${8 + sag}px`,
    delay: `${index * -0.16}s`,
    hue: 35 + index * 18,
  };
});
const stars = Array.from({ length: 42 });
const pineNeedles = Array.from({ length: 9 });
const berries = Array.from({ length: 5 });
const bokeh = Array.from({ length: 18 });
const snowflakeArms = Array.from({ length: 6 });
const windTrails = Array.from({ length: 14 });

const PineSprig = ({ side }: { side: "left" | "right" }) => (
  <div className={`christmas-sprig christmas-sprig-${side}`}>
    <span className="sprig-stem" />
    {pineNeedles.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}
    {berries.map((_, index) => <b key={index} style={{ "--i": index } as React.CSSProperties} />)}
  </div>
);

export const ChristmasEffect = () => (
  <div className="effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden">
    <div className="christmas-frost" />
    <div className="christmas-bokeh">{bokeh.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="nordic-stars">{stars.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="nordic-aurora nordic-aurora-a" />
    <div className="nordic-aurora nordic-aurora-b" />
    <div className="nordic-aurora nordic-aurora-c" />
    <div className="christmas-snowflake-halo" />
    <div className="christmas-hero-snowflake">
      {snowflakeArms.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties}><span /><b /></i>)}
    </div>
    <div className="christmas-wind christmas-wind-a">{windTrails.map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="christmas-wind christmas-wind-b">{windTrails.slice(0, 9).map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>

    <div className="christmas-top-garland">
      <PineSprig side="left" />
      <PineSprig side="right" />
      <div className="garland-bauble garland-bauble-a"><i /></div>
      <div className="garland-bauble garland-bauble-b"><i /></div>
      <div className="garland-bauble garland-bauble-c"><i /></div>
    </div>
    <div className="christmas-wreath"><div className="wreath-bow" /><i /><i /><i /><i /><i /></div>
    <div className="christmas-corner-gift"><i /><span /></div>
    <div className="christmas-candy-cane" />

    <div className="nordic-pines nordic-pines-back">{Array.from({ length: 9 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="nordic-pines nordic-pines-front">{Array.from({ length: 7 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}</div>
    <div className="christmas-light-drift">
      {bulbs.map((bulb) => (
        <i
          key={bulb.x}
          style={{
            left: bulb.x,
            top: bulb.y,
            "--bulb": `hsl(${bulb.hue} 88% 64%)`,
            animationDelay: bulb.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
    <div className="winter-ground" />
    <SnowEffect />
    <div className="effect-label left-5 top-24">CHRISTMAS EVE / WINTER GLOW</div>
  </div>
);
