"use client";
import { Box, Button, Grid,  } from "@mui/material";
import FlatForm from "@/components/Forms/FlatForm";
import FlatInput from "@/components/Forms/FlatInput";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { toast } from "sonner";

const validationSchema = z
  .object({
    oldPassword: z.string({message: "Old Password is required"}),
    password: z.string({message: "Password must be at least 5 characters"}).min(5),
    confirmPassword: z.string({message: "Confirm password is required"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], 
  });

const ChangePassword = () => {
  const [changePassword, {isLoading}] = useChangePasswordMutation()

    const defaultValues = {
       oldPassword: "",
       password: "",
       confirmPassword: ""
    };
    
    const handleSubmit = async (values: FieldValues) => {
        const changeValues = {
          oldPassword: values?.oldPassword,
          newPassword: values?.password
        };

        try{
          const res = await changePassword(changeValues);
          if(res?.data?.success){
            toast.success("Password Change Successfully");
          } else{
            toast.error("Something went wrong!");
          }
        }
        catch(err: any){
          console.log(err)
        }
    };


    return (
             <FlatForm
                onSubmit={handleSubmit}
                defaultValues={defaultValues}
                resolver={zodResolver(validationSchema)}
            >
                <Grid container spacing={2} sx={{maxWidth: 600, margin: "auto"}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FlatInput name="oldPassword" label="Old Password" placeholder="Old Password" type="password" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <FlatInput name="password" label="New Password" placeholder="New Password" type="password" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <FlatInput name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" type="password" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                
                    <Button type="submit" disabled={isLoading} fullWidth size="small">{ isLoading ? "Saving..." : "Save Changes"}</Button>
                
                </Grid>
                </Grid>
            </FlatForm>
    )
};

export default ChangePassword;