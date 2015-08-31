const VALID_PROPS = [
  'style',
  'onClick',
  'onHover',
  'onSelect',
  'onHover',
  'onChange'
  // TODO - Add more
];

// TODO - Test performance of reduce vs. for loop
export function getValidProps(originalProps) {
  return VALID_PROPS.reduce(function(props, validPropName) {
    if (validPropName in originalProps)
      props[validPropName] = originalProps[validPropName];
    return props;
  }, {});
}
