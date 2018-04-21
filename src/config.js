exports.FACEBOOK_APP_ID = '182710952339837';
exports.GOOGLE_ANDROID_CLIENT_ID = '698412195965-6r19vionf1ehiptgqs49gdoedtd2jmho.apps.googleusercontent.com';
exports.GOOGLE_IOS_CLIENT_ID = '698412195965-11vilao62ag1r9akvlfqo3nc6pdn7omg.apps.googleusercontent.com';
exports.GRAPHQL_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/graphql' : 'https://strengthexchange-abandisch.now.sh/graphql';
exports.APP_AUTHOR = 'Alex Bandisch';
exports.LOGIN_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/gym-tracker/login' : 'https://gt-server-abandisch.now.sh/gym-tracker/login';
exports.STR_TRCKR_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/strength-tracker' : 'https://gt-server-abandisch.now.sh/strength-tracker';
