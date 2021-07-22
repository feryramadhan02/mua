import { Suspense, useState } from "react";
import { Route, Switch } from "react-router";
// import ProfilePage from "views/ProfilePage";
import MainRoutes from "./MainRoutes";

const Routes = () => {
    const [data, setData] = useState([])

    const onChangeData = (val) => {
        setData(data.concat(val))
    }

    return (
        <>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route path="/home" exact>
                        <MainRoutes data={data} changeData={onChangeData} />
                    </Route>
                    {/* <Route path="/profile" component={ProfilePage} exact /> */}
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes;