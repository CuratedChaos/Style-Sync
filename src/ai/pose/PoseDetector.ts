import {
  FilesetResolver,
  PoseLandmarker
} from "@mediapipe/tasks-vision";

export class PoseDetector {
  private poseLandmarker: PoseLandmarker | null = null;

  async initialize() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    this.poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task"
      },
      runningMode: "VIDEO",
      numPoses: 1
    });

    console.log("✅ PoseDetector initialized");
  }

  getDetector() {
    return this.poseLandmarker;
  }
}