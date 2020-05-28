import { useEffect, useState } from 'react';


function getWindowDimensions() {
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    } else {
        const width = 0;
        const height = 0;
        return { width, height }
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;