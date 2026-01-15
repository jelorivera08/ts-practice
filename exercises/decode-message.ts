function decodeMessage(key: string, message: string): string {
  const trimmedKey = key.split("").filter((v) => v !== " ");
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const decodeMap: Record<string, string> = {};

  let j = 0;
  trimmedKey.map((v) => {
    if (decodeMap[v]) return;
    decodeMap[v] = alphabet[j];
    j++;
  });

  console.log(decodeMap);

  return message
    .split("")
    .map((v) => (v === " " ? " " : decodeMap[v]))
    .join("");
}
