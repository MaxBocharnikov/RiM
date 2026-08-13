/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be snake_case (block_element_modifier)'
      }
    ]
  }
};
