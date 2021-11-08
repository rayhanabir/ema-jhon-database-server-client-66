import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      
            <input placeholder="your name" defaultValue={user.displayName} {...register("name")} />
            <input placeholder="your email" defaultValue="" {...register("email", { required: true })} />

            <input placeholder="your city zip code" {...register("zip code")} />
            <input placeholder="your city name" {...register("city")} />
            <input placeholder="your phone number" {...register("phone")} />
      
            {errors.email && <span className="error">This field is required</span>}
            
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;