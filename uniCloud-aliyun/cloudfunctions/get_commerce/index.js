'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云函数的event和context，必传
			event,
			context
		})
			
		// const res = await dbJQL.collection('numbers').where(`classify_2==${event.classify_2}`).get() // 直接执行数据库操作
		
		const res = await dbJQL.collection('numbers').where(`classify_2 == "${event.classify_2}"`).get()
		return res
		
	 
};
