import './../../../css/MainComponent.css'
import ContentMain from './RouteContentMain'
import RightMainComponent from './RightMainComponent'
import LeftMainComponent from './LeftMainComponent'
import HeaderMainComponent from './HeaderMainComponent';

const MainComponent = () => {
    return (
        <>
            <HeaderMainComponent />
            <div className="head-main">
                <LeftMainComponent />
                <div className="content-main">
                    <ContentMain />
                </div>
                <RightMainComponent />
            </div>
        </>
    )
}

export default MainComponent