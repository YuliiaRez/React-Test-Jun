import { gql } from "@apollo/client";
export const GET_ALL_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
export const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;
export const GET_PRODUCT_BY_ID = gql`
  query {
    product(id: "ps-5") {
      name
    }
  }
`;

// export const GET_PRODUCTS_BY_CATEGORY = gql`
//   query {
//     category(input: { title: "all" }) {
//       name
//       products {
//         id
//         category
//         name
//         inStock
//         gallery
//         description
//         brand
//         attributes {
//           id
//           name
//           type
//           items {
//             id
//             displayValue
//             value
//           }
//         }
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//       }
//     }
//   }
// `;
// export const GET_ALL_PRODUCTS = gql`
//   query {
//     categories {
//       name
//       products {
//         id
//         category
//         name
//         inStock
//         gallery
//         description
//         brand
//         attributes {
//           id
//           name
//           type
//           items {
//             id
//             displayValue
//             value
//           }
//         }
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//       }
//     }
//   }
// `;
