import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("confirm className default value is null", () => {
  const container = new RadioButton();

  it("confirm className default value is null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(0);
  });
});

describe("className constructor set successfully", () => {
  const container = new RadioButton({ className: "options-class" });

  it("className constructor set successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("options-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop set successfully", () => {
  const container = new RadioButton();
  container.className = "options-class";

  it("className prop set successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("options-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop replace successfully", () => {
  const container = new RadioButton({
    className: "options-class"
  });
  container.className = "replace-class";

  it("className prop replace successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("replace-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className constructor set to null successfully", () => {
  const container = new RadioButton({
    // @ts-ignore
    className: null
  });

  it("className constructor set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("null")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop set to null successfully", () => {
  const container = new RadioButton();
  // @ts-ignore
  container.className = null;

  it("className prop set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("null")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});
