
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')
import RootComponent from './scripts/components/RootComponent'
import MainComponent from './scripts/components/MainComponent'
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import ClassifyComponent from './scripts/components/ClassifyComponent'
import CartComponent from './scripts/components/CartComponent'
import SaleComponent from './scripts/components/SaleComponent'
import MineComponent from './scripts/components/MineComponent'
import ListComponent from './scripts/components/classify/ListComponent'
import SaleSection1Component from './scripts/components/sale/SaleSection1Component'
import DetailComponent from './scripts/components/detail/DetailComponent'
import SaleSection2Component from './scripts/components/sale/SaleSection2Component'



// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={MainComponent}/>
            <Route path="/main" component={MainComponent}></Route>
            
            <Route path="/sale" component={SaleComponent}>
                <IndexRoute component={SaleSection1Component}/>
                <Route path="/section1" component={SaleSection1Component}></Route>
                <Route path="/section2" component={SaleSection2Component}></Route>
            </Route>
            
            <Route path="/detail/:id" component={DetailComponent}></Route>
            <Route path="/classify" component={ClassifyComponent}></Route>
            <Route path="/list/:str" component={ListComponent}></Route>
            <Route path="/cart" component={CartComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="*" component={MainComponent}></Route>

        </Route>
    </Router>
    
    ,document.getElementById("app"))