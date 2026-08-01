import { useEffect, useRef, useState } from "react";
import { PoseDetector } from "../ai/pose/PoseDetector";

export function usePose(video: HTMLVideoElement | null) {
  const detectorRef = useRef<PoseDetector | null>(null);
  const animationRef = useRef<number | null>(null);

  const [landmarks, setLandmarks] = useState<any[]>([]);

  useEffect(() => {
    if (!video) return;

    let mounted = true;

    const start = async () => {
      detectorRef.current = new PoseDetector();
      await detectorRef.current.initialize();

      const detector = detectorRef.current.getDetector();

      const detect = () => {
        if (!mounted || !video || !detector) return;

        if (video.readyState >= 2) {
          const result = detector.detectForVideo(
            video,
            performance.now()
          );

          if (result.landmarks && result.landmarks.length > 0) {
            setLandmarks(result.landmarks[0]);
          }
        }

        animationRef.current = requestAnimationFrame(detect);
      };

      detect();
    };

    start();

    return () => {
      mounted = false;

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [video]);

  return landmarks;
}