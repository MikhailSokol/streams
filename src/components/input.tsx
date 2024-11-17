import React from 'react'
import { IInput } from '../types/types'

function Input({ title, placeholder, id, setState }: IInput) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {title}
            </label>
            <input
                onChange={(e) => setState(e.target.value)}
                type="email"
                className="form-control"
                id={id}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
