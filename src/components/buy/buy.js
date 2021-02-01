import React,{ Component, Fragment } from 'react';
import "./buy.scss"
import {Tabs,Tab} from "react-bootstrap"

class Buy extends Component{
    render(){
    return(
      
            <Tabs className="tabs row" defaultActiveKey="home" id="uncontrolled-tab-example">


        <Tab className="tabs_tab col-6 " eventKey="profile" title="Регистрация	" >
        Помимо этого вам может быть пdредоставлено жилье и питание. Если же жилье и питание не предоставляется, то вы получаете денежный эквивалент. И в любом случае вы получаете оплаченную медицинскую страховку.
            </Tab>
  
        <Tab  className="tabs_tab2 col-6" eventKey="contact" title="Покупки" >
        В случае, если ваше пребывание будет равно или превышать 1 год, вам будут предоставлены обязательные семинары (минимум 25 дней), с упором на сферу вашей работы.
        </Tab>


      </Tabs>
       

    )    
    }

}

export default Buy;