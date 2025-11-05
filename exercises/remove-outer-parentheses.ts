const getPrimitiveParentheses = (s: string) => {
  const primitiveParentheses = [];

  let stack = [];
  const openers = ["("];
  let start = null;
  let end = null;
  for (let i = 0; i < s.length; i++) {
    if (openers.includes(s[i])) {
      if (start === null) {
        start = i;
      }
      stack.push(s[i]);
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      if (end === null) {
        end = i;
      }
      if (start !== null && end !== null) {
        primitiveParentheses.push(s.substring(start, end + 1));
        start = null;
        end = null;
      }
    }
  }

  return primitiveParentheses;
};

function removeOuterParentheses(s: string): string {
  const primitiveParentheses = getPrimitiveParentheses(s);

  const removedOuterParenthesis = primitiveParentheses.map((p) =>
    p.substring(1, p.length - 1)
  );

  return removedOuterParenthesis.join("");
}
