// write your custom hook here to control your checkout form
import { initial } from 'lodash';
import { useState } from 'react';

const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const handleChanges = (event) => {
        setValue({
            ...value,
            [event.target.name] : event.target.value
        })
    }

return [value, handleChanges]
}
export default useForm;