import React from 'react';

const SSRPageController = (props) => {
  // Handle lifecycle logic & state managment here
  const { View } = props;
  return (
    <View {...props} />
  );
};

export default SSRPageController;
