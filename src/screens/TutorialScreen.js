import { useEffect } from 'react';
import Tutorial from '../components/Tutorial/Tutorial';

const TutorialScreen = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Tutorial />;
};

export default TutorialScreen;
