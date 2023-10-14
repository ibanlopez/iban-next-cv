'use client'

import useMediaQuery from '@/lib/hooks/use-media-query'

const MediaRendering = ({
    minWidth, maxWidth, children
}: {
    minWidth: string | null,
    maxWidth: string | null,
    children: React.ReactNode
}) => {

    const minDeviceSize = useMediaQuery(`(min-width: ${minWidth})`)
    const maxDeviceSize = useMediaQuery(`(max-width: ${maxWidth})`)

    return (
        <>{(maxDeviceSize || minDeviceSize) && children}</>
    )
}

export default MediaRendering