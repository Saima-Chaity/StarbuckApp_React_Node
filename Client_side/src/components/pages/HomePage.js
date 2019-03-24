import React, { Component } from 'react'
import HomePageNav from "../nav/HomePageNav"
import {Grid} from 'semantic-ui-react'
import '../../stylesheets/landingPage.css';
import 'font-awesome/css/font-awesome.min.css';

class  HomePage extends Component {
  
render(){
    return(
      <div>
        <HomePageNav/> 
        <Grid centered columns={1}>
            <Grid.Row>
              <Grid.Column>
                <span className="header">
                    <img src= "http://blog.names.co.uk/wp-content/uploads/2015/09/Coffee_Fotolia_89505837_M.jpg" width="100%" height="450px" alt = "img" />
                </span>
              </Grid.Column>
              </Grid.Row>

              <Grid.Row>
              <Grid.Column>
                <div className="coffeeFinder">
                    <div style={{float:"right", margin:"40px"}}>
                        <img className="landingPageImage" src="https://globalassets.starbucks.com/assets/24e0ef1330ce468ba949ae92eef35222.png" alt = "img" />
                    </div>
                    <div className="columnDescription">
                        <h2>COFFEE FINDER</h2>
                        <p>Our coffee masters have distilled their years of tasting knowledge down to three simple questions to help you find a coffee you’re sure to love.</p>
                    </div>
                </div>
              </Grid.Column>
            </Grid.Row>

             <Grid.Row>
              <Grid.Column>
                <div>
                    <img className="landingPagelastImage" src="http://www.fleetwalkshoppingtorquay.co.uk/new2016/wp-content/uploads/2016/10/bg-how_to_brew-1024x341.jpg" alt = "img"/>
                    <div className="columnDescriptionForBrewing">
                        <h2>HOW TO BREW</h2>
                        <p>It’s surprising how different brewing methods can enhance particular characteristics in your coffee. Let us help you unlock the full potential of your coffee—for the perfect cup every time.</p>
                    </div>
                </div>
              </Grid.Column>
            </Grid.Row>

             <Grid.Row>
              <Grid.Column>
                <div className="socialMediaIcon">
                    <h2>Contact</h2>
                      <a href ={"http://www.facebook.com/starbuckscanada"}><i className="fa fa-facebook-square"></i></a>
                      <a href ={"http://instagram.com/starbuckscanada#"}><i className="fa fa-instagram"></i></a>
                      <a href ={"http://www.twitter.com/starbuckscanada"}><i className="fa fa-twitter"></i></a>
                 </div> 
              </Grid.Column>
            </Grid.Row>
        </Grid>
           
      </div>
        
      )
  }

}

export default HomePage;

