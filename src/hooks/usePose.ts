import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { PoseDetector } from "../ai/pose/PoseDetector";

export function usePose(videoRef: RefObject<HTMLVideoElement | null>) {
  const detectorRef = useRef<PoseDetector | null>(null);
  const animationRef = useRef<number | null>(null);

  const [landmarks, setLandmarks] = useState<any[]>([]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let mounted = true;

    const start = async () => {
      detectorRef.current = new PoseDetector();
      await detectorRef.current.initialize();

      const detector = detectorRef.current.getDetector();

      const detect = () => {
        if (!mounted) return;

        const currentVideo = videoRef.current;

        if (
          currentVideo &&
          detector &&
          currentVideo.readyState === 4 &&
          currentVideo.videoWidth > 0 &&
          currentVideo.videoHeight > 0
        ) {
          const result = detector.detectForVideo(
            currentVideo,
            performance.now()
          );

          if (result.landmarks.length > 0) {
            console.dir(result);

            setLandmarks(result.landmarks[0]);
            console.log("Landmarks:", result.landmarks[0].length);
          }
        }

        animationRef.current = requestAnimationFrame(detect);
      };

      detect();
    };

    start();

    return () => {
      mounted = false;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [videoRef]);

  return landmarks;
}