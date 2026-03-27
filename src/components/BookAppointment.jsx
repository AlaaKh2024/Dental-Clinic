import { time } from 'framer-motion';
import { data } from 'framer-motion/client';
import { Phone } from 'lucide-react';
import React, { useState } from 'react'

const BookAppointment = () => {
    const [activeStep, setActiveStep] = useState (1);
    const[formData,setFormData] = useState(
        {
            name:'',
            Phone:'',
            data:'',
            time:'',
            service:'General Checkup'
        });
        const services =[
            'General Checkup',
            'Teeth Cleaning',
            'Dental Filling',
            'Root Canal',
            'Teeth Whitening',
            'Orthodontic Consulation'
        ];
        const availableTimes = [
            '9:00 AM','10:00 AM','11:00 AM',
            '12:00 PM','2:00 PM','3:00 PM','4:00 PM'
        ];
        const handleInputChange =(e)=>{
            const {name,value} = e.target;
        }

        
  return (
    <div>
      
    </div>
  )
}

export default BookAppointment
