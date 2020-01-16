import React from 'react';
import { Media } from 'reactstrap';

export const RefconMediaPanel = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object width="100%" height="250vh" src="https://pics.awwmemes.com/one-does-not-simply-repair-memegenerator-net-funny-air-conditioning-memes-53930470.png" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default RefconMediaPanel;