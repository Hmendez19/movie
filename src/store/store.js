import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let movieStore = (set) => ({
  movies: [],
  addMovie: (movies) =>
    set((state) => ({ movies })),
})

movieStore = persist(movieStore, { name: 'movie_bd' })
movieStore = devtools(movieStore)
export const useMovieStore = create(movieStore)