const PROXY_CONFIG = {};

PROXY_CONFIG['/mfe/highlightcard/*'] = {
    target: 'http://localhost:4201',
    secure: false,
    changeOrigin: false,
    pathRewrite: {
	    "^/mfe/highlightcard": ""
    }
};

module.exports = PROXY_CONFIG;
