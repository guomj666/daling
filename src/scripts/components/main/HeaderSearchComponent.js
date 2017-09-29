




class HeaderSearchComponent extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    componentWillMount(){
        
    }

    render(){
       
        return (
            <div className="mainSearchBox">
               <input type="text" className="mianSearch" placeholder="搜索商品"/>
            </div>
        )
    }

}

export default HeaderSearchComponent