


class FooterComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
       let {active} = this.props
        return (
            <div className="footer-box">
	            <div className="footer">
	                <a href="#/main" className={active=='/main'?'active':''}>
	                    <span className="iconfont icon-shouye"></span>
	                    <span className="fonts">首页</span>
	                </a>
	                <a href="#/classify" className={active=='/classify'?'active':''}>
	                    <span className="iconfont icon-fenlei"></span>
	                    <span className="fonts">分类</span>
	                </a>
	                <a href="#/sale" className={active=='/sale'?'active':''}>
	                    <span className="iconfont icon-icon69"></span>
	                    <span className="fonts">约惠</span>
	                </a>
	                <a href="#/cart" className={active=='/cart'?'active':''}>
	                    <span className="iconfont icon-cart"></span>
	                    <span className="fonts">购物车</span>
	                </a>
	                <a href="#/mine" className={active=='/mine'?'active':''}>
	                    <span className="iconfont icon-wode"></span>
	                    <span className="fonts">我的</span>
	                </a>
                </div>
            </div>
        )
    }
}
//定义默认属性
FooterComponent.defaultProps={
    active:"/main"
}



export default FooterComponent