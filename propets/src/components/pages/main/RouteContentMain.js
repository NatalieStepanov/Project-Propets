import AddPost from "../content/AddPost"
import Fostering from "../content/Fostering"
import Found from "../content/Found"
import Lost from "../content/Lost"
import Profile from "../content/Profile"
import VetHelp from "../content/VetHelp"
import Walking from "../content/Walking"
import { Route, Switch } from 'react-router-dom';
import Posts from "../content/Posts"
import Post from "../content/Post"



const ContentMain = () => {
    return (
        <>
            <Switch>
                <Route path='/posts' component={Posts} />
                <Route path='/lost' component={Lost} />
                <Route path='/found' component={Found} />
                <Route path='/walking' component={Walking} />
                <Route path='/fostering' component={Fostering} />
                <Route path='/vethelp' component={VetHelp} />
                <Route path='/profile' component={Profile} />
                <Route path='/addPost' component={AddPost} />
                <Route path='/post/:id' component={Post} />
            </Switch>
        </>
    )
}

export default ContentMain






