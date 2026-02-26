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

  test("returns 200 and mocked json", async () => {
    const mockedJson = {
      success: true,
      data: {
        imageUrl: "jaa",
        status: "success",
      },
    };

    vi.mocked(getDogImage).mockImplementation(async (_req, res) => {
      res.status(200).json(mockedJson);
    });

    const res = await request(app).get("/api/dogs/random");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.imageUrl).toContain("jaa");
  });
});
