import { describe, expect, test, vi, beforeEach } from "vitest";
import { getRandomDogImage } from "../services/dogService";
import { getDogImage } from "../controllers/dogController";

vi.mock("../services/dogService", () => ({
  getRandomDogImage: vi.fn(),
}));

const createMockResponse = () => {
  const res: any = {};
  res.status = vi.fn().mockReturnThis();
  res.json = vi.fn();
  return res;
};

describe("getRandomDogImage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("something", async () => {
    const req: any = {};
    const res = createMockResponse();

    const mockedData = {
      imageUrl: "https://dog.jpg",
      status: "success",
    };

    vi.mocked(getRandomDogImage).mockResolvedValue(mockedData);

    await getDogImage(req, res);

    expect(getRandomDogImage).toHaveBeenCalledOnce();
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: mockedData,
    });
  });
});
