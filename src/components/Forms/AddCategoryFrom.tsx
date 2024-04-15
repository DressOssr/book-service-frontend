import React, {FormEvent} from 'react';
import { useCreateCategoryMutation} from "../../features/admin/adminApiSlice.ts";

const AddCategoryFrom = () => {
    const [create, {isLoading}] = useCreateCategoryMutation()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)

            const category = await create(formData)
            console.log(category)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
        </>
    );
};

export default AddCategoryFrom;