var expect = function (val) {
  return {
    toBe: (expected) => {
      if (val === expected) return true;
      throw new Error("Not Equal");
    },
    notToBe: (expected) => {
      if (val === expected) throw new Error("Equal");
      return true;
    },
  };
};