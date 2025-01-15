import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

const FormField = ({ name, ...otherProps }) => {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <TextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({

})

export default FormField