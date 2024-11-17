import React, { useState } from 'react'
import Input from '../components/input'
import Button from '../components/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [name, setName] = useState<string>('')

    const [url, setUrl] = useState<string>('')

    const navigate = useNavigate()

    const getStreams = async () => {
        if (name && url) {
            let res = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/streams/${name}`,
                { 'inputs.url': url }
            )
            navigate('/')
        }
    }

    return (
        <form onClick={getStreams} className="mt-3">
            <Input
                setState={setName}
                id="id-name"
                placeholder="Enter stream name"
                title="Stream name"
            />
            <Input
                setState={setUrl}
                id="id-url"
                placeholder="Enter source url"
                title="Source URL"
            />
            <Button />
        </form>
    )
}

export default Form
