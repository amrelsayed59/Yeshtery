import React from 'react';
import Header from './Header';

const MainLayout: React.FC<any> = (props) => {
  return (
    <>
      <Header />
      <div className="bg-gray-100" {...props}>
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
