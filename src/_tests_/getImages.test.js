import axios from "axios";
import getImages from "../requests/getImages";

jest.mock("axios");

describe("getImages", () => {
  it("should return an array of images", async () => {
    const mockRes = {
      data: {
        collection: {
          items: [
            {
              data: [{ media_type: "image" }],
              links: [{ href: "https://example.com/mockimage1.jpg" }],
            },
            {
              data: [{ media_type: "video" }],
              links: [{ href: "https://example.com/mockvideo1.mp4" }],
            },
            {
              data: [{ media_type: "image" }],
              links: [{ href: "https://example.com/mockimage2.jpg" }],
            },
          ],
        },
      },
    };

    axios.get.mockResolvedValue(mockRes);

    const query = "moon";
    const images = await getImages(query);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://images-api.nasa.gov/search?q=${query}`
    );

    expect(images).toEqual([
      "https://example.com/mockimage1.jpg",
      "https://example.com/mockimage2.jpg",
    ]);
  });

  it("should return an empty array if there is no query", async () => {
    const images = await getImages("");

    expect(axios.get).not.toHaveBeenCalled();
    expect(images).toEqual([]);
  });

  it("should handle error and log it", async () => {
    const mockError = new Error("Failed to connect");
    axios.get.mockRejectedValue(mockError);

    const spyOnConsole = jest.spyOn(console, "log");
    spyOnConsole.mockImplementation(() => {});

    const query = "moon";
    const images = await getImages(query);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://images-api.nasa.gov/search?q=${query}`
    );

    expect(spyOnConsole).toHaveBeenCalledWith(mockError);
    expect(images).toBeUndefined();

    spyOnConsole.mockRestore();
  });
});
