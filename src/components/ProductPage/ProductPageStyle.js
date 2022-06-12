import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    alighn-items: center;
  }
  justify-content: space-between;
  max-width: 100%;
  margin-top: 80px;
`;
export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  max-width: 100%;
`;

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(94, 206, 123, 1);
  height: 52px;
  width: 292px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 40px;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(42 139 67);
  }
`;

export const AddToCartNotAvailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(94, 206, 123, 1);
  opacity: 0.3;
  height: 52px;
  width: 292px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 40px;
`;

export const Imgs = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-height: 500px;
  overflow-x: auto;
`;

export const SubImg = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const MainImg = styled.img`
  height: 500px;
  object-fit: contain;
`;

export const Attrs = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Attr = styled.div`
  display: flex;
  width: 63px;
  height: 45px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  margin-right: 8px;
  background: ${(props) => (props.chosen ? "black" : "white")};
  color: ${(props) => (props.chosen ? "white" : "black")};
`;

export const Brand = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  margin-bottom: 16px;
`;

export const Name = styled.p`
  font-size: 1.65rem;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  line-height: 1.2rem;
  margin-bottom: 40px;
`;

export const SubName = styled.p`
  font-family: Roboto Condensed;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const Price = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  margin-bottom: 25px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ChosenColoredSpec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  cursor: pointer;
  background: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => props.colorBorder || "grey"};
  margin: 5px;
`;
export const ColoredAttr = styled(Attr)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.color};
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  margin: 1px;
  border: ${(props) => (props.chosen ? "2px solid #5ECE9B" : "black")};
`;

export const ChosenSpec = styled.div`
  display: flex;
  width: 63px;
  height: 45px;
  background-color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  cursor: pointer;
  background: rgba(29, 31, 34, 1);
  color: white;
  margin-right: 8px;
`;

export const ProductDescription = styled.textarea`
  font-family: Roboto Condensed;
  max-width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 292px;
  height: 103px;
  overflow: auto;
  border: none;
`;
