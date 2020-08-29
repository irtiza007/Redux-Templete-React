import React from 'react'

export default function loadingSpinner() {
    return (
        <div className="h-100vh d-flex justify-content-center align-items-center">
            <div class="spinner-grow text-success" role="status" style={{ height: 100, width: 100 }}>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}
