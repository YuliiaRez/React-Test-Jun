import styled from "styled-components";
export const Attrs = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export const AttrName = styled.p`
  font-family: Roboto Condensed;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 12px;
  text-transform: uppercase;
`;
export const Attr = styled.div`
  display: flex;
  width: 63px;
  height: 45px;
  background-color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  margin-right: 4px;
  background: ${(props) => (props.chosen ? "black" : "white")};
  color: ${(props) => (props.chosen ? "white" : "black")};
`;

export const ColoredAttr = styled(Attr)`
  background: ${(props) => props.color};
  width: 32px;
  height: 32px;
  border: ${(props) => (props.chosen ? "3.5px solid #5ECE9B" : "none")};
`;

export const CartHeader = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 40px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  width: 90%;
`;

export const ContentPlacement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  padding: 20px 0 20px 0;
`;

export const Img = styled.img`
  position: absolute;
  height: 185px;
  object-fit: contain;
`;

export const SliderNext = styled.img`
  cursor: pointer;
  background-color: #191919;
  width: 18px;
`;

export const SliderPrev = styled(SliderNext)`
  transform: rotate(180deg);
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 185px;
  width: 141px;
`;

export const Arrows = styled.div`
  position: relative;
  bottom: -40%;
  left: 60%;
  width: 40px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  padding: 0 px 0 6px;
  color: black;
  opacity: 0.8;
`;

export const Brand = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  margin-bottom: 10px;
`;

export const Tax = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  width: 200px;
  display: flex;
  justify-content: end;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
`;
export const Amount = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: auto;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 185px;
`;

export const CounterBtn = styled.div`
  display: flex;
  height: 45px;
  width: 45px;
  border: 1px solid #333;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const Info = styled.div`
  width: 70%;
`;
export const Counter = styled.p`
  font-weight: 500;
`;
export const CartAttr = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;
export const OrderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(94, 206, 123, 1);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  height: 43px;
  width: 279px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(42 139 67);
  }
`;
