import { Formik } from 'formik'
import { StyleSheet } from 'react-native'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({

})

export default AppForm