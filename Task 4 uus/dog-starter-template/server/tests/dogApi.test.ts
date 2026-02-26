import { describe, expect, test, vi, beforeEach } from "vitest";
import { app } from "../index";
import request from "supertest";
import { getDogImage } from "../controllers/dogController";

vi.mock("../controllers/dogController", () => ({
  getDogImage: vi.fn(),
}));

describe("GET /api/dogs/random", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("returns 500 and an error", async () => {
    const mockedErrorJson = {
      success: false,
      error: "Failed to fetch dog image: Network error",
    };

    vi.mocked(getDogImage).mockImplementation(async (_req, res) => {
      res.status(500).json(mockedErrorJson);
    });

    const res = await request(app).get("/api/dogs/random");

    expect(res.status).toBe(500);
    expect(res.body.error).toBe("Failed to fetch dog image: Network error");
  });
});
