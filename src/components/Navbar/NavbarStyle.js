import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: grid;
  height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: stretch;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  grid-template-columns: 1fr 1fr 1fr;

  grid-template-rows: auto;
  position: sticky;
  top: 0px;
  z-index: 2000;
  background-color: white;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  margin-right: 24px;
  flex-direction: row;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 19.2px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => (props.chosen ? " #5ECE7B" : "#1D1F22")};
  align-self: stretch;
  border-bottom: ${(props) => (props.chosen ? "2px solid #5ECE9B" : " ")};
`;

export const Center = styled.div`
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  // border: 0;
  // max-width: 100%;
  // vertical-align: middle;
  // display: inline-block;
  cursor: pointer;
`;

export const CurrencySign = styled.p`
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  color: #1d1f22;
`;

export const ArrowImgUp = styled.img`
  width: 8px;
  margin-left: 6px;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const ArrowImgDown = styled.img`
  width: 8px;
  margin-left: 6px;
  cursor: pointer;
`;

export const Currency = styled.div`
  display: flex;
  position: relative;
  margin-right: 24px;
  flex-direction: row;
  font-size: 18px;
  text-transform: uppercase;
`;
export const CurrBlock = styled.p`
  padding: 10px 5px;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: right;
  cursor: pointer;
  color: #1d1f22;
`;

export const CartCounterAndImg = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const Counter = styled.div`
  position: absolute;
  left: auto;
  right: -8px;
  top: -8px;
  bottom: auto;
  display: flex;
  justify-content: center;
  color: white;
  height: 20px;
  width: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 100%;
  background-color: #333;
  cursor: pointer;
`;
export const CurrenciesContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 114px;
  height: auto;
  background-color: #fff;
  z-index: 999;
  margin-left: -40px;
  margin-top: 40px;
  -webkit-box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(57, 55, 72, 0.22);
  margin-top: 78px;
  z-index: 100;
  overflow: auto;
`;
