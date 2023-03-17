withImages = require('next-images');

module.exports = withImages({
    reactStrictMode: true,
    // 국제화 : 그 나라에 맞게 문자를 국제화하는것 (internationalization)
    i18n : {
        locales:['ko'], defaultLocale : 'ko'
    } 
});