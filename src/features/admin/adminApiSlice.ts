import {apiSlice} from "../../app/api/apiSlice.ts";
import {IBook} from "../../model/IBook.ts";
import {IAuthor} from "../../model/IAuthor.ts";
import {ICategory} from "../../model/ICategory.ts";
import {IRole} from "../../model/IRole.ts";
import {IUser} from "../../model/IUser.ts";


interface UserTable extends IUser{
    role:IRole
}
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
            }),
            invalidatesTags:['AddAuthor']
        }),
        createCategory:builder.mutation<ICategory,FormData>({
            query:(credentials:FormData)=>({
                url:'/category',
                method:'POST',
                body:credentials,
                formData:true
            }),
            invalidatesTags:['AddCategory']
        }),
        isAdmin: builder.query<IRole, number>({
            query:(id)=>({
                url:`/role/${id}`,
                method:'GET',
            })
        }),
        getUsers: builder.query<IUser[],void>({
            query:()=>({
                url:`/users/all`,
                method:'GET',
            })
        }),
        getRoles: builder.query<IRole[],void>({
            query:()=>({
                url:`/role`,
                method:'GET',
            })
        })
    })
})

export const {
    useCreateBookMutation,
    useCreateAuthorMutation,
    useCreateCategoryMutation,
    useIsAdminQuery,
    useGetUsersQuery,
    useGetRolesQuery
} = adminApiSlice