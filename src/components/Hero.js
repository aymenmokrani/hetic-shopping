/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button } from "antd";
import React from "react";
import banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <div className="hero" css={styles}>
      <div className="text">
        <span className="title">HETIC SHOPPING</span>
        <p>You can have anything you want in life if you dress for it</p>
        <Button
          type="primary"
          size="large"
          href="#featured"
          style={{ width: 150, marginTop: 20 }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 100px;
  position: relative;
  height: 500px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 102, 255, 0.15)),
    url(${banner});

  background-size: cover;
  background-position: center;

  .text {
    text-align: center;
    .title {
      font-size: 52px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export default Hero;
