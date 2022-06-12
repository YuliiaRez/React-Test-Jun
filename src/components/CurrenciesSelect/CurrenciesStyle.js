import styled from "styled-components";

export const CurrContainerBlock = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 114px;
  height: 280;
  background-color: #fff;
  z-index: 1100;
  margin-left: -40px;
  margin-top: 40px;
  -webkit-box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
`;

export const CurrBlock = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-align: center;
  cursor: pointer;
  width: 114px;
  &:hover {
    background-color: #eeeeee;
  }
`;
