//依据配置文件加载组件
var a = require('../config');
for(var i=0; i< a.needed.length; i++){
	require('./' + a.needed[i]);
}
for(var i=0; i< a.optional.length; i++){
	require('./' + a.optional[i]);
}

