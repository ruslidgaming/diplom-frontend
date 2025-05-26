import { useRef, useEffect, useState } from 'react';
import systemVideo from "../../../../assets/img/Video-system_2.mp4";

export function LazyVideoPlayer() {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '200px', // Начинаем загрузку когда видео в 200px от зоны видимости
                threshold: 0.1
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="system__video" ref={videoRef}>
            {isVisible && (
                <video
                    width="640"
                    height="360"
                    controls
                    onLoadedData={() => setLoaded(true)}
                >
                    <source src={systemVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео тег.
                </video>
            )}
        </div>
    );
}