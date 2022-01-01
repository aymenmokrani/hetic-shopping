/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button, Steps } from "antd";
import { useState } from "react";

const { Step } = Steps;

const steps = [
  {
    title: "Personal information",
    content: <>
    </>,
  },
  {
    title: "Shipping information",
    content: "Shipping form",
  },
  {
    title: "Payment",
    content: "Credit card form",
  },
];
function PaymentPage() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="payment-page" css={styles}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => alert("thank you for your purchase!")}
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
}

const styles = css`
  max-width: 960px;
  margin: 50px auto;
  .steps-content {
    height: 400px;
    background-color: #ddd;
    padding: 20px;
  }
  .steps-action {
    text-align: right;
  }
`;
export default PaymentPage;
