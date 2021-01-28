import React from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8.222 4.607a.737.737 0 000 1.055l5.944 5.838-5.944 5.838a.737.737 0 000 1.054.77.77 0 001.075 0l6.48-6.365a.737.737 0 000-1.054l-6.48-6.366a.77.77 0 00-1.075 0z"
  }));
}

IconRight.propTypes = IconPropTypes;

export default IconRight;
//# sourceMappingURL=IconRight.js.map
