'use strict';
const db = uniCloud.database(); //代码块为cdb
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await db.collection("users").get();
	return res;
};
