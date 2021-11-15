const webpush = require ('web-push')

webpush.setVapidDetails(
    'mailto: 3516110093@urh.edu.mx', 
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY);


module.exports = webpush; 