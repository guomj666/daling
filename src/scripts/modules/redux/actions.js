
import Fetch from "../fetch"
import store from './store'
let arr = ['推荐分类','极致美护','全球零食','尖货女装','创意生活','时尚配饰','品牌精选']
const actions = {
	changeFenLei(classify){
		let time = new Date().getTime()//时间戳
		Fetch.Get('http://localhost:9000/dl/api/menu/getMenu',{_:time}).then(res=>res.json()).then(json=>{
			let _state={}
			let index = arr.indexOf(classify)
//			console.log(index)
			_state.fenlei_list=json.data[index].block_list
			let action = {
				type:'FENLEI_CHANGE',
				state:_state
			}
			store.dispatch(action)
		})
		
	}
}

export default actions