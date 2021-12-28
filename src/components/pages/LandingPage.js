/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import Featured from "../Featured";
import Hero from "../Hero";

function LandingPage({ products }) {
  return (
    <div className="landing-page">
      <Hero />
      <Featured {...{ products }} />
    </div>
  );
}

export default LandingPage;
