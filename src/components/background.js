import React from "react";

import { getRandomArbitrary } from "../utils";

export default function Background() {
  const numberOfStars = 400;

  return (
    <div className="background">
      <div className="bg_abs_layer_stars">
        <div className="bg_layer_stars">
          {Array.from(Array(numberOfStars).keys()).map((i, idx) => {
            const style = {
              top: getRandomArbitrary() + "%",
              left: getRandomArbitrary() + "%",
              backgroundColor:
                Math.random() > 0.8
                  ? Math.random() > 0.5
                    ? "#7C6BE9"
                    : "#EC9EDF"
                  : "#ffffff",
              opacity: getRandomArbitrary(0.2, 0.6),
              transform: `scale(${getRandomArbitrary(0.8, 1.1)}) rotate(45deg)`,
              animationDelay: getRandomArbitrary(0, 1.5) + "s",
              animationPlayState: Math.random() > 0.5 ? "paused" : "running",
            };

            return <div key={idx} className="bg_star" style={style}></div>;
          })}
        </div>
      </div>
    </div>
  );
}
