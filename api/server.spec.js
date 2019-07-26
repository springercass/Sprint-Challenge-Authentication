describe("server", () => {
  it("db environment is set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
