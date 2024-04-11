import {apiSlice} from "../../app/api/apiSlice.ts";
import {IBook} from "../../model/IBook.ts";
import {IAuthor} from "../../model/IAuthor.ts";
import {ICategory} from "../../model/ICategory.ts";
import {IRole} from "../../model/IRole.ts";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createBook: builder.mutation<IBook,FormData>({
            query: (credentials: FormData) => ({
                url: '/book',
                method: 'POST',
                body: credentials,
                formData: true
            }),
        }),
        createAuthor:builder.mutation<IAuthor,FormData>({
            query:(credentials:FormData)=>({
                url:'/author',
                method:'POST',
                body:credentials,
                formData:true
            })
        }),
        createCategory:builder.mutation<ICategory,FormData>({
            query:(credentials:FormData)=>({
                url:'/category',
                method:'POST',
                body:credentials,
                formData:true
            })
        }),
        isAdmin: builder.query<IRole, number>({
            query:(id)=>({
                url:`/role/${id}`,
                method:'GET',
            })
        })
    })
})

export const {
    useCreateBookMutation,
    useCreateAuthorMutation,
    useCreateCategoryMutation,
    useIsAdminQuery
} = adminApiSlice