export interface BodyMeasurements {
  shoulderWidth: number;
  hipWidth: number;
  torsoLength: number;
}

export function calculateMeasurements(landmarks: any[]): BodyMeasurements {
  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];

  const leftHip = landmarks[23];
  const rightHip = landmarks[24];

  const shoulderWidth = Math.hypot(
    rightShoulder.x - leftShoulder.x,
    rightShoulder.y - leftShoulder.y
  );

  const hipWidth = Math.hypot(
    rightHip.x - leftHip.x,
    rightHip.y - leftHip.y
  );

  const torsoLength = Math.hypot(
    leftHip.x - leftShoulder.x,
    leftHip.y - leftShoulder.y
  );

  return {
    shoulderWidth,
    hipWidth,
    torsoLength,
  };
}