import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Utils
import configureProgressBar from '../utils/routing';
// Components
import Clickable from '../components/common/Clickable';
import EnvNotification from '../components/common/EnvNotification';

const LayoutHOC = (ComposedComponent) => {
  const WithLayout = (props) => {
    useEffect(() => {
      configureProgressBar();
    }, []);
    const { serverRendered, generatedAt } = props;
    return (
      <>
        <ComposedComponent {...props} />
        <div style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
          <p>
            Made with
            <span role="img" aria-label="heart"> ❤️ </span>
            by
            <Clickable routing external href="https://github.com/rzk666"> rzk666</Clickable>
          </p>
        </div>
        <EnvNotification
          serverRendered={serverRendered}
          generatedAt={generatedAt}
        />
      </>
    );
  };
  return connect()(WithLayout);
};

export default LayoutHOC;
