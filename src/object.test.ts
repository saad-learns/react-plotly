describe("object", () => {
  it("non-existing field and undefined fields are equivalent", () => {
    const a = {
      m: {
        y: 10,
      },
    };
    const b = {
      m: {
        x: undefined,
        y: 10,
      },
    };

    expect(a).toEqual(b);
  });
});

export {};
