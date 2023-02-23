import React, { useEffect, useState } from 'react';
import useSessionStorage from './constants/useSessionStorage';
import { GlobalContext } from './constants/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./constants/ScrollToTop.js";
import { PageNotFound } from './routes';
import { Home } from "./routes"
import { Dining } from './routes';
import { Dessert } from './routes';
import { Bar } from './routes';
import { Login } from './routes';
import { ProtectedBookingRoute, ProtectedSubscriptionRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Booking, BookingConfirmation } from "./container";
import { Newsletter, SubscriptionConfirmation } from "./container";
import { data } from './constants';
import './App.css';



const App = () => {
  const [getSessionStorage, setSessionStorage] = useSessionStorage();

  const [globalState, setGlobalState] = useState(
                  getSessionStorage('userstatus')
                  ?
                  {
                    special_dining_menu:
                        {
                            menu1: "mexican",
                            menu2: "indian"
                        },
                    special_bar_menu:
                        {
                            menu1: "wines",
                            menu2: "cocktails"
                        },
                    special_dessert_menu:
                        {
                          menu1: "cakes",
                          menu2: "icecreams"
                        },
                    complete_dining_menu: data.diningMenu[0].category,
                    complete_bar_menu: data.barMenu[0].category,
                    complete_dessert_menu: data.dessertMenu[0].category,
                    ...getSessionStorage('userstatus')
                  }
                  :
                  {
                    login_status: false,
                    special_dining_menu:
                        {
                            menu1: "mexican",
                            menu2: "indian"
                        },
                    special_bar_menu:
                        {
                            menu1: "wines",
                            menu2: "cocktails"
                        },
                    special_dessert_menu:
                        {
                          menu1: "cakes",
                          menu2: "icecreams"
                        },
                    complete_dining_menu: data.diningMenu[0].category,
                    complete_bar_menu: data.barMenu[0].category,
                    complete_dessert_menu: data.dessertMenu[0].category,
                    booking_status: false,
                    booking: {type: null, date: null, time: null},
                    subscription_status: false,
                    feedback_status: false,
                    feedback: {service: null, food: null, ambience: null, suggestion: null}
                  }
                );

  const GlobalStateHandler = (updatedState) => {
    setGlobalState( (currentState) => { return {...currentState, ...updatedState} } );
  };

  useEffect( () => {
    setSessionStorage('userstatus', {login_status: globalState.login_status, booking_status: globalState.booking_status, booking: globalState.booking,
      subscription_status: globalState.subscription_status, feedback_status: globalState.feedback_status, feedback: globalState.feedback});
  }, [globalState]);

  return (
    <GlobalContext.Provider value={ {global_state: globalState, global_action: GlobalStateHandler} }>
      <div className='app'>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/*' element={<PageNotFound />} />

                <Route path="/" element={<Home />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/dessert" element={<Dessert />} />
                <Route path="/bar" element={<Bar />} />

                <Route path="/login" element={globalState.login_status ? <Home /> : <Login />} />

                <Route path="/bookingconfirmation"
                    element={<ProtectedBookingRoute booking_status={ globalState.booking_status } Confirmation={ BookingConfirmation } Redirect={ Booking }></ProtectedBookingRoute>} />

                <Route path="/subscriptionconfirmation"
                    element={<ProtectedSubscriptionRoute subscription_status={ globalState.subscription_status } Confirmation={ SubscriptionConfirmation } Redirect={ Newsletter }></ProtectedSubscriptionRoute>} />
            </Routes>
        </BrowserRouter>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;