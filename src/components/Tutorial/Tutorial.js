import { Spacer, Text, Link as LinkNextUI } from '@nextui-org/react';
import classes from './Tutorial.module.css';
import tutorial1 from '../../images/tutorial-1.png';
import tutorial2 from '../../images/tutorial-2.png';
import tutorial3 from '../../images/tutorial-3.png';
import tutorial4 from '../../images/tutorial-4.png';

const Tutorial = () => {
  return (
    <div className={classes.main}>
      <img src={tutorial1} />
      <Text size={20} weight={'bold'}>
        Click the three dots.
      </Text>
      <Spacer />
        <img src={tutorial2} />
      <Text size={20} weight={'bold'}>
        Click Export.
      </Text>
      <Spacer />
        <img src={tutorial3} />
      <Text size={20} weight={'bold'}>
        Ignore everything else and click copy text.
      </Text>
      <Spacer />
        <img src={tutorial4} />
      <Text size={20} weight={'bold'}>
        Name your set, paste the text here and hit create.
      </Text>
      <Spacer y={3} />
      <Text size={10}>
        Copyright © {new Date().getFullYear()}{' '}
          <strong>AE</strong>
      </Text>
    </div>
  );
};

export default Tutorial;
