import { describe, expect, test, vi, beforeEach } from "vitest";
import { app } from "../index";
import request from "supertest";
import { getDogImage } from "../controllers/dogController";

// vi.mock("../controllers/dogController", () => ({
//   getDogImage: vi.fn(),
// }));

// describe("GET /api/dogs/random", () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   test("returns 500 and an error", async () => {
//     const mockedErrorJson = {
//       success: false,
//       error: "Failed to fetch dog image: Network error",
//     };

//     vi.mocked(getDogImage).mockImplementation(async (_req, res) => {
//       res.status(500).json(mockedErrorJson);
//     });

//     const res = await request(app).get("/api/dogs/random");

//     expect(res.status).toBe(500);
//     expect(res.body.error).toBe("Failed to fetch dog image: Network error");
//   });
// });

describe("Dog api tests", () => {
  test("GET /api/dogs/random returns valid response", async () => {
    const res = await request(app).get("/api/dogs/random");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(res.body.data).toBeDefined();
    expect(res.body.data.imageUrl).toBeDefined();
    expect(typeof res.body.data.imageUrl).toBe("string");
  });

  test("GET /api/dogs/invalid returns 404", async () => {
    const res = await request(app).get("/api/dogs/invalid");

    expect(res.status).toBe(404);
  });
});
