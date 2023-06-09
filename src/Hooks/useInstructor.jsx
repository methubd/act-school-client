import { useState } from "react"

const useInstructor = () => {
    // TODO: Get real instructor data
    const [isInstructor] = useState(true)
    return [isInstructor]
}

export default useInstructor;