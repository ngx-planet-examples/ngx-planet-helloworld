const PROXY_CONFIG = {};


let mfes = ['highlightcard', 'footer', 'nextsteps', 'resources', 'terminal', 'toolbar', 'links' ];
let start_port = 4201;

const rewriteFn = function (path, req) {
  return path.replace(/mfe\/[a-z]*/, '');
};

for (var mfe of mfes) {
  let match = `^/mfe/${mfe}`;
	PROXY_CONFIG[`/mfe/${mfe}/*`] = {
	    target: `http://localhost:${start_port}`,
	    secure: false,
	    changeOrigin: false,
	    pathRewrite: rewriteFn
	};
  start_port++;
}
module.exports = PROXY_CONFIG;
