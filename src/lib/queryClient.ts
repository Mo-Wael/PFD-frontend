import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // stale time (for keeping data fresh)
            staleTime: 1000 * 60 * 5,
            // garbage collection time (for removing data from cache)
            gcTime: 1000 * 60 * 10,
            // retry only once on failure
            retry: 1,
            // refetch when window regains focus
            refetchOnWindowFocus: true,
            // refetch when connection is restored
            refetchOnReconnect: true,
        },
        mutations: {
            retry: 1,
        }
    }
})

export default queryClient