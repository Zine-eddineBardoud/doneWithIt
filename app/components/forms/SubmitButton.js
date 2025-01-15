import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import { useFormikContext } from 'formik'

const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    
    return (
        <Button
            title={title}
            onPress={handleSubmit}
        />
    )
}

const styles = StyleSheet.create({

})

export default SubmitButton