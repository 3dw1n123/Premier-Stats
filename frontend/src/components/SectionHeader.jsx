import React from 'react'

const SectionHeader = ({subtitle, title, description}) => {
  return (
    <header className=" mb-10">
        <div className=" mb-2 flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-secondary-premier">{subtitle}</span>
        </div>
        <h1 className="mb-4 -ml-1 text-5xl font-black tracking-tighter md:text-7xl">{title}</h1>
        <p className="max-w-lg font-medium">{description}</p>

    </header>
  )
}

export default SectionHeader