import React from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import { CustomerFeedback } from '../../components';
import './Testimony.css';



const Testimony = () => {
    return (
        <div className="app__testimony app__bg section__padding flex__center">

            <div className="app__testimony-title">
                <SubHeading title="Testimony" />
                <h1 className="headtext__cormorant">Happy Customers</h1>
            </div>

            <div className="app__testimony-feedback">
                {
                    data.customers.map( (customer, index) => (
                        <CustomerFeedback key={"Customer"+index+1} idx={index} name={customer.name} designation={customer.designation} feedback={customer.feedback} />
                    ))
                }
            </div>

        </div>
    );
};

export default Testimony;