import React from 'react'

const progressBar = ({title, progress}) => {
    return (
        <>
            <div className="flex justify-between mb-1 mt-3">
                <span className="text-[1.8em] font-medium text-[#333] dark:text-white">{title}</span>
                <span className="text-[1.5em] font-medium text-red-700 dark:text-white">{progress}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full" style={{width: progress}}></div>
            </div>
        </>
    )
}

export default progressBar;