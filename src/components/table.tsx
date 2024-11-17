import React from 'react'
import { ITable } from '../types/types'
import { limit } from '../pages/StreamsTable'

function Table({ data, page }: ITable) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Online clients</th>
                    <th scope="col">Input bitrate</th>
                    <th scope="col">Output bitrate</th>
                </tr>
            </thead>
            <tbody>
                {data
                    ? data?.map((el, id) => {
                          return (
                              <tr key={id}>
                                  <th scope="row">
                                      {(page - 1) * limit + id + 1}
                                  </th>
                                  <td>{el?.name}</td>
                                  <td>
                                      {el?.stats?.status
                                          ? el?.stats?.status
                                          : '-'}
                                  </td>
                                  <td>
                                      {el?.stats?.online_clients
                                          ? el?.stats?.online_clients
                                          : '-'}
                                  </td>
                                  <td>
                                      {el?.stats?.input_bitrate
                                          ? el?.stats?.input_bitrate
                                          : '-'}
                                  </td>
                                  <td>
                                      {el?.stats?.output_bitrate
                                          ? el?.stats?.output_bitrate
                                          : '-'}
                                  </td>
                              </tr>
                          )
                      })
                    : ''}
            </tbody>
        </table>
    )
}

export default Table
