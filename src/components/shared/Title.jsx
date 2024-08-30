import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Rent Property",
  description = "this is a property rental website",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
