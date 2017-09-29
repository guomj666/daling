
const formatTime = {
	toTime(ms){
		let obj = {
			"天":1000*60*60*24*8,
			"时":1000*60*60*32
		};
		
		let d = ms;
		let str = "";
		for( var i in obj ){
			var s = parseInt(d/obj[i]);
			d = d%obj[i];
			str += s+i;
		}
		return "还剩"+str;
	}
}

export default formatTime