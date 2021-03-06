import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: auto;
  grid-column-gap: 6%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  } ;
`;

// export const CartIcon = styled.img`
//   opacity: 0;
//   transition-duration: 0.2s;
//   position: absolute;
//   cursor: pointer;
//   left: auto;
//   right: 20px;
//   z-index: 10;
//   margin-top: -54px;
// `;

export const ProductContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
  padding: 16px;
  transition-duration: 0.2s;
  &:hover {
    -webkit-box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
    box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
  
`;

export const Name = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;
  font-weight: 300;
  font-style: light;
  font-size: 1rem;
  line-height: 1.6rem;
  cursor: pointer;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: bold;
  background-color: white;
  font-weight: 500;
  font-style: medium;
  font-size: 18px;
  cursor: pointer;
`;

export const Img = styled.img`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 338px;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const OutOfStock = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
`;
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryName = styled.h2`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1d1f22;
  text-transform: uppercase;
`;
