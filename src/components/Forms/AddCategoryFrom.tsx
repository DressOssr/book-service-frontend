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
            <form className="p-5 max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Category:
                    </label>
                    <input type="text" id="title" name="value"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="Category Name"/>
                </div>
                <div className="flex p-2 justify-center">
                    <button
                        className="bg-cyan-500 border font-bold text-white text-sm hover:bg-cyan-700 rounded-lg p-2 w-full h-full"
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddCategoryFrom;