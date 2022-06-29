import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(57, 55, 72, 0.5);
  margin-top: 78px;
  z-index: 1000;
  overflow: auto;
`;
export const CartContainer = styled.div`
  position: absolute;
  left: auto;
  top: 0;
  right: 15px;
  height: auto;
  width: 325px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  -webkit-box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  padding: 16px;
  z-index: 500;
`;
export const Img = styled.img`
  height: 156px;
  max-width: 100px;
  object-fit: contain;
 
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Attrs = styled.div`
  display: flex;
  margin-top: auto;
`;

export const Attr = styled.div`
  display: flex;
  width: 30px;
  height: 25px;
  background-color: white;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  margin-right: 8px;
  overflow: hidden;
  background: ${(props) => (props.chosen ? "black" : "white")};
  color: ${(props) => (props.chosen ? "white" : "black")};
`;

export const ColoredAttr = styled(Attr)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.color};
  width: 22px;
  height: 22px;
  left: 0px;
  top: 0px;
  margin: 1px;
  border: ${(props) => (props.chosen ? "3px solid #5ECE9B" : "black")};
`;
export const Orders = styled.div`
  height: auto;
  max-height: 600px;
  width: auto;
  overflow-y: auto;
`;

export const CartHeader = styled.span`
  font-weight: 700;
  margin-bottom: 25px;
`;

export const ProductInfoInCart = styled.div`
  height: 156px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  font-size: 12px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 40px;
`;

export const CartMiniBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  box-shadow: inset 0px 0px 0px 1px #333;
  height: 43px;
  width: 135px;
  cursor: pointer;
  transition-duration: 0.2s;
  color: black;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const CheckoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5ece7b;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  height: 43px;
  width: 135px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(42 139 67);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartAttr = styled.p`
  margin-bottom: 5px;
`;

export const Price = styled(CartAttr)`
  font-weight: bold;
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 156px;
  align-items: center;
`;

export const CounterBtn = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  border: 1px solid #333;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const Counter = styled.p`
  font-weight: 500;
`;
