import { useState, useEffect } from "react";

interface UseAnimationOptions {
    initialState?: boolean;
    duration?: number;
}

const useAnimation = ({ initialState = false, duration = 500 }: UseAnimationOptions = {}): [boolean, () => void] => {
    const [isAnimating, setIsAnimating] = useState(initialState);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;

        if (isAnimating) {
            timer = setTimeout(() => {
                setIsAnimating(false);
            }, duration);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isAnimating, duration]);

    const startAnimation = () => {
        setIsAnimating(true);
    };

    return [isAnimating, startAnimation];
};

export default useAnimation;