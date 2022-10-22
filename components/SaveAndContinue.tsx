import { Button } from "antd";
import React from "react";
import styled from "styled-components";

import {
    CaretRightOutlined,
    RetweetOutlined
  } from '@ant-design/icons';

interface SaveAndContinueProps {
  saveAndContinue: () => void;
  reset: () => void;
}

export default function SaveAndContinue(props: SaveAndContinueProps) {
  const { saveAndContinue, reset } = props;
  return (
    <Wrapper>
      <Button onClick={saveAndContinue} type='primary' >Save And Continue {<CaretRightOutlined />}</Button>
      <Button icon={<RetweetOutlined />} type="link" onClick={reset}>Reset</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 20px;
`
