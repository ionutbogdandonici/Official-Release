import React from 'react'

function Comment({comment}) {
  return (
    <div className='flex flex-row px-2 py-2 border-t'>
        <div>
            <img src={`https://avatars.dicebear.com/api/human/${comment.firstName}-${comment.lastName}.svg`} alt='avatar' className="h-8 w-8 rounded-full" />
        </div>
        <div className='flex flex-col ml-2'>
            <div className='font-semibold text-sm'>
                {comment.firstName + ' ' + comment.lastName}
            </div>
            <div className='text-base text-zinc-500'>
                {comment.text}
            </div>
        </div>
    </div>
  )
}

export default Comment