import * as React from "react";
import PropTypes from "prop-types";
import Observer from "@researchgate/react-intersection-observer";

const ViewableMonitor = ({ tag: Tag, children, ...rest }) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  return (
    <Observer
      {...rest}
      onChange={({ isIntersecting }) => setIsIntersecting(isIntersecting)}>
      <Tag>{children(isIntersecting)}</Tag>
    </Observer>
  );
};

ViewableMonitor.propTypes = {
  tag: PropTypes.node,
  children: PropTypes.func.isRequired,
};

ViewableMonitor.defaultProps = {
  tag: "div",
};

export default ViewableMonitor;
