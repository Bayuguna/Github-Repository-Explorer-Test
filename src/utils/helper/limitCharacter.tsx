const LimitCharacter = (text: string, limit: number) => {
  if (text == "" || text == undefined) return "";
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

export default LimitCharacter;
