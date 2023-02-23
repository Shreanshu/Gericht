import React, { useContext, useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../constants/Context';
import './FeedbackForm.css';



const FeedbackForm = () => {
  const { global_state: {feedback_status}, global_action } = useContext(GlobalContext);

  const [rating, setRating] = useState( {service: null, food: null, ambience: null, suggestion: null} );

  const [feedbackErrorMessage, setFeedbackErrorMessage] = useState( {service: false, food: false, ambience: false} );

  const UpdateSelection = (formfield, e) => {
    setRating( {...rating, [formfield]: e.target.value} );
  };
  
  const Validate = () => {
    if (!rating.service)
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, service: true}) );
      }
    else
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, service: false}) );
      }

    if (!rating.food)
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, food: true}) );
      }
    else
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, food: false}) );
      }
    
    if (!rating.ambience)
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, ambience: true}) );
      }
    else
      {
        setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, ambience: false}) );
      }
  };

  const UpdateStatus = () => {
    if (rating.service && rating.food && rating.ambience)
      {
        global_action( {feedback_status: true, feedback: rating} );
      }
  };

  return (
    <div className="app__feedbackform_wrapper flex__center">
      <div className="app__feedbackform app__bg" id='feedback'>

        <div className='app__feedbackform-heading'>
          <SubHeading title="Feedback is our breakfast" />
          <h1 className="headtext__cormorant">Customer Feedback</h1>
        </div>

        {
          feedback_status
          ?
          <>
            
            <p className="app__feedbackform-confirmation p__cormorant">
                Thankyou!
                <br></br>
                Your feedback has been recorded.
            </p>

          </>
          :
          <div className="app__feedbackform-input flex__center">
            
            {
              ['service','food','ambience'].map( (formfield, index) => (
                <div className="app__feedbackform-input_field" key={formfield + index + 1}>
                  
                  <p className="p__cormorant">{formfield}</p>
                  
                  <label htmlFor={formfield+'1'} className="emoji emoji-1">
                    <img src={rating[formfield] === 'poor' ? images.emoji1_selected : images.emoji1_unselected} alt="Crying Emoji" />
                  </label>
                  <input type="radio" name={formfield} id={formfield+'1'} value="poor" className="form_field_1" onChange={ (e) => {setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, [formfield]: false}) ); UpdateSelection(formfield, e);} } />
                  
                  <label htmlFor={formfield+'2'} className="emoji emoji-2">
                    <img src={rating[formfield] === 'bad' ? images.emoji2_selected : images.emoji2_unselected} alt="Sad Emoji" />
                  </label>
                  <input type="radio" name={formfield} id={formfield+'2'} value="bad" className="form_field_2" onChange={ (e) => {setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, [formfield]: false}) ); UpdateSelection(formfield, e);} } />
                  
                  <label htmlFor={formfield+'3'} className="emoji emoji-3">
                    <img  src={rating[formfield] === 'average' ? images.emoji3_selected : images.emoji3_unselected} alt="Shocked Emoji" />
                  </label>
                  <input type="radio" name={formfield} id={formfield+'3'} value="average" className="form_field_3" onChange={ (e) => {setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, [formfield]: false}) ); UpdateSelection(formfield, e);} } />
                  
                  <label htmlFor={formfield+'4'} className="emoji emoji-4">
                    <img src={rating[formfield] === 'good' ? images.emoji4_selected : images.emoji4_unselected} alt="Happy Emoji" />
                  </label>
                  <input type="radio" name={formfield} id={formfield+'4'} value="good" className="form_field_4" onChange={ (e) => {setFeedbackErrorMessage( (previousMessage) => ({...previousMessage, [formfield]: false}) ); UpdateSelection(formfield, e);} } />
                  
                  <label htmlFor={formfield+'5'} className="emoji emoji-5">
                    <img src={rating[formfield] === 'excellent' ? images.emoji5_selected : images.emoji5_unselected} alt="Joyful Emoji" />
                  </label>
                  <input type="radio" name={formfield} id={formfield+'5'} value="excellent" className="form_field_5" onChange={ (e) => {setFeedbackErrorMessage( (previousMessage) => ({...feedbackErrorMessage, [formfield]: false}) ); UpdateSelection(formfield, e);} } />

                </div>
              ))
            }

            <div className="app__feedbackform-input_suggestions">
              {/* <label htmlFor="suggestion" className='p__cormorant'>Suggestions</label> */}
              <textarea name='suggestion' id='suggestion' placeholder='Please write your suggestions here.....' onChange={ (e) => UpdateSelection('suggestion', e) } ></textarea>
            </div>

            <button type='button' className="custom__button" onClick={ () => { Validate(); UpdateStatus(); } } ><a href='#feedback'>Submit Feedback</a></button>
          
          </div>
        }

        {
          feedbackErrorMessage.service &&
          <div className="error-message" id='serviceMessage'>
              Please select a valid option!
          </div>
        }

        {
          feedbackErrorMessage.food &&
          <div className="error-message" id='foodMessage'>
              Please select a valid option!
          </div>
        }

        {
          feedbackErrorMessage.ambience &&
          <div className="error-message" id='ambienceMessage'>
              Please select a valid option!
          </div>
        }
        
      </div>
    </div>
  );
};

export default FeedbackForm;