import {useButton} from 'react-aria';

export default function Home() {
  let {buttonProps} = useButton({});

  return (
    <button {...buttonProps}>Test</button>
  );
}
