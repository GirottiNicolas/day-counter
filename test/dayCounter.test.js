import { describe, it, expect, beforeEach } from "vitest";
import { DayCounter } from "../src/DayCounter.js";

describe("DayCounter - lógica de negocio", () => {
  let todayDate;

  beforeEach(() => {
    todayDate = new Date("2026-03-02");
    todayDate.setHours(0, 0, 0, 0);
  });

  it("TC-01: calcula los días faltantes para una fecha futura (2026-03-12)", () => {
    const counter = new DayCounter(null, "2026-03-12");
    const result = counter.numberOfDaysSince();

    expect(result).toBe(10);
    expect(result).toBeGreaterThan(0);
    expect(Number.isInteger(result)).toBe(true);
  });

  it("TC-02: Describe 0 dias si la fecha es la actual", () => {
    const counter = new DayCounter(null, "2026-03-02"); // usar string válido
    expect(counter.numberOfDaysSince()).toBe(0);
  });

  it("TC-03: El año solo puede tener dígitos >= 2026 y <= 9999", () => {
    const counter = new DayCounter(null, "2026-03-02"); // objeto válido para instanciar
    expect(counter.verifyDate("2021-03-23")).toBe(false);
  });

  it("TC-04: Letras en lugar de fecha", () => {
    const counter = new DayCounter(null, "2026-03-02");
    expect(counter.verifyDate("aaaabbcc")).toBe(false);
  });

  it("TC-05: La fecha debe ser rechazada, ya que febrero tiene 28 días", () => {
    const counter = new DayCounter(null, "2026-03-02");
    expect(counter.verifyDate("2026-02-31")).toBe(false);
  });

  it("TC-06: La fecha debe ser rechazada, ya que Septiembre tiene 30 días", () => {
    const counter = new DayCounter(null, "2026-03-02");
    expect(counter.verifyDate("2026-09-31")).toBe(false);
  });

  it("TC-07: La fecha debe ser rechazada, ya que no existe la fecha con día 0", () => {
    const counter = new DayCounter(null, "2026-03-02");
    expect(counter.verifyDate("2026-00-31")).toBe(false);
  });

  it("TC-08: La fecha debe fallar ya que el año excede el límite (9999)", () => {
    const counter = new DayCounter(null, "2026-03-02");
    const invalidDate = counter.dateStringToDate("10000-01-01");
    expect(counter.isAValidYear(invalidDate)).toBe(false);
  });
});