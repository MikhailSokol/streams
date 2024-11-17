import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StreamsTable from './pages/StreamsTable'
import Form from './pages/Form'

function App() {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <StreamsTable />,
        },
        {
            path: '/form',
            element: <Form />,
        },
    ])

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <RouterProvider
                router={router}
                fallbackElement={<p>Loading...</p>}
            />
        </div>
    )
}

export default App
