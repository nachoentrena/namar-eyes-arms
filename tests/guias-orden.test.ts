import { describe, expect, it } from "vitest";
import { sortedGuias } from "@/lib/guias";
describe("orden de guías", () => {
  it("ordena por fecha y luego por orden", () => {
    expect(sortedGuias().slice(0, 3).map((g) => g.slug)).toEqual(["verificar-proveedor-chino", "coste-importar-china-espana", "coste-importar-china-colombia"]);
    expect(sortedGuias().at(-1)?.slug).toBe("ferias-en-china");
  });
});
