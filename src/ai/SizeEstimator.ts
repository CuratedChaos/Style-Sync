import { BodyMeasurements } from "./BodyMeasurements";

export function estimateSize(
  body: BodyMeasurements
): "S" | "M" | "L" | "XL" {

  if (body.shoulderWidth < 0.16) return "S";
  if (body.shoulderWidth < 0.21) return "M";
  if (body.shoulderWidth < 0.26) return "L";

  return "XL";
}