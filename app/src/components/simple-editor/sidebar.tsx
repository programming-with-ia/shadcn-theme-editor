import React from 'react'

function Sidebar({isOpen}:{isOpen: boolean}) {
  return (
    <aside hidden={!isOpen} className='cn-container'>
        <div className='toolbar heading'>
        Theming
          <div className="flex gap-2">
            {/* <ResetTheme />
            <CopyTheme /> */}
            </div>
        </div>
    </aside>
  )
}

export default Sidebar