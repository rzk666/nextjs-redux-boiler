import React from 'react';

const HomeController = (props) => {
  // Handle lifecycle logic & state managment here
  const { View } = props;
  return (
    <View {...props} />
  );
};

export default HomeController;
