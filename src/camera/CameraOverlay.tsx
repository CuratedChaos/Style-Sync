import { useEffect, useRef } from "react";
import { useCamera } from "../hooks/useCamera";
import { usePose } from "../hooks/usePose";
import { calculateMeasurements } from "../ai/BodyMeasurements";
import { estimateSize } from "../ai/SizeEstimator";

const WIDTH = 700;
const HEIGHT = 525;

export function CameraOverlay() {
  const {
    videoRef,
    startCamera,
    stopCamera,
    isCameraOn,
    error,
  } = useCamera();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const landmarks = usePose(videoRef.current);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (landmarks.length !== 33) return;

    const body = calculateMeasurements(landmarks);
    const size = estimateSize(body);

    console.clear();

    console.table({
      Shoulder: body.shoulderWidth.toFixed(3),
      Hip: body.hipWidth.toFixed(3),
      Torso: body.torsoLength.toFixed(3),
      Size: size,
    });

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = "#00ff66";

    landmarks.forEach((lm) => {
      ctx.beginPath();

      ctx.arc(
        (1 - lm.x) * WIDTH,
        lm.y * HEIGHT,
        5,
        0,
        Math.PI * 2
      );

      ctx.fill();
    });
  }, [landmarks]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: WIDTH,
          height: HEIGHT,
          overflow: "hidden",
          borderRadius: "20px",
          transform: "scaleX(-1)",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: WIDTH,
            height: HEIGHT,
            objectFit: "cover",
            display: "block",
          }}
        />

        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: WIDTH,
            height: HEIGHT,
            pointerEvents: "none",
          }}
        />
      </div>

      <div style={{ marginTop: 20, fontSize: 20 }}>
        Camera {isCameraOn ? "🟢 ON" : "🔴 OFF"}
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </>
  );
}