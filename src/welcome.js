export function welcome(name) {
  const who = name?.trim() || "friend";
  return `Hey, ${who}! Welcome aboard.`;
}
