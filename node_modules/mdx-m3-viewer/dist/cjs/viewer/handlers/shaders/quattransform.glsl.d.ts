declare const shader = "\n// A 2D quaternion*vector.\n// q is the zw components of the original quaternion.\nvec2 quat_transform(vec2 q, vec2 v) {\n  vec2 uv = vec2(-q.x * v.y, q.x * v.x);\n  vec2 uuv = vec2(-q.x * uv.y, q.x * uv.x);\n\n  return v + 2.0 * (uv * q.y + uuv);\n}\n";
export default shader;
