import { Dispatch, SetStateAction } from 'react'

export interface IStream {
    name: string
    stats: IStats
}

interface IStats {
    status: boolean
    online_clients: number
    input_bitrate: number
    output_bitrate: number
}

export interface ITable {
    data: IStream[] | null
    page: number
}

export interface IPagination {
    setCursor: (par: 'next' | 'prev') => void
    setPage: (par: number) => void
    page: number
    count: number
    setReload: (par: boolean) => void
    setStreams: any
}

export interface IInput {
    title: string
    placeholder: string
    id: string
    setState: Dispatch<SetStateAction<string>>
}

export interface IAxiosStream {
    streams: IStream[]
    next: number
    prev: number
    estimated_count: number
}
