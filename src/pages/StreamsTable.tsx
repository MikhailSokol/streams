import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '../components/table'
import { IAxiosStream, IStream } from '../types/types'
import Pagination from '../components/pagination'

export const limit = 100

function StreamsTable() {
    const [streams, setStreams] = useState<IStream[] | null>(null)

    const [cursor, setCursor] = useState<string>('')

    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(1)
    const [reload, setReload] = useState<boolean>(false)

    const getStreams = async (reload?: boolean) => {
        const cursorParam =
            cursor === 'next'
                ? reload
                    ? (page - 1) * limit
                    : (page - 1) * limit + limit
                : reload
                  ? (page - 1) * limit
                  : (page - 1) * limit - limit
        let res = await axios.get<IAxiosStream>(
            `${process.env.REACT_APP_BASE_URL}/streams?limit=${limit}&select=next,prev&cursor=${cursorParam}`
        )

        setStreams(res.data.streams)
        setCount(Math.ceil(res.data.estimated_count / limit))
        setReload(false)
    }

    useEffect(() => {
        getStreams(true)
    }, [page])

    useEffect(() => {
        if (reload) {
            getStreams(true)
        }
    }, [reload])

    useEffect(() => {
        const timer = setInterval(() => {
            setReload(true)
        }, 10000)
        return () => {
            clearInterval(timer)
            setReload(false)
        }
    }, [page, reload])

    return (
        <>
            {streams ? (
                <>
                    <Table page={page} data={streams} />
                    <Pagination
                        setStreams={setStreams}
                        setReload={setReload}
                        count={count}
                        page={page}
                        setPage={setPage}
                        setCursor={setCursor}
                    />
                </>
            ) : (
                ''
            )}
        </>
    )
}

export default StreamsTable
