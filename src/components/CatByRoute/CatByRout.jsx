import React, { Component } from "react";
import { client } from "../../client";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class CatByRout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNames: [],
    };
  }
  getCategoryNames = () => {
    client
      .query({
        query: gql`
          query {
            categories {
              name
            }
          }
        `,
      })
      .then(({ data: { categories } }) => {
        this.setState({ categoryNames: categories.map((item) => item.name) });
      });
  };
  componentDidMount() {
    this.getCategoryNames();
  }
  render() {
    return (
      <div>
        {this.state.categoryNames.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }
}
export default withRouter(CatByRout);
