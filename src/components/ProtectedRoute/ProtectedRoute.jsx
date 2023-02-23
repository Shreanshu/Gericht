import React from 'react';



const ProtectedBookingRoute = ( {booking_status, Confirmation, Redirect} ) => {
    
    if (!booking_status)
        {
            return <Redirect />
        }
    else
        {
            return <Confirmation />;
        }
};

const ProtectedSubscriptionRoute = ( {subscription_status, Confirmation, Redirect} ) => {

    if (!subscription_status)
        {
            return <Redirect />
        }
    else
        {
            return <Confirmation />;
        }

};

export { ProtectedBookingRoute, ProtectedSubscriptionRoute };