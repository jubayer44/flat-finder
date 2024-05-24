import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormProps } from 'react-hook-form';

type TFormConfig = UseFormProps<FieldValues>;

type TFormProps = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const FlatForm: React.FC<TFormProps> = ({ children, onSubmit, resolver, defaultValues }) => {
    const formConfig: UseFormProps<FieldValues> = {};

    if (resolver) {
        formConfig.resolver = resolver;
    }

    if (defaultValues) {
        formConfig.defaultValues = defaultValues;
    }

    const methods = useForm(formConfig);

    const formSubmit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(formSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default FlatForm;
