import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const groupsApiSlice = createApi({
	reducerPath: 'groupsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h' }),
	endpoints(builder) {
		return {
			getGroups: builder.query<GroupContactsDto[], void>({
				query: () => ({ url: '/e6c614d4c59fd9b546fb5abdfb456dd5.json' }),
			}),
		};
	},
});

export const { useGetGroupsQuery } = groupsApiSlice;
