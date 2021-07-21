import FooterApp from "components/Footers";
import HeaderApp from "components/Headers";
import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const HomePage = lazy(() => import("views/HomePage"))

const MainRoutes = (props) => {
    let { path } = useRouteMatch()

    return (
        <>
            <Suspense fallback={<div></div>}>
                <HeaderApp changeData={props.changeData} />
                <Switch>
                    <Route path={`${path}`} exact>
                        <HomePage data={props.data} />
                    </Route>
                </Switch>
                <FooterApp />
            </Suspense>
        </>
    )
}

export default MainRoutes;
