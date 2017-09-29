
//第一个参数可以设置状态的默认值，主要需要返回状态,返回值是什么，状态就是什么

import Fetch from "../fetch"

const reducer = (state={fenlei_list:""},action)=>{
	
	switch(action.type){
		case 'FENLEI_CHANGE':
			return action.state
			return state;
			break;
		default :
			return state;
			break;
	}
	
}

export default reducer