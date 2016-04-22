'use strict';

var I18n = require('./vendor/i18n');
var { RNI18n } = require('react-native').NativeModules;

if (RNI18n && RNI18n.locale) {
  I18n.locale = RNI18n.locale.replace(/_/, '-');
} else {
  I18n.locale = 'en-US';
}

module.exports = I18n;
