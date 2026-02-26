import { describe, expect, test, vi, beforeEach } from "vitest";
import { getRandomDogImage } from "../services/dogService";

describe("getRandomDogImage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("returns dog image data and calls fetch once", async () => {
    const mockedRes = {
      message: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
      status: "success",
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockedRes),
    } as any);

    const result = await getRandomDogImage();

    expect(result.imageUrl).toBe(mockedRes.message);
    expect(result.status).toBe("success");
    expect(fetch).toHaveBeenCalledOnce();
  });

  test("fetch fails", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as any);

    await expect(getRandomDogImage()).rejects.toThrow(
      "Failed to fetch dog image: Dog API returned status 500",
    );
  });
});
