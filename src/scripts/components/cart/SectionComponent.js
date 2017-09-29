

class SectionComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
          	
        }
    }
    
    
    render(){
    	return (
    		<section className="section">
    			<div className="section_box">
    			 	<div className="cart_empty">
				      	<span></span>
				      	<p>购物车里没有东西哦,快去挑选吧~</p>
				      	<a href="/">逛逛首页</a>
				    </div>
    			</div>
    			<div className="shopping_footer" data-shopping-footer="">
				    <ul>
				        <li>
				            <p className="selectAll"></p>
				            <span>全选</span>
				        </li>
				        <li>
				        <p>
				            <strong>合计:<span>¥0</span></strong>
				            <strong>总额:¥0</strong>
				        </p>
				            <a href="javascript:void(0)" data-shopping-pay="" className="readonly">去结算(<span data-goods-count="">0</span>)</a>
				        </li>
				    </ul>
				</div>
    		</section>
    	)
    }
	
}
   
  

export default SectionComponent
