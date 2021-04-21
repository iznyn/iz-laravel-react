import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';

import useMeasure from '@/Hooks/useMeasure';

const Input = (props) => {
  const { className, size, ...others } = props;
  const [bind, { width }] = useMeasure();
  const [onFocus, setOnFocus] = useState(false);
  const animProps = useSpring({
    width: onFocus ? width : 0,
  });

  const lineStyle = 'border-b-2 absolute bottom-0 inset-x-0';

  return (
    <div
      {...bind}
      className={classNames('relative', size === 'lg' ? ' pb-3' : ' pb-2.5')}
    >
      <input
        className={classNames(
          'bg-transparent outline-none w-full text-black',
          size === 'lg' ? 'text-xl' : 'text-lg',
          className,
        )}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        {...others}
      />
      <div className={`${lineStyle} border-light2`} />
      <animated.div
        style={animProps}
        className={`${lineStyle} border-primary`}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Input;
