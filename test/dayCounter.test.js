import { describe, it, expect, beforeEach } from "vitest";
import { DayCounter } from "../src/DayCounter.js";

describe("DayCounter - lógica de negocio", () => {
  let today;
  beforeEach(() => {
    today = "2026-03-02";
  });

  it("TC-01: calcula los días faltantes para una fecha futura (2026-03-12)", () => {
    const counter = new DayCounter(null, "2026-03-12");
    const result = counter.numberOfDaysSince();

    expect(result).toBe(10);
    expect(result).toBeGreaterThan(0);
    expect(Number.isInteger(result)).toBe(true);
  });

  it("TC-02: Describe 0 dias si la fecha es la actual",() => {
    const counter = new DayCounter(null, today);
    expect(counter.numberOfDaysSince()).toBe(0);

  });

  it("TC-03: El año solo puede tener digitos >= 2026 y <= 9999", () => {
    const counter = new DayCounter(null, "2021-03-23");
    expect(counter.verifyDate("2021-03-23")).toBe(false);
  });

  it("TC-04: Letras en lugar de fecha", () => {
    const counter = new DayCounter(null, "aaaabbcc");
    expect(counter.verifyDate("2021-03-23")).toBe(false);
  });

  it("TC-05: La fecha debe ser rechazada, ya que febrero tiene 28 dias", () => {
    const counter = new DayCounter(null, "2026-02-31");
    expect(counter.verifyDate("2026-02-31")).toBe(false);
  });

  it("TC-05: La fecha debe ser rechazada, ya que Septiembre tiene 30 dias", () => {
    const counter = new DayCounter(null, "2026-09-31");
    expect(counter.verifyDate("2026-09-31")).toBe(false);
  });

   it("TC-05: La fecha debe ser rechazada, ya que no existe la fecha con dia 0", () => {
    const counter = new DayCounter(null, "2026-00-31");
    expect(counter.verifyDate("2026-00-31")).toBe(false);
  });

  it("TC-05: La fecha debe fallar ya que el año excede el limite(9999)", () => {
    const counter = new DayCounter(null, "10000-00-31");
    console.log(counter.date);
    expect(counter.isAValidYear("10000-00-31")).toBe(false);
  });


});

