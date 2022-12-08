import { Form, Formik, FormikHelpers } from "formik";
import { userCredentials } from "./auth.models";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props: authFormProps){
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                email: Yup.string().required('This field is reuired')
                    .email('You have to insert a valid email'),
                password: Yup.string().required('This fiels is required')
            })}
        >
            {formikProps => (
                <Form>
                    <TextField displayName="Email" field="email"/>
                    <TextField displayName="Password" field="password" type="password"/>

                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface authFormProps{
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void;
}